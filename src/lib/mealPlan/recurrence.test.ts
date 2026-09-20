import { describe, expect, it } from "vitest";

import {
  MAX_REPEAT_DAYS,
  RepeatRule,
  describeRepeatRule,
  expandRepeatRule,
  validateRepeatRule,
} from "@lib/mealPlan/recurrence";

// 2026-10-01 is a Thursday.
const START = "2026-10-01";

const rule = (overrides: Partial<RepeatRule>): RepeatRule => ({
  frequency: "weekly",
  intervalWeeks: 1,
  weekdays: [4],
  endDate: "2026-10-31",
  ...overrides,
});

describe("expandRepeatRule", () => {
  it("lists every day for a daily rule, inclusive of both ends", () => {
    expect(
      expandRepeatRule(
        rule({ frequency: "daily", endDate: "2026-10-04" }),
        START,
      ),
    ).toEqual(["2026-10-01", "2026-10-02", "2026-10-03", "2026-10-04"]);
  });

  it("keeps only the chosen weekdays for a weekly rule", () => {
    // Mon/Wed/Fri from a Thursday: the first hit is Friday the 2nd.
    expect(
      expandRepeatRule(
        rule({ weekdays: [1, 3, 5], endDate: "2026-10-12" }),
        START,
      ),
    ).toEqual([
      "2026-10-02",
      "2026-10-05",
      "2026-10-07",
      "2026-10-09",
      "2026-10-12",
    ]);
  });

  it("skips alternate weeks for a fortnightly rule, anchored on the start week", () => {
    expect(
      expandRepeatRule(
        rule({ intervalWeeks: 2, weekdays: [1, 4], endDate: "2026-10-31" }),
        START,
      ),
    ).toEqual([
      "2026-10-01", // Thu, week 0
      "2026-10-12", // Mon, week 2
      "2026-10-15", // Thu, week 2
      "2026-10-26", // Mon, week 4
      "2026-10-29", // Thu, week 4
    ]);
  });

  it("returns nothing when the end is before the start", () => {
    expect(expandRepeatRule(rule({ endDate: "2026-09-30" }), START)).toEqual(
      [],
    );
  });

  it("crosses a year boundary without drifting", () => {
    const dates = expandRepeatRule(
      rule({ frequency: "daily", endDate: "2027-01-02" }),
      "2026-12-30",
    );
    expect(dates).toEqual([
      "2026-12-30",
      "2026-12-31",
      "2027-01-01",
      "2027-01-02",
    ]);
  });
});

describe("validateRepeatRule", () => {
  it("accepts a sensible rule", () => {
    expect(validateRepeatRule(rule({}), START)).toBeNull();
  });

  it("rejects an end date before the start", () => {
    expect(validateRepeatRule(rule({ endDate: "2026-09-01" }), START)).toMatch(
      /end/i,
    );
  });

  it("rejects a span longer than the cap", () => {
    expect(validateRepeatRule(rule({ endDate: "2028-01-01" }), START)).toMatch(
      /year/i,
    );
    expect(MAX_REPEAT_DAYS).toBeLessThanOrEqual(366);
  });

  it("rejects a weekly rule with no weekdays", () => {
    expect(validateRepeatRule(rule({ weekdays: [] }), START)).toMatch(/day/i);
  });
});

describe("describeRepeatRule", () => {
  it("describes daily rules", () => {
    expect(
      describeRepeatRule(rule({ frequency: "daily", endDate: "2026-12-31" })),
    ).toBe("Every day until Dec 31, 2026");
  });

  it("names weekdays in calendar order regardless of input order", () => {
    expect(describeRepeatRule(rule({ weekdays: [5, 1, 3] }))).toBe(
      "Every week on Mon, Wed, Fri until Oct 31, 2026",
    );
  });

  it("describes fortnightly rules", () => {
    expect(describeRepeatRule(rule({ intervalWeeks: 2, weekdays: [0] }))).toBe(
      "Every 2 weeks on Sun until Oct 31, 2026",
    );
  });
});
