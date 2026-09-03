// src/lib/ics/buildCalendar.ts
//
// A minimal RFC 5545 (iCalendar) serializer — enough to publish a
// subscribable meal-plan feed, and no more. Hand-rolled rather than
// pulled from npm because the surface we need is small and the fiddly
// parts (octet-aware line folding, text escaping) are exactly what the
// unit tests cover.
//
// Every VEVENT uses *floating* time: `DTSTART:20260302T180000` with no
// trailing Z and no TZID. RFC 5545 §3.3.5 defines that as "the local
// time in whatever timezone the viewer is in", which is the correct
// reading for a meal — dinner is at 6pm wherever you happen to be — and
// it means the feed needs no VTIMEZONE block and never drifts across DST
// boundaries.

import { PlanEvent } from "@lib/mealPlan/buildPlanEvents";

const CRLF = "\r\n";

/**
 * Escapes the characters RFC 5545 §3.3.11 reserves inside TEXT values.
 * The backslash replacement must run first, or it would escape the
 * backslashes introduced by the replacements after it.
 */
export const escapeText = (value: string): string =>
  value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r\n|\r|\n/g, "\\n");

/**
 * Content lines are limited to 75 octets, continued by starting the next
 * line with a single space (RFC 5545 §3.1).
 *
 * The limit is in octets, not characters, so this measures UTF-8 byte
 * length and never splits a multi-byte character across the fold — a
 * naive `slice(0, 75)` corrupts any recipe title with an accent or an
 * emoji in it.
 */
export const foldLine = (line: string): string => {
  const encoder = new TextEncoder();
  if (encoder.encode(line).length <= 75) return line;

  const folded: string[] = [];
  let current = "";
  let currentBytes = 0;
  // Continuation lines carry a leading space, so they have one fewer
  // octet available for content.
  let limit = 75;

  for (const character of line) {
    const size = encoder.encode(character).length;

    if (currentBytes + size > limit) {
      folded.push(current);
      current = "";
      currentBytes = 0;
      limit = 74;
    }

    current += character;
    currentBytes += size;
  }

  if (current) folded.push(current);

  return folded.join(`${CRLF} `);
};

/** "2026-03-02" + "18:00" -> "20260302T180000" */
export const toFloatingDateTime = (date: string, time: string): string =>
  `${date.replace(/-/g, "")}T${time.replace(":", "")}00`;

/**
 * Adds minutes to a floating date-time. Uses UTC internally purely as
 * fixed-offset arithmetic — the result is read back out with the `getUTC*`
 * accessors, so no timezone is ever applied to the value.
 */
export const addMinutesToFloating = (
  date: string,
  time: string,
  minutes: number,
): { date: string; time: string } => {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);

  const shifted = new Date(
    Date.UTC(year, month - 1, day, hour, minute + minutes),
  );

  const pad = (value: number) => `${value}`.padStart(2, "0");

  return {
    date: `${shifted.getUTCFullYear()}-${pad(shifted.getUTCMonth() + 1)}-${pad(shifted.getUTCDate())}`,
    time: `${pad(shifted.getUTCHours())}:${pad(shifted.getUTCMinutes())}`,
  };
};

/** UTC timestamp form used by DTSTAMP, which is not a floating value. */
export const toUTCTimestamp = (date: Date): string =>
  `${date.toISOString().replace(/[-:]/g, "").split(".")[0]}Z`;

interface CalendarOptions {
  name: string;
  events: PlanEvent[];
  /** Injectable so tests get a deterministic DTSTAMP. */
  now?: Date;
}

export const buildCalendar = ({
  name,
  events,
  now = new Date(),
}: CalendarOptions): string => {
  const dtstamp = toUTCTimestamp(now);

  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//cookedup//Meal Plan//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${escapeText(name)}`,
    // Both spellings: REFRESH-INTERVAL is the standard (RFC 7986),
    // X-PUBLISHED-TTL is what several clients actually read. Neither is
    // binding — Google in particular refreshes on its own schedule.
    "REFRESH-INTERVAL;VALUE=DURATION:PT1H",
    "X-PUBLISHED-TTL:PT1H",
  ];

  for (const event of events) {
    const end = addMinutesToFloating(
      event.date,
      event.startTime,
      event.durationMinutes,
    );

    lines.push(
      "BEGIN:VEVENT",
      `UID:${event.uid}`,
      `DTSTAMP:${dtstamp}`,
      `DTSTART:${toFloatingDateTime(event.date, event.startTime)}`,
      `DTEND:${toFloatingDateTime(end.date, end.time)}`,
      `SUMMARY:${escapeText(event.title)}`,
    );

    if (event.description)
      lines.push(`DESCRIPTION:${escapeText(event.description)}`);
    if (event.url) lines.push(`URL:${escapeText(event.url)}`);

    lines.push("END:VEVENT");
  }

  lines.push("END:VCALENDAR");

  // A trailing CRLF closes the final line, as required.
  return `${lines.map(foldLine).join(CRLF)}${CRLF}`;
};
