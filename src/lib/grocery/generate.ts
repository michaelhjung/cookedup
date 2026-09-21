// src/lib/grocery/generate.ts
//
// Pure helpers behind the "Add items from…" sheet: which dates a range
// covers, and which ingredients a plan's meals need that the pantry
// doesn't already have.

import { addDays, parseISODate, toISODate } from "@lib/mealPlan/dates";
import { MealPlanEntry } from "@lib/mealPlan/types";
import { guessCategory, normalizeItemName } from "@lib/pantry/items";
import { Category, PantryItem } from "@lib/pantry/types";

import { NewLine, RangeUnit } from "./types";

/**
 * Today through today + range, inclusive, as ISO dates. "1 week" is
 * today plus the six days after it; "1 month" runs to the same day next
 * month.
 */
export const rangeToDates = (
  count: number,
  unit: RangeUnit,
  today: string,
): { start: string; end: string } => {
  const safeCount = Math.max(1, Math.floor(count));
  const end =
    unit === "days" ? addDays(today, safeCount - 1)
    : unit === "weeks" ? addDays(today, safeCount * 7 - 1)
    : addCalendarMonths(today, safeCount);
  return { start: today, end };
};

/** The same day N months on, clamped to the last day of a short month. */
const addCalendarMonths = (iso: string, months: number): string => {
  const date = parseISODate(iso);
  const day = date.getDate();
  date.setDate(1);
  date.setMonth(date.getMonth() + months);
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();
  date.setDate(Math.min(day, lastDay));
  return toISODate(date);
};

/**
 * Lines for every ingredient the given meals need, minus what's stocked.
 * Custom meals have no ingredients and are skipped. Ingredients are keyed
 * by Edamam's normalised `food` name (falling back to the free text),
 * deduped across recipes with every recipe name kept, and categorised
 * by the matching pantry item first, then a guess from the name.
 */
export const extractPlanIngredients = (
  entries: Pick<MealPlanEntry, "recipe" | "title">[],
  pantryItems: PantryItem[],
): NewLine[] => {
  const stockedKeys = new Set(
    pantryItems
      .filter((item) => item.status === "stocked")
      .map((item) => item.nameKey),
  );
  const categoryByKey = new Map<string, Category>(
    pantryItems.map((item) => [item.nameKey, item.category]),
  );

  const lines = new Map<string, NewLine>();

  for (const entry of entries) {
    const recipe = entry.recipe?.recipe;
    if (!recipe) continue;

    for (const ingredient of recipe.ingredients ?? []) {
      const rawName = (ingredient.food || ingredient.text || "").trim();
      if (!rawName) continue;

      const key = normalizeItemName(rawName);
      if (!key || stockedKeys.has(key)) continue;

      const existing = lines.get(key);
      if (existing) {
        if (!existing.sourceRecipeNames.includes(recipe.label))
          existing.sourceRecipeNames.push(recipe.label);
        continue;
      }

      const name = rawName.charAt(0).toUpperCase() + rawName.slice(1);
      lines.set(key, {
        name,
        nameKey: key,
        category: categoryByKey.get(key) ?? guessCategory(rawName),
        source: "plan",
        sourceRecipeNames: [recipe.label],
      });
    }
  }

  return [...lines.values()];
};

/** Lines for every pantry item that's low or out. */
export const pantryRestockLines = (pantryItems: PantryItem[]): NewLine[] =>
  pantryItems
    .filter((item) => item.status !== "stocked")
    .map((item) => ({
      name: item.name,
      nameKey: item.nameKey,
      category: item.category,
      source: "pantry",
      sourceRecipeNames: [],
    }));

/**
 * Merges the sources into one batch: pantry lines win over plan lines
 * for the same key (the item is theirs, not the recipe's), and anything
 * already on the list is counted as skipped rather than sent.
 */
export const mergeNewLines = (
  batches: NewLine[][],
  existingKeys: Set<string>,
): { lines: NewLine[]; skipped: number } => {
  const merged = new Map<string, NewLine>();
  let skipped = 0;

  for (const batch of batches) {
    for (const line of batch) {
      if (existingKeys.has(line.nameKey)) {
        skipped += 1;
        continue;
      }
      const current = merged.get(line.nameKey);
      if (!current) merged.set(line.nameKey, { ...line });
      else if (current.source === "plan" && line.source === "pantry")
        merged.set(line.nameKey, { ...line });
      else if (line.sourceRecipeNames.length > 0)
        current.sourceRecipeNames = [
          ...new Set([...current.sourceRecipeNames, ...line.sourceRecipeNames]),
        ];
    }
  }

  return { lines: [...merged.values()], skipped };
};
