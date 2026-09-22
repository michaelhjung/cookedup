// src/lib/admin/groupReports.ts
//
// The Reports tab shows one row per reported recipe, not per report:
// the admin decides about the recipe, and three people saying "spam"
// is one decision.

import type { RecipeReport } from "@lib/userRecipes/reports";
import type { UserRecipe } from "@lib/userRecipes/types";

export interface ReportedRecipe {
  recipe: UserRecipe;
  /** Newest first. */
  reports: RecipeReport[];
}

/**
 * Groups by recipe, ordered by the newest report in each group so the
 * freshest complaint is at the top. A report whose recipe the admin
 * can't see (shouldn't happen: admins read everything) is dropped.
 */
export const groupReportsByRecipe = (
  reports: RecipeReport[],
  recipes: UserRecipe[],
): ReportedRecipe[] => {
  const recipesById = new Map(recipes.map((recipe) => [recipe.id, recipe]));
  const groups = new Map<string, ReportedRecipe>();

  for (const report of reports) {
    const recipe = recipesById.get(report.recipeId);
    if (!recipe) continue;
    const group = groups.get(report.recipeId);
    if (group) {
      group.reports.push(report);
    } else {
      groups.set(report.recipeId, { recipe, reports: [report] });
    }
  }

  const byNewest = (a: RecipeReport, b: RecipeReport) =>
    b.createdAt.localeCompare(a.createdAt);

  return [...groups.values()]
    .map((group) => ({ ...group, reports: [...group.reports].sort(byNewest) }))
    .sort((a, b) => byNewest(a.reports[0], b.reports[0]));
};
