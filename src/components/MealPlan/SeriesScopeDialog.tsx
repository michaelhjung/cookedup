"use client";

import { Repeat } from "lucide-react";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { describeRepeatRule } from "@lib/mealPlan/recurrence";
import { MealPlanEntry, SeriesScope } from "@lib/mealPlan/types";

interface SeriesScopeDialogProps {
  entry: MealPlanEntry;
  /** Editing the rule can't apply to one meal, so it offers two scopes. */
  action: "move" | "remove" | "edit";
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onChoose: (_scope: SeriesScope) => void;
  onCancel: () => void;
}

/**
 * The "this meal / this and following / all" prompt a calendar app shows
 * before touching one occurrence of a repeating event. Choosing is the
 * whole interaction, so the buttons are the dialog rather than radio
 * inputs plus a confirm.
 */
const SeriesScopeDialog: React.FC<SeriesScopeDialogProps> = ({
  entry,
  action,
  onChoose,
  onCancel,
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onCancel]);

  const verb =
    action === "move" ? "Move"
    : action === "remove" ? "Remove"
    : "Change";
  const options: { scope: SeriesScope; label: string }[] = [
    ...(action === "edit" ?
      []
    : [{ scope: "one" as const, label: "This meal only" }]),
    { scope: "following", label: "This and following meals" },
    { scope: "all", label: "All meals in the series" },
  ];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="series-scope-title"
      className="fixed inset-0 z-[70] flex items-center justify-center bg-scrim p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onCancel();
      }}
    >
      <div className="w-full max-w-xs rounded-lg border border-line bg-surface-raised p-4 shadow-2xl">
        <h2
          id="series-scope-title"
          className="text-sm font-semibold"
        >
          {verb} repeating meal?
        </h2>
        <p className="mt-1 line-clamp-2 text-xs text-ink-muted">
          {entry.recipe.recipe.label}
        </p>
        {entry.series && (
          <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-ink-muted">
            <Repeat className="size-3 shrink-0" />
            {describeRepeatRule(entry.series)}
          </p>
        )}

        <div className="mt-3 flex flex-col gap-1.5">
          {options.map((option, index) => (
            <button
              key={option.scope}
              type="button"
              autoFocus={index === 0}
              onClick={() => onChoose(option.scope)}
              className={`
                h-9 rounded-md border px-3 text-left text-xs font-medium
                transition-colors
                ${
                  action === "remove" ?
                    "border-line hover:border-danger hover:text-danger"
                  : "border-line hover:border-line-strong hover:bg-well"
                }
              `}
            >
              {option.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onCancel}
          className="mt-2 h-8 w-full rounded-md text-xs text-ink-muted transition-colors hover:text-ink"
        >
          Cancel
        </button>
      </div>
    </div>,
    document.body,
  );
};

export default SeriesScopeDialog;
