"use client";

import { Plus, Settings2 } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

import Bowl from "@components/loaders/Bowl";
import AddRecipeDrawer from "@components/MealPlan/AddRecipeDrawer";
import DayAgenda from "@components/MealPlan/DayAgenda";
import { EntryDragProvider } from "@components/MealPlan/DragContext";
import PlanSettings from "@components/MealPlan/PlanSettings";
import WeekGrid from "@components/MealPlan/WeekGrid";
import WeekNav from "@components/MealPlan/WeekNav";
import { useAuth } from "@context/AuthContext";
import { Hit } from "@interfaces/edamam";
import {
  addEntry,
  createPlan,
  fetchEntries,
  fetchPlans,
  fetchStarredRecipes,
  moveEntry,
  removeEntry,
} from "@lib/mealPlan/client";
import { addDays, startOfWeek, todayISO } from "@lib/mealPlan/dates";
import { MealPlan, MealPlanEntry, SlotId, findSlot } from "@lib/mealPlan/types";

/**
 * Below `lg` the seven-column grid is unusable, so the planner swaps to a
 * one-day agenda. Resolved with matchMedia rather than CSS visibility so
 * only one of the two ever mounts — rendering both would duplicate every
 * chip, its popover state, and its thumbnail request.
 */
const useIsDesktop = (): boolean | null => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return isDesktop;
};

const MealPlanner = () => {
  const { user, loading: authLoading } = useAuth();
  const isDesktop = useIsDesktop();

  const [plans, setPlans] = useState<MealPlan[]>([]);
  const [activePlanId, setActivePlanId] = useState<string | null>(null);
  const [entries, setEntries] = useState<MealPlanEntry[]>([]);
  const [savedRecipes, setSavedRecipes] = useState<Hit[]>([]);

  const [selectedDate, setSelectedDate] = useState(todayISO());
  const [weekStart, setWeekStart] = useState(startOfWeek(todayISO()));

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [addTarget, setAddTarget] = useState<{
    date: string;
    slot: SlotId;
  } | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const activePlan = plans.find((plan) => plan.id === activePlanId) ?? null;
  const canEdit = activePlan?.role !== "viewer";
  // The drawer needs the whole slot, not just the id it was opened with,
  // and a slot deleted while the drawer was open simply isn't there.
  const addTargetSlot =
    addTarget ? findSlot(activePlan?.slots ?? [], addTarget.slot) : undefined;

  const adoptPlan = useCallback((plan: MealPlan) => {
    setPlans((previous) =>
      previous.some((candidate) => candidate.id === plan.id) ? previous : (
        [...previous, plan]
      ),
    );
    setActivePlanId(plan.id);
  }, []);

  // Creating the first plan is offered as an explicit action as well as
  // attempted automatically on load, so a failure here is recoverable
  // from the UI instead of leaving the page with nothing to click.
  const handleCreatePlan = useCallback(async () => {
    if (!user) return;

    setIsCreating(true);
    setError("");
    try {
      adoptPlan(await createPlan(user.id));
    } catch (caught) {
      console.error("Failed to create meal plan:", caught);
      setError(
        caught instanceof Error && caught.message ?
          `Couldn't create a meal plan: ${caught.message}`
        : "Couldn't create a meal plan.",
      );
    } finally {
      setIsCreating(false);
    }
  }, [user, adoptPlan]);

  // Load the user's plans, creating a default one the first time so the
  // planner usually opens straight onto a usable week.
  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      try {
        const userPlans = await fetchPlans(user.id);
        if (cancelled) return;

        setPlans(userPlans);

        if (userPlans.length > 0) {
          setActivePlanId((current) => current ?? userPlans[0].id);
          return;
        }

        // No plans yet. A failure to auto-create isn't fatal — it falls
        // through to the empty state, which offers the same action.
        try {
          const created = await createPlan(user.id);
          if (!cancelled) adoptPlan(created);
        } catch (caught) {
          console.error("Failed to create a first meal plan:", caught);
          if (!cancelled)
            setError(
              caught instanceof Error && caught.message ?
                `Couldn't create your first meal plan: ${caught.message}`
              : "Couldn't create your first meal plan.",
            );
        }
      } catch (caught) {
        console.error("Failed to load meal plans:", caught);
        if (!cancelled)
          setError(
            caught instanceof Error && caught.message ?
              `Couldn't load your meal plans: ${caught.message}`
            : "Couldn't load your meal plans.",
          );
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [user, authLoading, adoptPlan]);

  useEffect(() => {
    if (!user) return;
    fetchStarredRecipes(user.id).then(setSavedRecipes).catch(console.error);
  }, [user]);

  const loadEntries = useCallback(async () => {
    if (!activePlanId) return;

    try {
      const weekEntries = await fetchEntries(
        activePlanId,
        weekStart,
        addDays(weekStart, 6),
      );
      setEntries(weekEntries);
    } catch (caught) {
      console.error("Failed to load plan entries:", caught);
      setError("Couldn't load this week's meals.");
    }
  }, [activePlanId, weekStart]);

  useEffect(() => {
    loadEntries();
  }, [loadEntries]);

  // The agenda can walk off the end of the loaded week; follow it so the
  // fetched range always contains the day being shown.
  const changeSelectedDate = (date: string) => {
    setSelectedDate(date);
    setWeekStart(startOfWeek(date));
  };

  const changeWeek = (nextWeekStart: string) => {
    setWeekStart(nextWeekStart);
    setSelectedDate(nextWeekStart);
  };

  const handleAdd = async (hit: Hit) => {
    if (!addTarget || !activePlanId) return;

    setIsAdding(true);
    setError("");

    try {
      await addEntry(activePlanId, hit, addTarget.date, addTarget.slot);
      // Refetched rather than appended: the server assigns the entry id
      // and its position within the slot, and guessing either would make
      // the next remove or move act on a row that doesn't exist.
      await loadEntries();
      setAddTarget(null);
    } catch (caught) {
      console.error("Failed to add recipe to plan:", caught);
      setError(
        caught instanceof Error ? caught.message : "Couldn't add that recipe.",
      );
    } finally {
      setIsAdding(false);
    }
  };

  const handleRemove = async (entry: MealPlanEntry) => {
    const snapshot = entries;
    setEntries((previous) =>
      previous.filter((candidate) => candidate.id !== entry.id),
    );

    try {
      await removeEntry(entry.id);
    } catch (caught) {
      console.error("Failed to remove plan entry:", caught);
      setEntries(snapshot);
      setError("Couldn't remove that meal.");
    }
  };

  const handleMove = async (
    entry: MealPlanEntry,
    date: string,
    slot: SlotId,
  ) => {
    const snapshot = entries;
    setEntries((previous) =>
      previous.map((candidate) =>
        candidate.id === entry.id ? { ...candidate, date, slot } : candidate,
      ),
    );

    try {
      await moveEntry(entry.id, date, slot);
      // Moving out of the visible week means the entry should vanish from
      // it, which only a refetch gets right.
      if (date < weekStart || date > addDays(weekStart, 6)) await loadEntries();
    } catch (caught) {
      console.error("Failed to move plan entry:", caught);
      setEntries(snapshot);
      setError("Couldn't move that meal.");
    }
  };

  if (authLoading || (user && isLoading))
    return (
      <div className="flex grow items-center justify-center">
        <Bowl />
      </div>
    );

  if (!user)
    return (
      <div className="flex grow flex-col items-center justify-center gap-2 p-8 text-center">
        <h2 className="text-lg font-semibold sm:text-xl">
          Plan your week of meals
        </h2>
        <p className="max-w-md text-xs text-gray-500 sm:text-sm">
          Drop recipes onto a calendar, subscribe to it from Google Calendar or
          any other calendar app, and share it with whoever you cook for. Log in
          with the button in the top right to get started.
        </p>
      </div>
    );

  if (!activePlan)
    return (
      <div className="flex grow flex-col items-center justify-center gap-3 p-8 text-center">
        <h2 className="text-lg font-semibold sm:text-xl">
          You don&rsquo;t have a meal plan yet
        </h2>
        <p className="max-w-md text-xs text-gray-500 sm:text-sm">
          Create one to start dropping recipes onto a calendar you can subscribe
          to and share.
        </p>

        <button
          type="button"
          onClick={handleCreatePlan}
          disabled={isCreating}
          className={`
            flex items-center gap-1.5
            rounded-3xl px-5 py-2.5 text-sm font-semibold
            transition-all
            ${
              isCreating ?
                "cursor-not-allowed bg-[var(--pastel-brown)]/10 text-gray-400"
              : "cursor-pointer bg-[var(--pastel-blue)] text-blue-900 shadow-md hover:scale-105 hover:shadow-lg"
            }
          `}
        >
          <Plus className="size-4" />
          {isCreating ? "Creating..." : "Create a meal plan"}
        </button>

        {error && <p className="max-w-md text-xs text-red-400">{error}</p>}
      </div>
    );

  return (
    <EntryDragProvider onDrop={handleMove}>
      <div className="flex size-full min-h-0 flex-col gap-3">
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-2">
          {plans.length > 1 ?
            <select
              value={activePlan.id}
              onChange={(event) => setActivePlanId(event.target.value)}
              className="rounded border border-zinc-500/30 bg-[var(--background-color)] px-2 py-1 text-sm font-semibold"
            >
              {plans.map((plan) => (
                <option
                  key={plan.id}
                  value={plan.id}
                >
                  {plan.name}
                  {plan.role !== "owner" ? " (shared)" : ""}
                </option>
              ))}
            </select>
          : <h2 className="text-sm font-semibold sm:text-base">
              {activePlan.name}
            </h2>
          }

          <button
            type="button"
            onClick={() => setIsSettingsOpen(true)}
            className="flex items-center gap-1.5 rounded-3xl border border-zinc-400/50 px-3 py-1.5 text-xs text-gray-500 transition-colors hover:border-[var(--pastel-blue)] hover:text-[var(--pastel-blue)]"
          >
            <Settings2 className="size-3.5" />
            Share &amp; settings
          </button>
        </div>

        {isDesktop && (
          <div className="shrink-0">
            <WeekNav
              weekStart={weekStart}
              onChange={changeWeek}
            />
          </div>
        )}

        {error && (
          <p className="shrink-0 text-center text-xs text-red-400">{error}</p>
        )}

        <div className="min-h-0 flex-1 overflow-y-auto pb-4">
          {isDesktop === null ?
            null
          : isDesktop ?
            <WeekGrid
              weekStart={weekStart}
              entries={entries}
              slots={activePlan.slots}
              readOnly={!canEdit}
              onAdd={(date, slot) => setAddTarget({ date, slot })}
              onRemove={handleRemove}
              onMove={handleMove}
            />
          : <DayAgenda
              date={selectedDate}
              entries={entries}
              slots={activePlan.slots}
              readOnly={!canEdit}
              onDateChange={changeSelectedDate}
              onAdd={(date, slot) => setAddTarget({ date, slot })}
              onRemove={handleRemove}
              onMove={handleMove}
            />
          }
        </div>

        {addTarget && addTargetSlot && (
          <AddRecipeDrawer
            date={addTarget.date}
            slot={addTargetSlot}
            savedRecipes={savedRecipes}
            onSelect={isAdding ? () => {} : handleAdd}
            onClose={() => setAddTarget(null)}
          />
        )}

        {isSettingsOpen && (
          <PlanSettings
            plan={activePlan}
            onPlanChange={(updated) => {
              setPlans((previous) =>
                previous.map((plan) =>
                  plan.id === updated.id ? updated : plan,
                ),
              );
              // Removing a meal deletes its planned recipes, so what's on
              // screen is stale until it's re-read.
              loadEntries();
            }}
            onClose={() => setIsSettingsOpen(false)}
          />
        )}
      </div>
    </EntryDragProvider>
  );
};

export default MealPlanner;
