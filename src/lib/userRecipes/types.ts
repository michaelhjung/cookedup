// src/lib/userRecipes/types.ts
//
// A recipe someone wrote in the app. The database keeps both the
// authoring columns and an Edamam-shaped `hit` built from them; the
// app edits the former and renders the latter through the same cards
// and planner chips as every other recipe.

import type { RandomRecipeFilterParam } from "@data/randomRecipeFilters";
import type { Hit } from "@interfaces/edamam";

export type RecipeVisibility = "private" | "public";

/**
 * Where a public recipe stands with the admin. Only meaningful while
 * public, except `rejected`, which an unpublished recipe keeps (with
 * its note) until the author resubmits.
 */
export type ReviewStatus = "pending" | "approved" | "rejected";

/** Public and approved: in Community, readable signed out. */
export const isRecipeLive = (recipe: {
  visibility: RecipeVisibility;
  reviewStatus: ReviewStatus;
}): boolean =>
  recipe.visibility === "public" && recipe.reviewStatus === "approved";

/** One ingredient line, or a heading that groups the lines after it. */
export type StoredIngredient =
  | { text: string; food: string | null }
  | { heading: string };

export const isIngredientHeading = (
  ingredient: StoredIngredient,
): ingredient is { heading: string } => "heading" in ingredient;

/** Tag values per Edamam filter, the strings the filter generator uses. */
export type RecipeTags = Record<RandomRecipeFilterParam, string[]>;

export const EMPTY_TAGS: RecipeTags = {
  cuisineType: [],
  mealType: [],
  dishType: [],
  diet: [],
  health: [],
};

export interface RecipeNutrition {
  calories: number | null;
  protein: number | null;
  carbs: number | null;
  fat: number | null;
}

export interface UserRecipe {
  id: string;
  userId: string;
  householdId: string | null;
  title: string;
  description: string | null;
  servings: number;
  prepMinutes: number | null;
  cookMinutes: number | null;
  ingredients: StoredIngredient[];
  instructions: string[];
  tags: RecipeTags;
  /** Per serving. */
  nutrition: RecipeNutrition;
  sourceName: string | null;
  sourceUrl: string | null;
  notes: string | null;
  imageUrl: string | null;
  visibility: RecipeVisibility;
  reviewStatus: ReviewStatus;
  /** The admin's reason for a rejection, for the author. */
  reviewNote: string | null;
  /** How many people have this in their library, starred. */
  starCount: number;
  hit: Hit;
  createdAt: string;
  updatedAt: string;
}

/** What the editor writes: everything the author decides. */
export type UserRecipeInput = Omit<
  UserRecipe,
  | "id"
  | "userId"
  | "hit"
  | "createdAt"
  | "updatedAt"
  | "imageUrl"
  | "reviewStatus"
  | "reviewNote"
  | "starCount"
>;
