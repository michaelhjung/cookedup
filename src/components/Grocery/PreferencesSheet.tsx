"use client";

import React, { useState } from "react";

import ActionSheet from "@components/ActionSheet";
import { savePantrySettings } from "@lib/grocery/client";
import { PantrySettings, RANGE_UNITS, RangeUnit } from "@lib/grocery/types";

interface PreferencesSheetProps {
  userId: string;
  settings: PantrySettings;
  onChange: (_settings: PantrySettings) => void;
  onClose: () => void;
}

const COUNTS = Array.from({ length: 31 }, (_, index) => index + 1);

const Toggle: React.FC<{
  id: string;
  isOn: boolean;
  label: string;
  hint: string;
  onChange: (_next: boolean) => void;
}> = ({ id, isOn, label, hint, onChange }) => (
  <div className="flex items-center gap-3 py-3">
    <label
      htmlFor={id}
      className="min-w-0 flex-1 cursor-pointer"
    >
      <span className="block text-[14.5px] font-medium">{label}</span>
      <span className="block text-xs text-ink-muted">{hint}</span>
    </label>
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={isOn}
      onClick={() => onChange(!isOn)}
      className={`
        relative h-6 w-10 shrink-0 rounded-full transition-colors
        ${isOn ? "bg-accent" : "bg-line-strong"}
      `}
    >
      <span
        aria-hidden
        className={`
          absolute top-0.5 size-5 rounded-full bg-surface-raised shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-transform
          ${isOn ? "translate-x-[18px]" : "translate-x-0.5"}
        `}
      />
    </button>
  </div>
);

/**
 * Per-person preferences for check-off and the generate sheet. Saved
 * as each control changes; the sheet is closed with the scrim.
 */
const PreferencesSheet: React.FC<PreferencesSheetProps> = ({
  userId,
  settings,
  onChange,
  onClose,
}) => {
  const [error, setError] = useState("");

  const update = (changes: Partial<PantrySettings>) => {
    const next = { ...settings, ...changes };
    onChange(next);
    savePantrySettings(userId, next).catch((caught) => {
      console.error("Failed to save preferences:", caught);
      setError("Couldn't save that preference.");
    });
  };

  const toggleSource = (source: "pantry" | "plan", isOn: boolean) =>
    update({
      defaultSources:
        isOn ?
          [...new Set([...settings.defaultSources, source])]
        : settings.defaultSources.filter((candidate) => candidate !== source),
    });

  return (
    <ActionSheet
      title="Preferences"
      onClose={onClose}
    >
      <div className="px-1 sm:px-2.5">
        <p className="pt-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-muted">
          When I check something off
        </p>
        <div className="divide-y divide-line">
          <Toggle
            id="pref-restock"
            isOn={settings.restockOnCheck}
            label="Mark it Stocked in the pantry"
            hint="If the list's pantry has a matching item"
            onChange={(isOn) => update({ restockOnCheck: isOn })}
          />
          <Toggle
            id="pref-add-new"
            isOn={settings.addNewOnCheck}
            label="Add new items to the pantry"
            hint="Things the pantry didn't have get added as Stocked"
            onChange={(isOn) => update({ addNewOnCheck: isOn })}
          />
        </div>

        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-muted">
          Adding items from
        </p>
        <div className="flex flex-col">
          {(
            [
              ["pantry", "Restock items from the pantry"],
              ["plan", "Ingredients from a meal plan"],
            ] as const
          ).map(([source, label]) => (
            <label
              key={source}
              className="flex cursor-pointer items-center gap-3 py-2.5 text-[14.5px]"
            >
              <input
                type="checkbox"
                checked={settings.defaultSources.includes(source)}
                onChange={(event) => toggleSource(source, event.target.checked)}
                className="size-5 accent-accent"
              />
              {label}
            </label>
          ))}
        </div>

        <div className="flex items-center gap-2 py-2 text-sm">
          <span className="text-ink-muted">Plan range: next</span>
          <select
            value={settings.defaultRangeCount}
            onChange={(event) =>
              update({ defaultRangeCount: Number(event.target.value) })
            }
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
            value={settings.defaultRangeUnit}
            onChange={(event) =>
              update({ defaultRangeUnit: event.target.value as RangeUnit })
            }
            aria-label="Days, weeks or months"
            className="h-10 rounded-md border border-line-strong bg-surface-raised px-2 text-sm"
          >
            {RANGE_UNITS.map((option) => (
              <option
                key={option}
                value={option}
              >
                {settings.defaultRangeCount === 1 ?
                  option.slice(0, -1)
                : option}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p
            role="alert"
            className="pb-2 text-xs text-danger"
          >
            {error}
          </p>
        )}
      </div>
    </ActionSheet>
  );
};

export default PreferencesSheet;
