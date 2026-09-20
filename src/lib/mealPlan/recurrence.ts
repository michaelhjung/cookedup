// src/lib/mealPlan/recurrence.ts
//
// Repeat rules for planned meals. A rule is expanded into concrete dates
// here, in the browser, and the database only ever sees the resulting
// list: every occurrence is an ordinary entry row linked to a series, so
// the calendar feed, sharing, and drag-and-drop need no knowledge of
// recurrence at all.

import { addDays, daysBetween, parseISODate } from "@lib/mealPlan/dates";

export type RepeatFrequency = "daily" | "weekly" | "monthly";

/** 1st–4th, or -1 for the last one in the month. */
export type WeekOrdinal = 1 | 2 | 3 | 4 | -1;

/** "On the 14th" or "on the 2nd Tuesday". */
export type MonthlyRule =
  | { by: "day"; day: number }
  | { by: "weekday"; ordinal: WeekOrdinal; weekday: number };

export interface RepeatRule {
  frequency: RepeatFrequency;
  /** Weekly rules only: 1 = every week, 2 = every other week. */
  intervalWeeks: 1 | 2;
  /** Weekly rules only: 0 = Sunday … 6 = Saturday. */
  weekdays: number[];
  /** Monthly rules only; null otherwise. */
  monthly: MonthlyRule | null;
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

export const WEEK_ORDINALS: WeekOrdinal[] = [1, 2, 3, 4, -1];

const WEEKDAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const FULL_WEEKDAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/** A fresh rule: weekly on the meal's own weekday, ending four weeks out. */
export const defaultRepeatRule = (startDate: string): RepeatRule => ({
  frequency: "weekly",
  intervalWeeks: 1,
  weekdays: [parseISODate(startDate).getDay()],
  monthly: null,
  endDate: addDays(startDate, 27),
});

/** "On the 14th", for a meal on the 14th. */
export const dayOfMonthRule = (iso: string): MonthlyRule => ({
  by: "day",
  day: parseISODate(iso).getDate(),
});

/**
 * "On the 2nd Tuesday", for a meal on the second Tuesday. A fifth
 * occurrence becomes "last", because most months don't have a fifth.
 */
export const weekdayOfMonthRule = (iso: string): MonthlyRule => {
  const date = parseISODate(iso);
  const ordinal = Math.floor((date.getDate() - 1) / 7) + 1;

  return {
    by: "weekday",
    ordinal: ordinal > 4 ? -1 : (ordinal as WeekOrdinal),
    weekday: date.getDay(),
  };
};

const daysInMonth = (date: Date): number =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const matchesMonthlyRule = (rule: MonthlyRule, date: Date): boolean => {
  if (rule.by === "day") return date.getDate() === rule.day;
  if (date.getDay() !== rule.weekday) return false;

  const dayOfMonth = date.getDate();
  if (rule.ordinal === -1) return dayOfMonth + 7 > daysInMonth(date);

  return Math.floor((dayOfMonth - 1) / 7) + 1 === rule.ordinal;
};

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
  // Offset from Sunday of the start week, so fortnight boundaries line
  // up with the calendar's Sunday-first rows.
  const startOffset = parseISODate(startDate).getDay();
  const dates: string[] = [];

  for (let index = 0; index <= span; index += 1) {
    const iso = addDays(startDate, index);
    const date = parseISODate(iso);

    if (rule.frequency === "daily") {
      dates.push(iso);
      continue;
    }

    if (rule.frequency === "monthly") {
      if (rule.monthly && matchesMonthlyRule(rule.monthly, date))
        dates.push(iso);
      continue;
    }

    const week = Math.floor((startOffset + index) / 7);
    if (week % rule.intervalWeeks !== 0) continue;
    if (!chosen.has(date.getDay())) continue;

    dates.push(iso);
  }

  return dates;
};

const isValidMonthlyRule = (rule: MonthlyRule): boolean => {
  if (rule.by === "day")
    return Number.isInteger(rule.day) && rule.day >= 1 && rule.day <= 31;

  return (
    WEEK_ORDINALS.includes(rule.ordinal) &&
    Number.isInteger(rule.weekday) &&
    rule.weekday >= 0 &&
    rule.weekday <= 6
  );
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
  if (
    rule.frequency === "monthly" &&
    (!rule.monthly || !isValidMonthlyRule(rule.monthly))
  )
    return "Pick a day of the month.";

  return null;
};

/**
 * Whether two rules would produce the same meals. Only the fields the
 * frequency actually uses count, so switching to daily and back doesn't
 * register as a change.
 */
export const isSameRepeatRule = (a: RepeatRule, b: RepeatRule): boolean => {
  if (a.frequency !== b.frequency || a.endDate !== b.endDate) return false;

  if (a.frequency === "weekly") {
    const sortedA = [...a.weekdays].sort().join();
    const sortedB = [...b.weekdays].sort().join();
    return a.intervalWeeks === b.intervalWeeks && sortedA === sortedB;
  }

  if (a.frequency === "monthly") {
    if (!a.monthly || !b.monthly) return a.monthly === b.monthly;
    if (a.monthly.by !== b.monthly.by) return false;
    if (a.monthly.by === "day" && b.monthly.by === "day")
      return a.monthly.day === b.monthly.day;
    if (a.monthly.by === "weekday" && b.monthly.by === "weekday")
      return (
        a.monthly.ordinal === b.monthly.ordinal &&
        a.monthly.weekday === b.monthly.weekday
      );
  }

  return true;
};

const formatEndDate = (iso: string): string =>
  parseISODate(iso).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

/** 1 -> "1st", 22 -> "22nd", 13 -> "13th". */
export const formatOrdinal = (n: number): string => {
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${n}th`;
  const suffix = ["th", "st", "nd", "rd"][n % 10] ?? "th";
  return `${n}${suffix}`;
};

/** "the 14th" / "the 2nd Tuesday" / "the last Friday" */
export const describeMonthlyRule = (rule: MonthlyRule): string => {
  if (rule.by === "day") return `the ${formatOrdinal(rule.day)}`;

  const ordinal = rule.ordinal === -1 ? "last" : formatOrdinal(rule.ordinal);
  return `the ${ordinal} ${FULL_WEEKDAY_NAMES[rule.weekday]}`;
};

/** "Every week on Mon, Wed, Fri until Oct 31, 2026" */
export const describeRepeatRule = (rule: RepeatRule): string => {
  const until = `until ${formatEndDate(rule.endDate)}`;

  if (rule.frequency === "daily") return `Every day ${until}`;

  if (rule.frequency === "monthly") {
    const on = rule.monthly ? ` on ${describeMonthlyRule(rule.monthly)}` : "";
    return `Every month${on} ${until}`;
  }

  const days = [...rule.weekdays]
    .sort((a, b) => a - b)
    .map((day) => WEEKDAY_NAMES[day])
    .join(", ");
  const cadence = rule.intervalWeeks === 1 ? "Every week" : "Every 2 weeks";

  return `${cadence} on ${days} ${until}`;
};
