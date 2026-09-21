// src/lib/pantry/items.ts
//
// Pure helpers for naming and grouping pantry items. Nothing here
// touches the network, so all of it is unit-tested directly. Matching
// items against the ingredient list lives in src/lib/ingredients.ts.

// Relative rather than aliased so the seed script can import this file
// under plain Node, which knows nothing about the tsconfig paths.
import type { Category, PantryItem } from "./types.ts";
import { CATEGORIES } from "./types.ts";

/**
 * The key two items are compared by: "Eggs", " egg" and "EGGS" are all
 * the same thing. Lowercased, trimmed, spaces collapsed, and a trailing
 * "s"/"es" dropped unless the word ends in "ss" (so "hummus" and
 * "swiss cheese" keep their s). It's deliberately crude: it only has to
 * agree with itself, on both pantry items and recipe ingredient names.
 */
export const normalizeItemName = (name: string): string => {
  const cleaned = name.toLowerCase().trim().replace(/\s+/g, " ");
  if (cleaned.endsWith("ss") || cleaned.length < 3) return cleaned;
  if (cleaned.endsWith("ies")) return `${cleaned.slice(0, -3)}y`;
  if (/(ch|sh|x|o)es$/.test(cleaned)) return cleaned.slice(0, -2);
  if (cleaned.endsWith("s")) return cleaned.slice(0, -1);
  return cleaned;
};

export interface CategoryGroup<T> {
  category: Category;
  items: T[];
}

/**
 * Groups items by category in store-walk order, dropping empty groups
 * and sorting each group's items by name.
 */
export const groupByCategory = <T extends { category: Category; name: string }>(
  items: T[],
): CategoryGroup<T>[] => {
  const byCategory = new Map<Category, T[]>();
  for (const item of items) {
    const bucket = byCategory.get(item.category);
    if (bucket) bucket.push(item);
    else byCategory.set(item.category, [item]);
  }

  return CATEGORIES.flatMap((category) => {
    const bucket = byCategory.get(category);
    if (!bucket) return [];
    return [
      {
        category,
        items: [...bucket].sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
        ),
      },
    ];
  });
};

/** Items the shopper needs: anything not stocked. */
export const pickRestockItems = (items: PantryItem[]): PantryItem[] =>
  items.filter((item) => item.status !== "stocked");

/** Title-cases a typed name: "greek yogurt" -> "Greek yogurt". */
export const tidyItemName = (name: string): string => {
  const cleaned = name.trim().replace(/\s+/g, " ");
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
};
