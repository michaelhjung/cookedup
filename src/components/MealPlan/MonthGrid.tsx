"use client";

import { Plus } from "lucide-react";
import React from "react";

import { useEntryDrag } from "@components/MealPlan/DragContext";
import PlannedRecipeChip from "@components/MealPlan/PlannedRecipeChip";
import { dayOfMonth, monthGridDates, todayISO } from "@lib/mealPlan/dates";
import { RepeatRule } from "@lib/mealPlan/recurrence";
import { MealPlanEntry, MealSlotDef, SlotId } from "@lib/mealPlan/types";

interface MonthGridProps {
  /** The 1st of the month to show. */
  monthStart: string;
  entries: MealPlanEntry[];
  slots: MealSlotDef[];
  readOnly?: boolean;
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  /** Clicking a day number: the planner switches to that week. */
  onOpenDay?: (_date: string) => void;
  onAdd?: (_date: string) => void;
  onRemove?: (_entry: MealPlanEntry) => void;
  onMove?: (_entry: MealPlanEntry, _date: string, _slot: SlotId) => void;
  onRepeat?: (_entry: MealPlanEntry, _rule: RepeatRule) => void;
}

const WEEKDAY_HEADERS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/** Meals past this many are folded into a "+N more" line. */
const VISIBLE_PER_DAY = 4;

interface DayCellProps {
  date: string;
  isInMonth: boolean;
  isToday: boolean;
  entries: MealPlanEntry[];
  slots: MealSlotDef[];
  readOnly: boolean;
  onOpenDay?: MonthGridProps["onOpenDay"];
  onAdd?: MonthGridProps["onAdd"];
  onRemove?: MonthGridProps["onRemove"];
  onMove?: MonthGridProps["onMove"];
  onRepeat?: MonthGridProps["onRepeat"];
}

const DayCell: React.FC<DayCellProps> = ({
  date,
  isInMonth,
  isToday,
  entries,
  slots,
  readOnly,
  onOpenDay,
  onAdd,
  onRemove,
  onMove,
  onRepeat,
}) => {
  const { target, draggingEntryId } = useEntryDrag();
  const isDropTarget = target?.date === date && target.slot === null;
  const hidden = Math.max(0, entries.length - VISIBLE_PER_DAY);
  const shown = hidden > 0 ? entries.slice(0, VISIBLE_PER_DAY) : entries;

  return (
    <div
      // A whole-day target: a meal dropped here keeps its own slot. See
      // DragContext for how a missing data-drop-slot is read.
      data-drop-date={readOnly ? undefined : date}
      className={`
        flex min-h-24 flex-col gap-0.5 p-1
        transition-colors
        ${isInMonth ? "bg-surface-raised" : "bg-surface"}
        ${isDropTarget ? "bg-accent-tint" : ""}
      `}
    >
      <div className="flex items-center justify-between px-0.5">
        <button
          type="button"
          onClick={() => onOpenDay?.(date)}
          title="Open this week"
          className={`
            flex size-6 items-center justify-center rounded-md
            text-xs font-semibold tabular-nums
            transition-colors hover:bg-well
            ${isToday ? "bg-accent text-on-accent hover:bg-accent-hover" : ""}
            ${!isInMonth && !isToday ? "text-ink-muted" : ""}
          `}
        >
          {dayOfMonth(date)}
        </button>

        {/* Always visible, faintly: the month view is desktop-only but a
            tablet in landscape still has no hover. */}
        {!readOnly && !draggingEntryId && (
          <button
            type="button"
            onClick={() => onAdd?.(date)}
            aria-label={`Add a recipe on ${date}`}
            className="flex size-6 items-center justify-center rounded-md text-ink-muted/50 transition-colors hover:bg-well hover:text-ink"
          >
            <Plus className="size-3" />
          </button>
        )}
      </div>

      {shown.map((entry) => (
        <PlannedRecipeChip
          key={entry.id}
          entry={entry}
          slots={slots}
          readOnly={readOnly}
          variant="row"
          onRemove={onRemove}
          onMove={onMove}
          onRepeat={onRepeat}
        />
      ))}

      {hidden > 0 && (
        <button
          type="button"
          onClick={() => onOpenDay?.(date)}
          className="px-1 text-left text-[11px] text-ink-muted hover:text-ink"
        >
          +{hidden} more
        </button>
      )}
    </div>
  );
};

/**
 * The month at a glance: seven columns, four to six rows, each day a
 * short list of what's planned. Meals within a day follow the plan's
 * slot order (breakfast before dinner), the same order the week grid's
 * rows use, so the two views read the same way.
 */
const MonthGrid: React.FC<MonthGridProps> = ({
  monthStart,
  entries,
  slots,
  readOnly = false,
  onOpenDay,
  onAdd,
  onRemove,
  onMove,
  onRepeat,
}) => {
  const dates = monthGridDates(monthStart);
  const today = todayISO();
  const month = monthStart.slice(0, 7);

  // Slot order is the plan's (time-sorted) list; an entry whose slot no
  // longer exists sorts last rather than disappearing.
  const slotRank = new Map(slots.map((slot, index) => [slot.id, index]));
  const rankOf = (entry: MealPlanEntry) =>
    slotRank.get(entry.slot) ?? slots.length;

  const byDate = new Map<string, MealPlanEntry[]>();
  for (const entry of entries) {
    const list = byDate.get(entry.date);
    if (list) list.push(entry);
    else byDate.set(entry.date, [entry]);
  }
  for (const list of byDate.values())
    list.sort(
      (a, b) =>
        rankOf(a) - rankOf(b) ||
        a.position - b.position ||
        a.recipe.recipe.label.localeCompare(b.recipe.recipe.label),
    );

  return (
    <div className="grid grid-cols-7 gap-px overflow-hidden rounded-lg border border-line bg-line">
      {WEEKDAY_HEADERS.map((label) => (
        <div
          key={label}
          className="bg-surface-raised px-1 py-2 text-center text-[10px] font-medium uppercase tracking-[0.08em] text-ink-muted"
        >
          {label}
        </div>
      ))}

      {dates.map((date) => (
        <DayCell
          key={date}
          date={date}
          isInMonth={date.startsWith(month)}
          isToday={date === today}
          entries={byDate.get(date) ?? []}
          slots={slots}
          readOnly={readOnly}
          onOpenDay={onOpenDay}
          onAdd={onAdd}
          onRemove={onRemove}
          onMove={onMove}
          onRepeat={onRepeat}
        />
      ))}
    </div>
  );
};

export default MonthGrid;
