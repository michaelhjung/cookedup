import { describe, expect, it } from "vitest";

import {
  addMinutesToFloating,
  buildCalendar,
  escapeText,
  foldLine,
  toFloatingDateTime,
} from "@lib/ics/buildCalendar";
import { PlanEvent } from "@lib/mealPlan/buildPlanEvents";

const event = (overrides: Partial<PlanEvent> = {}): PlanEvent => ({
  uid: "entry-1@cookedup.app",
  title: "Dinner: Salmon Teriyaki",
  description: "Serves 4",
  url: "https://example.com/salmon",
  date: "2026-03-02",
  startTime: "18:00",
  durationMinutes: 60,
  ...overrides,
});

const build = (events: PlanEvent[]) =>
  buildCalendar({
    name: "My Meal Plan",
    events,
    now: new Date("2026-03-01T12:00:00Z"),
  });

describe("escapeText", () => {
  it("escapes the characters RFC 5545 reserves in TEXT values", () => {
    expect(escapeText("a;b,c")).toBe("a\\;b\\,c");
  });

  it("turns newlines into the literal \\n escape", () => {
    expect(escapeText("line one\nline two")).toBe("line one\\nline two");
    expect(escapeText("crlf\r\nhere")).toBe("crlf\\nhere");
  });

  it("escapes backslashes before the escapes it introduces itself", () => {
    // A naive implementation that escapes commas first would produce
    // "a\\\\,b" here, double-escaping its own output.
    expect(escapeText("a\\,b")).toBe("a\\\\\\,b");
  });
});

describe("foldLine", () => {
  it("leaves short lines alone", () => {
    expect(foldLine("SUMMARY:Toast")).toBe("SUMMARY:Toast");
  });

  it("folds long lines onto continuation lines starting with a space", () => {
    const folded = foldLine(`SUMMARY:${"a".repeat(200)}`);
    const [first, ...rest] = folded.split("\r\n");

    expect(first.length).toBe(75);
    expect(rest.every((line) => line.startsWith(" "))).toBe(true);
    // Reassembling drops the fold markers and returns the original.
    expect(folded.replace(/\r\n /g, "")).toBe(`SUMMARY:${"a".repeat(200)}`);
  });

  it("measures the 75-octet limit in bytes, not characters", () => {
    // Each of these is 3 UTF-8 bytes, so 30 of them exceed the limit
    // even though the string is only 30 characters long.
    const line = `SUMMARY:${"あ".repeat(30)}`;
    const folded = foldLine(line);

    expect(folded).toContain("\r\n ");
    for (const segment of folded.split("\r\n"))
      expect(new TextEncoder().encode(segment).length).toBeLessThanOrEqual(75);
  });

  it("never splits a multi-byte character across a fold", () => {
    const folded = foldLine(`SUMMARY:${"あ".repeat(60)}`);
    // A split character decodes to U+FFFD; its presence means corruption.
    expect(folded).not.toContain("�");
    expect(folded.replace(/\r\n /g, "")).toBe(`SUMMARY:${"あ".repeat(60)}`);
  });
});

describe("toFloatingDateTime", () => {
  it("renders a date and time with no timezone marker", () => {
    expect(toFloatingDateTime("2026-03-02", "18:00")).toBe("20260302T180000");
  });
});

describe("addMinutesToFloating", () => {
  it("adds within the same day", () => {
    expect(addMinutesToFloating("2026-03-02", "18:00", 60)).toEqual({
      date: "2026-03-02",
      time: "19:00",
    });
  });

  it("rolls over midnight", () => {
    expect(addMinutesToFloating("2026-03-02", "23:30", 60)).toEqual({
      date: "2026-03-03",
      time: "00:30",
    });
  });

  it("does not shift across a DST boundary", () => {
    // 2026-03-08 is when US clocks spring forward. A floating time must
    // not gain or lose an hour because of it.
    expect(addMinutesToFloating("2026-03-08", "01:30", 60)).toEqual({
      date: "2026-03-08",
      time: "02:30",
    });
  });
});

describe("buildCalendar", () => {
  it("wraps events in a VCALENDAR and terminates every line with CRLF", () => {
    const calendar = build([event()]);

    expect(calendar.startsWith("BEGIN:VCALENDAR\r\n")).toBe(true);
    expect(calendar.endsWith("END:VCALENDAR\r\n")).toBe(true);
    expect(calendar).toContain("VERSION:2.0");
    expect(
      calendar.split("\n").every((line) => line === "" || line.endsWith("\r")),
    ).toBe(true);
  });

  it("emits floating start and end times", () => {
    const calendar = build([event()]);

    expect(calendar).toContain("DTSTART:20260302T180000\r\n");
    expect(calendar).toContain("DTEND:20260302T190000\r\n");
    // No trailing Z and no TZID — that is what makes them floating.
    expect(calendar).not.toMatch(/DTSTART[^\r\n]*(Z|TZID)/);
  });

  it("gives DTSTAMP a UTC timestamp, which is not floating", () => {
    expect(build([event()])).toContain("DTSTAMP:20260301T120000Z");
  });

  it("keeps the entry's uid so updates replace rather than duplicate", () => {
    expect(build([event()])).toContain("UID:entry-1@cookedup.app");
  });

  it("escapes reserved characters in the summary", () => {
    const calendar = build([
      event({ title: "Dinner: Chicken, Rice; and Peas" }),
    ]);

    expect(calendar).toContain("SUMMARY:Dinner: Chicken\\, Rice\\; and Peas");
  });

  it("omits optional properties that have no value", () => {
    const calendar = build([event({ description: "", url: undefined })]);

    expect(calendar).not.toContain("DESCRIPTION:");
    expect(calendar).not.toContain("URL:");
  });

  it("produces a valid, empty calendar when nothing is planned", () => {
    const calendar = build([]);

    expect(calendar).toContain("BEGIN:VCALENDAR");
    expect(calendar).toContain("END:VCALENDAR");
    expect(calendar).not.toContain("BEGIN:VEVENT");
  });

  it("emits one VEVENT per entry", () => {
    const calendar = build([
      event({ uid: "a@cookedup.app" }),
      event({ uid: "b@cookedup.app", date: "2026-03-03" }),
    ]);

    expect(calendar.match(/BEGIN:VEVENT/g)).toHaveLength(2);
  });
});
