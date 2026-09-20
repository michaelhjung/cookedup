"use client";

import React from "react";

import { addDays, parseISODate } from "@lib/mealPlan/dates";
import {
  MAX_REPEAT_DAYS,
  RepeatRule,
  defaultRepeatRule,
  validateRepeatRule,
} from "@lib/mealPlan/recurrence";

interface RepeatRuleEditorProps {
  /** The date of the meal the rule starts from. */
  startDate: string;
  /** null = doesn't repeat. */
  rule: RepeatRule | null;
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onChange: (_rule: RepeatRule | null) => void;
  /** Compact spacing for the chip popover. */
  dense?: boolean;
}

type Cadence = "none" | "daily" | "weekly" | "biweekly";

// Monday-first to match the calendar's columns; values are getDay().
const WEEKDAY_OPTIONS: { value: number; label: string }[] = [
  { value: 1, label: "M" },
  { value: 2, label: "T" },
  { value: 3, label: "W" },
  { value: 4, label: "T" },
  { value: 5, label: "F" },
  { value: 6, label: "S" },
  { value: 0, label: "S" },
];

const WEEKDAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const cadenceOf = (rule: RepeatRule | null): Cadence => {
  if (!rule) return "none";
  if (rule.frequency === "daily") return "daily";
  return rule.intervalWeeks === 2 ? "biweekly" : "weekly";
};

/**
 * "Doesn't repeat / Every day / Every week / Every 2 weeks", then the
 * weekday toggles and an end date once something is chosen. Nothing here
 * writes anywhere; the parent decides when the rule gets applied.
 */
const RepeatRuleEditor: React.FC<RepeatRuleEditorProps> = ({
  startDate,
  rule,
  onChange,
  dense = false,
}) => {
  const cadence = cadenceOf(rule);
  const problem = rule ? validateRepeatRule(rule, startDate) : null;

  const changeCadence = (next: Cadence) => {
    if (next === "none") return onChange(null);

    const base = rule ?? defaultRepeatRule(startDate);
    if (next === "daily") return onChange({ ...base, frequency: "daily" });

    onChange({
      ...base,
      frequency: "weekly",
      intervalWeeks: next === "biweekly" ? 2 : 1,
      // Coming from "daily", the weekday set may be stale or empty.
      weekdays:
        base.weekdays.length > 0 ?
          base.weekdays
        : [parseISODate(startDate).getDay()],
    });
  };

  const toggleWeekday = (day: number) => {
    if (!rule) return;

    const weekdays =
      rule.weekdays.includes(day) ?
        rule.weekdays.filter((candidate) => candidate !== day)
      : [...rule.weekdays, day];

    onChange({ ...rule, weekdays });
  };

  const selectClass =
    "h-8 w-full rounded-md border border-line bg-surface-raised px-2 text-xs outline-none focus:border-ink";

  return (
    <div className={dense ? "flex flex-col gap-2" : "flex flex-col gap-2.5"}>
      <select
        value={cadence}
        aria-label="Repeat"
        onChange={(event) => changeCadence(event.target.value as Cadence)}
        className={selectClass}
      >
        <option value="none">Doesn&rsquo;t repeat</option>
        <option value="daily">Every day</option>
        <option value="weekly">Every week</option>
        <option value="biweekly">Every 2 weeks</option>
      </select>

      {rule && (
        <>
          {rule.frequency === "weekly" && (
            <div
              role="group"
              aria-label="Days of the week"
              className="flex gap-1"
            >
              {WEEKDAY_OPTIONS.map((day) => {
                const isOn = rule.weekdays.includes(day.value);
                return (
                  <button
                    key={day.value}
                    type="button"
                    aria-pressed={isOn}
                    aria-label={WEEKDAY_NAMES[day.value]}
                    title={WEEKDAY_NAMES[day.value]}
                    onClick={() => toggleWeekday(day.value)}
                    className={`
                      flex h-7 flex-1 items-center justify-center
                      rounded-md border text-[11px] font-semibold
                      transition-colors
                      ${
                        isOn ?
                          "border-accent bg-accent text-on-accent"
                        : "border-line bg-surface-raised text-ink-muted hover:border-line-strong hover:text-ink"
                      }
                    `}
                  >
                    {day.label}
                  </button>
                );
              })}
            </div>
          )}

          <label className="flex items-center gap-2 text-xs">
            <span className="shrink-0 text-ink-muted">Until</span>
            <input
              type="date"
              value={rule.endDate}
              min={startDate}
              max={addDays(startDate, MAX_REPEAT_DAYS)}
              onChange={(event) =>
                onChange({ ...rule, endDate: event.target.value })
              }
              className="h-8 min-w-0 flex-1 rounded-md border border-line bg-transparent px-2 text-xs outline-none focus:border-ink"
            />
          </label>

          {problem && <p className="text-[11px] text-danger">{problem}</p>}
        </>
      )}
    </div>
  );
};

export default RepeatRuleEditor;
