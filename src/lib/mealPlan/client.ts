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
  RepeatRule,
  RepeatSeries,
  expandRepeatRule,
} from "@lib/mealPlan/recurrence";
import {
  MealPlan,
  MealPlanEntry,
  MealSlotDef,
  PlanShare,
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
  name: string;
  slots: unknown;
  share_token: string | null;
}

/**
 * Every plan the user can see: their own plus any shared with them. The
 * role is resolved client-side from ownership and the share rows, both of
 * which RLS has already filtered to what this user may read.
 */
export const fetchPlans = async (userId: string): Promise<MealPlan[]> => {
  const [{ data: plans, error }, { data: shares }] = await Promise.all([
    supabase
      .from("meal_plans")
      .select("id, owner_id, name, slots, share_token")
      .order("created_at", { ascending: true }),
    supabase
      .from("meal_plan_shares")
      .select("plan_id, role")
      .eq("user_id", userId),
  ]);

  if (error) throw new Error(error.message);

  const roleByPlanId = new Map(
    (shares ?? []).map((share) => [share.plan_id as string, share.role]),
  );

  return (plans ?? []).map((plan: PlanRow) => ({
    id: plan.id,
    name: plan.name,
    slots: parseSlots(plan.slots),
    // Only the owner is allowed to read the share token, and RLS returns
    // null for everyone else rather than failing the query.
    shareToken: plan.owner_id === userId ? plan.share_token : null,
    role:
      plan.owner_id === userId ? "owner"
      : roleByPlanId.get(plan.id) === "editor" ? "editor"
      : "viewer",
  }));
};

/**
 * Called when a signed-in user has no plans at all, so the planner always
 * has something to render instead of an empty-state dead end.
 */
export const createPlan = async (
  userId: string,
  name = "My Meal Plan",
): Promise<MealPlan> => {
  const { data, error } = await supabase
    .from("meal_plans")
    .insert({ owner_id: userId, name })
    .select("id, owner_id, name, slots, share_token")
    .single();

  if (error) throw new Error(error.message);

  return {
    id: data.id,
    name: data.name,
    slots: parseSlots(data.slots),
    shareToken: data.share_token,
    role: "owner",
  };
};

export const updatePlan = async (
  planId: string,
  changes: { name?: string; slots?: MealSlotDef[] },
): Promise<void> => {
  const { error } = await supabase
    .from("meal_plans")
    .update({
      ...(changes.name !== undefined && { name: changes.name }),
      ...(changes.slots !== undefined && { slots: changes.slots }),
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
  frequency: "daily" | "weekly";
  interval_weeks: number;
  weekdays: number[];
  start_date: string;
  end_date: string;
}

interface EntryRow {
  id: string;
  date: string;
  slot: string;
  position: number;
  recipes: { data: Hit } | null;
  series: SeriesRow | null;
}

const toSeries = (row: SeriesRow | null): RepeatSeries | null =>
  row && {
    id: row.id,
    frequency: row.frequency,
    intervalWeeks: row.interval_weeks === 2 ? 2 : 1,
    weekdays: row.weekdays ?? [],
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
      "id, date, slot, position, recipes:recipe_id (data), series:series_id (id, frequency, interval_weeks, weekdays, start_date, end_date)",
    )
    .eq("plan_id", planId)
    .gte("date", startDate)
    .lte("date", endDate)
    .order("date", { ascending: true })
    .order("position", { ascending: true });

  if (error) throw new Error(error.message);

  return ((data ?? []) as unknown as EntryRow[])
    .filter((row) => Boolean(row.slot) && row.recipes?.data?.recipe)
    .map((row) => ({
      id: row.id,
      date: row.date,
      slot: row.slot,
      position: row.position,
      recipe: (row.recipes as { data: Hit }).data,
      series: toSeries(row.series),
    }));
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
    p_frequency: rule.frequency,
    p_interval_weeks: rule.intervalWeeks,
    p_weekdays: rule.frequency === "weekly" ? rule.weekdays : [],
    p_end_date: rule.endDate,
    p_dates: expandRepeatRule(rule, entry.date),
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

export const moveEntry = async (
  entryId: string,
  date: string,
  slot: SlotId,
): Promise<void> => {
  const { error } = await supabase
    .from("meal_plan_entries")
    .update({ date, slot })
    .eq("id", entryId);

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

export const fetchShares = async (planId: string): Promise<PlanShare[]> => {
  const { data, error } = await supabase
    .from("meal_plan_shares")
    .select("user_id, email, role")
    .eq("plan_id", planId);

  if (error) throw new Error(error.message);

  return (data ?? []).map((share) => ({
    userId: share.user_id,
    email: share.email,
    role: share.role,
  }));
};

export const removeShare = async (
  planId: string,
  userId: string,
): Promise<void> => {
  const { error } = await supabase
    .from("meal_plan_shares")
    .delete()
    .eq("plan_id", planId)
    .eq("user_id", userId);

  if (error) throw new Error(error.message);
};

/** Returns the invite token; the caller builds the link around it. */
export const createInvite = async (
  planId: string,
  role: "viewer" | "editor",
): Promise<string> => {
  const { data, error } = await supabase
    .from("meal_plan_invites")
    .insert({ plan_id: planId, role })
    .select("token")
    .single();

  if (error) throw new Error(error.message);
  return data.token;
};

/** Resolves to the plan id on success, or null if the invite is dead. */
export const acceptInvite = async (token: string): Promise<string | null> => {
  const { data, error } = await supabase.rpc("accept_meal_plan_invite", {
    p_token: token,
  });

  if (error) throw new Error(error.message);
  return (data as string | null) ?? null;
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
