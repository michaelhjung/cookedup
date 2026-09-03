import { after, NextRequest, NextResponse } from "next/server";

import { Hit } from "@interfaces/edamam";
import {
  persistLibraryRecipeImage,
  upsertLibraryRecipe,
} from "@lib/recipes/library";
import { createAuthedSupabaseClient } from "@utils/supabase/server";

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

  // The row goes in immediately with Edamam's own image URL (valid for
  // ~1hr) so the response isn't held up by a download. Saving should feel
  // instant.
  let row;
  try {
    row = await upsertLibraryRecipe(supabase, user.id, hit, { star: true });
  } catch (error) {
    console.error("Failed to save recipe:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "An unknown error occurred.",
      },
      { status: 500 },
    );
  }

  // Swap in a permanent copy of the image after the response is sent.
  // Failures are logged only — the row already exists and still has a
  // (temporarily) working image either way.
  after(() => persistLibraryRecipeImage(supabase, user.id, row));

  return NextResponse.json({ hit, row });
}
