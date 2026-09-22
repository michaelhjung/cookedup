import { describe, expect, it } from "vitest";

import {
  DISPLAY_NAME_MAX,
  getDefaultDisplayName,
  getDisplayName,
  resolveDisplayName,
} from "@lib/profiles/displayName";

describe("getDisplayName", () => {
  it("uses the part of the email before the @", () => {
    expect(getDisplayName("sam@example.com")).toBe("sam");
  });

  it("falls back to a placeholder without an email", () => {
    expect(getDisplayName(null)).toBe("Someone");
    expect(getDisplayName("")).toBe("Someone");
  });
});

describe("getDefaultDisplayName", () => {
  it("cuts the local part to the column's limit", () => {
    const local = "a".repeat(DISPLAY_NAME_MAX + 10);
    expect(getDefaultDisplayName(`${local}@example.com`)).toHaveLength(
      DISPLAY_NAME_MAX,
    );
  });
});

describe("resolveDisplayName", () => {
  it("prefers the profile name", () => {
    expect(resolveDisplayName("Sam R.", "sam@example.com")).toBe("Sam R.");
  });

  it("falls back to the email when the profile name is missing or blank", () => {
    expect(resolveDisplayName(null, "sam@example.com")).toBe("sam");
    expect(resolveDisplayName("   ", "sam@example.com")).toBe("sam");
    expect(resolveDisplayName(undefined, null)).toBe("Someone");
  });
});
