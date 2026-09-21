import { describe, expect, it } from "vitest";

import { formatRelativeTime } from "@lib/pantry/time";

describe("formatRelativeTime", () => {
  const now = new Date("2026-09-21T12:00:00Z");
  const at = (offsetMs: number) =>
    new Date(now.getTime() - offsetMs).toISOString();

  it.each([
    [10_000, "just now"],
    [60_000, "1 minute ago"],
    [25 * 60_000, "25 minutes ago"],
    [3_600_000, "1 hour ago"],
    [5 * 3_600_000, "5 hours ago"],
    [30 * 3_600_000, "yesterday"],
    [3 * 86_400_000, "3 days ago"],
    [8 * 86_400_000, "1 week ago"],
    [20 * 86_400_000, "2 weeks ago"],
  ])("%d ms ago -> %s", (offset, label) => {
    expect(formatRelativeTime(at(offset), now)).toBe(label);
  });

  it("falls back to a date after a month or so", () => {
    expect(formatRelativeTime(at(60 * 86_400_000), now)).toMatch(/Jul/);
  });

  it("returns nothing for garbage", () => {
    expect(formatRelativeTime("nope", now)).toBe("");
  });
});
