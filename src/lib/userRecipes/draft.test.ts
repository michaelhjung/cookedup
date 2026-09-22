import { describe, expect, it } from "vitest";

import {
  createEmptyDraft,
  splitPastedLines,
  suggestFoodForLine,
  toDraft,
  validateRecipeDraft,
} from "@lib/userRecipes/draft";
import type { UserRecipe } from "@lib/userRecipes/types";

const validDraft = () => {
  const draft = createEmptyDraft();
  draft.title = "Lemon pasta";
  draft.servings = "4";
  draft.ingredients = [
    { id: "a", kind: "line", text: "400 g spaghetti", food: "spaghetti" },
  ];
  draft.steps = [{ id: "s", text: "Boil the pasta." }];
  return draft;
};

describe("splitPastedLines", () => {
  it("splits on newlines and drops blanks", () => {
    expect(splitPastedLines("2 eggs\n\n  1 cup flour  \n")).toEqual([
      "2 eggs",
      "1 cup flour",
    ]);
  });

  it("strips bullets and step numbers", () => {
    expect(
      splitPastedLines(
        "- 2 eggs\n• 1 cup flour\n* salt\n1. Whisk\n2) Fold\nStep 3: Bake",
      ),
    ).toEqual(["2 eggs", "1 cup flour", "salt", "Whisk", "Fold", "Bake"]);
  });

  it("keeps a quantity that only looks like a number prefix", () => {
    expect(splitPastedLines("1 onion\n2 cups rice")).toEqual([
      "1 onion",
      "2 cups rice",
    ]);
  });
});

describe("suggestFoodForLine", () => {
  it("drops the quantity and unit", () => {
    expect(suggestFoodForLine("2 cups flour")?.name).toBe("flour");
    expect(suggestFoodForLine("1/2 tsp salt")?.name).toBe("salt");
    expect(suggestFoodForLine("400 g spaghetti")?.name).toBe("spaghetti");
    expect(suggestFoodForLine("2 cups of rice")?.name).toBe("rice");
  });

  it("ignores preparation notes after a comma", () => {
    expect(suggestFoodForLine("1 large onion, diced")?.name).toBe("onions");
  });

  it("reads the tail when the front is a descriptor", () => {
    expect(suggestFoodForLine("3 large eggs")?.name).toBe("eggs");
  });

  it("reads the head when the tail is a qualifier", () => {
    expect(suggestFoodForLine("salt and pepper to taste")?.name).toBe("salt");
  });

  it("keeps compound foods whole", () => {
    expect(suggestFoodForLine("2 tbsp peanut butter")?.name).toBe(
      "peanut butter",
    );
  });

  it("gives up on things the list doesn't know", () => {
    expect(suggestFoodForLine("1 jar grandma's secret sauce")).toBeUndefined();
    expect(suggestFoodForLine("")).toBeUndefined();
  });
});

describe("validateRecipeDraft", () => {
  it("accepts a minimal valid draft and parses the numbers", () => {
    const result = validateRecipeDraft(validDraft());
    expect(result.errors).toEqual({});
    expect(result.value?.servings).toBe(4);
    expect(result.value?.prepMinutes).toBeNull();
    expect(result.value?.ingredients).toEqual([
      { text: "400 g spaghetti", food: "spaghetti" },
    ]);
    expect(result.value?.instructions).toEqual(["Boil the pasta."]);
  });

  it("requires a title, servings, an ingredient and a step", () => {
    const draft = createEmptyDraft();
    draft.servings = "";
    const { errors, value } = validateRecipeDraft(draft);
    expect(value).toBeUndefined();
    expect(Object.keys(errors).sort()).toEqual([
      "ingredients",
      "servings",
      "steps",
      "title",
    ]);
  });

  it("ignores blank rows when counting, and drops them from the value", () => {
    const draft = validDraft();
    draft.ingredients.push({ id: "b", kind: "line", text: "   ", food: null });
    draft.ingredients.push({ id: "h", kind: "heading", text: "" });
    draft.steps.push({ id: "t", text: "" });
    const { errors, value } = validateRecipeDraft(draft);
    expect(errors).toEqual({});
    expect(value?.ingredients).toHaveLength(1);
    expect(value?.instructions).toHaveLength(1);
  });

  it("rejects a heading-only ingredient list", () => {
    const draft = validDraft();
    draft.ingredients = [{ id: "h", kind: "heading", text: "Sauce" }];
    expect(validateRecipeDraft(draft).errors.ingredients).toBeDefined();
  });

  it("checks the numeric ranges", () => {
    const draft = validDraft();
    draft.servings = "0";
    draft.prepMinutes = "-5";
    draft.cookMinutes = "abc";
    draft.calories = "-1";
    const { errors } = validateRecipeDraft(draft);
    expect(errors.servings).toBeDefined();
    expect(errors.prepMinutes).toBeDefined();
    expect(errors.cookMinutes).toBeDefined();
    expect(errors.calories).toBeDefined();
  });

  it("wants a real source url when one is given", () => {
    const draft = validDraft();
    draft.sourceUrl = "not a url";
    expect(validateRecipeDraft(draft).errors.sourceUrl).toBeDefined();
    draft.sourceUrl = "seriouseats.com/lemon-pasta";
    const ok = validateRecipeDraft(draft);
    expect(ok.errors.sourceUrl).toBeUndefined();
    expect(ok.value?.sourceUrl).toBe("https://seriouseats.com/lemon-pasta");
  });

  it("trims text and turns empties into null", () => {
    const draft = validDraft();
    draft.description = "  ";
    draft.notes = " Serve hot. ";
    const { value } = validateRecipeDraft(draft);
    expect(value?.description).toBeNull();
    expect(value?.notes).toBe("Serve hot.");
  });
});

describe("toDraft", () => {
  it("round-trips a stored recipe through the editor shape", () => {
    const recipe = {
      id: "r1",
      userId: "u1",
      householdId: "h1",
      title: "Shakshuka",
      description: null,
      servings: 2,
      prepMinutes: 10,
      cookMinutes: null,
      ingredients: [
        { heading: "Sauce" },
        { text: "1 can tomatoes", food: "canned tomatoes" },
      ],
      instructions: ["Simmer.", "Crack eggs."],
      tags: {
        cuisineType: ["Middle Eastern"],
        mealType: ["Breakfast"],
        dishType: [],
        diet: [],
        health: [],
      },
      nutrition: { calories: 320, protein: null, carbs: null, fat: 18 },
      sourceName: null,
      sourceUrl: null,
      notes: null,
      imageUrl: null,
      visibility: "public",
      reviewStatus: "approved",
      reviewNote: null,
      starCount: 0,
      hit: {} as UserRecipe["hit"],
      createdAt: "",
      updatedAt: "",
    } satisfies UserRecipe;

    const draft = toDraft(recipe);
    expect(draft.servings).toBe("2");
    expect(draft.cookMinutes).toBe("");
    expect(draft.fat).toBe("18");
    expect(draft.ingredients.map((row) => row.kind)).toEqual([
      "heading",
      "line",
    ]);

    const { value } = validateRecipeDraft(draft);
    expect(value).toMatchObject({
      title: "Shakshuka",
      householdId: "h1",
      servings: 2,
      prepMinutes: 10,
      cookMinutes: null,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      tags: recipe.tags,
      nutrition: recipe.nutrition,
      visibility: "public",
    });
  });
});
