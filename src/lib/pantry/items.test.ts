import { describe, expect, it } from "vitest";

import {
  groupByCategory,
  normalizeItemName,
  pickRestockItems,
  tidyItemName,
} from "@lib/pantry/items";
import { PantryItem } from "@lib/pantry/types";

describe("normalizeItemName", () => {
  it("lowercases, trims and collapses spaces", () => {
    expect(normalizeItemName("  Greek   Yogurt ")).toBe("greek yogurt");
  });

  it("drops a trailing s", () => {
    expect(normalizeItemName("Eggs")).toBe("egg");
    expect(normalizeItemName("avocados")).toBe("avocado");
    expect(normalizeItemName("olive oils")).toBe("olive oil");
  });

  it("handles -es and -ies plurals", () => {
    expect(normalizeItemName("tomatoes")).toBe("tomato");
    expect(normalizeItemName("potatoes")).toBe("potato");
    expect(normalizeItemName("peaches")).toBe("peach");
    expect(normalizeItemName("radishes")).toBe("radish");
    expect(normalizeItemName("cherries")).toBe("cherry");
    expect(normalizeItemName("blueberries")).toBe("blueberry");
  });

  it("leaves words ending in ss alone", () => {
    expect(normalizeItemName("Swiss cheese")).toBe("swiss cheese");
    expect(normalizeItemName("watercress")).toBe("watercress");
  });

  it("is idempotent", () => {
    for (const name of ["Tomatoes", "eggs", "cherries", "hummus", "rice"]) {
      const once = normalizeItemName(name);
      expect(normalizeItemName(once)).toBe(once);
    }
  });
});

const item = (
  name: string,
  category: PantryItem["category"],
  status: PantryItem["status"] = "stocked",
): PantryItem => ({
  id: name,
  pantryId: "p",
  name,
  nameKey: normalizeItemName(name),
  status,
  category,
  updatedAt: "2026-09-21T00:00:00Z",
  updatedBy: null,
});

describe("groupByCategory", () => {
  it("orders groups store-walk and items by name, hiding empty groups", () => {
    const groups = groupByCategory([
      item("Rice", "Pantry staples"),
      item("Spinach", "Produce"),
      item("Widget", "Other"),
      item("apples", "Produce"),
      item("Eggs", "Dairy & eggs"),
    ]);

    expect(groups.map((group) => group.category)).toEqual([
      "Produce",
      "Dairy & eggs",
      "Pantry staples",
      "Other",
    ]);
    expect(groups[0].items.map((entry) => entry.name)).toEqual([
      "apples",
      "Spinach",
    ]);
  });

  it("returns nothing for no items", () => {
    expect(groupByCategory([])).toEqual([]);
  });
});

describe("pickRestockItems", () => {
  it("keeps low and out", () => {
    const items = [
      item("a", "Other", "stocked"),
      item("b", "Other", "low"),
      item("c", "Other", "out"),
    ];
    expect(pickRestockItems(items).map((entry) => entry.name)).toEqual([
      "b",
      "c",
    ]);
  });
});

describe("tidyItemName", () => {
  it("capitalises the first letter and collapses spaces", () => {
    expect(tidyItemName("  greek   yogurt ")).toBe("Greek yogurt");
  });
});
