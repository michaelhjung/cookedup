import { describe, expect, it } from "vitest";

import {
  getUserRecipeId,
  isInternalRecipeUrl,
  toAbsoluteRecipeUrl,
} from "@lib/recipes/urls";

describe("isInternalRecipeUrl", () => {
  it("recognises the app's own recipe pages", () => {
    expect(
      isInternalRecipeUrl("/recipes/8f3a1b2c-0000-4000-8000-000000000000"),
    ).toBe(true);
  });

  it("treats external links as external", () => {
    expect(isInternalRecipeUrl("https://www.seriouseats.com/x")).toBe(false);
    expect(isInternalRecipeUrl("")).toBe(false);
    expect(isInternalRecipeUrl("/recipes")).toBe(false);
  });
});

describe("getUserRecipeId", () => {
  it("reads the id out of an internal url", () => {
    expect(
      getUserRecipeId("/recipes/8f3a1b2c-0000-4000-8000-000000000000"),
    ).toBe("8f3a1b2c-0000-4000-8000-000000000000");
  });

  it("is null for anything else", () => {
    expect(getUserRecipeId("https://example.com/recipes/abc")).toBeNull();
  });
});

describe("toAbsoluteRecipeUrl", () => {
  it("prefixes an internal url with the origin", () => {
    expect(
      toAbsoluteRecipeUrl(
        "/recipes/8f3a1b2c-0000-4000-8000-000000000000",
        "https://cookedup.app",
      ),
    ).toBe("https://cookedup.app/recipes/8f3a1b2c-0000-4000-8000-000000000000");
  });

  it("leaves external urls alone", () => {
    expect(
      toAbsoluteRecipeUrl("https://example.com/r", "https://cookedup.app"),
    ).toBe("https://example.com/r");
  });
});
