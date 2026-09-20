import { describe, expect, it } from "vitest";

import {
  MAX_REPEAT_DAYS,
  RepeatRule,
  dayOfMonthRule,
  describeRepeatRule,
  expandRepeatRule,
  isSameRepeatRule,
  validateRepeatRule,
  weekdayOfMonthRule,
} from "@lib/mealPlan/recurrence";

// 2026-10-01 is a Thursday.
const START = "2026-10-01";

const rule = (overrides: Partial<RepeatRule>): RepeatRule => ({
  frequency: "weekly",
  intervalWeeks: 1,
  weekdays: [4],
  monthly: null,
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

  it("counts fortnights from a Sunday-first week", () => {
    // 2026-10-04 is a Sunday. Monday-first weeks would put it in the
    // week before the 5th and skip that Monday.
    expect(
      expandRepeatRule(
        rule({ intervalWeeks: 2, weekdays: [0, 1], endDate: "2026-10-24" }),
        "2026-10-04",
      ),
    ).toEqual(["2026-10-04", "2026-10-05", "2026-10-18", "2026-10-19"]);
  });

  it("repeats on the same day of each month, skipping months that lack it", () => {
    expect(
      expandRepeatRule(
        rule({
          frequency: "monthly",
          monthly: { by: "day", day: 31 },
          endDate: "2027-01-31",
        }),
        "2026-10-31",
      ),
    ).toEqual(["2026-10-31", "2026-12-31", "2027-01-31"]);
  });

  it("repeats on the nth weekday of each month", () => {
    // Second Tuesdays: Oct 13, Nov 10, Dec 8.
    expect(
      expandRepeatRule(
        rule({
          frequency: "monthly",
          monthly: { by: "weekday", ordinal: 2, weekday: 2 },
          endDate: "2026-12-31",
        }),
        START,
      ),
    ).toEqual(["2026-10-13", "2026-11-10", "2026-12-08"]);
  });

  it("repeats on the last weekday of each month across a year boundary", () => {
    // Last Fridays: Nov 27, Dec 25, Jan 29.
    expect(
      expandRepeatRule(
        rule({
          frequency: "monthly",
          monthly: { by: "weekday", ordinal: -1, weekday: 5 },
          endDate: "2027-01-31",
        }),
        "2026-11-01",
      ),
    ).toEqual(["2026-11-27", "2026-12-25", "2027-01-29"]);
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

  it("rejects a monthly rule with no day chosen", () => {
    expect(
      validateRepeatRule(rule({ frequency: "monthly", monthly: null }), START),
    ).toMatch(/month/i);
  });

  it("accepts monthly rules of both kinds", () => {
    expect(
      validateRepeatRule(
        rule({ frequency: "monthly", monthly: { by: "day", day: 14 } }),
        START,
      ),
    ).toBeNull();
    expect(
      validateRepeatRule(
        rule({
          frequency: "monthly",
          monthly: { by: "weekday", ordinal: -1, weekday: 0 },
        }),
        START,
      ),
    ).toBeNull();
  });
});

describe("monthly rule defaults", () => {
  it("takes the day of the month from the start date", () => {
    expect(dayOfMonthRule("2026-10-14")).toEqual({ by: "day", day: 14 });
  });

  it("takes the ordinal and weekday from the start date", () => {
    // 2026-10-13 is the second Tuesday of October.
    expect(weekdayOfMonthRule("2026-10-13")).toEqual({
      by: "weekday",
      ordinal: 2,
      weekday: 2,
    });
  });

  it("calls a fifth occurrence 'last', since not every month has one", () => {
    // 2026-10-29 is the fifth Thursday of October.
    expect(weekdayOfMonthRule("2026-10-29")).toEqual({
      by: "weekday",
      ordinal: -1,
      weekday: 4,
    });
  });
});

describe("isSameRepeatRule", () => {
  it("ignores weekday order and fields the frequency doesn't use", () => {
    expect(
      isSameRepeatRule(
        rule({ weekdays: [1, 5], monthly: { by: "day", day: 1 } }),
        rule({ weekdays: [5, 1], monthly: null }),
      ),
    ).toBe(true);
    expect(
      isSameRepeatRule(
        rule({ frequency: "daily", weekdays: [1] }),
        rule({ frequency: "daily", weekdays: [2], intervalWeeks: 2 }),
      ),
    ).toBe(true);
  });

  it("notices a real change", () => {
    expect(isSameRepeatRule(rule({}), rule({ intervalWeeks: 2 }))).toBe(false);
    expect(isSameRepeatRule(rule({}), rule({ endDate: "2026-11-30" }))).toBe(
      false,
    );
    expect(
      isSameRepeatRule(
        rule({ frequency: "monthly", monthly: { by: "day", day: 1 } }),
        rule({ frequency: "monthly", monthly: { by: "day", day: 2 } }),
      ),
    ).toBe(false);
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

  it("describes monthly rules", () => {
    expect(
      describeRepeatRule(
        rule({ frequency: "monthly", monthly: { by: "day", day: 22 } }),
      ),
    ).toBe("Every month on the 22nd until Oct 31, 2026");
    expect(
      describeRepeatRule(
        rule({
          frequency: "monthly",
          monthly: { by: "weekday", ordinal: 3, weekday: 3 },
        }),
      ),
    ).toBe("Every month on the 3rd Wednesday until Oct 31, 2026");
    expect(
      describeRepeatRule(
        rule({
          frequency: "monthly",
          monthly: { by: "weekday", ordinal: -1, weekday: 6 },
        }),
      ),
    ).toBe("Every month on the last Saturday until Oct 31, 2026");
  });
});
