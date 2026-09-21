"use client";

import React, { useEffect, useMemo, useState } from "react";

import ActionSheet from "@components/ActionSheet";
import {
  extractPlanIngredients,
  mergeNewLines,
  pantryRestockLines,
  rangeToDates,
} from "@lib/grocery/generate";
import {
  NewLine,
  PantrySettings,
  RANGE_UNITS,
  RangeUnit,
} from "@lib/grocery/types";
import { fetchEntries } from "@lib/mealPlan/client";
import { todayISO } from "@lib/mealPlan/dates";
import { MealPlan, MealPlanEntry } from "@lib/mealPlan/types";
import { PantryItem } from "@lib/pantry/types";

interface GenerateSheetProps {
  /** The linked pantry's items; null while they're still loading. */
  pantryItems: PantryItem[] | null;
  /** The linked pantry's name, or null when the list has none. */
  pantryName: string | null;
  plans: MealPlan[];
  /** Keys already on the list, so the preview can say what's skipped. */
  existingKeys: Set<string>;
  settings: PantrySettings;
  /** Pre-ticks the pantry source, for arrivals from the pantry page. */
  preferPantry?: boolean;
  onAdd: (_lines: NewLine[]) => Promise<void>;
  onClose: () => void;
}

const COUNTS = Array.from({ length: 31 }, (_, index) => index + 1);

/**
 * "Add items from…": the pantry's low and out items, and/or what the
 * next N days/weeks/months of a meal plan need. Shows what it would
 * add before adding. Never removes anything.
 */
const GenerateSheet: React.FC<GenerateSheetProps> = ({
  pantryItems,
  pantryName,
  plans,
  existingKeys,
  settings,
  preferPantry = false,
  onAdd,
  onClose,
}) => {
  const hasPantry = pantryName !== null;
  const hasPlans = plans.length > 0;

  const [usePantry, setUsePantry] = useState(
    hasPantry && (preferPantry || settings.defaultSources.includes("pantry")),
  );
  const [usePlan, setUsePlan] = useState(
    hasPlans && !preferPantry && settings.defaultSources.includes("plan"),
  );
  const [planId, setPlanId] = useState(plans[0]?.id ?? "");
  const [count, setCount] = useState(settings.defaultRangeCount);
  const [unit, setUnit] = useState<RangeUnit>(settings.defaultRangeUnit);
  const [entries, setEntries] = useState<MealPlanEntry[] | null>(null);
  const [isLoadingPlan, setIsLoadingPlan] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState("");

  const range = useMemo(
    () => rangeToDates(count, unit, todayISO()),
    [count, unit],
  );

  // The plan's meals in range, re-read whenever the plan or range moves.
  useEffect(() => {
    if (!usePlan || !planId) {
      setEntries(null);
      return;
    }

    let cancelled = false;
    setIsLoadingPlan(true);
    fetchEntries(planId, range.start, range.end)
      .then((loaded) => {
        if (!cancelled) setEntries(loaded);
      })
      .catch((caught) => {
        console.error("Failed to read plan:", caught);
        if (!cancelled) setError("Couldn't read that meal plan.");
      })
      .finally(() => {
        if (!cancelled) setIsLoadingPlan(false);
      });

    return () => {
      cancelled = true;
    };
  }, [usePlan, planId, range.start, range.end]);

  const restockLines = useMemo(
    () => (usePantry && pantryItems ? pantryRestockLines(pantryItems) : []),
    [usePantry, pantryItems],
  );
  const planLines = useMemo(
    () =>
      usePlan && entries ?
        extractPlanIngredients(entries, pantryItems ?? [])
      : [],
    [usePlan, entries, pantryItems],
  );
  const merged = useMemo(
    () => mergeNewLines([planLines, restockLines], existingKeys),
    [planLines, restockLines, existingKeys],
  );

  const restockCount = pantryItems ? pantryRestockLines(pantryItems).length : 0;
  const isWaiting =
    (usePlan && isLoadingPlan) || (usePantry && pantryItems === null);
  const canAdd = merged.lines.length > 0 && !isWaiting && !isAdding;

  const handleAdd = async () => {
    setIsAdding(true);
    setError("");
    try {
      await onAdd(merged.lines);
      onClose();
    } catch (caught) {
      console.error("Failed to add lines:", caught);
      setError("Couldn't add those items.");
      setIsAdding(false);
    }
  };

  const checkbox = (
    id: string,
    isChecked: boolean,
    isDisabled: boolean,
    onChange: (_next: boolean) => void,
    label: string,
    hint: string,
  ) => (
    <label
      htmlFor={id}
      className={`flex items-start gap-3 py-2.5 ${isDisabled ? "opacity-50" : "cursor-pointer"}`}
    >
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-0.5 size-5 shrink-0 accent-accent"
      />
      <span className="min-w-0 flex-1">
        <span className="block text-[14.5px] font-medium">{label}</span>
        <span className="block text-xs text-ink-muted">{hint}</span>
      </span>
    </label>
  );

  return (
    <ActionSheet
      title="Add items from"
      onClose={onClose}
    >
      <div className="px-1 sm:px-2.5">
        {checkbox(
          "gen-pantry",
          usePantry,
          !hasPantry,
          setUsePantry,
          `Restock items${pantryName ? ` in ${pantryName}` : ""}`,
          !hasPantry ? "No pantry linked to this list"
          : pantryItems === null ? "Reading the pantry..."
          : `${restockCount} ${restockCount === 1 ? "item" : "items"} marked Low or Out`,
        )}

        {checkbox(
          "gen-plan",
          usePlan,
          !hasPlans,
          setUsePlan,
          "Ingredients from a meal plan",
          hasPlans ?
            "Everything the next meals need that isn't stocked"
          : "No meal plans yet",
        )}

        {usePlan && hasPlans && (
          <div className="mb-2 ml-8 flex flex-col gap-2">
            {plans.length > 1 && (
              <select
                value={planId}
                onChange={(event) => setPlanId(event.target.value)}
                aria-label="Meal plan"
                className="h-10 w-full rounded-md border border-line-strong bg-surface-raised px-2.5 text-sm"
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
            <div className="flex items-center gap-2 text-sm">
              <span className="text-ink-muted">Next</span>
              <select
                value={count}
                onChange={(event) => setCount(Number(event.target.value))}
                aria-label="How many"
                className="h-10 rounded-md border border-line-strong bg-surface-raised px-2 text-sm"
              >
                {COUNTS.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select>
              <select
                value={unit}
                onChange={(event) => setUnit(event.target.value as RangeUnit)}
                aria-label="Days, weeks or months"
                className="h-10 rounded-md border border-line-strong bg-surface-raised px-2 text-sm"
              >
                {RANGE_UNITS.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {count === 1 ? option.slice(0, -1) : option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <p
          aria-live="polite"
          className="my-3 rounded-md bg-well px-3 py-2 text-[13px] text-ink-muted"
        >
          {isWaiting ?
            "Working it out..."
          : <>
              Adds{" "}
              <span className="font-medium text-ink">
                {merged.lines.length}{" "}
                {merged.lines.length === 1 ? "item" : "items"}
              </span>
              {merged.skipped > 0 &&
                ` · ${merged.skipped} already on the list will be skipped`}
              {!usePantry && !usePlan && " · pick a source above"}
            </>
          }
        </p>

        {error && (
          <p
            role="alert"
            className="mb-2 text-xs text-danger"
          >
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={handleAdd}
          disabled={!canAdd}
          className="h-11 w-full rounded-md bg-accent text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isAdding ?
            "Adding..."
          : `Add ${merged.lines.length} ${merged.lines.length === 1 ? "item" : "items"}`
          }
        </button>
      </div>
    </ActionSheet>
  );
};

export default GenerateSheet;
