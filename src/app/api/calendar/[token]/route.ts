// src/app/api/calendar/[token]/route.ts
//
// The subscribable meal-plan feed. Public by design — the share token in
// the URL is the only credential — so it reads through the
// `get_shared_plan` security-definer function rather than authenticating
// a user or handing the app a service-role key.

import { NextResponse } from "next/server";

import { buildCalendar } from "@lib/ics/buildCalendar";
import { buildPlanEvents } from "@lib/mealPlan/buildPlanEvents";
import { MealPlanEntry, parseSlots } from "@lib/mealPlan/types";
import { supabase } from "@utils/supabase";

// A feed is a full snapshot, so removed meals disappear simply by not
// being emitted. The window keeps it from growing without bound while
// still covering anything a subscriber could reasonably be looking at.
const DAYS_BEHIND = 90;
const DAYS_AHEAD = 365;

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const shiftDays = (days: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
};

interface SharedPlanPayload {
  id: string;
  name: string;
  slots: unknown;
  entries: {
    id: string;
    date: string;
    slot: string;
    position: number;
    recipe: MealPlanEntry["recipe"];
  }[];
}

export async function GET(
  request: Request,
  ctx: RouteContext<"/api/calendar/[token]">,
) {
  const { token } = await ctx.params;
  // Strip the .ics the URL is published with, so calendar clients that
  // insist on a file-looking URL still resolve to the same token.
  const shareToken = token.replace(/\.ics$/i, "");

  // A malformed token would make the RPC raise on the uuid cast; treat it
  // as simply not found. Every miss below answers 404 rather than 403 so
  // the endpoint never confirms which tokens exist.
  if (!UUID_PATTERN.test(shareToken))
    return new NextResponse("Not found", { status: 404 });

  const { data, error } = await supabase.rpc("get_shared_plan", {
    p_token: shareToken,
    p_start: shiftDays(-DAYS_BEHIND),
    p_end: shiftDays(DAYS_AHEAD),
  });

  if (error) {
    console.error("Failed to load shared plan for calendar feed:", error);
    return new NextResponse("Not found", { status: 404 });
  }

  const plan = data as SharedPlanPayload | null;
  if (!plan) return new NextResponse("Not found", { status: 404 });

  const origin = new URL(request.url).origin;

  const entries: MealPlanEntry[] = plan.entries
    .filter((entry) => Boolean(entry.slot) && entry.recipe?.recipe)
    .map((entry) => ({
      id: entry.id,
      date: entry.date,
      slot: entry.slot,
      position: entry.position,
      recipe: entry.recipe,
    }));

  const calendar = buildCalendar({
    name: plan.name,
    events: buildPlanEvents(
      { slots: parseSlots(plan.slots) },
      entries,
      `${origin}/plan/shared/${shareToken}`,
    ),
  });

  return new NextResponse(calendar, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `inline; filename="${plan.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.ics"`,
      // Clients poll on their own schedule regardless; this just keeps a
      // burst of requests from re-querying the database each time.
      "Cache-Control": "public, max-age=3600",
    },
  });
}
