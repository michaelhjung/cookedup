import type { SupabaseClient } from "@supabase/supabase-js";
import { after, NextRequest, NextResponse } from "next/server";

import { Hit } from "@interfaces/edamam";
import { createAuthedSupabaseClient } from "@utils/supabase/server";

const RECIPE_IMAGES_BUCKET = "recipe-images";

const getBestImageUrl = (hit: Hit): string | undefined =>
  hit.recipe.images?.LARGE?.url ||
  hit.recipe.images?.REGULAR?.url ||
  hit.recipe.images?.SMALL?.url;

const IMAGE_EXTENSION_TO_MIME: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
};

/**
 * Edamam's S3 responses don't reliably set a real image Content-Type
 * (observed as `application/octet-stream`), so we can't trust that header
 * for the extension/content-type we store. The URL path itself is
 * reliable (e.g. `.../abc123-l.jpg?X-Amz-...`), so prefer that and only
 * fall back to the response header if the URL has no recognizable
 * extension.
 */
const getImageExtensionAndMime = (
  sourceUrl: string,
  responseContentType: string | null,
): { extension: string; contentType: string } => {
  const pathname = (() => {
    try {
      return new URL(sourceUrl).pathname;
    } catch {
      return sourceUrl;
    }
  })();

  const extensionFromUrl = pathname
    .match(/\.([a-zA-Z0-9]+)$/)?.[1]
    ?.toLowerCase();
  if (extensionFromUrl && IMAGE_EXTENSION_TO_MIME[extensionFromUrl])
    return {
      extension: extensionFromUrl,
      contentType: IMAGE_EXTENSION_TO_MIME[extensionFromUrl],
    };

  if (responseContentType?.startsWith("image/"))
    return {
      extension: responseContentType.split("/")[1]?.split(";")[0] || "jpg",
      contentType: responseContentType,
    };

  return { extension: "jpg", contentType: "image/jpeg" };
};

/**
 * Edamam's recipe image URLs are pre-signed S3 links that expire after a
 * while, so a saved recipe's thumbnail eventually breaks. This downloads
 * the image once, uploads a permanent copy to Supabase Storage, and
 * rewrites every image field to point at it. If anything here fails, the
 * original (temporary) hit is returned so the save can still proceed.
 */
const persistRecipeImage = async (
  supabase: SupabaseClient,
  userId: string,
  hit: Hit,
): Promise<Hit> => {
  const sourceUrl = getBestImageUrl(hit);
  if (!sourceUrl) return hit;

  try {
    const imageResponse = await fetch(sourceUrl);
    if (!imageResponse.ok)
      throw new Error(
        `Failed to download recipe image (status ${imageResponse.status}).`,
      );

    const { extension, contentType } = getImageExtensionAndMime(
      sourceUrl,
      imageResponse.headers.get("content-type"),
    );
    const imageBuffer = await imageResponse.arrayBuffer();

    const recipeId =
      hit.recipe.uri.split("#recipe_").pop() ??
      encodeURIComponent(hit.recipe.uri);
    const path = `${userId}/${recipeId}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from(RECIPE_IMAGES_BUCKET)
      .upload(path, imageBuffer, { contentType, upsert: true });

    if (uploadError) throw uploadError;

    const {
      data: { publicUrl },
    } = supabase.storage.from(RECIPE_IMAGES_BUCKET).getPublicUrl(path);

    return {
      ...hit,
      recipe: {
        ...hit.recipe,
        image: publicUrl,
        images: {
          ...hit.recipe.images,
          THUMBNAIL: { ...hit.recipe.images.THUMBNAIL, url: publicUrl },
          SMALL: { ...hit.recipe.images.SMALL, url: publicUrl },
          REGULAR: { ...hit.recipe.images.REGULAR, url: publicUrl },
          ...(hit.recipe.images.LARGE && {
            LARGE: { ...hit.recipe.images.LARGE, url: publicUrl },
          }),
        },
      },
    };
  } catch (error) {
    console.error(
      "Failed to persist recipe image, saving with original (temporary) URL:",
      error,
    );
    return hit;
  }
};

export async function POST(req: NextRequest) {
  const accessToken = req.headers
    .get("authorization")
    ?.replace(/^Bearer\s+/i, "");

  if (!accessToken)
    return NextResponse.json(
      { message: "Missing access token." },
      { status: 401 },
    );

  const supabase = createAuthedSupabaseClient(accessToken);

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user)
    return NextResponse.json(
      { message: "Invalid or expired session." },
      { status: 401 },
    );

  let hit: Hit;
  try {
    hit = await req.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!hit?.recipe?.url)
    return NextResponse.json(
      { message: "A recipe is required." },
      { status: 400 },
    );

  // Insert immediately with the recipe as-is (Edamam's temporary image URL
  // included — it's valid for ~1hr) so the response isn't held up by the
  // image download/upload below. Saving should feel instant.
  const { data, error } = await supabase
    .from("recipes")
    .insert({
      user_id: user.id,
      type: "starred",
      data: hit,
    })
    .select()
    .single();

  if (error) {
    console.error("Supabase error object:", error);
    return NextResponse.json(
      { message: error.message || "An unknown error occurred." },
      { status: 500 },
    );
  }

  // Persist a permanent copy of the image after the response is sent, then
  // swap it into the row. Failures here are logged only — the row already
  // exists and still has a (temporarily) working image either way.
  after(async () => {
    const hitWithPersistedImage = await persistRecipeImage(
      supabase,
      user.id,
      hit,
    );

    if (hitWithPersistedImage === hit) return; // nothing to update

    const { error: updateError } = await supabase
      .from("recipes")
      .update({ data: hitWithPersistedImage })
      .eq("id", data.id);

    if (updateError)
      console.error("Failed to persist recipe image after save:", updateError);
  });

  return NextResponse.json({ hit, row: data });
}
