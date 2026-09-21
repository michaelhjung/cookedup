import { describe, expect, it } from "vitest";

import { Hit } from "@interfaces/edamam";
import {
  extractPlanIngredients,
  mergeNewLines,
  pantryRestockLines,
  rangeToDates,
} from "@lib/grocery/generate";
import { normalizeItemName } from "@lib/pantry/items";
import { PantryItem } from "@lib/pantry/types";

describe("rangeToDates", () => {
  it("counts today as the first day", () => {
    expect(rangeToDates(7, "days", "2026-09-21")).toEqual({
      start: "2026-09-21",
      end: "2026-09-27",
    });
    expect(rangeToDates(1, "days", "2026-09-21").end).toBe("2026-09-21");
    expect(rangeToDates(2, "weeks", "2026-09-21").end).toBe("2026-10-04");
    expect(rangeToDates(1, "months", "2026-09-21").end).toBe("2026-10-21");
    expect(rangeToDates(1, "months", "2026-01-31").end).toBe("2026-02-28");
  });

  it("never goes below one", () => {
    expect(rangeToDates(0, "days", "2026-09-21").end).toBe("2026-09-21");
  });
});

const hit = (label: string, foods: (string | { text: string })[]): Hit =>
  ({
    recipe: {
      label,
      ingredients: foods.map((food) =>
        typeof food === "string" ?
          { food, text: `1 cup ${food}` }
        : { food: "", text: food.text },
      ),
    },
  }) as unknown as Hit;

const item = (
  name: string,
  status: PantryItem["status"],
  category: PantryItem["category"] = "Other",
): PantryItem => ({
  id: name,
  pantryId: "p",
  name,
  nameKey: normalizeItemName(name),
  status,
  category,
  updatedAt: "",
  updatedBy: null,
});

describe("extractPlanIngredients", () => {
  it("skips custom meals and stocked items, dedupes, keeps recipe names", () => {
    const lines = extractPlanIngredients(
      [
        {
          recipe: hit("Pad thai", ["rice noodles", "eggs", "cilantro"]),
          title: null,
        },
        {
          recipe: hit("Chicken curry", ["cilantro", "chicken thighs"]),
          title: null,
        },
        { recipe: null, title: "Leftovers" },
      ],
      [item("eggs", "stocked"), item("cilantro", "low", "Produce")],
    );

    expect(lines.map((line) => line.nameKey)).toEqual([
      "rice noodle",
      "cilantro",
      "chicken thigh",
    ]);
    const cilantro = lines.find((line) => line.nameKey === "cilantro");
    expect(cilantro?.sourceRecipeNames).toEqual(["Pad thai", "Chicken curry"]);
    // Category comes from the pantry item when there is one.
    expect(cilantro?.category).toBe("Produce");
    expect(lines[0].category).toBe("Pantry staples");
    expect(lines[0].source).toBe("plan");
  });

  it("falls back to the ingredient text when food is missing", () => {
    const lines = extractPlanIngredients(
      [{ recipe: hit("Soup", [{ text: "a pinch of saffron" }]), title: null }],
      [],
    );
    expect(lines[0].name).toBe("A pinch of saffron");
  });
});

describe("pantryRestockLines", () => {
  it("takes low and out items with their category", () => {
    const lines = pantryRestockLines([
      item("Eggs", "low", "Dairy & eggs"),
      item("Rice", "stocked"),
      item("Onions", "out", "Produce"),
    ]);
    expect(lines.map((line) => line.name)).toEqual(["Eggs", "Onions"]);
    expect(lines[0].source).toBe("pantry");
  });
});

describe("mergeNewLines", () => {
  it("prefers pantry lines, merges recipe names, counts existing as skipped", () => {
    const pantry = pantryRestockLines([item("Eggs", "low", "Dairy & eggs")]);
    const plan = extractPlanIngredients(
      [
        { recipe: hit("Omelette", ["eggs", "chives"]), title: null },
        { recipe: hit("Salad", ["chives", "lettuce"]), title: null },
      ],
      [],
    );

    const { lines, skipped } = mergeNewLines(
      [plan, pantry],
      new Set(["lettuce"]),
    );

    expect(skipped).toBe(1);
    expect(lines.find((line) => line.nameKey === "egg")?.source).toBe("pantry");
    expect(
      lines.find((line) => line.nameKey === "chive")?.sourceRecipeNames,
    ).toEqual(["Omelette", "Salad"]);
    expect(lines).toHaveLength(2);
  });
});
