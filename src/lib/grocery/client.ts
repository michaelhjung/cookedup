// src/lib/grocery/client.ts
//
// Browser-side data access for grocery lists. Reads and simple writes
// go straight through RLS; checking a line off goes through a database
// function so the line and the pantry change together.

import type { RealtimeChannel } from "@supabase/supabase-js";

import { normalizeItemName } from "@lib/pantry/items";
import { Category, PantryStatus, isCategory } from "@lib/pantry/types";
import { supabase } from "@utils/supabase";

import {
  DEFAULT_PANTRY_SETTINGS,
  GroceryLine,
  GroceryList,
  LineSource,
  NewLine,
  PantrySettings,
  RANGE_UNITS,
  RangeUnit,
} from "./types";

interface ListRow {
  id: string;
  owner_id: string;
  household_id: string | null;
  pantry_id: string | null;
  name: string;
  created_at: string;
}

const LIST_COLUMNS = "id, owner_id, household_id, pantry_id, name, created_at";

const toList = (
  row: ListRow,
  userId: string,
  householdId: string | null,
  shareRole: "viewer" | "editor" | undefined,
): GroceryList => ({
  id: row.id,
  name: row.name,
  ownerId: row.owner_id,
  householdId: row.household_id,
  pantryId: row.pantry_id,
  createdAt: row.created_at,
  role:
    row.owner_id === userId ? "owner"
    : row.household_id !== null && row.household_id === householdId ? "editor"
    : shareRole === "editor" ? "editor"
    : "viewer",
});

export const fetchLists = async (
  userId: string,
  householdId: string | null,
): Promise<GroceryList[]> => {
  const [{ data: lists, error }, { data: shares }] = await Promise.all([
    supabase
      .from("grocery_lists")
      .select(LIST_COLUMNS)
      .order("created_at", { ascending: true }),
    supabase
      .from("shares")
      .select("resource_id, role")
      .eq("resource_kind", "grocery_list")
      .eq("user_id", userId),
  ]);

  if (error) throw new Error(error.message);

  const roleById = new Map(
    (shares ?? []).map((share) => [share.resource_id as string, share.role]),
  );
  return (lists ?? []).map((row: ListRow) =>
    toList(row, userId, householdId, roleById.get(row.id)),
  );
};

export const fetchList = async (
  listId: string,
  userId: string,
  householdId: string | null,
): Promise<GroceryList | null> => {
  const [{ data, error }, { data: share }] = await Promise.all([
    supabase
      .from("grocery_lists")
      .select(LIST_COLUMNS)
      .eq("id", listId)
      .maybeSingle(),
    supabase
      .from("shares")
      .select("role")
      .eq("resource_kind", "grocery_list")
      .eq("resource_id", listId)
      .eq("user_id", userId)
      .maybeSingle(),
  ]);

  if (error) throw new Error(error.message);
  if (!data) return null;
  return toList(data, userId, householdId, share?.role);
};

/** How many unchecked lines each list has, for the index cards. */
export const fetchRemainingCounts = async (
  listIds: string[],
): Promise<Map<string, number>> => {
  if (listIds.length === 0) return new Map();

  const { data, error } = await supabase
    .from("grocery_list_lines")
    .select("list_id")
    .in("list_id", listIds)
    .eq("is_checked", false);

  if (error) throw new Error(error.message);

  const counts = new Map<string, number>(listIds.map((id) => [id, 0]));
  for (const row of data ?? [])
    counts.set(row.list_id, (counts.get(row.list_id) ?? 0) + 1);
  return counts;
};

export const createList = async (
  userId: string,
  name: string,
  householdId: string | null,
  pantryId: string | null,
): Promise<GroceryList> => {
  const { data, error } = await supabase
    .from("grocery_lists")
    .insert({
      owner_id: userId,
      name: name.trim() || "Grocery list",
      household_id: householdId,
      pantry_id: pantryId,
    })
    .select(LIST_COLUMNS)
    .single();

  if (error) throw new Error(error.message);
  return toList(data, userId, householdId, undefined);
};

export const updateList = async (
  listId: string,
  changes: {
    name?: string;
    householdId?: string | null;
    pantryId?: string | null;
  },
): Promise<void> => {
  const { error } = await supabase
    .from("grocery_lists")
    .update({
      ...(changes.name !== undefined && { name: changes.name }),
      ...(changes.householdId !== undefined && {
        household_id: changes.householdId,
      }),
      ...(changes.pantryId !== undefined && { pantry_id: changes.pantryId }),
    })
    .eq("id", listId);

  if (error) throw new Error(error.message);
};

export const deleteList = async (listId: string): Promise<void> => {
  const { error } = await supabase
    .from("grocery_lists")
    .delete()
    .eq("id", listId);
  if (error) throw new Error(error.message);
};

// ---------------------------------------------------------------------
// Lines
// ---------------------------------------------------------------------

interface LineRow {
  id: string;
  list_id: string;
  name: string;
  name_key: string;
  category: string | null;
  is_checked: boolean;
  checked_at: string | null;
  checked_by: string | null;
  source: LineSource;
  source_recipe_names: string[] | null;
  position: number;
}

const LINE_COLUMNS =
  "id, list_id, name, name_key, category, is_checked, checked_at, checked_by, source, source_recipe_names, position";

export const toLine = (row: LineRow): GroceryLine => ({
  id: row.id,
  listId: row.list_id,
  name: row.name,
  nameKey: row.name_key,
  category: isCategory(row.category) ? row.category : "Other",
  isChecked: row.is_checked,
  checkedAt: row.checked_at,
  checkedBy: row.checked_by,
  source: row.source,
  sourceRecipeNames: row.source_recipe_names ?? [],
  position: row.position,
});

export const fetchLines = async (listId: string): Promise<GroceryLine[]> => {
  const { data, error } = await supabase
    .from("grocery_list_lines")
    .select(LINE_COLUMNS)
    .eq("list_id", listId)
    .order("position", { ascending: true });

  if (error) throw new Error(error.message);
  return ((data ?? []) as LineRow[]).map(toLine);
};

export class DuplicateLineError extends Error {
  constructor(name: string) {
    super(`${name} is already on this list.`);
    this.name = "DuplicateLineError";
  }
}

export const addLine = async (
  listId: string,
  name: string,
  category: Category,
  position: number,
): Promise<GroceryLine> => {
  const { data, error } = await supabase
    .from("grocery_list_lines")
    .insert({
      list_id: listId,
      name,
      name_key: normalizeItemName(name),
      category,
      source: "manual",
      position,
    })
    .select(LINE_COLUMNS)
    .single();

  if (error) {
    if (error.code === "23505") throw new DuplicateLineError(name);
    throw new Error(error.message);
  }
  return toLine(data);
};

/** Bulk add; lines already present (by key) are skipped. Resolves to how many went in. */
export const addLines = async (
  listId: string,
  lines: NewLine[],
): Promise<number> => {
  if (lines.length === 0) return 0;

  const { data, error } = await supabase.rpc("add_lines_to_list", {
    p_list_id: listId,
    p_lines: lines.map((line) => ({
      name: line.name,
      name_key: line.nameKey,
      category: line.category,
      source: line.source,
      source_recipe_names: line.sourceRecipeNames,
    })),
  });

  if (error) throw new Error(error.message);
  return typeof data === "number" ? data : 0;
};

export const updateLine = async (
  lineId: string,
  changes: { category?: Category },
): Promise<void> => {
  const { error } = await supabase
    .from("grocery_list_lines")
    .update(changes)
    .eq("id", lineId);
  if (error) throw new Error(error.message);
};

export const deleteLine = async (lineId: string): Promise<void> => {
  const { error } = await supabase
    .from("grocery_list_lines")
    .delete()
    .eq("id", lineId);
  if (error) throw new Error(error.message);
};

export const deleteCheckedLines = async (listId: string): Promise<void> => {
  const { error } = await supabase
    .from("grocery_list_lines")
    .delete()
    .eq("list_id", listId)
    .eq("is_checked", true);
  if (error) throw new Error(error.message);
};

export const uncheckAllLines = async (listId: string): Promise<void> => {
  const { error } = await supabase
    .from("grocery_list_lines")
    .update({ is_checked: false, checked_at: null, checked_by: null })
    .eq("list_id", listId)
    .eq("is_checked", true);
  if (error) throw new Error(error.message);
};

export interface CheckResult {
  pantryAction: "restocked" | "added" | "none";
  previousStatus: PantryStatus | null;
}

/**
 * Checks the line and, per the caller's preferences, restocks or adds
 * the matching pantry item in the same transaction. What it did comes
 * back so the toast can say so and Undo can put it back.
 */
export const checkLine = async (
  lineId: string,
  applyRestock: boolean,
  addNew: boolean,
): Promise<CheckResult> => {
  const { data, error } = await supabase.rpc("check_grocery_line", {
    p_line_id: lineId,
    p_apply_restock: applyRestock,
    p_add_new: addNew,
  });

  if (error) throw new Error(error.message);

  const result = (data ?? {}) as {
    pantry_action?: CheckResult["pantryAction"];
    previous_status?: PantryStatus | null;
  };
  return {
    pantryAction: result.pantry_action ?? "none",
    previousStatus: result.previous_status ?? null,
  };
};

/**
 * Unchecks. `revert` carries the check's result only from the Undo
 * toast; a plain uncheck leaves the pantry alone.
 */
export const uncheckLine = async (
  lineId: string,
  revert: CheckResult | null,
): Promise<void> => {
  const { error } = await supabase.rpc("uncheck_grocery_line", {
    p_line_id: lineId,
    p_revert_pantry: revert !== null && revert.pantryAction !== "none",
    p_previous_status: revert?.previousStatus ?? null,
  });

  if (error) throw new Error(error.message);
};

// ---------------------------------------------------------------------
// Realtime: the list open at the store
// ---------------------------------------------------------------------

interface LineEvent {
  eventType: "INSERT" | "UPDATE" | "DELETE";
  new: Partial<LineRow>;
  old: Partial<LineRow>;
}

/**
 * Follows every change to one list's lines and who else is looking at
 * it. Returns the unsubscribe. Presence is keyed by user id so two tabs
 * of the same person count once.
 */
export const subscribeToList = (
  listId: string,
  userId: string,
  handlers: {
    onLine: (_event: LineEvent) => void;
    onPresence: (_userIds: string[]) => void;
  },
): (() => void) => {
  const channel: RealtimeChannel = supabase
    .channel(`grocery:${listId}`, { config: { presence: { key: userId } } })
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "grocery_list_lines",
        filter: `list_id=eq.${listId}`,
      },
      (payload) => handlers.onLine(payload as unknown as LineEvent),
    )
    .on("presence", { event: "sync" }, () => {
      handlers.onPresence(Object.keys(channel.presenceState()));
    })
    .subscribe(async (status) => {
      if (status === "SUBSCRIBED") await channel.track({ at: Date.now() });
    });

  return () => {
    supabase.removeChannel(channel);
  };
};

export type { LineEvent, LineRow };

// ---------------------------------------------------------------------
// Preferences
// ---------------------------------------------------------------------

interface SettingsRow {
  restock_on_check: boolean;
  add_new_on_check: boolean;
  default_sources: string[];
  default_range_count: number;
  default_range_unit: string;
}

export const fetchPantrySettings = async (
  userId: string,
): Promise<PantrySettings> => {
  const { data, error } = await supabase
    .from("pantry_settings")
    .select(
      "restock_on_check, add_new_on_check, default_sources, default_range_count, default_range_unit",
    )
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw new Error(error.message);
  if (!data) return DEFAULT_PANTRY_SETTINGS;

  const row = data as SettingsRow;
  return {
    restockOnCheck: row.restock_on_check,
    addNewOnCheck: row.add_new_on_check,
    defaultSources: row.default_sources.filter(
      (source): source is "pantry" | "plan" =>
        source === "pantry" || source === "plan",
    ),
    defaultRangeCount: row.default_range_count,
    defaultRangeUnit:
      RANGE_UNITS.includes(row.default_range_unit as RangeUnit) ?
        (row.default_range_unit as RangeUnit)
      : "days",
  };
};

export const savePantrySettings = async (
  userId: string,
  settings: PantrySettings,
): Promise<void> => {
  const { error } = await supabase.from("pantry_settings").upsert({
    user_id: userId,
    restock_on_check: settings.restockOnCheck,
    add_new_on_check: settings.addNewOnCheck,
    default_sources: settings.defaultSources,
    default_range_count: settings.defaultRangeCount,
    default_range_unit: settings.defaultRangeUnit,
  });

  if (error) throw new Error(error.message);
};
