// src/lib/pantry/client.ts
//
// Browser-side data access for pantries, straight through RLS like the
// planner. Items are small rows written one at a time from the UI, so
// there's no API route in the way.

import { normalizeItemName } from "@lib/pantry/items";
import {
  Category,
  Pantry,
  PantryItem,
  PantryStatus,
  isCategory,
} from "@lib/pantry/types";
import { supabase } from "@utils/supabase";

interface PantryRow {
  id: string;
  owner_id: string;
  household_id: string | null;
  name: string;
}

const PANTRY_COLUMNS = "id, owner_id, household_id, name";

// Which pantry the user last looked at, so the pantry page reopens on
// it and the recipe search matches against the same one.
const PANTRY_STORAGE_KEY = "cookedup:pantry";

export const readStoredPantryId = (): string | null => {
  try {
    return localStorage.getItem(PANTRY_STORAGE_KEY);
  } catch {
    return null;
  }
};

export const storePantryId = (pantryId: string): void => {
  try {
    localStorage.setItem(PANTRY_STORAGE_KEY, pantryId);
  } catch {
    // Private mode: the choice just isn't remembered.
  }
};

const toPantry = (
  row: PantryRow,
  userId: string,
  householdId: string | null,
  shareRole: "viewer" | "editor" | undefined,
): Pantry => ({
  id: row.id,
  name: row.name,
  ownerId: row.owner_id,
  householdId: row.household_id,
  role:
    row.owner_id === userId ? "owner"
    : row.household_id !== null && row.household_id === householdId ? "editor"
    : shareRole === "editor" ? "editor"
    : "viewer",
});

/**
 * Every pantry the user can see: their own, their household's, and any
 * shared with them, oldest first so the default is the one they made
 * first.
 */
export const fetchPantries = async (
  userId: string,
  householdId: string | null,
): Promise<Pantry[]> => {
  const [{ data: pantries, error }, { data: shares }] = await Promise.all([
    supabase
      .from("pantries")
      .select(PANTRY_COLUMNS)
      .order("created_at", { ascending: true }),
    supabase
      .from("shares")
      .select("resource_id, role")
      .eq("resource_kind", "pantry")
      .eq("user_id", userId),
  ]);

  if (error) throw new Error(error.message);

  const roleById = new Map(
    (shares ?? []).map((share) => [share.resource_id as string, share.role]),
  );

  return (pantries ?? []).map((row: PantryRow) =>
    toPantry(row, userId, householdId, roleById.get(row.id)),
  );
};

/**
 * The first visit makes a pantry so the page never dead-ends. Someone
 * in a household gets a household pantry, since that's who the kitchen
 * belongs to.
 */
export const createPantry = async (
  userId: string,
  householdId: string | null,
  name = "My Pantry",
): Promise<Pantry> => {
  const { data, error } = await supabase
    .from("pantries")
    .insert({ owner_id: userId, household_id: householdId, name })
    .select(PANTRY_COLUMNS)
    .single();

  if (error) throw new Error(error.message);
  return toPantry(data, userId, householdId, undefined);
};

export const updatePantry = async (
  pantryId: string,
  changes: { name?: string; householdId?: string | null },
): Promise<void> => {
  const { error } = await supabase
    .from("pantries")
    .update({
      ...(changes.name !== undefined && { name: changes.name }),
      ...(changes.householdId !== undefined && {
        household_id: changes.householdId,
      }),
    })
    .eq("id", pantryId);

  if (error) throw new Error(error.message);
};

/** Items go with it; grocery lists that pointed at it keep working. */
export const deletePantry = async (pantryId: string): Promise<void> => {
  const { error } = await supabase.from("pantries").delete().eq("id", pantryId);
  if (error) throw new Error(error.message);
};

interface ItemRow {
  id: string;
  pantry_id: string;
  name: string;
  name_key: string;
  status: PantryStatus;
  category: string | null;
  updated_at: string;
  updated_by: string | null;
}

const ITEM_COLUMNS =
  "id, pantry_id, name, name_key, status, category, updated_at, updated_by";

const toItem = (row: ItemRow): PantryItem => ({
  id: row.id,
  pantryId: row.pantry_id,
  name: row.name,
  nameKey: row.name_key,
  status: row.status,
  // Category is plain text in the database; anything unknown (a
  // renamed category, a hand-edited row) lands in Other rather than
  // vanishing from the page.
  category: isCategory(row.category) ? row.category : "Other",
  updatedAt: row.updated_at,
  updatedBy: row.updated_by,
});

export const fetchItems = async (pantryId: string): Promise<PantryItem[]> => {
  const { data, error } = await supabase
    .from("pantry_items")
    .select(ITEM_COLUMNS)
    .eq("pantry_id", pantryId);

  if (error) throw new Error(error.message);
  return ((data ?? []) as ItemRow[]).map(toItem);
};

export class DuplicateItemError extends Error {
  constructor(name: string) {
    super(`${name} is already in this pantry.`);
    this.name = "DuplicateItemError";
  }
}

export const addItem = async (
  pantryId: string,
  userId: string,
  name: string,
  category: Category,
  status: PantryStatus = "stocked",
): Promise<PantryItem> => {
  const { data, error } = await supabase
    .from("pantry_items")
    .insert({
      pantry_id: pantryId,
      name,
      name_key: normalizeItemName(name),
      status,
      category,
      updated_by: userId,
    })
    .select(ITEM_COLUMNS)
    .single();

  if (error) {
    if (error.code === "23505") throw new DuplicateItemError(name);
    throw new Error(error.message);
  }

  return toItem(data);
};

/**
 * Several items in one round trip, all stocked. Anything already in
 * the pantry (by key) is left alone rather than failing the whole
 * batch, so racing with a housemate just means fewer rows come back.
 */
export const addItems = async (
  pantryId: string,
  userId: string,
  entries: { name: string; category: Category }[],
): Promise<PantryItem[]> => {
  if (entries.length === 0) return [];

  const { data, error } = await supabase
    .from("pantry_items")
    .upsert(
      entries.map((entry) => ({
        pantry_id: pantryId,
        name: entry.name,
        name_key: normalizeItemName(entry.name),
        status: "stocked",
        category: entry.category,
        updated_by: userId,
      })),
      { onConflict: "pantry_id,name_key", ignoreDuplicates: true },
    )
    .select(ITEM_COLUMNS);

  if (error) throw new Error(error.message);
  return ((data ?? []) as ItemRow[]).map(toItem);
};

export const updateItem = async (
  itemId: string,
  userId: string,
  changes: { name?: string; status?: PantryStatus; category?: Category },
): Promise<void> => {
  const { error } = await supabase
    .from("pantry_items")
    .update({
      ...(changes.name !== undefined && {
        name: changes.name,
        name_key: normalizeItemName(changes.name),
      }),
      ...(changes.status !== undefined && { status: changes.status }),
      ...(changes.category !== undefined && { category: changes.category }),
      updated_at: new Date().toISOString(),
      updated_by: userId,
    })
    .eq("id", itemId);

  if (error) {
    if (error.code === "23505")
      throw new DuplicateItemError(changes.name ?? "That");
    throw new Error(error.message);
  }
};

export const removeItem = async (itemId: string): Promise<void> => {
  const { error } = await supabase
    .from("pantry_items")
    .delete()
    .eq("id", itemId);

  if (error) throw new Error(error.message);
};
