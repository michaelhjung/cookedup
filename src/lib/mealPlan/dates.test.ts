import { describe, expect, it } from "vitest";

import {
  addDays,
  formatWeekRange,
  parseISODate,
  startOfWeek,
  toISODate,
  weekDates,
} from "@lib/mealPlan/dates";

describe("toISODate / parseISODate", () => {
  it("round-trips a date without shifting it", () => {
    // The bug this guards against: going through Date#toISOString() reads
    // the value in UTC, which moves the date back a day for anyone west
    // of Greenwich — a Monday dinner shows up on Sunday.
    for (const iso of ["2026-01-01", "2026-03-08", "2026-06-15", "2026-12-31"])
      expect(toISODate(parseISODate(iso))).toBe(iso);
  });

  it("zero-pads single-digit months and days", () => {
    expect(toISODate(new Date(2026, 2, 5))).toBe("2026-03-05");
  });
});

describe("addDays", () => {
  it("moves forward and backward within a month", () => {
    expect(addDays("2026-03-02", 5)).toBe("2026-03-07");
    expect(addDays("2026-03-07", -5)).toBe("2026-03-02");
  });

  it("crosses month boundaries", () => {
    expect(addDays("2026-03-31", 1)).toBe("2026-04-01");
    expect(addDays("2026-03-01", -1)).toBe("2026-02-28");
  });

  it("crosses year boundaries", () => {
    expect(addDays("2026-12-31", 1)).toBe("2027-01-01");
  });

  it("handles leap days", () => {
    expect(addDays("2028-02-28", 1)).toBe("2028-02-29");
    expect(addDays("2028-02-29", 1)).toBe("2028-03-01");
  });

  it("advances exactly one day across a DST transition", () => {
    // US clocks spring forward on 2026-03-08 and fall back on 2026-11-01.
    // Adding 24 hours would land on the wrong date on those days.
    expect(addDays("2026-03-07", 1)).toBe("2026-03-08");
    expect(addDays("2026-03-08", 1)).toBe("2026-03-09");
    expect(addDays("2026-10-31", 1)).toBe("2026-11-01");
    expect(addDays("2026-11-01", 1)).toBe("2026-11-02");
  });
});

describe("startOfWeek", () => {
  it("returns the Monday on or before the given date", () => {
    // 2026-03-02 is a Monday; 2026-03-08 is the Sunday that ends its week.
    expect(startOfWeek("2026-03-02")).toBe("2026-03-02");
    expect(startOfWeek("2026-03-05")).toBe("2026-03-02");
    expect(startOfWeek("2026-03-08")).toBe("2026-03-02");
  });

  it("treats Sunday as the end of the previous week, not the start of a new one", () => {
    expect(startOfWeek("2026-03-08")).not.toBe("2026-03-08");
  });

  it("is idempotent", () => {
    const monday = startOfWeek("2026-06-17");
    expect(startOfWeek(monday)).toBe(monday);
  });
});

describe("weekDates", () => {
  it("returns seven consecutive days starting at the given date", () => {
    expect(weekDates("2026-03-02")).toEqual([
      "2026-03-02",
      "2026-03-03",
      "2026-03-04",
      "2026-03-05",
      "2026-03-06",
      "2026-03-07",
      "2026-03-08",
    ]);
  });
});

describe("formatWeekRange", () => {
  it("collapses the repeated month within a single month", () => {
    expect(formatWeekRange("2026-03-02")).toBe("Mar 2 – 8, 2026");
  });

  it("names both months when the week straddles a boundary", () => {
    expect(formatWeekRange("2026-03-30")).toBe("Mar 30 – Apr 5, 2026");
  });

  it("names both years when the week straddles New Year", () => {
    expect(formatWeekRange("2026-12-28")).toBe("Dec 28, 2026 – Jan 3, 2027");
  });
});
