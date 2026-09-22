// src/lib/userRecipes/draft.ts
//
// The editor's working copy of a recipe and the pure functions around
// it: splitting pasted text into rows, guessing which pantry ingredient
// a line names, and turning the draft into something the database will
// accept. Numbers are kept as the strings the inputs hold and parsed
// here, once, at save time.

import { type Ingredient, lookupIngredient } from "@lib/ingredients";
import {
  EMPTY_TAGS,
  RecipeTags,
  RecipeVisibility,
  StoredIngredient,
  UserRecipe,
  UserRecipeInput,
  isIngredientHeading,
} from "@lib/userRecipes/types";

export type IngredientRow =
  | {
      id: string;
      kind: "line";
      text: string;
      food: string | null;
      /** Set once the author picks or clears the link by hand; stops re-guessing. */
      isFoodPinned?: boolean;
    }
  | { id: string; kind: "heading"; text: string };

export interface StepRow {
  id: string;
  text: string;
}

export interface RecipeDraft {
  title: string;
  description: string;
  servings: string;
  prepMinutes: string;
  cookMinutes: string;
  ingredients: IngredientRow[];
  steps: StepRow[];
  tags: RecipeTags;
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
  sourceName: string;
  sourceUrl: string;
  notes: string;
  visibility: RecipeVisibility;
  householdId: string | null;
}

export type DraftField =
  | "title"
  | "description"
  | "servings"
  | "prepMinutes"
  | "cookMinutes"
  | "ingredients"
  | "steps"
  | "calories"
  | "protein"
  | "carbs"
  | "fat"
  | "sourceName"
  | "sourceUrl"
  | "notes";

export type DraftErrors = Partial<Record<DraftField, string>>;

export const TITLE_MAX = 120;
export const DESCRIPTION_MAX = 2000;
export const NOTES_MAX = 4000;
export const SOURCE_NAME_MAX = 120;
export const SERVINGS_MAX = 100;
export const MINUTES_MAX = 1440;

let nextRowId = 0;
/** Client-only keys for rows; never stored. */
export const makeRowId = (): string => `row-${++nextRowId}`;

export const createLineRow = (
  text = "",
  food: string | null = null,
): IngredientRow => ({ id: makeRowId(), kind: "line", text, food });

export const createHeadingRow = (text = ""): IngredientRow => ({
  id: makeRowId(),
  kind: "heading",
  text,
});

export const createStepRow = (text = ""): StepRow => ({
  id: makeRowId(),
  text,
});

export const createEmptyDraft = (): RecipeDraft => ({
  title: "",
  description: "",
  servings: "4",
  prepMinutes: "",
  cookMinutes: "",
  ingredients: [createLineRow()],
  steps: [createStepRow()],
  tags: { ...EMPTY_TAGS },
  calories: "",
  protein: "",
  carbs: "",
  fat: "",
  sourceName: "",
  sourceUrl: "",
  notes: "",
  visibility: "private",
  householdId: null,
});

const numberToField = (value: number | null): string =>
  value === null ? "" : String(value);

/** A stored recipe, opened for editing. */
export const toDraft = (recipe: UserRecipe): RecipeDraft => ({
  title: recipe.title,
  description: recipe.description ?? "",
  servings: String(recipe.servings),
  prepMinutes: numberToField(recipe.prepMinutes),
  cookMinutes: numberToField(recipe.cookMinutes),
  ingredients: recipe.ingredients.map((ingredient) =>
    isIngredientHeading(ingredient) ?
      createHeadingRow(ingredient.heading)
    : createLineRow(ingredient.text, ingredient.food),
  ),
  steps: recipe.instructions.map((step) => createStepRow(step)),
  tags: { ...EMPTY_TAGS, ...recipe.tags },
  calories: numberToField(recipe.nutrition.calories),
  protein: numberToField(recipe.nutrition.protein),
  carbs: numberToField(recipe.nutrition.carbs),
  fat: numberToField(recipe.nutrition.fat),
  sourceName: recipe.sourceName ?? "",
  sourceUrl: recipe.sourceUrl ?? "",
  notes: recipe.notes ?? "",
  visibility: recipe.visibility,
  householdId: recipe.householdId,
});

// ---------------------------------------------------------------------
// Pasting
// ---------------------------------------------------------------------

// "- ", "• ", "* ", "1. ", "2) ", "Step 3:" — the ways a copied list
// numbers or bullets itself. A bare number followed by a word ("1 onion")
// is a quantity and stays.
const LIST_PREFIX = /^(?:[-•*·]\s*|(?:step\s*)?\d+\s*[.):]\s*)/i;

/** Pasted text as one row per non-empty line, list markers removed. */
export const splitPastedLines = (text: string): string[] =>
  text
    .split(/\r?\n/)
    .map((line) => line.trim().replace(LIST_PREFIX, "").trim())
    .filter((line) => line.length > 0);

// ---------------------------------------------------------------------
// Linking a line to a pantry ingredient
// ---------------------------------------------------------------------

// Quantities: "2", "1/2", "½", "1.5", "1-2", "2 to 3", with an optional
// unit after, and an optional "of". Only the front of the line is read.
const QUANTITY = String.raw`(?:\d+(?:[.,]\d+)?|\d+\s*\/\s*\d+|[¼½¾⅓⅔⅛⅜⅝⅞])`;
const QUANTITY_RANGE = `${QUANTITY}(?:\\s*(?:-|–|to)\\s*${QUANTITY})?`;
const UNITS = [
  "cups?",
  "c\\.",
  "tablespoons?",
  "tbsps?\\.?",
  "teaspoons?",
  "tsps?\\.?",
  "grams?",
  "g\\.?",
  "kilograms?",
  "kg\\.?",
  "milliliters?",
  "millilitres?",
  "ml\\.?",
  "liters?",
  "litres?",
  "l\\.?",
  "ounces?",
  "oz\\.?",
  "pounds?",
  "lbs?\\.?",
  "pinch(?:es)?",
  "dash(?:es)?",
  "cloves?",
  "cans?",
  "jars?",
  "packages?",
  "pkgs?\\.?",
  "sticks?",
  "slices?",
  "pieces?",
  "bunch(?:es)?",
  "handfuls?",
  "sprigs?",
  "heads?",
  "stalks?",
  "fillets?",
  "large",
  "medium",
  "small",
  "whole",
  "fresh",
  "dried",
  "ground",
  "chopped",
  "minced",
  "diced",
  "sliced",
];
const LEADING_QUANTITY = new RegExp(
  `^(?:${QUANTITY_RANGE}\\s*)+(?:(?:${UNITS.join("|")})\\s+)*(?:of\\s+)?`,
  "i",
);
const LEADING_DESCRIPTOR = new RegExp(`^(?:${UNITS.join("|")})\\s+`, "i");

const stripQuantity = (line: string): string => {
  let rest = line.trim().replace(LEADING_QUANTITY, "");
  // "large eggs" with no number in front.
  let previous = "";
  while (rest !== previous) {
    previous = rest;
    rest = rest.replace(LEADING_DESCRIPTOR, "");
  }
  return rest.trim();
};

/**
 * The pantry ingredient an ingredient line most likely names, or
 * undefined. Reads the line after its quantity and before any comma,
 * then tries it whole, then from the back ("large eggs" → eggs), then
 * from the front ("salt and pepper to taste" → salt). A known compound
 * is taken whole: "peanut butter" is not butter.
 */
export const suggestFoodForLine = (line: string): Ingredient | undefined => {
  const core = stripQuantity(line.split(/[,(]/)[0] ?? "");
  if (!core) return undefined;

  const whole = lookupIngredient(core);
  if (whole) return whole;

  const words = core.split(/\s+/);
  for (let start = 1; start < words.length; start++) {
    const tail = lookupIngredient(words.slice(start).join(" "));
    if (tail) return tail;
  }
  for (let end = words.length - 1; end >= 1; end--) {
    const head = lookupIngredient(words.slice(0, end).join(" "));
    if (head) return head;
  }
  return undefined;
};

// ---------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------

const trimToNull = (value: string): string | null => {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
};

interface NumberRule {
  min: number;
  max: number;
  integer: boolean;
  required: boolean;
}

const parseNumberField = (
  raw: string,
  rule: NumberRule,
): { value: number | null; error?: string } => {
  const text = raw.trim();
  if (!text) {
    return rule.required ?
        { value: null, error: "Required." }
      : { value: null };
  }
  const value = Number(text.replace(",", "."));
  if (!Number.isFinite(value)) return { value: null, error: "Not a number." };
  if (rule.integer && !Number.isInteger(value))
    return { value: null, error: "Whole numbers only." };
  if (value < rule.min || value > rule.max)
    return { value: null, error: `Between ${rule.min} and ${rule.max}.` };
  return { value };
};

const MINUTES_RULE: NumberRule = {
  min: 0,
  max: MINUTES_MAX,
  integer: true,
  required: false,
};
const NUTRIENT_RULE: NumberRule = {
  min: 0,
  max: 100000,
  integer: false,
  required: false,
};

/** Accepts "seriouseats.com/x" as well as a full URL; returns it with a scheme. */
const parseSourceUrl = (
  raw: string,
): { value: string | null; error?: string } => {
  const text = raw.trim();
  if (!text) return { value: null };
  const withScheme =
    /^[a-z][a-z0-9+.-]*:\/\//i.test(text) ? text : `https://${text}`;
  try {
    const url = new URL(withScheme);
    if (
      !["http:", "https:"].includes(url.protocol) ||
      !url.hostname.includes(".")
    )
      return { value: null, error: "Enter a web address." };
    return { value: url.toString().replace(/\/$/, "") };
  } catch {
    return { value: null, error: "Enter a web address." };
  }
};

const toStoredIngredients = (rows: IngredientRow[]): StoredIngredient[] =>
  rows.flatMap((row): StoredIngredient[] => {
    const text = row.text.trim();
    if (!text) return [];
    if (row.kind === "heading") return [{ heading: text }];
    return [{ text, food: row.food?.trim() || null }];
  });

/**
 * Field errors for what's wrong, and the parsed input when nothing is.
 * Mirrors the database's check constraints so a save that gets past
 * here isn't refused there.
 */
export const validateRecipeDraft = (
  draft: RecipeDraft,
): { errors: DraftErrors; value?: UserRecipeInput } => {
  const errors: DraftErrors = {};

  const title = draft.title.trim();
  if (!title) errors.title = "Give the recipe a name.";
  else if (title.length > TITLE_MAX)
    errors.title = `Keep it under ${TITLE_MAX} characters.`;

  const description = trimToNull(draft.description);
  if (description && description.length > DESCRIPTION_MAX)
    errors.description = `Keep it under ${DESCRIPTION_MAX} characters.`;

  const servings = parseNumberField(draft.servings, {
    min: 1,
    max: SERVINGS_MAX,
    integer: true,
    required: true,
  });
  if (servings.error) errors.servings = servings.error;

  const prep = parseNumberField(draft.prepMinutes, MINUTES_RULE);
  if (prep.error) errors.prepMinutes = prep.error;
  const cook = parseNumberField(draft.cookMinutes, MINUTES_RULE);
  if (cook.error) errors.cookMinutes = cook.error;

  const ingredients = toStoredIngredients(draft.ingredients);
  if (!ingredients.some((ingredient) => !isIngredientHeading(ingredient)))
    errors.ingredients = "Add at least one ingredient.";

  const instructions = draft.steps
    .map((step) => step.text.trim())
    .filter((step) => step.length > 0);
  if (instructions.length === 0) errors.steps = "Add at least one step.";

  const calories = parseNumberField(draft.calories, NUTRIENT_RULE);
  if (calories.error) errors.calories = calories.error;
  const protein = parseNumberField(draft.protein, NUTRIENT_RULE);
  if (protein.error) errors.protein = protein.error;
  const carbs = parseNumberField(draft.carbs, NUTRIENT_RULE);
  if (carbs.error) errors.carbs = carbs.error;
  const fat = parseNumberField(draft.fat, NUTRIENT_RULE);
  if (fat.error) errors.fat = fat.error;

  const sourceName = trimToNull(draft.sourceName);
  if (sourceName && sourceName.length > SOURCE_NAME_MAX)
    errors.sourceName = `Keep it under ${SOURCE_NAME_MAX} characters.`;
  const sourceUrl = parseSourceUrl(draft.sourceUrl);
  if (sourceUrl.error) errors.sourceUrl = sourceUrl.error;

  const notes = trimToNull(draft.notes);
  if (notes && notes.length > NOTES_MAX)
    errors.notes = `Keep it under ${NOTES_MAX} characters.`;

  if (Object.keys(errors).length > 0) return { errors };

  return {
    errors,
    value: {
      title,
      description,
      servings: servings.value as number,
      prepMinutes: prep.value,
      cookMinutes: cook.value,
      ingredients,
      instructions,
      tags: draft.tags,
      nutrition: {
        calories: calories.value,
        protein: protein.value,
        carbs: carbs.value,
        fat: fat.value,
      },
      sourceName,
      sourceUrl: sourceUrl.value,
      notes,
      visibility: draft.visibility,
      householdId: draft.householdId,
    },
  };
};
