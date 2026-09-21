// src/lib/grocery/types.ts

import { Category, PantryRole } from "@lib/pantry/types";

export type LineSource = "pantry" | "plan" | "manual";

export interface GroceryList {
  id: string;
  name: string;
  ownerId: string;
  householdId: string | null;
  /** The pantry checking a line restocks; null when none is linked. */
  pantryId: string | null;
  role: PantryRole;
  createdAt: string;
}

export interface GroceryLine {
  id: string;
  listId: string;
  name: string;
  nameKey: string;
  category: Category;
  isChecked: boolean;
  checkedAt: string | null;
  checkedBy: string | null;
  source: LineSource;
  /** For plan lines: which upcoming meals wanted it. */
  sourceRecipeNames: string[];
  position: number;
}

/** A line about to be added, before it has an id. */
export interface NewLine {
  name: string;
  nameKey: string;
  category: Category;
  source: LineSource;
  sourceRecipeNames: string[];
}

export type RangeUnit = "days" | "weeks" | "months";
export const RANGE_UNITS: RangeUnit[] = ["days", "weeks", "months"];

export interface PantrySettings {
  restockOnCheck: boolean;
  addNewOnCheck: boolean;
  defaultSources: ("pantry" | "plan")[];
  defaultRangeCount: number;
  defaultRangeUnit: RangeUnit;
}

export const DEFAULT_PANTRY_SETTINGS: PantrySettings = {
  restockOnCheck: true,
  addNewOnCheck: true,
  defaultSources: ["pantry", "plan"],
  defaultRangeCount: 7,
  defaultRangeUnit: "days",
};
