// src/lib/pantry/time.ts

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

/**
 * "just now", "20 minutes ago", "yesterday", "3 days ago", "2 weeks ago",
 * then a plain date. For the "Marked low 3 days ago" subline, where the
 * point is a feel for staleness, not a timestamp.
 */
export const formatRelativeTime = (
  iso: string,
  now: Date = new Date(),
): string => {
  const then = new Date(iso);
  if (Number.isNaN(then.getTime())) return "";

  const elapsed = now.getTime() - then.getTime();
  if (elapsed < MINUTE) return "just now";
  if (elapsed < HOUR) {
    const minutes = Math.floor(elapsed / MINUTE);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }
  if (elapsed < DAY) {
    const hours = Math.floor(elapsed / HOUR);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }
  if (elapsed < 2 * DAY) return "yesterday";
  if (elapsed < WEEK) return `${Math.floor(elapsed / DAY)} days ago`;
  if (elapsed < 5 * WEEK) {
    const weeks = Math.floor(elapsed / WEEK);
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  }

  return then.toLocaleDateString(undefined, { month: "short", day: "numeric" });
};
