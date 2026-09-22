import { describe, expect, it } from "vitest";

import { Hit } from "@interfaces/edamam";
import { buildPlanEvents } from "@lib/mealPlan/buildPlanEvents";
import {
  DEFAULT_SLOTS,
  MealPlanEntry,
  MealSlotDef,
  formatSlotTime,
  getEntryLabel,
  getEntryTime,
  parseSlots,
  sortSlots,
} from "@lib/mealPlan/types";

const hit = (overrides: Partial<Hit["recipe"]> = {}): Hit =>
  ({
    recipe: {
      label: "Salmon Teriyaki",
      url: "https://example.com/salmon",
      yield: 4,
      totalTime: 30,
      calories: 1800,
      ingredientLines: ["1 lb salmon", "2 tbsp soy sauce"],
      ...overrides,
    },
  }) as Hit;

const entry = (overrides: Partial<MealPlanEntry> = {}): MealPlanEntry => ({
  id: "entry-1",
  date: "2026-03-02",
  slot: "dinner",
  position: 0,
  recipe: hit(),
  title: null,
  time: null,
  ...overrides,
});

const customEntry = (title = "Leftovers"): MealPlanEntry =>
  entry({ recipe: null, title });

const plan = { slots: DEFAULT_SLOTS };

describe("buildPlanEvents", () => {
  it("titles an event with its meal's label and recipe", () => {
    const [built] = buildPlanEvents(plan, [entry()]);
    expect(built.title).toBe("Dinner: Salmon Teriyaki");
  });

  it("takes its start time from the plan's slot", () => {
    const [breakfast] = buildPlanEvents(plan, [entry({ slot: "breakfast" })]);
    const [dinner] = buildPlanEvents(plan, [entry()]);

    expect(breakfast.startTime).toBe("08:00");
    expect(dinner.startTime).toBe("18:00");
  });

  it("honours a renamed and retimed slot", () => {
    const slots: MealSlotDef[] = [
      { id: "dinner", label: "Supper", time: "19:30" },
    ];
    const [built] = buildPlanEvents({ slots }, [entry()]);

    expect(built.title).toBe("Supper: Salmon Teriyaki");
    expect(built.startTime).toBe("19:30");
  });

  it("prefers the meal's own time over its slot's", () => {
    const [built] = buildPlanEvents(plan, [entry({ time: "19:30" })]);

    expect(built.startTime).toBe("19:30");
    // The slot still names the meal; only the clock moves.
    expect(built.title).toBe("Dinner: Salmon Teriyaki");
  });

  it("supports custom slots that aren't one of the defaults", () => {
    const slots: MealSlotDef[] = [
      { id: "slot-abc", label: "Meal prep", time: "10:00" },
    ];
    const [built] = buildPlanEvents({ slots }, [entry({ slot: "slot-abc" })]);

    expect(built.title).toBe("Meal prep: Salmon Teriyaki");
    expect(built.startTime).toBe("10:00");
  });

  it("skips an entry whose slot no longer exists", () => {
    // Removing a meal deletes its entries, so this only guards against a
    // stale or hand-edited row — but it must not produce an event with
    // no time on it.
    const events = buildPlanEvents(plan, [
      entry({ id: "a" }),
      entry({ id: "b", slot: "deleted-slot" }),
    ]);

    expect(events).toHaveLength(1);
    expect(events[0].uid).toBe("a@cookedup.app");
  });

  it("derives a stable uid from the entry id", () => {
    const [built] = buildPlanEvents(plan, [entry({ id: "abc" })]);
    expect(built.uid).toBe("abc@cookedup.app");
  });

  it("puts serving size, time and per-serving calories in the description", () => {
    const [built] = buildPlanEvents(plan, [entry()]);
    expect(built.description).toContain("Serves 4 · 30 min · 450 kcal/serving");
  });

  it("omits facts the recipe doesn't report", () => {
    const [built] = buildPlanEvents(plan, [
      entry({ recipe: hit({ totalTime: 0, calories: 0, yield: 0 }) }),
    ]);

    expect(built.description).not.toContain("min");
    expect(built.description).not.toContain("Serves");
  });

  it("lists the ingredients", () => {
    const [built] = buildPlanEvents(plan, [entry()]);
    expect(built.description).toContain("• 1 lb salmon");
  });

  it("links back to the plan when given a url", () => {
    const [built] = buildPlanEvents(
      plan,
      [entry()],
      "https://cookedup.app/p/x",
    );
    expect(built.description).toContain("Meal plan: https://cookedup.app/p/x");
  });

  it("leaves out the plan link when there isn't one", () => {
    const [built] = buildPlanEvents(plan, [entry()]);
    expect(built.description).not.toContain("Meal plan:");
  });

  it("titles a custom meal with its text", () => {
    const [built] = buildPlanEvents(plan, [customEntry()]);
    expect(built.title).toBe("Dinner: Leftovers");
    expect(built.url).toBeUndefined();
  });

  it("describes a custom meal with only the plan link", () => {
    const [bare] = buildPlanEvents(plan, [customEntry()]);
    const [linked] = buildPlanEvents(
      plan,
      [customEntry()],
      "https://cookedup.app/p/x",
    );

    expect(bare.description).toBe("");
    expect(linked.description).toBe("Meal plan: https://cookedup.app/p/x");
  });

  it("maps every entry", () => {
    const events = buildPlanEvents(plan, [
      entry({ id: "a" }),
      entry({ id: "b", slot: "lunch" }),
    ]);

    expect(events.map((built) => built.uid)).toEqual([
      "a@cookedup.app",
      "b@cookedup.app",
    ]);
  });
});

describe("getEntryLabel", () => {
  it("reads a recipe's label", () => {
    expect(getEntryLabel(entry())).toBe("Salmon Teriyaki");
  });

  it("reads a custom meal's title", () => {
    expect(getEntryLabel(customEntry("Eating out"))).toBe("Eating out");
  });

  it("never renders blank for a malformed row", () => {
    expect(getEntryLabel(entry({ recipe: null, title: null }))).toBe("Meal");
  });
});

describe("getEntryTime", () => {
  const dinner: MealSlotDef = { id: "dinner", label: "Dinner", time: "18:00" };

  it("falls back to the slot's time", () => {
    expect(getEntryTime(entry(), dinner)).toBe("18:00");
  });

  it("uses the meal's own time when it has one", () => {
    expect(getEntryTime(entry({ time: "19:30" }), dinner)).toBe("19:30");
  });

  it("ignores an override that isn't a valid clock time", () => {
    expect(getEntryTime(entry({ time: "soon" }), dinner)).toBe("18:00");
  });
});

describe("sortSlots", () => {
  it("orders slots by time, so a 3pm snack sits between lunch and dinner", () => {
    expect(sortSlots(DEFAULT_SLOTS).map((slot) => slot.id)).toEqual([
      "breakfast",
      "lunch",
      "snack",
      "dinner",
    ]);
  });

  it("breaks ties on label rather than array position", () => {
    const slots: MealSlotDef[] = [
      { id: "b", label: "Second", time: "12:00" },
      { id: "a", label: "First", time: "12:00" },
    ];

    expect(sortSlots(slots).map((slot) => slot.id)).toEqual(["a", "b"]);
  });

  it("does not mutate its input", () => {
    const slots = [...DEFAULT_SLOTS].reverse();
    const before = slots.map((slot) => slot.id);
    sortSlots(slots);
    expect(slots.map((slot) => slot.id)).toEqual(before);
  });
});

describe("parseSlots", () => {
  it("reads the array shape and sorts it", () => {
    const parsed = parseSlots([
      { id: "dinner", label: "Dinner", time: "18:00" },
      { id: "brunch", label: "Brunch", time: "10:00" },
    ]);

    expect(parsed.map((slot) => slot.id)).toEqual(["brunch", "dinner"]);
  });

  it("migrates the original {slot: time} object shape", () => {
    // Rows written before slots became configurable.
    expect(parseSlots({ dinner: "18:00", breakfast: "08:00" })).toEqual([
      { id: "breakfast", label: "Breakfast", time: "08:00" },
      { id: "dinner", label: "Dinner", time: "18:00" },
    ]);
  });

  it("drops entries with no usable id", () => {
    const parsed = parseSlots([
      { id: "lunch", label: "Lunch", time: "12:00" },
      { label: "Nameless", time: "13:00" },
      null,
    ]);

    expect(parsed.map((slot) => slot.id)).toEqual(["lunch"]);
  });

  it("falls back to the id when a label is missing or blank", () => {
    expect(parseSlots([{ id: "brunch", time: "10:00" }])[0].label).toBe(
      "brunch",
    );
    expect(
      parseSlots([{ id: "brunch", label: "   ", time: "10:00" }])[0].label,
    ).toBe("brunch");
  });

  it("replaces an unusable time rather than scheduling at 'undefined'", () => {
    expect(parseSlots([{ id: "x", label: "X", time: "7pm" }])[0].time).toBe(
      "12:00",
    );
    expect(parseSlots([{ id: "x", label: "X", time: "25:00" }])[0].time).toBe(
      "12:00",
    );
  });

  it("falls back to the defaults rather than leaving a plan with no meals", () => {
    expect(parseSlots(null)).toEqual(DEFAULT_SLOTS);
    expect(parseSlots(undefined)).toEqual(DEFAULT_SLOTS);
    expect(parseSlots([])).toEqual(DEFAULT_SLOTS);
    expect(parseSlots({})).toEqual(DEFAULT_SLOTS);
    expect(parseSlots([{ nope: true }])).toEqual(DEFAULT_SLOTS);
  });
});

describe("formatSlotTime", () => {
  it("renders 24-hour storage as a 12-hour clock", () => {
    expect(formatSlotTime("18:00", "en-US")).toBe("6 PM");
    expect(formatSlotTime("08:00", "en-US")).toBe("8 AM");
    expect(formatSlotTime("00:00", "en-US")).toBe("12 AM");
    expect(formatSlotTime("12:00", "en-US")).toBe("12 PM");
  });

  it("shows minutes only when there are some", () => {
    expect(formatSlotTime("18:30", "en-US")).toBe("6:30 PM");
    expect(formatSlotTime("07:05", "en-US")).toBe("7:05 AM");
  });

  it("respects a 24-hour locale", () => {
    expect(formatSlotTime("18:00", "en-GB")).toBe("18");
  });

  it("passes through anything it can't parse", () => {
    expect(formatSlotTime("not a time", "en-US")).toBe("not a time");
  });
});

describe("user-authored recipes in the feed", () => {
  const internal = (): MealPlanEntry =>
    entry({
      recipe: hit({ url: "/recipes/8f3a1b2c-0000-4000-8000-000000000000" }),
    });

  it("makes the recipe link absolute when the origin is known", () => {
    const [built] = buildPlanEvents(
      plan,
      [internal()],
      undefined,
      "https://cookedup.app",
    );
    expect(built.url).toBe(
      "https://cookedup.app/recipes/8f3a1b2c-0000-4000-8000-000000000000",
    );
    expect(built.description).toContain(
      "Recipe: https://cookedup.app/recipes/",
    );
  });

  it("leaves the link out rather than emit a relative one", () => {
    const [built] = buildPlanEvents(plan, [internal()]);
    expect(built.url).toBeUndefined();
    expect(built.description).not.toContain("Recipe:");
  });

  it("does not touch external recipe links", () => {
    const [built] = buildPlanEvents(
      plan,
      [entry()],
      undefined,
      "https://cookedup.app",
    );
    expect(built.url).toBe("https://example.com/salmon");
  });
});
