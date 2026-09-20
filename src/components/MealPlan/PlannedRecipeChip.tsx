"use client";

import { ExternalLink, Repeat, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { useEntryDrag } from "@components/MealPlan/DragContext";
import RepeatRuleEditor from "@components/MealPlan/RepeatRuleEditor";
import Popover from "@components/Popover";
import {
  RepeatRule,
  defaultRepeatRule,
  describeRepeatRule,
  validateRepeatRule,
} from "@lib/mealPlan/recurrence";
import {
  MealPlanEntry,
  MealSlotDef,
  SlotId,
  findSlot,
  formatSlotTime,
} from "@lib/mealPlan/types";

interface PlannedRecipeChipProps {
  entry: MealPlanEntry;
  /** The plan's slots, for the "move to" picker. */
  slots: MealSlotDef[];
  readOnly?: boolean;
  /**
   * "chip" is the thumbnail-and-title block the week grid uses. "row" is
   * a single text line for the month view, where a cell is too small
   * for anything else; it opens the same popover.
   */
  variant?: "chip" | "row";
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onRemove?: (_entry: MealPlanEntry) => void;
  onMove?: (_entry: MealPlanEntry, _date: string, _slot: SlotId) => void;
  onRepeat?: (_entry: MealPlanEntry, _rule: RepeatRule) => void;
}

const thumbnailUrl = (entry: MealPlanEntry): string | undefined =>
  entry.recipe.recipe.images?.THUMBNAIL?.url ||
  entry.recipe.recipe.images?.SMALL?.url ||
  entry.recipe.recipe.image;

/**
 * One planned meal. Deliberately not a link: the chip is small enough
 * that a stray click while scanning the week shouldn't navigate away, so
 * everything you can do to it lives behind a deliberate tap that opens
 * the detail popover.
 */
const PlannedRecipeChip: React.FC<PlannedRecipeChipProps> = ({
  entry,
  slots,
  readOnly = false,
  variant = "chip",
  onRemove,
  onMove,
  onRepeat,
}) => {
  const { start, draggingEntryId } = useEntryDrag();
  // Set when a press turns into a drag, so releasing over a drop target
  // doesn't also open the popover on the click that follows.
  const didDragRef = useRef(false);

  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [moveDate, setMoveDate] = useState(entry.date);
  const [moveSlot, setMoveSlot] = useState<SlotId>(entry.slot);
  const [repeatRule, setRepeatRule] = useState<RepeatRule | null>(null);

  // Reopening after a move elsewhere shouldn't show stale form values.
  useEffect(() => {
    setMoveDate(entry.date);
    setMoveSlot(entry.slot);
    setRepeatRule(null);
  }, [entry.date, entry.slot]);

  const image = thumbnailUrl(entry);
  const hasMoved = moveDate !== entry.date || moveSlot !== entry.slot;
  const isRepeating = Boolean(entry.series);
  const canApplyRepeat =
    repeatRule !== null && validateRepeatRule(repeatRule, entry.date) === null;
  const isDragging = draggingEntryId === entry.id;

  const handlePointerDown = (event: React.PointerEvent) => {
    if (readOnly) return;
    didDragRef.current = false;
    start(entry, event, () => {
      didDragRef.current = true;
    });
  };

  const handleClick = () => {
    if (didDragRef.current) return;
    setIsOpen((previous) => !previous);
  };

  return (
    <div className="relative">
      {variant === "row" ?
        <button
          ref={setAnchor}
          type="button"
          onPointerDown={handlePointerDown}
          onClick={handleClick}
          title={entry.recipe.recipe.label}
          className={`
            flex w-full items-center gap-1
            rounded-sm px-1 py-0.5
            text-left text-[11px] leading-tight
            transition-colors
            hover:bg-well
            ${readOnly ? "" : "cursor-grab active:cursor-grabbing"}
            ${isDragging ? "opacity-40" : ""}
          `}
        >
          <span className="shrink-0 text-ink-muted">
            {findSlot(slots, entry.slot)?.label ?? entry.slot}
          </span>
          <span className="min-w-0 flex-1 truncate font-medium">
            {entry.recipe.recipe.label}
          </span>
          {isRepeating && (
            <Repeat
              aria-label="Repeats"
              className="size-2.5 shrink-0 text-ink-muted"
            />
          )}
        </button>
      : <button
          ref={setAnchor}
          type="button"
          onPointerDown={handlePointerDown}
          onClick={handleClick}
          title={entry.recipe.recipe.label}
          className={`
            group flex w-full items-center gap-1.5
            rounded-md border border-line
            bg-well
            p-1
            text-left
            transition-colors
            hover:border-line-strong
            ${readOnly ? "" : "cursor-grab active:cursor-grabbing"}
            ${isDragging ? "opacity-40" : ""}
          `}
        >
          {image && (
            <Image
              src={image}
              alt=""
              width={28}
              height={28}
              className="size-6 shrink-0 rounded object-cover sm:size-7"
            />
          )}
          <span className="line-clamp-2 min-w-0 flex-1 text-[11px] font-medium leading-tight sm:text-xs">
            {entry.recipe.recipe.label}
          </span>
          {isRepeating && (
            <Repeat
              aria-label="Repeats"
              className="size-3 shrink-0 self-start text-ink-muted"
            />
          )}
        </button>
      }

      {isOpen && (
        <Popover
          anchor={anchor}
          onClose={() => setIsOpen(false)}
        >
          <p className="mb-2 text-xs font-semibold leading-snug">
            {entry.recipe.recipe.label}
          </p>

          {entry.series && (
            <p className="mb-2 flex items-start gap-1.5 text-[11px] leading-snug text-ink-muted">
              <Repeat className="mt-0.5 size-3 shrink-0" />
              {describeRepeatRule(entry.series)}
            </p>
          )}

          <a
            href={entry.recipe.recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
          >
            <ExternalLink className="size-3.5" />
            Open recipe
          </a>

          {!readOnly && (
            <>
              <div className="mt-3 border-t border-line pt-3">
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                  Move to
                </p>
                <div className="flex flex-col gap-1.5">
                  <input
                    type="date"
                    value={moveDate}
                    onChange={(event) => setMoveDate(event.target.value)}
                    className="w-full rounded-md border border-line bg-transparent px-2 py-1 text-xs"
                  />
                  <select
                    value={moveSlot}
                    onChange={(event) => setMoveSlot(event.target.value)}
                    className="w-full rounded-md border border-line bg-surface-raised px-2 py-1 text-xs"
                  >
                    {slots.map((slot) => (
                      <option
                        key={slot.id}
                        value={slot.id}
                      >
                        {slot.label} · {formatSlotTime(slot.time)}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    disabled={!hasMoved}
                    onClick={() => {
                      onMove?.(entry, moveDate, moveSlot);
                      setIsOpen(false);
                    }}
                    className={`
                      h-8 rounded-md px-2 text-xs font-semibold transition-colors
                      ${
                        hasMoved ?
                          "cursor-pointer bg-accent text-on-accent hover:bg-accent-hover"
                        : "cursor-not-allowed bg-well text-ink-muted"
                      }
                    `}
                  >
                    Move
                  </button>
                </div>
              </div>

              {!isRepeating && onRepeat && (
                <div className="mt-3 border-t border-line pt-3">
                  {
                    repeatRule ?
                      <>
                        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                          Repeat
                        </p>
                        <RepeatRuleEditor
                          startDate={entry.date}
                          rule={repeatRule}
                          onChange={setRepeatRule}
                          dense
                        />
                        <button
                          type="button"
                          disabled={!canApplyRepeat}
                          onClick={() => {
                            onRepeat(entry, repeatRule);
                            setIsOpen(false);
                          }}
                          className={`
                          mt-2 h-8 w-full rounded-md px-2 text-xs font-semibold transition-colors
                          ${
                            canApplyRepeat ?
                              "cursor-pointer bg-accent text-on-accent hover:bg-accent-hover"
                            : "cursor-not-allowed bg-well text-ink-muted"
                          }
                        `}
                        >
                          Repeat this meal
                        </button>
                      </>
                      // Collapsed until asked for, so the popover stays short
                      // for the far more common move and remove.
                    : <button
                        type="button"
                        onClick={() =>
                          setRepeatRule(defaultRepeatRule(entry.date))
                        }
                        className="flex w-full items-center gap-1.5 text-xs text-ink-muted hover:text-ink"
                      >
                        <Repeat className="size-3.5" />
                        Repeat this meal...
                      </button>

                  }
                </div>
              )}

              <button
                type="button"
                onClick={() => {
                  onRemove?.(entry);
                  setIsOpen(false);
                }}
                className="mt-3 flex w-full items-center gap-1.5 border-t border-line pt-3 text-xs text-ink-muted hover:text-danger"
              >
                <Trash2 className="size-3.5" />
                Remove from plan
              </button>
            </>
          )}
        </Popover>
      )}
    </div>
  );
};

export default PlannedRecipeChip;
