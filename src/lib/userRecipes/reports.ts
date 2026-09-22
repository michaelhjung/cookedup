// src/lib/userRecipes/reports.ts
//
// Reporting a public recipe, and the words for it. The reasons mirror
// the community guidelines page, one per rule a reader can judge.

import type { ReviewStatus } from "@lib/userRecipes/types";

export type ReportReason =
  | "not_a_recipe"
  | "offensive"
  | "spam"
  | "copyright"
  | "personal_info"
  | "other";

export const REPORT_REASONS: { value: ReportReason; label: string }[] = [
  { value: "not_a_recipe", label: "It isn't a recipe" },
  { value: "offensive", label: "Hateful, sexual or violent content" },
  { value: "spam", label: "Advertising or spam" },
  { value: "copyright", label: "Copied without credit" },
  { value: "personal_info", label: "Personal information" },
  { value: "other", label: "Something else" },
];

const REPORT_LABELS = new Map(
  REPORT_REASONS.map((reason) => [reason.value, reason.label]),
);

export const getReportReasonLabel = (reason: ReportReason): string =>
  REPORT_LABELS.get(reason) ?? "Something else";

export const REPORT_DETAILS_MAX = 1000;
export const REVIEW_NOTE_MAX = 500;

export interface RecipeReport {
  id: string;
  recipeId: string;
  reporterId: string;
  reason: ReportReason;
  details: string | null;
  createdAt: string;
}

/**
 * The badge on the author's own cards and the label under the editor's
 * visibility control: what the recipe's visibility and review state add
 * up to for the author.
 */
export const describeRecipeStatus = (recipe: {
  visibility: "private" | "public";
  reviewStatus: ReviewStatus;
  householdId: string | null;
}): "Private" | "Household" | "In review" | "Public" | "Rejected" => {
  if (recipe.reviewStatus === "rejected") return "Rejected";
  if (recipe.visibility === "public")
    return recipe.reviewStatus === "pending" ? "In review" : "Public";
  return recipe.householdId ? "Household" : "Private";
};

/** "12 stars", "1 star", or null for none. */
export const formatStarCount = (count: number): string | null => {
  if (count <= 0) return null;
  return `${count} ${count === 1 ? "star" : "stars"}`;
};
