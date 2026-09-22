// src/lib/userRecipes/server.ts
//
// Reading a user recipe on the server, as whoever is signed in. The
// detail page is server-rendered (for a title and preview image when
// the link is shared), and RLS decides what the visitor may see: the
// author sees their private recipe, a household member theirs, an
// invitee what was shared, and anyone at all a public one.

import { cookies } from "next/headers";
import { cache } from "react";

import {
  USER_RECIPE_COLUMNS,
  UserRecipeRow,
  toUserRecipe,
} from "@lib/userRecipes/rows";
import { UserRecipe } from "@lib/userRecipes/types";
import { createCookieSupabaseClient } from "@utils/supabase/server";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export interface RecipeForViewer {
  recipe: UserRecipe;
  viewerId: string | null;
}

/**
 * The recipe and who's looking, or null when there's nothing to show
 * (missing, or not theirs to see: the database doesn't say which).
 * Cached per request so generateMetadata and the page share one read.
 */
export const loadRecipeForViewer = cache(
  async (id: string): Promise<RecipeForViewer | null> => {
    if (!UUID_PATTERN.test(id)) return null;

    const cookieStore = await cookies();
    // A page can read cookies but not write them; a token refresh
    // that wants to is simply not persisted, which only means the
    // browser does it itself on its next request.
    const supabase = createCookieSupabaseClient({
      getAll: () => cookieStore.getAll(),
      set: () => {},
    });

    const [{ data, error }, { data: auth }] = await Promise.all([
      supabase
        .from("user_recipes")
        .select(USER_RECIPE_COLUMNS)
        .eq("id", id)
        .maybeSingle(),
      supabase.auth.getUser(),
    ]);

    if (error) {
      console.error("Failed to load recipe:", error);
      return null;
    }
    if (!data) return null;

    return {
      recipe: toUserRecipe(data as UserRecipeRow),
      viewerId: auth.user?.id ?? null,
    };
  },
);
