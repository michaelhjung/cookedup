// src/lib/mealPlan/dates.ts
//
// Calendar-date helpers for the week grid. Everything here works in
// "YYYY-MM-DD" strings and the *local* timezone deliberately: a meal
// planned for Monday is planned for Monday, and routing those dates
// through `Date#toISOString()` (which is UTC) shifts them a day for
// anyone west of Greenwich.

/** Local midnight for a "YYYY-MM-DD" string. */
export const parseISODate = (iso: string): Date => {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
};

/** "YYYY-MM-DD" for a Date, read in local time. */
export const toISODate = (date: Date): string => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const todayISO = (): string => toISODate(new Date());

export const addDays = (iso: string, days: number): string => {
  const date = parseISODate(iso);
  date.setDate(date.getDate() + days);
  return toISODate(date);
};

/**
 * The Monday on or before `iso`. Weeks start Monday because a meal
 * planner is used to plan a working week, not a Sunday-first calendar
 * month.
 */
export const startOfWeek = (iso: string): string => {
  const date = parseISODate(iso);
  // getDay(): 0 = Sunday. Sunday belongs to the week that began 6 days ago.
  const offset = (date.getDay() + 6) % 7;
  return addDays(iso, -offset);
};

export const weekDates = (weekStartISO: string): string[] =>
  Array.from({ length: 7 }, (_, index) => addDays(weekStartISO, index));

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const weekdayLabel = (iso: string): string =>
  WEEKDAY_LABELS[parseISODate(iso).getDay()];

export const dayOfMonth = (iso: string): number => parseISODate(iso).getDate();

/**
 * "Mar 2 – 8, 2026", collapsing the repeated month and year where the
 * week doesn't straddle a boundary.
 */
export const formatWeekRange = (weekStartISO: string): string => {
  const start = parseISODate(weekStartISO);
  const end = parseISODate(addDays(weekStartISO, 6));

  const month = (date: Date) =>
    date.toLocaleDateString(undefined, { month: "short" });

  if (start.getFullYear() !== end.getFullYear())
    return `${month(start)} ${start.getDate()}, ${start.getFullYear()} – ${month(end)} ${end.getDate()}, ${end.getFullYear()}`;

  if (start.getMonth() !== end.getMonth())
    return `${month(start)} ${start.getDate()} – ${month(end)} ${end.getDate()}, ${end.getFullYear()}`;

  return `${month(start)} ${start.getDate()} – ${end.getDate()}, ${end.getFullYear()}`;
};

export const formatFullDate = (iso: string): string =>
  parseISODate(iso).toLocaleDateString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
