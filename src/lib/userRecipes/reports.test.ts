import { describe, expect, it } from "vitest";

import {
  REPORT_REASONS,
  describeRecipeStatus,
  formatStarCount,
  getReportReasonLabel,
} from "@lib/userRecipes/reports";

describe("getReportReasonLabel", () => {
  it("labels every reason", () => {
    for (const reason of REPORT_REASONS) {
      expect(getReportReasonLabel(reason.value)).toBe(reason.label);
    }
  });
});

describe("describeRecipeStatus", () => {
  it("names the four plain states", () => {
    expect(
      describeRecipeStatus({
        visibility: "private",
        reviewStatus: "approved",
        householdId: null,
      }),
    ).toBe("Private");
    expect(
      describeRecipeStatus({
        visibility: "private",
        reviewStatus: "approved",
        householdId: "h",
      }),
    ).toBe("Household");
    expect(
      describeRecipeStatus({
        visibility: "public",
        reviewStatus: "pending",
        householdId: "h",
      }),
    ).toBe("In review");
    expect(
      describeRecipeStatus({
        visibility: "public",
        reviewStatus: "approved",
        householdId: null,
      }),
    ).toBe("Public");
  });

  it("shows a rejection whatever the visibility", () => {
    expect(
      describeRecipeStatus({
        visibility: "private",
        reviewStatus: "rejected",
        householdId: "h",
      }),
    ).toBe("Rejected");
  });
});

describe("formatStarCount", () => {
  it("pluralises and hides zero", () => {
    expect(formatStarCount(0)).toBeNull();
    expect(formatStarCount(1)).toBe("1 star");
    expect(formatStarCount(12)).toBe("12 stars");
  });
});
