// src/lib/mealPlan/buildPlanEvents.ts
//
// The single place that turns plan entries into calendar events.
//
// This exists so there is exactly one definition of "what a planned meal
// looks like on a calendar", independent of how it gets delivered. The
// .ics feed is one emitter over these events; a future Google Calendar
// push (writing the same events through the Calendar API) would be a
// second one, and adding it should require no changes to the planner,
// the API routes, or this function.

import { MealPlan, MealPlanEntry, findSlot } from "@lib/mealPlan/types";

export interface PlanEvent {
  /** Stable across regenerations so edits update rather than duplicate. */
  uid: string;
  title: string;
  description: string;
  /** The recipe's own page, for calendar clients that render a link. */
  url?: string;
  /** "YYYY-MM-DD" */
  date: string;
  /** Local wall-clock "HH:MM" — intentionally timezone-free. */
  startTime: string;
  durationMinutes: number;
}

/**
 * Meals get a fixed one-hour block rather than the recipe's own
 * `totalTime`. Cooking time isn't eating time, an hour reads sensibly in
 * a day view, and Edamam reports `totalTime: 0` often enough that
 * deriving a duration from it would produce a lot of zero-length events.
 * The real prep time still appears in the description.
 */
const EVENT_DURATION_MINUTES = 60;

const describeRecipe = (
  entry: MealPlanEntry,
  planUrl: string | undefined,
): string => {
  const { recipe } = entry.recipe;
  const lines: string[] = [];

  const facts = [
    recipe.yield ? `Serves ${recipe.yield}` : null,
    recipe.totalTime ? `${recipe.totalTime} min` : null,
    recipe.calories ?
      `${Math.round(recipe.calories / (recipe.yield || 1))} kcal/serving`
    : null,
  ].filter(Boolean);

  if (facts.length) lines.push(facts.join(" · "));

  if (recipe.ingredientLines?.length) {
    lines.push("", "Ingredients:");
    lines.push(...recipe.ingredientLines.map((line) => `• ${line}`));
  }

  if (recipe.url) lines.push("", `Recipe: ${recipe.url}`);
  if (planUrl) lines.push(`Meal plan: ${planUrl}`);

  return lines.join("\n");
};

/**
 * `planUrl`, when given, is linked from every event's description so a
 * calendar entry can lead back to the plan it came from. It's optional
 * because the caller (a route handler) is the only thing that knows the
 * app's public origin.
 */
export const buildPlanEvents = (
  plan: Pick<MealPlan, "slots">,
  entries: MealPlanEntry[],
  planUrl?: string,
): PlanEvent[] =>
  entries.flatMap((entry) => {
    const slot = findSlot(plan.slots, entry.slot);

    // An entry whose slot no longer exists has no time to be scheduled
    // at, so it can't become an event. Removing a slot deletes its
    // entries, so this only guards against a stale or hand-edited row.
    if (!slot) return [];

    return [
      {
        uid: `${entry.id}@cookedup.app`,
        title: `${slot.label}: ${entry.recipe.recipe.label}`,
        description: describeRecipe(entry, planUrl),
        url: entry.recipe.recipe.url,
        date: entry.date,
        startTime: slot.time,
        durationMinutes: EVENT_DURATION_MINUTES,
      },
    ];
  });
