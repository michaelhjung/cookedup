// src/lib/userRecipes/client.ts
//
// Browser-side data access for user-authored recipes, straight through
// RLS like the pantry and planner. The database builds each recipe's
// Edamam-shaped `hit`, so there is no API route in the way of a save.

import type { User } from "@supabase/supabase-js";

import { RECIPE_IMAGES_BUCKET } from "@lib/recipes/persistImage";
import { getDisplayName } from "@lib/sharing/client";
import { REPORT_DETAILS_MAX, ReportReason } from "@lib/userRecipes/reports";
import {
  USER_RECIPE_COLUMNS,
  UserRecipeRow,
  toUserRecipe,
  toUserRecipeRow,
} from "@lib/userRecipes/rows";
import { Profile, UserRecipe, UserRecipeInput } from "@lib/userRecipes/types";
import { supabase } from "@utils/supabase";

export const COMMUNITY_PAGE_SIZE = 24;

const rows = (data: UserRecipeRow[] | null): UserRecipe[] =>
  (data ?? []).map(toUserRecipe);

/** Everything the user wrote, newest first. */
export const fetchMyRecipes = async (userId: string): Promise<UserRecipe[]> => {
  const { data, error } = await supabase
    .from("user_recipes")
    .select(USER_RECIPE_COLUMNS)
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return rows(data as UserRecipeRow[] | null);
};

/**
 * Other people's recipes the user can see for a reason other than
 * their being public: the household's, and ones shared by invite.
 */
export const fetchSharedRecipes = async (
  userId: string,
  householdId: string | null,
): Promise<UserRecipe[]> => {
  const { data: shares, error: sharesError } = await supabase
    .from("shares")
    .select("resource_id")
    .eq("resource_kind", "user_recipe")
    .eq("user_id", userId);

  if (sharesError) throw new Error(sharesError.message);

  const sharedIds = (shares ?? []).map((share) => share.resource_id as string);
  const reasons = [
    householdId ? `household_id.eq.${householdId}` : null,
    sharedIds.length > 0 ? `id.in.(${sharedIds.join(",")})` : null,
  ].filter((reason): reason is string => reason !== null);

  if (reasons.length === 0) return [];

  const { data, error } = await supabase
    .from("user_recipes")
    .select(USER_RECIPE_COLUMNS)
    .neq("user_id", userId)
    .or(reasons.join(","))
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return rows(data as UserRecipeRow[] | null);
};

/**
 * Live public recipes, newest first, a page at a time. `before` is the
 * `createdAt` of the last recipe already shown; keyset rather than
 * offset so a recipe published mid-scroll doesn't shift the pages.
 */
export const fetchCommunityRecipes = async (
  before: string | null = null,
): Promise<{ recipes: UserRecipe[]; hasMore: boolean }> => {
  let query = supabase
    .from("user_recipes")
    .select(USER_RECIPE_COLUMNS)
    .eq("visibility", "public")
    .eq("review_status", "approved")
    .order("created_at", { ascending: false })
    .limit(COMMUNITY_PAGE_SIZE + 1);
  if (before) query = query.lt("created_at", before);

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  const page = rows(data as UserRecipeRow[] | null);
  return {
    recipes: page.slice(0, COMMUNITY_PAGE_SIZE),
    hasMore: page.length > COMMUNITY_PAGE_SIZE,
  };
};

/** Null when it doesn't exist or the user may not see it (RLS hides both). */
export const fetchRecipe = async (id: string): Promise<UserRecipe | null> => {
  const { data, error } = await supabase
    .from("user_recipes")
    .select(USER_RECIPE_COLUMNS)
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data ? toUserRecipe(data as UserRecipeRow) : null;
};

export const createRecipe = async (
  userId: string,
  input: UserRecipeInput,
): Promise<UserRecipe> => {
  const { data, error } = await supabase
    .from("user_recipes")
    .insert({ user_id: userId, ...toUserRecipeRow(input) })
    .select(USER_RECIPE_COLUMNS)
    .single();

  if (error) throw new Error(error.message);
  return toUserRecipe(data as UserRecipeRow);
};

export const updateRecipe = async (
  id: string,
  input: UserRecipeInput,
): Promise<UserRecipe> => {
  const { data, error } = await supabase
    .from("user_recipes")
    .update(toUserRecipeRow(input))
    .eq("id", id)
    .select(USER_RECIPE_COLUMNS)
    .single();

  if (error) throw new Error(error.message);
  return toUserRecipe(data as UserRecipeRow);
};

/** Only who may see it; used by the sharing sheet on the detail page. */
export const updateRecipeVisibility = async (
  id: string,
  changes: {
    visibility?: UserRecipe["visibility"];
    householdId?: string | null;
  },
): Promise<void> => {
  const { error } = await supabase
    .from("user_recipes")
    .update({
      ...(changes.visibility !== undefined && {
        visibility: changes.visibility,
      }),
      ...(changes.householdId !== undefined && {
        household_id: changes.householdId,
      }),
    })
    .eq("id", id);

  if (error) throw new Error(error.message);
};

export const deleteRecipe = async (id: string): Promise<void> => {
  const { error } = await supabase.from("user_recipes").delete().eq("id", id);
  if (error) throw new Error(error.message);
};

// ---------------------------------------------------------------------
// Photos
// ---------------------------------------------------------------------

// One object per recipe, always a JPEG (prepareRecipeImage re-encodes),
// so replacing the photo overwrites in place and `?v=` busts the caches.
const imagePath = (userId: string, recipeId: string): string =>
  `${userId}/authored/${recipeId}.jpg`;

/** Uploads the photo and points the recipe at it. Resolves to the new URL. */
export const saveRecipeImage = async (
  userId: string,
  recipeId: string,
  image: Blob,
): Promise<string> => {
  const path = imagePath(userId, recipeId);
  const { error: uploadError } = await supabase.storage
    .from(RECIPE_IMAGES_BUCKET)
    .upload(path, image, { contentType: "image/jpeg", upsert: true });
  if (uploadError) throw new Error(uploadError.message);

  const {
    data: { publicUrl },
  } = supabase.storage.from(RECIPE_IMAGES_BUCKET).getPublicUrl(path);
  const imageUrl = `${publicUrl}?v=${Date.now()}`;

  const { error } = await supabase
    .from("user_recipes")
    .update({ image_url: imageUrl })
    .eq("id", recipeId);
  if (error) throw new Error(error.message);

  return imageUrl;
};

/** Removes the photo from the recipe and from storage. */
export const clearRecipeImage = async (
  userId: string,
  recipeId: string,
): Promise<void> => {
  const { error } = await supabase
    .from("user_recipes")
    .update({ image_url: null })
    .eq("id", recipeId);
  if (error) throw new Error(error.message);

  await removeRecipeImageObject(userId, recipeId);
};

/** Storage only; for after the recipe row itself is gone. Never throws. */
export const removeRecipeImageObject = async (
  userId: string,
  recipeId: string,
): Promise<void> => {
  const { error } = await supabase.storage
    .from(RECIPE_IMAGES_BUCKET)
    .remove([imagePath(userId, recipeId)]);
  if (error) console.error("Failed to remove recipe image:", error);
};

// ---------------------------------------------------------------------
// Profiles (the public byline)
// ---------------------------------------------------------------------

export const DISPLAY_NAME_MAX = 40;

export const fetchProfile = async (userId: string): Promise<Profile | null> => {
  const { data, error } = await supabase
    .from("profiles")
    .select("user_id, display_name")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data ? { userId: data.user_id, displayName: data.display_name } : null;
};

export const saveProfile = async (
  userId: string,
  displayName: string,
): Promise<Profile> => {
  const { data, error } = await supabase
    .from("profiles")
    .upsert({ user_id: userId, display_name: displayName.trim() })
    .select("user_id, display_name")
    .single();

  if (error) throw new Error(error.message);
  return { userId: data.user_id, displayName: data.display_name };
};

/**
 * The profile, made on the spot from the email's local part if this is
 * the user's first recipe. Bylines are built from it in the database,
 * so it has to exist before the first save.
 */
export const ensureProfile = async (user: User): Promise<Profile> => {
  const existing = await fetchProfile(user.id);
  if (existing) return existing;
  return saveProfile(
    user.id,
    getDisplayName(user.email).slice(0, DISPLAY_NAME_MAX),
  );
};

// ---------------------------------------------------------------------
// Review and reports
// ---------------------------------------------------------------------

/**
 * Puts a rejected (or withdrawn) recipe back in the queue. Just a
 * visibility write: the database turns "public" into "pending".
 */
export const resubmitRecipe = async (id: string): Promise<void> =>
  updateRecipeVisibility(id, { visibility: "public" });

/** Whether the user has already reported this recipe. */
export const hasReportedRecipe = async (
  recipeId: string,
  userId: string,
): Promise<boolean> => {
  const { data, error } = await supabase
    .from("recipe_reports")
    .select("id")
    .eq("recipe_id", recipeId)
    .eq("reporter_id", userId)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data !== null;
};

export const reportRecipe = async (
  recipeId: string,
  reason: ReportReason,
  details: string,
): Promise<void> => {
  const trimmed = details.trim().slice(0, REPORT_DETAILS_MAX);
  const { error } = await supabase.from("recipe_reports").insert({
    recipe_id: recipeId,
    reason,
    details: trimmed.length > 0 ? trimmed : null,
  });

  if (error) throw new Error(error.message);
};
