// src/lib/userRecipes/rows.ts
//
// The `user_recipes` table as the app sees it. Shared by the browser
// client and the server-rendered detail page, so it imports no Supabase
// client of its own.

import type { Hit } from "@interfaces/edamam";
import {
  EMPTY_TAGS,
  RecipeVisibility,
  StoredIngredient,
  UserRecipe,
  UserRecipeInput,
} from "@lib/userRecipes/types";

export interface UserRecipeRow {
  id: string;
  user_id: string;
  household_id: string | null;
  title: string;
  description: string | null;
  servings: number;
  prep_minutes: number | null;
  cook_minutes: number | null;
  ingredients: StoredIngredient[];
  instructions: string[];
  cuisine_types: string[];
  meal_types: string[];
  dish_types: string[];
  diet_labels: string[];
  health_labels: string[];
  calories_per_serving: number | string | null;
  protein_g: number | string | null;
  carbs_g: number | string | null;
  fat_g: number | string | null;
  source_name: string | null;
  source_url: string | null;
  notes: string | null;
  image_url: string | null;
  visibility: RecipeVisibility;
  hit: Hit;
  created_at: string;
  updated_at: string;
}

/** Every column is wanted wherever a recipe is read, `hit` included. */
export const USER_RECIPE_COLUMNS = "*";

// PostgREST returns `numeric` as a string.
const toNumberOrNull = (value: number | string | null): number | null => {
  if (value === null) return null;
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

export const toUserRecipe = (row: UserRecipeRow): UserRecipe => ({
  id: row.id,
  userId: row.user_id,
  householdId: row.household_id,
  title: row.title,
  description: row.description,
  servings: row.servings,
  prepMinutes: row.prep_minutes,
  cookMinutes: row.cook_minutes,
  ingredients: row.ingredients ?? [],
  instructions: row.instructions ?? [],
  tags: {
    ...EMPTY_TAGS,
    cuisineType: row.cuisine_types ?? [],
    mealType: row.meal_types ?? [],
    dishType: row.dish_types ?? [],
    diet: row.diet_labels ?? [],
    health: row.health_labels ?? [],
  },
  nutrition: {
    calories: toNumberOrNull(row.calories_per_serving),
    protein: toNumberOrNull(row.protein_g),
    carbs: toNumberOrNull(row.carbs_g),
    fat: toNumberOrNull(row.fat_g),
  },
  sourceName: row.source_name,
  sourceUrl: row.source_url,
  notes: row.notes,
  imageUrl: row.image_url,
  visibility: row.visibility,
  hit: row.hit,
  createdAt: row.created_at,
  updatedAt: row.updated_at,
});

/** The columns an insert or update writes; `hit` is the database's job. */
export const toUserRecipeRow = (input: UserRecipeInput) => ({
  household_id: input.householdId,
  title: input.title,
  description: input.description,
  servings: input.servings,
  prep_minutes: input.prepMinutes,
  cook_minutes: input.cookMinutes,
  ingredients: input.ingredients,
  instructions: input.instructions,
  cuisine_types: input.tags.cuisineType,
  meal_types: input.tags.mealType,
  dish_types: input.tags.dishType,
  diet_labels: input.tags.diet,
  health_labels: input.tags.health,
  calories_per_serving: input.nutrition.calories,
  protein_g: input.nutrition.protein,
  carbs_g: input.nutrition.carbs,
  fat_g: input.nutrition.fat,
  source_name: input.sourceName,
  source_url: input.sourceUrl,
  notes: input.notes,
  visibility: input.visibility,
});
