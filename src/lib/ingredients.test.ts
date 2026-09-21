import { describe, expect, it } from "vitest";

import { INGREDIENTS } from "@data/ingredients";
import { STARTER_PANTRY } from "@data/starterPantry";
import {
  buildIngredientSections,
  buildStarterGroups,
  buildStockedKeys,
  countPantryMatches,
  guessCategory,
  lookupIngredient,
  matchCategory,
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
    expect(lookupIngredient("unsalted butter")?.name).toBe("butter");
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

  it("puts fresh food before staples, and staples before spices and drinks", () => {
    const result = pickSearchableItems([
      stocked("cumin", "2026-09-09T00:00:00Z"),
      stocked("red wine", "2026-09-08T00:00:00Z"),
      stocked("olive oil", "2026-09-07T00:00:00Z"),
      stocked("frozen peas", "2026-09-06T00:00:00Z"),
      stocked("chicken breasts", "2026-09-05T00:00:00Z"),
      stocked("sourdough bread", "2026-09-04T00:00:00Z"),
      stocked("eggs", "2026-09-03T00:00:00Z"),
      stocked("spinach", "2026-09-02T00:00:00Z"),
      stocked("rice", "2026-09-01T00:00:00Z"),
    ]);

    expect(result.terms).toEqual([
      "frozen peas",
      "chicken breasts",
      "sourdough bread",
      "eggs",
      "spinach",
      "olive oil",
      "rice",
      "cumin",
      "red wine",
    ]);
  });

  it("caps after ranking, so staples are the first to be cut", () => {
    const result = pickSearchableItems(
      [
        stocked("eggs", "2026-09-01T00:00:00Z"),
        stocked("onions", "2026-09-02T00:00:00Z"),
        stocked("olive oil", "2026-09-03T00:00:00Z"),
      ],
      2,
    );
    expect(result.terms).toEqual(["onions", "eggs"]);
    expect(result.truncated).toBe(1);
  });
});

describe("countPantryMatches", () => {
  const item = (
    name: string,
    status: PantryItem["status"] = "stocked",
  ): PantryItem => ({
    id: name,
    pantryId: "p",
    name,
    nameKey: normalizeItemName(name),
    status,
    category: "Other",
    updatedAt: "2026-09-21T00:00:00Z",
    updatedBy: null,
  });

  it("counts recipe foods the pantry has, through aliases and plurals", () => {
    const keys = buildStockedKeys([
      item("Scallions"),
      item("Egg"),
      item("Olive oil"),
    ]);
    expect(
      countPantryMatches(["green onion", "eggs", "olive oil", "flour"], keys),
    ).toBe(3);
  });

  it("only counts what is stocked, not low or out", () => {
    const keys = buildStockedKeys([
      item("Eggs", "stocked"),
      item("Milk", "low"),
      item("Butter", "out"),
    ]);
    expect(countPantryMatches(["egg", "milk", "butter"], keys)).toBe(1);
  });

  it("matches items the list does not know by their plain name", () => {
    const keys = buildStockedKeys([item("Grandma's Hot Sauce")]);
    expect(countPantryMatches(["grandma's hot sauce"], keys)).toBe(1);
    expect(countPantryMatches(["hot sauce"], keys)).toBe(0);
  });

  it("shortens a food the list doesn't know until it finds one it does", () => {
    const keys = buildStockedKeys([item("Chicken breasts"), item("Eggs")]);
    expect(
      countPantryMatches(
        ["boneless skinless chicken breasts", "large eggs", "sheep milk"],
        keys,
      ),
    ).toBe(2);
  });

  it("never shortens a food the list already knows", () => {
    const keys = buildStockedKeys([item("Butter"), item("Milk")]);
    expect(countPantryMatches(["peanut butter", "coconut milk"], keys)).toBe(0);
  });

  it("is zero for an empty pantry or an empty recipe", () => {
    expect(countPantryMatches(["eggs"], new Set())).toBe(0);
    expect(countPantryMatches([], buildStockedKeys([item("Eggs")]))).toBe(0);
  });
});

describe("buildStarterGroups", () => {
  const item = (name: string): PantryItem => ({
    id: name,
    pantryId: "p",
    name,
    nameKey: normalizeItemName(name),
    status: "stocked",
    category: "Other",
    updatedAt: "2026-09-21T00:00:00Z",
    updatedBy: null,
  });

  it("groups the starters by aisle in store-walk order", () => {
    const groups = buildStarterGroups([]);
    expect(groups.map((group) => group.category)).toEqual([
      "Produce",
      "Dairy & eggs",
      "Pantry staples",
      "Spices",
      "Frozen",
    ]);
    expect(groups.flatMap((group) => group.items)).toHaveLength(
      STARTER_PANTRY.length,
    );
  });

  it("marks what the pantry already has, in any status and by alias", () => {
    const groups = buildStarterGroups([
      item("Egg"),
      item("Distilled vinegar"),
      item("Grandma's hot sauce"),
    ]);
    const present = groups
      .flatMap((group) => group.items)
      .filter((starter) => starter.isInPantry)
      .map((starter) => starter.name);
    expect(present).toEqual(["eggs", "white vinegar"]);
  });
});

describe("matchCategory", () => {
  it.each([
    ["dai", "Dairy & eggs"],
    ["Eggs", "Dairy & eggs"],
    ["seafood", "Meat & seafood"],
    ["meat", "Meat & seafood"],
    ["staples", "Pantry staples"],
    ["froz", "Frozen"],
    ["bakery", "Bakery"],
  ])("%s -> %s", (query, category) => {
    expect(matchCategory(query)).toBe(category);
  });

  it("needs at least three letters, and ignores the ampersand", () => {
    expect(matchCategory("da")).toBeUndefined();
    expect(matchCategory("&")).toBeUndefined();
    expect(matchCategory("")).toBeUndefined();
  });

  it("never offers the aisles that hold no ingredients", () => {
    expect(matchCategory("household")).toBeUndefined();
    expect(matchCategory("other")).toBeUndefined();
  });

  it("ignores text that is not an aisle", () => {
    expect(matchCategory("onion")).toBeUndefined();
  });
});

describe("buildIngredientSections", () => {
  it("browses by aisle in store-walk order when nothing is typed", () => {
    const sections = buildIngredientSections("", "aisle");
    expect(sections.map((section) => section.heading)).toEqual([
      "Produce",
      "Bakery",
      "Meat & seafood",
      "Dairy & eggs",
      "Pantry staples",
      "Spices",
      "Frozen",
      "Beverages",
    ]);
    expect(sections.flatMap((section) => section.ingredients)).toHaveLength(
      INGREDIENTS.length,
    );
    const produce = sections[0].ingredients.map((entry) => entry.name);
    expect(produce).toEqual([...produce].sort());
  });

  it("browses one flat A-Z list when asked", () => {
    const sections = buildIngredientSections("", "alphabetical");
    expect(sections).toHaveLength(1);
    expect(sections[0].heading).toBeNull();
    expect(sections[0].ingredients).toHaveLength(INGREDIENTS.length);
  });

  it("ranks typed matches in one flat section, whichever order is set", () => {
    for (const order of ["aisle", "alphabetical"] as const) {
      const sections = buildIngredientSections("onion", order);
      expect(sections).toHaveLength(1);
      expect(sections[0].heading).toBeNull();
      expect(sections[0].ingredients.map((entry) => entry.name)).toEqual(
        searchIngredients("onion").map((entry) => entry.name),
      );
    }
  });

  it("adds the aisle the text names after the matches, without repeats", () => {
    const sections = buildIngredientSections("eggs", "aisle");
    expect(sections).toHaveLength(2);
    expect(sections[0].heading).toBeNull();
    expect(sections[0].ingredients[0].name).toBe("eggs");
    expect(sections[1].heading).toBe("Dairy & eggs");
    const matched = new Set(sections[0].ingredients.map((e) => e.name));
    const aisle = sections[1].ingredients.map((entry) => entry.name);
    expect(aisle.some((name) => matched.has(name))).toBe(false);
    expect(aisle).toContain("milk");
  });

  it("gives just the aisle when the text matches no ingredient", () => {
    const sections = buildIngredientSections("bakery", "aisle");
    expect(sections).toHaveLength(1);
    expect(sections[0].heading).toBe("Bakery");
    expect(sections[0].ingredients.map((e) => e.name)).toContain("bagels");
  });

  it("is empty when nothing matches at all", () => {
    expect(buildIngredientSections("zzzzqqq", "aisle")).toEqual([]);
  });
});
