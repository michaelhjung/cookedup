// src/lib/mealPlan/types.ts
//
// The vocabulary shared by the planner UI, the API routes, and the
// calendar emitters. Database rows come back snake_cased from Supabase;
// everything above the fetch layer uses the camelCase shapes here.

import { Hit } from "@interfaces/edamam";

/**
 * One meal in a plan's day. Slots are per-plan data rather than a fixed
 * set, so a plan can drop breakfast, keep three separate snacks, or add
 * one called "Meal prep".
 *
 * `id` is the stable key entries point at and never changes once
 * created; `label` is display text the owner can rename at will.
 */
export interface MealSlotDef {
  id: string;
  label: string;
  /** Local wall-clock "HH:MM", 24-hour. Display formatting is separate. */
  time: string;
}

/** An entry's slot is just the id of a slot in its plan. */
export type SlotId = string;

export const DEFAULT_SLOTS: MealSlotDef[] = [
  { id: "breakfast", label: "Breakfast", time: "08:00" },
  { id: "lunch", label: "Lunch", time: "12:00" },
  { id: "snack", label: "Snack", time: "15:00" },
  { id: "dinner", label: "Dinner", time: "18:00" },
];

export type PlanRole = "owner" | "editor" | "viewer";

export interface MealPlan {
  id: string;
  name: string;
  slots: MealSlotDef[];
  /** null when link sharing is off. */
  shareToken: string | null;
  role: PlanRole;
}

export interface MealPlanEntry {
  id: string;
  /** "YYYY-MM-DD" — a calendar date, never a timestamp. */
  date: string;
  slot: SlotId;
  position: number;
  recipe: Hit;
}

export interface PlanShare {
  userId: string;
  email: string | null;
  role: Exclude<PlanRole, "owner">;
}

const TIME_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/;

export const isValidSlotTime = (value: unknown): value is string =>
  typeof value === "string" && TIME_PATTERN.test(value);

/**
 * Slots always render in time order, so a 3pm snack sits between lunch
 * and dinner instead of wherever it happened to be added. Ties break on
 * label so the order is stable rather than dependent on array position.
 */
export const sortSlots = (slots: MealSlotDef[]): MealSlotDef[] =>
  [...slots].sort(
    (a, b) => a.time.localeCompare(b.time) || a.label.localeCompare(b.label),
  );

/**
 * `slots` is jsonb, so it can be anything at runtime. This accepts the
 * current array shape, migrates the original `{slot: "HH:MM"}` object
 * shape in case a row escaped the SQL migration, and falls back to the
 * defaults rather than rendering a plan with no meals in it.
 */
export const parseSlots = (value: unknown): MealSlotDef[] => {
  if (Array.isArray(value)) {
    const slots = value.flatMap((candidate): MealSlotDef[] => {
      const slot = candidate as Partial<MealSlotDef> | null;
      if (!slot || typeof slot.id !== "string" || !slot.id) return [];

      return [
        {
          id: slot.id,
          label:
            typeof slot.label === "string" && slot.label.trim() ?
              slot.label
            : slot.id,
          time: isValidSlotTime(slot.time) ? slot.time : "12:00",
        },
      ];
    });

    // An empty or wholly malformed array would leave a plan with nowhere
    // to put a recipe, which is worse than ignoring it.
    return slots.length > 0 ? sortSlots(slots) : DEFAULT_SLOTS;
  }

  if (value && typeof value === "object") {
    const legacy = Object.entries(value as Record<string, unknown>).flatMap(
      ([id, time]): MealSlotDef[] =>
        isValidSlotTime(time) ?
          [{ id, label: id.charAt(0).toUpperCase() + id.slice(1), time }]
        : [],
    );

    if (legacy.length > 0) return sortSlots(legacy);
  }

  return DEFAULT_SLOTS;
};

/**
 * "18:00" -> "6 PM", "18:30" -> "6:30 PM" — following the viewer's own
 * locale, so a 24-hour locale still sees 18:00. The stored value stays
 * 24-hour either way; this is presentation only.
 */
export const formatSlotTime = (time: string, locale?: string): string => {
  if (!isValidSlotTime(time)) return time;

  const [hours, minutes] = time.split(":").map(Number);

  return new Date(2000, 0, 1, hours, minutes).toLocaleTimeString(locale, {
    hour: "numeric",
    // Hide ":00" — "6 PM" reads better than "6:00 PM" in a dense grid.
    ...(minutes === 0 ? {} : { minute: "2-digit" }),
  });
};

/** Ids only need to be unique within one plan's slot list. */
export const makeSlotId = (): string =>
  `slot-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

export const findSlot = (
  slots: MealSlotDef[],
  id: SlotId,
): MealSlotDef | undefined => slots.find((slot) => slot.id === id);
