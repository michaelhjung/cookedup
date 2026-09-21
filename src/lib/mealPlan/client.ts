// src/lib/mealPlan/client.ts
//
// Browser-side data access for the planner. Most of it talks to Supabase
// directly and lets RLS do the enforcing — the same pattern the saved-
// recipes list and the star toggle already use. Only adding a recipe
// goes through an API route, because that has to run the image pipeline
// server-side.

import { Hit } from "@interfaces/edamam";
import { daysBetween } from "@lib/mealPlan/dates";
import {
  MonthlyRule,
  RepeatRule,
  RepeatSeries,
  WEEK_ORDINALS,
  WeekOrdinal,
  expandRepeatRule,
} from "@lib/mealPlan/recurrence";
import {
  MealPlan,
  MealPlanEntry,
  MealSlotDef,
  SlotId,
  parseSlots,
} from "@lib/mealPlan/types";
import { supabase } from "@utils/supabase";

const requireSession = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) throw new Error("Your session has expired.");
  return session;
};

interface PlanRow {
  id: string;
  owner_id: string;
  household_id: string | null;
  name: string;
  slots: unknown;
  share_token: string | null;
}

const PLAN_COLUMNS = "id, owner_id, household_id, name, slots, share_token";

const toPlan = (
  row: PlanRow,
  userId: string,
  householdId: string | null,
  shareRole: "viewer" | "editor" | undefined,
): MealPlan => ({
  id: row.id,
  name: row.name,
  slots: parseSlots(row.slots),
  householdId: row.household_id,
  // Only the owner is allowed to read the share token, and RLS returns
  // null for everyone else rather than failing the query.
  shareToken: row.owner_id === userId ? row.share_token : null,
  role:
    row.owner_id === userId ? "owner"
    : row.household_id !== null && row.household_id === householdId ? "editor"
    : shareRole === "editor" ? "editor"
    : "viewer",
});

/**
 * Every plan the user can see: their own, their household's, and any
 * shared with them. The role is resolved client-side from ownership,
 * household membership and the share rows, all of which RLS has already
 * filtered to what this user may read.
 */
export const fetchPlans = async (userId: string): Promise<MealPlan[]> => {
  const [{ data: plans, error }, { data: shares }, { data: membership }] =
    await Promise.all([
      supabase
        .from("meal_plans")
        .select(PLAN_COLUMNS)
        .order("created_at", { ascending: true }),
      supabase
        .from("shares")
        .select("resource_id, role")
        .eq("resource_kind", "meal_plan")
        .eq("user_id", userId),
      supabase
        .from("household_members")
        .select("household_id")
        .eq("user_id", userId)
        .maybeSingle(),
    ]);

  if (error) throw new Error(error.message);

  const householdId = (membership?.household_id as string | undefined) ?? null;
  const roleByPlanId = new Map(
    (shares ?? []).map((share) => [share.resource_id as string, share.role]),
  );

  return (plans ?? []).map((plan: PlanRow) =>
    toPlan(plan, userId, householdId, roleByPlanId.get(plan.id)),
  );
};

/**
 * Called when a signed-in user has no plans at all, so the planner always
 * has something to render instead of an empty-state dead end. A first
 * plan for someone in a household is the household's.
 */
export const createPlan = async (
  userId: string,
  householdId: string | null,
  name = "My Meal Plan",
): Promise<MealPlan> => {
  const { data, error } = await supabase
    .from("meal_plans")
    .insert({ owner_id: userId, household_id: householdId, name })
    .select(PLAN_COLUMNS)
    .single();

  if (error) throw new Error(error.message);

  return toPlan(data, userId, householdId, undefined);
};

export const updatePlan = async (
  planId: string,
  changes: {
    name?: string;
    slots?: MealSlotDef[];
    householdId?: string | null;
  },
): Promise<void> => {
  const { error } = await supabase
    .from("meal_plans")
    .update({
      ...(changes.name !== undefined && { name: changes.name }),
      ...(changes.slots !== undefined && { slots: changes.slots }),
      ...(changes.householdId !== undefined && {
        household_id: changes.householdId,
      }),
    })
    .eq("id", planId);

  if (error) throw new Error(error.message);
};

/**
 * How many planned meals sit in the given slots — asked before a slot is
 * deleted, so the confirmation can say what's about to be lost rather
 * than making the owner guess.
 */
export const countEntriesInSlots = async (
  planId: string,
  slotIds: SlotId[],
): Promise<number> => {
  if (slotIds.length === 0) return 0;

  const { count, error } = await supabase
    .from("meal_plan_entries")
    .select("id", { count: "exact", head: true })
    .eq("plan_id", planId)
    .in("slot", slotIds);

  if (error) throw new Error(error.message);
  return count ?? 0;
};

/**
 * Removing a slot has to remove its entries too: `slot` is a plain text
 * reference into a jsonb array, so nothing in the database would clean
 * them up, and they'd linger invisibly with no time to be scheduled at.
 */
export const deleteEntriesInSlots = async (
  planId: string,
  slotIds: SlotId[],
): Promise<void> => {
  if (slotIds.length === 0) return;

  const { error } = await supabase
    .from("meal_plan_entries")
    .delete()
    .eq("plan_id", planId)
    .in("slot", slotIds);

  if (error) throw new Error(error.message);
};

interface SeriesRow {
  id: string;
  frequency: "daily" | "weekly" | "monthly";
  interval_weeks: number;
  weekdays: number[];
  month_day: number | null;
  week_ordinal: number | null;
  start_date: string;
  end_date: string;
}

const SERIES_COLUMNS =
  "id, frequency, interval_weeks, weekdays, month_day, week_ordinal, start_date, end_date";

const toMonthlyRule = (row: SeriesRow): MonthlyRule | null => {
  if (row.frequency !== "monthly") return null;
  if (row.month_day !== null) return { by: "day", day: row.month_day };

  const ordinal = row.week_ordinal as WeekOrdinal | null;
  if (ordinal === null || !WEEK_ORDINALS.includes(ordinal)) return null;

  return { by: "weekday", ordinal, weekday: row.weekdays?.[0] ?? 0 };
};

interface EntryRow {
  id: string;
  date: string;
  slot: string;
  position: number;
  title: string | null;
  time: string | null;
  recipes: { data: Hit } | null;
  series: SeriesRow | null;
}

/**
 * A row is renderable when it has a slot and something to call itself:
 * a recipe whose JSON is intact, or a custom title. Anything else is a
 * stale or hand-edited row and is left out rather than shown blank.
 */
const isRenderableRow = (row: EntryRow): boolean =>
  Boolean(row.slot) &&
  (Boolean(row.recipes?.data?.recipe) || Boolean(row.title));

const toSeries = (row: SeriesRow | null): RepeatSeries | null =>
  row && {
    id: row.id,
    frequency: row.frequency,
    intervalWeeks: row.interval_weeks === 2 ? 2 : 1,
    weekdays: row.frequency === "weekly" ? (row.weekdays ?? []) : [],
    monthly: toMonthlyRule(row),
    startDate: row.start_date,
    endDate: row.end_date,
  };

export const fetchEntries = async (
  planId: string,
  startDate: string,
  endDate: string,
): Promise<MealPlanEntry[]> => {
  const { data, error } = await supabase
    .from("meal_plan_entries")
    .select(
      `id, date, slot, position, title, time, recipes:recipe_id (data), series:series_id (${SERIES_COLUMNS})`,
    )
    .eq("plan_id", planId)
    .gte("date", startDate)
    .lte("date", endDate)
    .order("date", { ascending: true })
    .order("position", { ascending: true });

  if (error) throw new Error(error.message);

  return ((data ?? []) as unknown as EntryRow[])
    .filter(isRenderableRow)
    .map((row) => ({
      id: row.id,
      date: row.date,
      slot: row.slot,
      position: row.position,
      recipe: row.recipes?.data ?? null,
      title: row.recipes ? null : row.title,
      time: row.time,
      series: toSeries(row.series),
    }));
};

/**
 * How many meals already sit in a cell, so a new one appends after them.
 * A gap left by a removal is harmless.
 */
const countEntriesInCell = async (
  planId: string,
  date: string,
  slot: SlotId,
): Promise<number> => {
  const { count, error } = await supabase
    .from("meal_plan_entries")
    .select("id", { count: "exact", head: true })
    .eq("plan_id", planId)
    .eq("date", date)
    .eq("slot", slot);

  if (error) throw new Error(error.message);
  return count ?? 0;
};

/**
 * Plans a free-text meal ("Leftovers") with no recipe behind it. Unlike
 * `addEntry` there's no image to persist, so this writes straight
 * through RLS. Resolves to the new entry's id.
 */
export const addCustomEntry = async (
  planId: string,
  title: string,
  date: string,
  slot: SlotId,
): Promise<string> => {
  const trimmed = title.trim();
  if (!trimmed) throw new Error("Give the meal a name.");

  const position = await countEntriesInCell(planId, date, slot);

  const { data, error } = await supabase
    .from("meal_plan_entries")
    .insert({ plan_id: planId, title: trimmed, date, slot, position })
    .select("id")
    .single();

  if (error) {
    // The custom-title unique index: this meal is already in this cell.
    if (error.code === "23505")
      throw new Error("That meal is already planned here.");
    throw new Error(error.message);
  }

  return data.id as string;
};

/** Resolves to the new entry's id, which `createSeries` needs. */
export const addEntry = async (
  planId: string,
  hit: Hit,
  date: string,
  slot: SlotId,
): Promise<string> => {
  const session = await requireSession();

  const response = await fetch(`/api/plans/${planId}/entries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.access_token}`,
    },
    body: JSON.stringify({ hit, date, slot }),
  });

  if (!response.ok) {
    const result = await response.json().catch(() => ({}));
    throw new Error(result.message || "Couldn't add that recipe.");
  }

  const result = await response.json();
  return result.entry.id as string;
};

/**
 * The rule as the series functions want it: only the fields the
 * frequency uses are sent, so a monthly rule never carries a stale
 * weekday list from before the cadence was changed.
 */
const toRuleParams = (rule: RepeatRule, anchorDate: string) => {
  const monthly = rule.frequency === "monthly" ? rule.monthly : null;

  return {
    p_frequency: rule.frequency,
    p_interval_weeks: rule.frequency === "weekly" ? rule.intervalWeeks : 1,
    p_weekdays:
      rule.frequency === "weekly" ? rule.weekdays
      : monthly?.by === "weekday" ? [monthly.weekday]
      : [],
    p_month_day: monthly?.by === "day" ? monthly.day : null,
    p_week_ordinal: monthly?.by === "weekday" ? monthly.ordinal : null,
    p_end_date: rule.endDate,
    p_dates: expandRepeatRule(rule, anchorDate),
  };
};

/**
 * Makes an existing entry the first occurrence of a repeat rule. The
 * rule is expanded here and the dates handed to one database function,
 * so the series and all its meals are created together or not at all.
 */
export const createSeries = async (
  entry: Pick<MealPlanEntry, "id" | "date">,
  rule: RepeatRule,
): Promise<void> => {
  const { error } = await supabase.rpc("create_entry_series", {
    p_entry_id: entry.id,
    ...toRuleParams(rule, entry.date),
  });

  if (error) throw new Error(error.message);
};

/**
 * Replaces the series' rule from `fromDate` onward. Pass the series
 * start to rewrite all of it; anything later splits the series so the
 * earlier meals keep the old rule. The new occurrences are expanded
 * from `fromDate`.
 */
export const updateSeries = async (
  seriesId: string,
  fromDate: string,
  rule: RepeatRule,
): Promise<void> => {
  const { error } = await supabase.rpc("update_series_rule", {
    p_series_id: seriesId,
    p_from_date: fromDate,
    ...toRuleParams(rule, fromDate),
  });

  if (error) throw new Error(error.message);
};

/**
 * Moves the entry's series from `fromDate` onward so that the entry
 * itself lands on `date`/`slot`; every later occurrence shifts by the
 * same amount. Pass the series start as `fromDate` to move all of it.
 */
export const shiftSeries = async (
  entry: MealPlanEntry,
  fromDate: string,
  date: string,
  slot: SlotId,
): Promise<void> => {
  if (!entry.series) throw new Error("That meal doesn't repeat.");

  const { error } = await supabase.rpc("shift_series_entries", {
    p_series_id: entry.series.id,
    p_from_date: fromDate,
    p_day_delta: daysBetween(entry.date, date),
    p_slot: slot,
  });

  if (error) throw new Error(error.message);
};

/** Removes every occurrence from `fromDate` onward. */
export const endSeriesBefore = async (
  seriesId: string,
  fromDate: string,
): Promise<void> => {
  const { error } = await supabase.rpc("end_series_before", {
    p_series_id: seriesId,
    p_from_date: fromDate,
  });

  if (error) throw new Error(error.message);
};

/** Removes the whole series; its entries go with it. */
export const deleteSeries = async (seriesId: string): Promise<void> => {
  const { error } = await supabase
    .from("meal_plan_series")
    .delete()
    .eq("id", seriesId);

  if (error) throw new Error(error.message);
};

/**
 * Copies every meal between `from` and `to` (inclusive) forward by
 * `dayDelta` days. Resolves to how many were copied; meals already in a
 * target cell are skipped, not doubled.
 */
export const copyEntries = async (
  planId: string,
  from: string,
  to: string,
  dayDelta: number,
): Promise<number> => {
  const { data, error } = await supabase.rpc("copy_plan_entries", {
    p_plan_id: planId,
    p_from: from,
    p_to: to,
    p_day_delta: dayDelta,
  });

  if (error) throw new Error(error.message);
  return typeof data === "number" ? data : 0;
};

/**
 * `time` is the entry's current override, kept on a same-slot move and
 * dropped when the slot changes: a "19:30" that belonged to dinner means
 * nothing under lunch. The series function applies the same rule.
 */
export const moveEntry = async (
  entry: Pick<MealPlanEntry, "id" | "slot" | "time">,
  date: string,
  slot: SlotId,
): Promise<void> => {
  const { error } = await supabase
    .from("meal_plan_entries")
    .update({ date, slot, time: slot === entry.slot ? entry.time : null })
    .eq("id", entry.id);

  if (error) throw new Error(error.message);
};

/** `null` puts the meal back on its slot's time. */
export const setEntryTime = async (
  entryId: string,
  time: string | null,
): Promise<void> => {
  const { error } = await supabase
    .from("meal_plan_entries")
    .update({ time })
    .eq("id", entryId);

  if (error) throw new Error(error.message);
};

/**
 * Retimes every occurrence from `fromDate` onward. Time isn't part of
 * the repeat rule, so unlike a move this never has to split the series.
 */
export const setSeriesTime = async (
  seriesId: string,
  fromDate: string,
  time: string | null,
): Promise<void> => {
  const { error } = await supabase
    .from("meal_plan_entries")
    .update({ time })
    .eq("series_id", seriesId)
    .gte("date", fromDate);

  if (error) throw new Error(error.message);
};

export const removeEntry = async (entryId: string): Promise<void> => {
  const { error } = await supabase
    .from("meal_plan_entries")
    .delete()
    .eq("id", entryId);

  if (error) throw new Error(error.message);
};

/**
 * Turning link sharing on mints a token; turning it off clears it.
 * Re-enabling mints a *new* one, which is what makes "rotate to revoke"
 * work — every previously shared link and calendar subscription stops
 * resolving.
 */
export const setLinkSharing = async (
  planId: string,
  enabled: boolean,
): Promise<string | null> => {
  const shareToken = enabled ? crypto.randomUUID() : null;

  const { error } = await supabase
    .from("meal_plans")
    .update({ share_token: shareToken })
    .eq("id", planId);

  if (error) throw new Error(error.message);

  return shareToken;
};

/**
 * Clears the star and drops the library row only if no plan entry still
 * needs it — hence the RPC rather than a plain delete.
 */
export const unstarRecipe = async (recipeUrl: string): Promise<void> => {
  const { error } = await supabase.rpc("unstar_recipe", {
    p_recipe_url: recipeUrl,
  });

  if (error) throw new Error(error.message);
};

/** The user's starred recipes, for the "add from saved" picker. */
export const fetchStarredRecipes = async (userId: string): Promise<Hit[]> => {
  const { data, error } = await supabase
    .from("recipes")
    .select("data")
    .eq("user_id", userId)
    .eq("is_starred", true);

  if (error) throw new Error(error.message);
  return (data ?? []).map((row) => row.data as Hit);
};
