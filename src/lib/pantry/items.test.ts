import { describe, expect, it } from "vitest";

import {
  buildSuggestionIndex,
  groupByCategory,
  guessCategory,
  normalizeItemName,
  pickRestockItems,
  pickSearchableItems,
  suggestItems,
  tidyItemName,
} from "@lib/pantry/items";
import { PantryItem } from "@lib/pantry/types";

describe("normalizeItemName", () => {
  it("lowercases, trims and collapses spaces", () => {
    expect(normalizeItemName("  Greek   Yogurt ")).toBe("greek yogurt");
  });

  it("drops a trailing s", () => {
    expect(normalizeItemName("Eggs")).toBe("egg");
    expect(normalizeItemName("avocados")).toBe("avocado");
    expect(normalizeItemName("olive oils")).toBe("olive oil");
  });

  it("handles -es and -ies plurals", () => {
    expect(normalizeItemName("tomatoes")).toBe("tomato");
    expect(normalizeItemName("potatoes")).toBe("potato");
    expect(normalizeItemName("peaches")).toBe("peach");
    expect(normalizeItemName("radishes")).toBe("radish");
    expect(normalizeItemName("cherries")).toBe("cherry");
    expect(normalizeItemName("blueberries")).toBe("blueberry");
  });

  it("leaves words ending in ss alone", () => {
    expect(normalizeItemName("Swiss cheese")).toBe("swiss cheese");
    expect(normalizeItemName("watercress")).toBe("watercress");
  });

  it("is idempotent", () => {
    for (const name of ["Tomatoes", "eggs", "cherries", "hummus", "rice"]) {
      const once = normalizeItemName(name);
      expect(normalizeItemName(once)).toBe(once);
    }
  });
});

describe("guessCategory", () => {
  it.each([
    ["Onions", "Produce"],
    ["green beans", "Produce"],
    ["red peppers", "Produce"],
    ["fresh ginger", "Produce"],
    ["Eggs", "Dairy & eggs"],
    ["Greek yogurt", "Dairy & eggs"],
    ["cream cheese", "Dairy & eggs"],
    ["Chicken thighs", "Meat & seafood"],
    ["shrimp", "Meat & seafood"],
    ["tofu", "Meat & seafood"],
    ["Olive oil", "Pantry staples"],
    ["peanut butter", "Pantry staples"],
    ["chicken broth", "Pantry staples"],
    ["corn flakes", "Pantry staples"],
    ["basmati rice", "Pantry staples"],
    ["black pepper", "Spices"],
    ["cumin seed", "Spices"],
    ["garlic powder", "Spices"],
    ["sourdough bread", "Bakery"],
    ["tortillas", "Bakery"],
    ["ice cream", "Frozen"],
    ["frozen peas", "Frozen"],
    ["orange juice", "Beverages"],
    ["coffee", "Beverages"],
    ["sparkling water", "Beverages"],
    ["paper towels", "Household"],
    ["dish soap", "Household"],
    ["Trader Joe's everything seasoning", "Spices"],
    ["mystery thing", "Other"],
  ])("%s -> %s", (name, category) => {
    expect(guessCategory(name)).toBe(category);
  });
});

const item = (
  name: string,
  category: PantryItem["category"],
  status: PantryItem["status"] = "stocked",
): PantryItem => ({
  id: name,
  pantryId: "p",
  name,
  nameKey: normalizeItemName(name),
  status,
  category,
  updatedAt: "2026-09-21T00:00:00Z",
  updatedBy: null,
});

describe("groupByCategory", () => {
  it("orders groups store-walk and items by name, hiding empty groups", () => {
    const groups = groupByCategory([
      item("Rice", "Pantry staples"),
      item("Spinach", "Produce"),
      item("Widget", "Other"),
      item("apples", "Produce"),
      item("Eggs", "Dairy & eggs"),
    ]);

    expect(groups.map((group) => group.category)).toEqual([
      "Produce",
      "Dairy & eggs",
      "Pantry staples",
      "Other",
    ]);
    expect(groups[0].items.map((entry) => entry.name)).toEqual([
      "apples",
      "Spinach",
    ]);
  });

  it("returns nothing for no items", () => {
    expect(groupByCategory([])).toEqual([]);
  });
});

describe("pickRestockItems", () => {
  it("keeps low and out", () => {
    const items = [
      item("a", "Other", "stocked"),
      item("b", "Other", "low"),
      item("c", "Other", "out"),
    ];
    expect(pickRestockItems(items).map((entry) => entry.name)).toEqual([
      "b",
      "c",
    ]);
  });
});

describe("suggestItems", () => {
  const index = buildSuggestionIndex([
    "apples",
    "applesauce",
    "pineapple",
    "apple juice",
    "bananas",
    "apples ",
  ]);

  it("dedupes the index by key", () => {
    expect(index).toHaveLength(5);
  });

  it("puts prefix matches before contains matches and excludes existing", () => {
    const result = suggestItems(index, "app", new Set(["apple juice"]));
    expect(result.map((entry) => entry.name)).toEqual([
      "apples",
      "applesauce",
      "pineapple",
    ]);
  });

  it("caps at the limit and returns nothing for blank input", () => {
    expect(suggestItems(index, "a", new Set(), 2)).toHaveLength(2);
    expect(suggestItems(index, "  ", new Set())).toEqual([]);
  });
});

describe("tidyItemName", () => {
  it("capitalises the first letter and collapses spaces", () => {
    expect(tidyItemName("  greek   yogurt ")).toBe("Greek yogurt");
  });
});

describe("pickSearchableItems", () => {
  const index = buildSuggestionIndex(["eggs", "olive oil", "onions"]);
  const stocked = (name: string, updatedAt: string): PantryItem => ({
    ...item(name, "Other"),
    updatedAt,
  });

  it("matches by key, reports skipped, and orders newest first", () => {
    const result = pickSearchableItems(
      [
        stocked("Egg", "2026-09-01T00:00:00Z"),
        stocked("Onions", "2026-09-03T00:00:00Z"),
        stocked("Grandma's hot sauce", "2026-09-02T00:00:00Z"),
        { ...stocked("Olive oil", "2026-09-04T00:00:00Z"), status: "out" },
      ],
      index,
    );

    expect(result.terms).toEqual(["onions", "eggs"]);
    expect(result.skipped).toEqual(["Grandma's hot sauce"]);
    expect(result.truncated).toBe(0);
  });

  it("caps and counts what was cut", () => {
    const result = pickSearchableItems(
      [
        stocked("eggs", "2026-09-01T00:00:00Z"),
        stocked("onions", "2026-09-02T00:00:00Z"),
        stocked("olive oil", "2026-09-03T00:00:00Z"),
      ],
      index,
      2,
    );
    expect(result.terms).toEqual(["olive oil", "onions"]);
    expect(result.truncated).toBe(1);
  });
});
