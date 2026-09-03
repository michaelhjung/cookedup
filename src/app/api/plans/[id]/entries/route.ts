// src/app/api/plans/[id]/entries/route.ts
//
// Adding a recipe to a plan is the one planner write that can't go
// straight through the browser client: it has to land the recipe in the
// user's library first, which means running the image-persistence
// pipeline server-side. Reads, moves, and removals all go direct to
// Supabase under RLS.

import { after, NextRequest, NextResponse } from "next/server";

import { Hit } from "@interfaces/edamam";
import { findSlot, parseSlots } from "@lib/mealPlan/types";
import {
  persistLibraryRecipeImage,
  upsertLibraryRecipe,
} from "@lib/recipes/library";
import { createAuthedSupabaseClient } from "@utils/supabase/server";

interface AddEntryBody {
  hit: Hit;
  date: string;
  slot: string;
}

export async function POST(
  req: NextRequest,
  ctx: RouteContext<"/api/plans/[id]/entries">,
) {
  const { id: planId } = await ctx.params;

  const accessToken = req.headers
    .get("authorization")
    ?.replace(/^Bearer\s+/i, "");

  if (!accessToken)
    return NextResponse.json(
      { message: "Missing access token." },
      { status: 401 },
    );

  const supabase = createAuthedSupabaseClient(accessToken);

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user)
    return NextResponse.json(
      { message: "Invalid or expired session." },
      { status: 401 },
    );

  let body: AddEntryBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const { hit, date, slot } = body ?? {};

  if (!hit?.recipe?.url)
    return NextResponse.json(
      { message: "A recipe is required." },
      { status: 400 },
    );

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? ""))
    return NextResponse.json(
      { message: "A date in YYYY-MM-DD form is required." },
      { status: 400 },
    );

  if (typeof slot !== "string" || !slot)
    return NextResponse.json(
      { message: "A meal slot is required." },
      { status: 400 },
    );

  // Slots are per-plan data now, so "is this a real slot" can only be
  // answered against the plan itself. This also doubles as the read
  // permission check: RLS returns nothing for a plan the caller can't see.
  const { data: planRow } = await supabase
    .from("meal_plans")
    .select("slots")
    .eq("id", planId)
    .maybeSingle();

  if (!planRow)
    return NextResponse.json({ message: "Plan not found." }, { status: 404 });

  if (!findSlot(parseSlots(planRow.slots), slot))
    return NextResponse.json(
      { message: "That meal slot doesn't exist on this plan." },
      { status: 400 },
    );

  // The recipe row belongs to whoever is adding it, even when they're an
  // editor on someone else's plan — the plan then reads it back through
  // the "recipes planned in a readable plan" policy.
  let row;
  try {
    row = await upsertLibraryRecipe(supabase, user.id, hit, { star: false });
  } catch (error) {
    console.error("Failed to add recipe to library:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "An unknown error occurred.",
      },
      { status: 500 },
    );
  }

  // `position` orders multiple recipes within one slot. Appending means
  // counting what's already there; a gap left by a removal is harmless.
  const { count } = await supabase
    .from("meal_plan_entries")
    .select("id", { count: "exact", head: true })
    .eq("plan_id", planId)
    .eq("date", date)
    .eq("slot", slot);

  const { data: entry, error: entryError } = await supabase
    .from("meal_plan_entries")
    .insert({
      plan_id: planId,
      recipe_id: row.id,
      date,
      slot,
      position: count ?? 0,
    })
    .select("id, date, slot, position")
    .single();

  if (entryError) {
    // The unique (plan, date, slot, recipe) constraint — this recipe is
    // already in this slot, which is a no-op rather than a failure.
    if (entryError.code === "23505")
      return NextResponse.json(
        { message: "That recipe is already planned for this meal." },
        { status: 409 },
      );

    // RLS rejects a write to a plan the user can't edit as zero rows
    // affected rather than a permission error.
    console.error("Failed to add plan entry:", entryError);
    return NextResponse.json(
      { message: "Couldn't add that recipe to the plan." },
      { status: 403 },
    );
  }

  after(() => persistLibraryRecipeImage(supabase, user.id, row));

  return NextResponse.json({ entry: { ...entry, recipe: row.data } });
}
