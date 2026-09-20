// src/lib/mealPlan/recurrence.ts
//
// Repeat rules for planned meals. A rule is expanded into concrete dates
// here, in the browser, and the database only ever sees the resulting
// list: every occurrence is an ordinary entry row linked to a series, so
// the calendar feed, sharing, and drag-and-drop need no knowledge of
// recurrence at all.

import { addDays, daysBetween, parseISODate } from "@lib/mealPlan/dates";

export type RepeatFrequency = "daily" | "weekly";

export interface RepeatRule {
  frequency: RepeatFrequency;
  /** Weekly rules only: 1 = every week, 2 = every other week. */
  intervalWeeks: 1 | 2;
  /** Weekly rules only: 0 = Sunday … 6 = Saturday. */
  weekdays: number[];
  /** "YYYY-MM-DD", inclusive. */
  endDate: string;
}

/** A rule as stored, with the date it was anchored on. */
export interface RepeatSeries extends RepeatRule {
  id: string;
  startDate: string;
}

/**
 * Occurrences are real rows, so a rule has to end. A year is long enough
 * for "every Sunday this year" and short enough that one click can't
 * create thousands of entries.
 */
export const MAX_REPEAT_DAYS = 366;

const WEEKDAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** A fresh rule: weekly on the meal's own weekday, ending four weeks out. */
export const defaultRepeatRule = (startDate: string): RepeatRule => ({
  frequency: "weekly",
  intervalWeeks: 1,
  weekdays: [parseISODate(startDate).getDay()],
  endDate: addDays(startDate, 27),
});

/**
 * The dates a rule produces from `startDate` through `endDate`,
 * inclusive of both. For a fortnightly rule the "on" weeks are counted
 * from the week containing `startDate`.
 */
export const expandRepeatRule = (
  rule: RepeatRule,
  startDate: string,
): string[] => {
  const span = daysBetween(startDate, rule.endDate);
  if (span < 0) return [];

  const chosen = new Set(rule.weekdays);
  // Offset from Monday of the start week, so week boundaries line up
  // with the calendar's Monday-first rows.
  const startOffset = (parseISODate(startDate).getDay() + 6) % 7;
  const dates: string[] = [];

  for (let index = 0; index <= span; index += 1) {
    const date = addDays(startDate, index);

    if (rule.frequency === "daily") {
      dates.push(date);
      continue;
    }

    const week = Math.floor((startOffset + index) / 7);
    if (week % rule.intervalWeeks !== 0) continue;
    if (!chosen.has(parseISODate(date).getDay())) continue;

    dates.push(date);
  }

  return dates;
};

/** A human-readable problem with the rule, or null when it's usable. */
export const validateRepeatRule = (
  rule: RepeatRule,
  startDate: string,
): string | null => {
  const span = daysBetween(startDate, rule.endDate);

  if (Number.isNaN(span) || span < 0)
    return "The end date has to be on or after the first meal.";
  if (span > MAX_REPEAT_DAYS)
    return "A meal can repeat for up to a year at a time.";
  if (rule.frequency === "weekly" && rule.weekdays.length === 0)
    return "Pick at least one day of the week.";

  return null;
};

const formatEndDate = (iso: string): string =>
  parseISODate(iso).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

/** "Every week on Mon, Wed, Fri until Oct 31, 2026" */
export const describeRepeatRule = (rule: RepeatRule): string => {
  const until = `until ${formatEndDate(rule.endDate)}`;

  if (rule.frequency === "daily") return `Every day ${until}`;

  const days = [...rule.weekdays]
    .sort((a, b) => a - b)
    .map((day) => WEEKDAY_NAMES[day])
    .join(", ");
  const cadence = rule.intervalWeeks === 1 ? "Every week" : "Every 2 weeks";

  return `${cadence} on ${days} ${until}`;
};
