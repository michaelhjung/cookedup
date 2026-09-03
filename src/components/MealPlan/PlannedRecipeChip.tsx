"use client";

import { ExternalLink, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { useEntryDrag } from "@components/MealPlan/DragContext";
import Popover from "@components/Popover";
import {
  MealPlanEntry,
  MealSlotDef,
  SlotId,
  formatSlotTime,
} from "@lib/mealPlan/types";

interface PlannedRecipeChipProps {
  entry: MealPlanEntry;
  /** The plan's slots, for the "move to" picker. */
  slots: MealSlotDef[];
  readOnly?: boolean;
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onRemove?: (_entry: MealPlanEntry) => void;
  onMove?: (_entry: MealPlanEntry, _date: string, _slot: SlotId) => void;
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
  onRemove,
  onMove,
}) => {
  const { start, draggingEntryId } = useEntryDrag();
  // Set when a press turns into a drag, so releasing over a drop target
  // doesn't also open the popover on the click that follows.
  const didDragRef = useRef(false);

  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [moveDate, setMoveDate] = useState(entry.date);
  const [moveSlot, setMoveSlot] = useState<SlotId>(entry.slot);

  // Reopening after a move elsewhere shouldn't show stale form values.
  useEffect(() => {
    setMoveDate(entry.date);
    setMoveSlot(entry.slot);
  }, [entry.date, entry.slot]);

  const image = thumbnailUrl(entry);
  const hasMoved = moveDate !== entry.date || moveSlot !== entry.slot;

  return (
    <div className="relative">
      <button
        ref={setAnchor}
        type="button"
        onPointerDown={(event) => {
          if (readOnly) return;
          didDragRef.current = false;
          start(entry, event, () => {
            didDragRef.current = true;
          });
        }}
        onClick={() => {
          if (didDragRef.current) return;
          setIsOpen((previous) => !previous);
        }}
        title={entry.recipe.recipe.label}
        className={`
          group flex w-full items-center gap-1.5
          rounded-md border border-[var(--card-border-color)]/60
          bg-[var(--pastel-brown)]/10
          p-1
          text-left
          transition-colors
          hover:border-[var(--pastel-blue)] hover:bg-[var(--pastel-blue)]/20
          ${readOnly ? "" : "cursor-grab active:cursor-grabbing"}
          ${draggingEntryId === entry.id ? "opacity-40" : ""}
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
        <span className="line-clamp-2 text-[0.65rem] leading-tight sm:text-xs">
          {entry.recipe.recipe.label}
        </span>
      </button>

      {isOpen && (
        <Popover
          anchor={anchor}
          onClose={() => setIsOpen(false)}
        >
          <p className="mb-2 text-xs font-semibold leading-snug">
            {entry.recipe.recipe.label}
          </p>

          <a
            href={entry.recipe.recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-blue-500 hover:underline"
          >
            <ExternalLink className="size-3.5" />
            Open recipe
          </a>

          {!readOnly && (
            <>
              <div className="mt-3 border-t border-zinc-500/15 pt-3">
                <p className="mb-1.5 text-[0.65rem] font-semibold uppercase tracking-wide text-gray-400">
                  Move to
                </p>
                <div className="flex flex-col gap-1.5">
                  <input
                    type="date"
                    value={moveDate}
                    onChange={(event) => setMoveDate(event.target.value)}
                    className="w-full rounded border border-zinc-500/30 bg-transparent px-2 py-1 text-xs"
                  />
                  <select
                    value={moveSlot}
                    onChange={(event) => setMoveSlot(event.target.value)}
                    className="w-full rounded border border-zinc-500/30 bg-[var(--background-color)] px-2 py-1 text-xs"
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
                      rounded px-2 py-1 text-xs font-semibold
                      ${
                        hasMoved ?
                          "cursor-pointer bg-[var(--pastel-blue)] text-blue-900"
                        : "cursor-not-allowed bg-[var(--pastel-brown)]/10 text-gray-400"
                      }
                    `}
                  >
                    Move
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onRemove?.(entry);
                  setIsOpen(false);
                }}
                className="mt-3 flex w-full items-center gap-1.5 border-t border-zinc-500/15 pt-3 text-xs text-gray-500 hover:text-red-500"
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
