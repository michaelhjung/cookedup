import { describe, expect, it } from "vitest";

import { STARTER_PANTRY } from "@data/starterPantry";
import { lookupIngredient } from "@lib/ingredients";

describe("STARTER_PANTRY", () => {
  it("names ingredients by their canonical list entry", () => {
    const offenders = STARTER_PANTRY.filter(
      (name) => lookupIngredient(name)?.name !== name,
    );
    expect(offenders).toEqual([]);
  });

  it("lists each thing once", () => {
    expect(new Set(STARTER_PANTRY).size).toBe(STARTER_PANTRY.length);
  });

  it("is a short list, not the whole store", () => {
    expect(STARTER_PANTRY.length).toBeGreaterThanOrEqual(30);
    expect(STARTER_PANTRY.length).toBeLessThanOrEqual(50);
  });
});
