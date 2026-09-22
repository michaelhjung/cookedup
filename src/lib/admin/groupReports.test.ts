import { describe, expect, it } from "vitest";

import { groupReportsByRecipe } from "@lib/admin/groupReports";
import type { RecipeReport } from "@lib/userRecipes/reports";
import type { UserRecipe } from "@lib/userRecipes/types";

const recipe = (id: string) => ({ id }) as UserRecipe;
const report = (
  id: string,
  recipeId: string,
  createdAt: string,
): RecipeReport => ({
  id,
  recipeId,
  reporterId: "u",
  reason: "spam",
  details: null,
  createdAt,
});

describe("groupReportsByRecipe", () => {
  it("groups by recipe, newest group and newest report first", () => {
    const groups = groupReportsByRecipe(
      [
        report("r1", "a", "2026-09-01T00:00:00Z"),
        report("r2", "b", "2026-09-03T00:00:00Z"),
        report("r3", "a", "2026-09-02T00:00:00Z"),
      ],
      [recipe("a"), recipe("b")],
    );
    expect(groups.map((group) => group.recipe.id)).toEqual(["b", "a"]);
    expect(groups[1].reports.map((r) => r.id)).toEqual(["r3", "r1"]);
  });

  it("drops reports for recipes it wasn't given", () => {
    expect(
      groupReportsByRecipe([report("r1", "gone", "2026-09-01T00:00:00Z")], []),
    ).toEqual([]);
  });
});
