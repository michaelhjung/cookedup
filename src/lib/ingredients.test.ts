import { describe, expect, it } from "vitest";

import { INGREDIENTS } from "@data/ingredients";
import {
  guessCategory,
  lookupIngredient,
  pickSearchableItems,
  searchIngredients,
  suggestItems,
} from "@lib/ingredients";
import { normalizeItemName } from "@lib/pantry/items";
import { CATEGORIES, PantryItem } from "@lib/pantry/types";

describe("INGREDIENTS", () => {
  it("has a few hundred more entries than the old flat list", () => {
    expect(INGREDIENTS.length).toBeGreaterThan(1000);
  });

  it("uses lowercase ascii names with single spaces", () => {
    const offenders = INGREDIENTS.flatMap((ingredient) =>
      [ingredient.name, ...ingredient.aliases].filter(
        (term) =>
          term !== term.trim().toLowerCase().replace(/\s+/g, " ") ||
          !/^[a-z0-9' -]+$/.test(term),
      ),
    );
    expect(offenders).toEqual([]);
  });

  it("only uses the pantry's shoppable categories", () => {
    const allowed = new Set<string>(CATEGORIES);
    allowed.delete("Household");
    allowed.delete("Other");
    const offenders = INGREDIENTS.filter(
      (ingredient) => !allowed.has(ingredient.category),
    ).map((ingredient) => ingredient.name);
    expect(offenders).toEqual([]);
  });

  it("has no two entries that share a normalized key", () => {
    const seen = new Map<string, string>();
    const collisions: string[] = [];
    for (const ingredient of INGREDIENTS) {
      for (const term of [ingredient.name, ...ingredient.aliases]) {
        const key = normalizeItemName(term);
        const owner = seen.get(key);
        if (owner && owner !== ingredient.name) {
          collisions.push(`${term} (${ingredient.name}) vs ${owner}`);
        }
        seen.set(key, ingredient.name);
      }
    }
    expect(collisions).toEqual([]);
  });

  it("is sorted by name", () => {
    const names = INGREDIENTS.map((ingredient) => ingredient.name);
    expect(names).toEqual([...names].sort());
  });

  it("covers the demo pantry", () => {
    for (const name of [
      "cherry tomatoes",
      "rolled oats",
      "cumin",
      "sourdough bread",
      "frozen peas",
    ]) {
      expect(lookupIngredient(name)?.name).toBe(name);
    }
  });
});

describe("lookupIngredient", () => {
  it("finds an entry by its name regardless of case and plural", () => {
    expect(lookupIngredient("Apple")?.name).toBe("apples");
    expect(lookupIngredient("  EGGS ")?.name).toBe("eggs");
  });

  it("resolves an alias to its canonical entry", () => {
    expect(lookupIngredient("garbanzo beans")?.name).toBe("chickpeas");
    expect(lookupIngredient("green onions")?.name).toBe("scallions");
    expect(lookupIngredient("aubergine")?.name).toBe("eggplant");
  });

  it("returns undefined for something not in the list", () => {
    expect(lookupIngredient("mystery thing")).toBeUndefined();
    expect(lookupIngredient("")).toBeUndefined();
  });
});

describe("searchIngredients", () => {
  it("returns the whole list for an empty query", () => {
    expect(searchIngredients("")).toHaveLength(INGREDIENTS.length);
    expect(searchIngredients("   ")).toHaveLength(INGREDIENTS.length);
  });

  it("puts name-prefix matches, shortest first, before name-contains matches", () => {
    const names = searchIngredients("onion").map((entry) => entry.name);
    expect(names[0]).toBe("onions");
    expect(names.indexOf("onion powder")).toBeLessThan(
      names.indexOf("red onions"),
    );
    const firstContains = names.findIndex((name) => !name.startsWith("onion"));
    const lastPrefix = names.reduce(
      (last, name, index) => (name.startsWith("onion") ? index : last),
      -1,
    );
    expect(lastPrefix).toBeLessThan(firstContains);
  });

  it("matches on aliases and lists those after name matches", () => {
    const names = searchIngredients("garbanzo").map((entry) => entry.name);
    expect(names).toEqual(["chickpeas"]);

    const withAlias = searchIngredients("green").map((entry) => entry.name);
    expect(withAlias).toContain("scallions");
    expect(withAlias.indexOf("green beans")).toBeLessThan(
      withAlias.indexOf("scallions"),
    );
  });

  it("is case and whitespace insensitive", () => {
    expect(searchIngredients(" Chick ").map((entry) => entry.name)).toEqual(
      searchIngredients("chick").map((entry) => entry.name),
    );
  });

  it("returns nothing for a query that matches nothing", () => {
    expect(searchIngredients("zzzzqqq")).toEqual([]);
  });
});

describe("guessCategory", () => {
  it.each([
    // Exact list entries take their category from the list, not the
    // regex: fresh herbs are produce even though the regex says spices.
    ["Basil", "Produce"],
    ["dried basil", "Spices"],
    ["Cilantro", "Produce"],
    ["garbanzo beans", "Pantry staples"],
    ["Green onions", "Produce"],
    ["Onions", "Produce"],
    ["green beans", "Produce"],
    ["red peppers", "Produce"],
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
    ["tortillas", "Bakery"],
    ["ice cream", "Frozen"],
    ["frozen peas", "Frozen"],
    ["orange juice", "Beverages"],
    ["coffee", "Beverages"],
    // Free-typed names fall back to the keyword regex.
    ["fresh ginger", "Produce"],
    ["sourdough bread", "Bakery"],
    ["sparkling water", "Beverages"],
    ["paper towels", "Household"],
    ["dish soap", "Household"],
    ["Trader Joe's everything seasoning", "Spices"],
    ["mystery thing", "Other"],
  ])("%s -> %s", (name, category) => {
    expect(guessCategory(name)).toBe(category);
  });
});

describe("suggestItems", () => {
  it("excludes what is already in the pantry, by key", () => {
    const names = suggestItems("apple", new Set(["apple"])).map(
      (entry) => entry.name,
    );
    expect(names).not.toContain("apples");
    expect(names).toContain("applesauce");
  });

  it("suggests the canonical entry for an alias", () => {
    expect(suggestItems("garbanzo", new Set()).map((e) => e.name)).toEqual([
      "chickpeas",
    ]);
  });

  it("caps at the limit and returns nothing for blank input", () => {
    expect(suggestItems("a", new Set(), 2)).toHaveLength(2);
    expect(suggestItems("a", new Set())).toHaveLength(8);
    expect(suggestItems("  ", new Set())).toEqual([]);
  });
});

describe("pickSearchableItems", () => {
  const stocked = (
    name: string,
    updatedAt: string,
    status: PantryItem["status"] = "stocked",
  ): PantryItem => ({
    id: name,
    pantryId: "p",
    name,
    nameKey: normalizeItemName(name),
    status,
    category: "Other",
    updatedAt,
    updatedBy: null,
  });

  it("matches by key, reports skipped, and orders newest first", () => {
    const result = pickSearchableItems([
      stocked("Egg", "2026-09-01T00:00:00Z"),
      stocked("Onions", "2026-09-03T00:00:00Z"),
      stocked("Grandma's hot sauce", "2026-09-02T00:00:00Z"),
      stocked("Olive oil", "2026-09-04T00:00:00Z", "out"),
    ]);

    expect(result.terms).toEqual(["onions", "eggs"]);
    expect(result.skipped).toEqual(["Grandma's hot sauce"]);
    expect(result.truncated).toBe(0);
  });

  it("searches an alias under its canonical name", () => {
    const result = pickSearchableItems([
      stocked("Green onions", "2026-09-01T00:00:00Z"),
    ]);
    expect(result.terms).toEqual(["scallions"]);
  });

  it("caps and counts what was cut", () => {
    const result = pickSearchableItems(
      [
        stocked("eggs", "2026-09-01T00:00:00Z"),
        stocked("onions", "2026-09-02T00:00:00Z"),
        stocked("olive oil", "2026-09-03T00:00:00Z"),
      ],
      2,
    );
    expect(result.terms).toEqual(["olive oil", "onions"]);
    expect(result.truncated).toBe(1);
  });
});
