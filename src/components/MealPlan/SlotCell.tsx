"use client";

import { Plus } from "lucide-react";
import React from "react";

import { useEntryDrag } from "@components/MealPlan/DragContext";
import PlannedRecipeChip from "@components/MealPlan/PlannedRecipeChip";
import { MealPlanEntry, MealSlotDef, SlotId } from "@lib/mealPlan/types";

interface SlotCellProps {
  date: string;
  slot: SlotId;
  entries: MealPlanEntry[];
  slots: MealSlotDef[];
  readOnly?: boolean;
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onAdd?: (_date: string, _slot: SlotId) => void;
  onRemove?: (_entry: MealPlanEntry) => void;
  onMove?: (_entry: MealPlanEntry, _date: string, _slot: SlotId) => void;
}

/**
 * One day × one meal. The add affordance stays permanently visible
 * rather than appearing on hover — hover-only controls are invisible on
 * touch, and an empty week with no visible way to fill it is the worst
 * possible first impression of a planner.
 */
const SlotCell: React.FC<SlotCellProps> = ({
  date,
  slot,
  entries,
  slots,
  readOnly = false,
  onAdd,
  onRemove,
  onMove,
}) => {
  const { target } = useEntryDrag();
  const isDropTarget = target?.date === date && target?.slot === slot;

  return (
    <div
      // Drop targets are found by hit-testing these attributes rather
      // than by measuring cells up front, so a cell that scrolls or
      // reflows mid-drag can't hand back a stale rectangle.
      data-drop-date={readOnly ? undefined : date}
      data-drop-slot={readOnly ? undefined : slot}
      className={`
        flex min-h-16 flex-col gap-1 p-1.5
        transition-colors
        ${isDropTarget ? "bg-accent-tint" : ""}
      `}
    >
      {entries.map((entry) => (
        <PlannedRecipeChip
          key={entry.id}
          entry={entry}
          slots={slots}
          readOnly={readOnly}
          onRemove={onRemove}
          onMove={onMove}
        />
      ))}

      {!readOnly && (
        <button
          type="button"
          onClick={() => onAdd?.(date, slot)}
          aria-label={`Add a recipe to ${slot} on ${date}`}
          className={`
          flex grow items-center justify-center
          rounded-md border border-dashed border-line
          py-1.5
          text-ink-muted/60
          transition-colors
          hover:border-line-strong hover:bg-well hover:text-ink
          ${entries.length > 0 ? "min-h-6" : "min-h-10"}
        `}
        >
          <Plus className="size-3" />
        </button>
      )}

      {readOnly && entries.length === 0 && (
        <div className="flex grow items-center justify-center py-2 text-[11px] text-ink-muted">
          —
        </div>
      )}
    </div>
  );
};

export default SlotCell;
