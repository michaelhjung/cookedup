"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

import SlotCell from "@components/MealPlan/SlotCell";
import { addDays, formatFullDate, todayISO } from "@lib/mealPlan/dates";
import {
  MealPlanEntry,
  MealSlotDef,
  SlotId,
  formatSlotTime,
} from "@lib/mealPlan/types";

interface DayAgendaProps {
  date: string;
  entries: MealPlanEntry[];
  slots: MealSlotDef[];
  readOnly?: boolean;
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onDateChange: (_date: string) => void;
  onAdd?: (_date: string, _slot: SlotId) => void;
  onRemove?: (_entry: MealPlanEntry) => void;
  onMove?: (_entry: MealPlanEntry, _date: string, _slot: SlotId) => void;
}

/**
 * The small-screen form of the week grid. A seven-column grid on a phone
 * gives each meal about 45px of width, which fits roughly nothing — so
 * below `lg` the same data is shown one day at a time instead of being
 * squeezed.
 */
const DayAgenda: React.FC<DayAgendaProps> = ({
  date,
  entries,
  slots,
  readOnly = false,
  onDateChange,
  onAdd,
  onRemove,
  onMove,
}) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <button
        type="button"
        onClick={() => onDateChange(addDays(date, -1))}
        aria-label="Previous day"
        className="flex size-8 items-center justify-center rounded-md border border-line bg-surface-raised text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
      >
        <ChevronLeft className="size-4" />
      </button>

      <p
        className={`text-sm font-semibold tabular-nums ${date === todayISO() ? "text-accent" : ""}`}
      >
        {formatFullDate(date)}
      </p>

      <button
        type="button"
        onClick={() => onDateChange(addDays(date, 1))}
        aria-label="Next day"
        className="flex size-8 items-center justify-center rounded-md border border-line bg-surface-raised text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>

    <div className="flex flex-col gap-3">
      {slots.map((slot) => (
        <section
          key={slot.id}
          className="rounded-lg border border-line bg-surface-raised p-2"
        >
          <div className="mb-1 flex items-baseline justify-between px-1">
            <h3 className="text-sm font-semibold">{slot.label}</h3>
            <span className="text-[11px] text-ink-muted tabular-nums">
              {formatSlotTime(slot.time)}
            </span>
          </div>

          <SlotCell
            date={date}
            slot={slot.id}
            slots={slots}
            entries={entries.filter(
              (entry) => entry.date === date && entry.slot === slot.id,
            )}
            readOnly={readOnly}
            onAdd={onAdd}
            onRemove={onRemove}
            onMove={onMove}
          />
        </section>
      ))}
    </div>
  </div>
);

export default DayAgenda;
