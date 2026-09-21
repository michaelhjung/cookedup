// src/lib/pantry/types.ts
//
// The vocabulary shared by the pantry page, the grocery list, and the
// recipe hook. Database rows come back snake_cased from Supabase;
// everything above the fetch layer uses these camelCase shapes.

export type PantryStatus = "stocked" | "low" | "out";

export const STATUS_LABELS: Record<PantryStatus, string> = {
  stocked: "Stocked",
  low: "Low",
  out: "Out",
};

/**
 * Store-walk order: produce by the door, staples in the middle, cold
 * things last. Both the pantry and grocery lists group by it. "Other"
 * is always last, and the value is stored as plain text so adding a
 * category later is a code change, not a migration.
 */
export const CATEGORIES = [
  "Produce",
  "Bakery",
  "Meat & seafood",
  "Dairy & eggs",
  "Pantry staples",
  "Spices",
  "Frozen",
  "Beverages",
  "Household",
  "Other",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const isCategory = (value: unknown): value is Category =>
  typeof value === "string" &&
  (CATEGORIES as readonly string[]).includes(value);

export type PantryRole = "owner" | "editor" | "viewer";

export interface Pantry {
  id: string;
  name: string;
  ownerId: string;
  /** Set when the pantry belongs to a household rather than one person. */
  householdId: string | null;
  role: PantryRole;
}

export interface PantryItem {
  id: string;
  pantryId: string;
  name: string;
  /** normalizeItemName(name); what dedupes and matches. */
  nameKey: string;
  status: PantryStatus;
  category: Category;
  /** ISO timestamp of the last status/name change. */
  updatedAt: string;
  updatedBy: string | null;
}
