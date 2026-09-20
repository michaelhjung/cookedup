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
 * The Sunday on or before `iso`. Weeks start Sunday, matching the wall
 * calendars and phone calendars most people plan against.
 */
export const startOfWeek = (iso: string): string => {
  const date = parseISODate(iso);
  // getDay(): 0 = Sunday, so it is also the offset back to the week start.
  return addDays(iso, -date.getDay());
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

export const startOfMonth = (iso: string): string => `${iso.slice(0, 7)}-01`;

/** Steps whole months from the first of `iso`'s month. */
export const addMonths = (iso: string, months: number): string => {
  const date = parseISODate(startOfMonth(iso));
  date.setMonth(date.getMonth() + months);
  return toISODate(date);
};

const endOfMonth = (iso: string): string => addDays(addMonths(iso, 1), -1);

/**
 * Every date a month view shows: the Sunday on or before the 1st through
 * the Saturday on or after the last day, so rows are always whole weeks.
 * Four to six rows depending on the month, rather than a fixed six with
 * a trailing row of next month's days.
 */
export const monthGridDates = (monthStartISO: string): string[] => {
  const first = startOfWeek(startOfMonth(monthStartISO));
  const last = addDays(startOfWeek(endOfMonth(monthStartISO)), 6);
  const length = daysBetween(first, last) + 1;

  return Array.from({ length }, (_, index) => addDays(first, index));
};

/** "September 2026" */
export const formatMonthLabel = (iso: string): string =>
  parseISODate(iso).toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

/**
 * Signed whole days from `from` to `to`. Measured in UTC so a DST change
 * inside the range (a 23- or 25-hour day) can't skew the division.
 */
export const daysBetween = (from: string, to: string): number => {
  const utc = (iso: string) => {
    const [year, month, day] = iso.split("-").map(Number);
    return Date.UTC(year, month - 1, day);
  };

  return Math.round((utc(to) - utc(from)) / 86_400_000);
};
