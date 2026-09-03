// src/lib/recipes/library.ts
//
// The `recipes` table is the user's recipe library: one row per user per
// recipe, holding the full Edamam hit plus a permanent copy of its
// image. A row exists because the recipe is starred, or planned, or
// both — `is_starred` records which.
//
// Both entry points (starring from a recipe card, planning from the
// calendar) funnel through `upsertLibraryRecipe` so a recipe is never
// stored twice and the image pipeline runs exactly once per recipe.

import type { SupabaseClient } from "@supabase/supabase-js";

import { Hit } from "@interfaces/edamam";
import {
  hasPersistedImage,
  persistRecipeImage,
} from "@lib/recipes/persistImage";

export interface LibraryRecipeRow {
  id: string;
  is_starred: boolean;
  data: Hit;
}

interface UpsertOptions {
  /**
   * Whether this call should mark the recipe starred. Planning a recipe
   * passes `false`, which deliberately *doesn't* unstar an already-
   * starred recipe — only an explicit unstar does that.
   */
  star: boolean;
}

/**
 * Inserts the recipe into the user's library, or returns the existing row
 * if it's already there. The insert carries Edamam's temporary image URL
 * so the caller isn't held up by a download; `persistLibraryRecipeImage`
 * swaps in a permanent copy afterwards.
 */
export const upsertLibraryRecipe = async (
  supabase: SupabaseClient,
  userId: string,
  hit: Hit,
  { star }: UpsertOptions,
): Promise<LibraryRecipeRow> => {
  const { data: existing, error: lookupError } = await supabase
    .from("recipes")
    .select("id, is_starred, data")
    .eq("user_id", userId)
    .eq("recipe_url", hit.recipe.url)
    .maybeSingle();

  if (lookupError) throw new Error(lookupError.message);

  if (existing) {
    // Present already. The only thing that can change is the star, and
    // only in the direction of turning it on.
    if (star && !existing.is_starred) {
      const { data: updated, error: updateError } = await supabase
        .from("recipes")
        .update({ is_starred: true })
        .eq("id", existing.id)
        .select("id, is_starred, data")
        .single();

      if (updateError) throw new Error(updateError.message);
      return updated as LibraryRecipeRow;
    }

    return existing as LibraryRecipeRow;
  }

  const { data: inserted, error: insertError } = await supabase
    .from("recipes")
    .insert({ user_id: userId, data: hit, is_starred: star })
    .select("id, is_starred, data")
    .single();

  if (insertError) throw new Error(insertError.message);

  return inserted as LibraryRecipeRow;
};

/**
 * Downloads and stores a permanent copy of the recipe's image, then
 * points the stored row at it. Safe to call for a row that already has
 * one — it returns immediately.
 *
 * Meant to run *after* the response has been sent (via `after()`), so
 * failures are logged rather than surfaced: the row already exists and
 * still renders with Edamam's own URL until that link expires.
 */
export const persistLibraryRecipeImage = async (
  supabase: SupabaseClient,
  userId: string,
  row: LibraryRecipeRow,
): Promise<void> => {
  if (hasPersistedImage(row.data)) return;

  const hitWithPersistedImage = await persistRecipeImage(
    supabase,
    userId,
    row.data,
  );

  if (hitWithPersistedImage === row.data) return; // nothing changed

  const { error } = await supabase
    .from("recipes")
    .update({ data: hitWithPersistedImage })
    .eq("id", row.id);

  if (error) console.error("Failed to persist recipe image after save:", error);
};
