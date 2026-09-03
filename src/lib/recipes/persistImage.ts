// src/lib/recipes/persistImage.ts
//
// Extracted from app/api/recipes/save/route.ts so that adding a recipe
// to a meal plan gets the same permanent-image treatment as starring one
// does, without duplicating any of it.

import type { SupabaseClient } from "@supabase/supabase-js";

import { Hit } from "@interfaces/edamam";

export const RECIPE_IMAGES_BUCKET = "recipe-images";

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
 *
 * Returns the *same object reference* it was given when there was nothing
 * to do, so callers can skip a pointless database write with `===`.
 */
export const persistRecipeImage = async (
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

/**
 * Already-persisted recipes point at our own Storage bucket, so there's
 * nothing to download and re-upload. Used to skip the background work
 * when a recipe is planned after having already been starred.
 */
export const hasPersistedImage = (hit: Hit): boolean =>
  Boolean(hit.recipe.image?.includes(`/${RECIPE_IMAGES_BUCKET}/`));
