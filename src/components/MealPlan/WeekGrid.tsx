"use client";

import React from "react";

import SlotCell from "@components/MealPlan/SlotCell";
import {
  dayOfMonth,
  todayISO,
  weekDates,
  weekdayLabel,
} from "@lib/mealPlan/dates";
import {
  MealPlanEntry,
  MealSlotDef,
  SlotId,
  formatSlotTime,
} from "@lib/mealPlan/types";

interface WeekGridProps {
  weekStart: string;
  entries: MealPlanEntry[];
  slots: MealSlotDef[];
  readOnly?: boolean;
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onAdd?: (_date: string, _slot: SlotId) => void;
  onRemove?: (_entry: MealPlanEntry) => void;
  onMove?: (_entry: MealPlanEntry, _date: string, _slot: SlotId) => void;
}

/**
 * Slots as rows, days as columns — the layout a paper meal planner uses,
 * and the one that keeps recipe names readable. A day-as-column grid
 * would give each meal a cell roughly a seventh of the screen wide;
 * this gives each one the full row height instead.
 *
 * Rows come from the plan's own slot list, already sorted by time, so a
 * 3pm snack sits between lunch and dinner rather than wherever it was
 * added.
 */
const WeekGrid: React.FC<WeekGridProps> = ({
  weekStart,
  entries,
  slots,
  readOnly = false,
  onAdd,
  onRemove,
  onMove,
}) => {
  const dates = weekDates(weekStart);
  const today = todayISO();

  const entriesFor = (date: string, slotId: SlotId) =>
    entries.filter((entry) => entry.date === date && entry.slot === slotId);

  return (
    <div className="grid grid-cols-[4.5rem_repeat(7,minmax(0,1fr))] gap-px overflow-hidden rounded-lg border border-line bg-line">
      {/* Header row: an empty corner, then the seven days */}
      <div className="bg-surface-raised" />
      {dates.map((date) => (
        <div
          key={date}
          className={`
            bg-surface-raised
            px-1 py-2
            text-center
            ${date === today ? "shadow-[inset_0_-1.5px_0_var(--accent)]" : ""}
          `}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-ink-muted">
            {weekdayLabel(date)}
          </p>
          <p
            className={`text-sm font-semibold tabular-nums ${date === today ? "text-accent" : ""}`}
          >
            {dayOfMonth(date)}
          </p>
        </div>
      ))}

      {slots.map((slot) => (
        <React.Fragment key={slot.id}>
          <div className="flex flex-col justify-center bg-surface-raised px-2 py-2">
            <p className="text-xs font-semibold leading-tight">{slot.label}</p>
            <p className="text-[11px] text-ink-muted tabular-nums">
              {formatSlotTime(slot.time)}
            </p>
          </div>

          {dates.map((date) => (
            <div
              key={`${slot.id}-${date}`}
              className="bg-surface-raised"
            >
              <SlotCell
                date={date}
                slot={slot.id}
                slots={slots}
                entries={entriesFor(date, slot.id)}
                readOnly={readOnly}
                onAdd={onAdd}
                onRemove={onRemove}
                onMove={onMove}
              />
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default WeekGrid;
