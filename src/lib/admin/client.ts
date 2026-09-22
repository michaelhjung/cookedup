// src/lib/admin/client.ts
//
// Browser-side data access for the admin page. Reads go through RLS
// (admins may read every recipe and every report); decisions go through
// RPCs that check the role themselves.

import { RecipeReport, ReportReason } from "@lib/userRecipes/reports";
import {
  USER_RECIPE_COLUMNS,
  UserRecipeRow,
  toUserRecipe,
} from "@lib/userRecipes/rows";
import { UserRecipe } from "@lib/userRecipes/types";
import { supabase } from "@utils/supabase";

interface RecipeReportRow {
  id: string;
  recipe_id: string;
  reporter_id: string;
  reason: ReportReason;
  details: string | null;
  created_at: string;
}

const toRecipeReport = (row: RecipeReportRow): RecipeReport => ({
  id: row.id,
  recipeId: row.recipe_id,
  reporterId: row.reporter_id,
  reason: row.reason,
  details: row.details,
  createdAt: row.created_at,
});

/** Whether the signed-in user is an admin. False signed out. */
export const fetchIsAdmin = async (userId: string): Promise<boolean> => {
  const { data, error } = await supabase
    .from("app_roles")
    .select("role")
    .eq("user_id", userId)
    .eq("role", "admin")
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data !== null;
};

/** Recipes waiting for a decision, longest-waiting first. */
export const fetchPendingRecipes = async (): Promise<UserRecipe[]> => {
  const { data, error } = await supabase
    .from("user_recipes")
    .select(USER_RECIPE_COLUMNS)
    .eq("visibility", "public")
    .eq("review_status", "pending")
    .order("updated_at", { ascending: true });

  if (error) throw new Error(error.message);
  return ((data ?? []) as UserRecipeRow[]).map(toUserRecipe);
};

/** Open reports and the recipes they are about; grouping is the caller's. */
export const fetchOpenReports = async (): Promise<{
  reports: RecipeReport[];
  recipes: UserRecipe[];
}> => {
  const { data, error } = await supabase
    .from("recipe_reports")
    .select("id, recipe_id, reporter_id, reason, details, created_at")
    .eq("status", "open")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  const reports = ((data ?? []) as RecipeReportRow[]).map(toRecipeReport);
  if (reports.length === 0) return { reports, recipes: [] };

  const recipeIds = [...new Set(reports.map((report) => report.recipeId))];
  const { data: recipeRows, error: recipesError } = await supabase
    .from("user_recipes")
    .select(USER_RECIPE_COLUMNS)
    .in("id", recipeIds);

  if (recipesError) throw new Error(recipesError.message);
  return {
    reports,
    recipes: ((recipeRows ?? []) as UserRecipeRow[]).map(toUserRecipe),
  };
};

export const approveRecipe = async (recipeId: string): Promise<void> => {
  const { error } = await supabase.rpc("approve_recipe", {
    p_recipe_id: recipeId,
  });
  if (error) throw new Error(error.message);
};

/** From the queue or from a report: private + rejected, with the note. */
export const rejectRecipe = async (
  recipeId: string,
  note: string,
): Promise<void> => {
  const { error } = await supabase.rpc("reject_recipe", {
    p_recipe_id: recipeId,
    p_note: note,
  });
  if (error) throw new Error(error.message);
};

export const dismissReports = async (recipeId: string): Promise<void> => {
  const { error } = await supabase.rpc("dismiss_reports", {
    p_recipe_id: recipeId,
  });
  if (error) throw new Error(error.message);
};
