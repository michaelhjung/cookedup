"use client";

import { User } from "@supabase/supabase-js";
import { CalendarPlus, Check } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Popover from "@components/Popover";
import Tooltip from "@components/Tooltip";
import { Hit } from "@interfaces/edamam";
import { addEntry, fetchPlans } from "@lib/mealPlan/client";
import { todayISO } from "@lib/mealPlan/dates";
import { MealPlan, SlotId, formatSlotTime } from "@lib/mealPlan/types";

interface AddToPlanButtonProps {
  hit: Hit;
  user: User | null;
}

/**
 * The second way into the planner: schedule a recipe straight from the
 * results grid without leaving the search. Plans load lazily on first
 * open so the recipes list doesn't pay for a query most visitors never
 * need.
 */
const AddToPlanButton: React.FC<AddToPlanButtonProps> = ({ hit, user }) => {
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [plans, setPlans] = useState<MealPlan[] | null>(null);
  const [planId, setPlanId] = useState("");
  const [date, setDate] = useState(todayISO());
  const [slot, setSlot] = useState<SlotId>("");
  const [isSaving, setIsSaving] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen || !user || plans !== null) return;

    fetchPlans(user.id)
      .then((loaded) => {
        const editable = loaded.filter((plan) => plan.role !== "viewer");
        setPlans(editable);
        setPlanId((current) => current || (editable[0]?.id ?? ""));
      })
      .catch((caught) => {
        console.error("Failed to load meal plans:", caught);
        setError("Couldn't load your meal plans.");
        setPlans([]);
      });
  }, [isOpen, user, plans]);

  // Slots are per-plan, so the default can only be chosen once a plan is
  // selected. Dinner if the plan has one, otherwise the latest meal of
  // the day — the likeliest thing someone is planning ahead for.
  const activePlan = plans?.find((plan) => plan.id === planId) ?? null;

  useEffect(() => {
    if (!activePlan) return;

    setSlot((current) => {
      if (activePlan.slots.some((candidate) => candidate.id === current))
        return current;

      const dinner = activePlan.slots.find((candidate) =>
        candidate.label.toLowerCase().includes("dinner"),
      );
      return (
        dinner?.id ?? activePlan.slots[activePlan.slots.length - 1]?.id ?? ""
      );
    });
  }, [activePlan]);

  useEffect(() => {
    if (!justAdded) return;
    const timer = setTimeout(() => setJustAdded(false), 2000);
    return () => clearTimeout(timer);
  }, [justAdded]);

  const submit = async () => {
    if (!planId || !slot) return;

    setIsSaving(true);
    setError("");

    try {
      await addEntry(planId, hit, date, slot);
      setJustAdded(true);
      setIsOpen(false);
    } catch (caught) {
      console.error("Failed to add recipe to plan:", caught);
      setError(
        caught instanceof Error ? caught.message : "Couldn't add that recipe.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  const tooltipText =
    !user ? "Log in to plan this recipe"
    : justAdded ? "Added to your meal plan"
    : "Add this recipe to your meal plan";

  return (
    // The whole card is a link to the recipe, so every interaction in
    // here has to stop the click from navigating away.
    <div
      className="relative"
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
      }}
    >
      <Tooltip text={tooltipText}>
        <button
          ref={setAnchor}
          type="button"
          aria-label="Add to meal plan"
          disabled={!user}
          onClick={() => {
            if (!user) return;
            setIsOpen((previous) => !previous);
          }}
          className={user ? "cursor-pointer" : "cursor-not-allowed"}
        >
          {justAdded ?
            <Check
              size={28}
              strokeWidth={1.5}
              className="text-green-500"
            />
          : <CalendarPlus
              size={28}
              strokeWidth={1}
            />
          }
        </button>
      </Tooltip>

      {isOpen && (
        <Popover
          anchor={anchor}
          onClose={() => setIsOpen(false)}
        >
          {plans === null ?
            <p className="text-xs text-gray-400">Loading your plans...</p>
          : plans.length === 0 ?
            <div className="flex flex-col gap-1.5">
              <p className="text-xs text-gray-400">
                {error || "You don't have a meal plan you can edit yet."}
              </p>
              <Link
                href="/plan"
                className="text-xs font-semibold text-[var(--pastel-blue)] hover:underline"
              >
                Go to Meal Plan →
              </Link>
            </div>
          : <div className="flex flex-col gap-2">
              {plans.length > 1 && (
                <select
                  value={planId}
                  onChange={(event) => setPlanId(event.target.value)}
                  className="w-full rounded border border-zinc-500/30 bg-[var(--background-color)] px-2 py-1 text-xs"
                >
                  {plans.map((plan) => (
                    <option
                      key={plan.id}
                      value={plan.id}
                    >
                      {plan.name}
                    </option>
                  ))}
                </select>
              )}

              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="w-full rounded border border-zinc-500/30 bg-transparent px-2 py-1 text-xs"
              />

              <select
                value={slot}
                onChange={(event) => setSlot(event.target.value)}
                className="w-full rounded border border-zinc-500/30 bg-[var(--background-color)] px-2 py-1 text-xs"
              >
                {(activePlan?.slots ?? []).map((candidate) => (
                  <option
                    key={candidate.id}
                    value={candidate.id}
                  >
                    {candidate.label} · {formatSlotTime(candidate.time)}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={submit}
                disabled={isSaving}
                className="rounded-3xl bg-[var(--pastel-blue)] px-3 py-1.5 text-xs font-semibold text-blue-900 disabled:opacity-50"
              >
                {isSaving ? "Adding..." : "Add to plan"}
              </button>

              {error && <p className="text-[0.65rem] text-red-400">{error}</p>}
            </div>
          }
        </Popover>
      )}
    </div>
  );
};

export default AddToPlanButton;
