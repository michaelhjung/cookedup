// src/app/plan/shared/[token]/page.tsx
//
// The read-only view behind a share link. Rendered on the server through
// the `get_shared_plan` security-definer function, so the page works for
// someone with no cookedup account and never needs a privileged key.

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@components/Footer";
import SharedPlanView from "@components/MealPlan/SharedPlanView";
import { MealPlanEntry, parseSlots } from "@lib/mealPlan/types";
import { supabase } from "@utils/supabase";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

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

const loadSharedPlan = async (
  token: string,
): Promise<SharedPlanPayload | null> => {
  if (!UUID_PATTERN.test(token)) return null;

  const { data, error } = await supabase.rpc("get_shared_plan", {
    p_token: token,
  });

  if (error) {
    console.error("Failed to load shared plan:", error);
    return null;
  }

  return (data as SharedPlanPayload | null) ?? null;
};

export const generateMetadata = async (
  props: PageProps<"/plan/shared/[token]">,
): Promise<Metadata> => {
  const { token } = await props.params;
  const plan = await loadSharedPlan(token);

  return {
    title: plan ? `${plan.name} | Cooked Up!` : "Meal Plan | Cooked Up!",
    // A secret link shouldn't turn up in a search result.
    robots: { index: false, follow: false },
  };
};

const SharedPlanPage = async (props: PageProps<"/plan/shared/[token]">) => {
  const { token } = await props.params;
  const plan = await loadSharedPlan(token);

  // A rotated or bogus token is a 404 rather than a 403, so the page
  // never confirms which tokens exist.
  if (!plan) notFound();

  const entries: MealPlanEntry[] = plan.entries
    .filter((entry) => Boolean(entry.slot) && entry.recipe?.recipe)
    .map((entry) => ({
      id: entry.id,
      date: entry.date,
      slot: entry.slot,
      position: entry.position,
      recipe: entry.recipe,
    }));

  return (
    <div className="flex min-h-screen flex-col p-4 md:p-6 lg:p-8">
      <SharedPlanView
        name={plan.name}
        entries={entries}
        slots={parseSlots(plan.slots)}
        feedPath={`/api/calendar/${token}.ics`}
      />
      <Footer />
    </div>
  );
};

export default SharedPlanPage;
