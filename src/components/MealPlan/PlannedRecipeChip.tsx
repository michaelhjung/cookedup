"use client";

import { Clock, ExternalLink, PencilLine, Repeat, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { useEntryDrag } from "@components/MealPlan/DragContext";
import RepeatRuleEditor from "@components/MealPlan/RepeatRuleEditor";
import Popover from "@components/Popover";
import {
  RepeatRule,
  RepeatSeries,
  defaultRepeatRule,
  describeRepeatRule,
  expandRepeatRule,
  isSameRepeatRule,
  validateRepeatRule,
} from "@lib/mealPlan/recurrence";
import {
  MealPlanEntry,
  MealSlotDef,
  SlotId,
  findSlot,
  formatSlotTime,
  getEntryLabel,
  getEntryTime,
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
  /**
   * Apply a repeat rule to this meal: start a series when it doesn't
   * repeat yet, or change the series' rule when it does.
   */
  onRepeat?: (_entry: MealPlanEntry, _rule: RepeatRule) => void;
  /** Give this meal its own time, or `null` to put it back on its slot's. */
  onSetTime?: (_entry: MealPlanEntry, _time: string | null) => void;
}

/** The editable part of a series, without its id and anchor date. */
const ruleOfSeries = (series: RepeatSeries): RepeatRule => ({
  frequency: series.frequency,
  intervalWeeks: series.intervalWeeks,
  weekdays: series.weekdays,
  monthly: series.monthly,
  endDate: series.endDate,
});

const thumbnailUrl = (entry: MealPlanEntry): string | undefined =>
  entry.recipe?.recipe.images?.THUMBNAIL?.url ||
  entry.recipe?.recipe.images?.SMALL?.url ||
  entry.recipe?.recipe.image;

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
  onSetTime,
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
  // null while collapsed, like `repeatRule`.
  const [timeDraft, setTimeDraft] = useState<string | null>(null);

  const slot = findSlot(slots, entry.slot);
  const slotTime = slot?.time ?? "12:00";
  const time = getEntryTime(entry, { time: slotTime });
  // An override equal to the slot's time is saved as none at all, so
  // "has its own time" and "shows a different time" mean the same thing.
  const hasOwnTime = time !== slotTime;

  // Reopening after a move elsewhere shouldn't show stale form values.
  useEffect(() => {
    setMoveDate(entry.date);
    setMoveSlot(entry.slot);
    setRepeatRule(null);
    setTimeDraft(null);
  }, [entry.date, entry.slot, entry.series?.id, entry.time]);

  const label = getEntryLabel(entry);
  const image = thumbnailUrl(entry);
  const hasMoved = moveDate !== entry.date || moveSlot !== entry.slot;
  const isTimeChanged =
    timeDraft !== null && timeDraft !== time && timeDraft.length === 5;
  const isRepeating = Boolean(entry.series);
  const isRepeatValid =
    repeatRule !== null && validateRepeatRule(repeatRule, entry.date) === null;
  // Editing an existing rule: no point in re-saving an unchanged one,
  // and a rule that puts nothing on the calendar would wipe the series.
  const isRepeatChanged =
    repeatRule !== null &&
    (!entry.series || !isSameRepeatRule(repeatRule, entry.series));
  const isRepeatEmpty =
    repeatRule !== null &&
    isRepeating &&
    expandRepeatRule(repeatRule, entry.date).length === 0;
  const canApplyRepeat = isRepeatValid && isRepeatChanged && !isRepeatEmpty;
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
          title={label}
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
          <span className="min-w-0 flex-1 truncate font-medium">{label}</span>
          {hasOwnTime && (
            <Clock
              aria-label={`At ${formatSlotTime(time)}`}
              className="size-2.5 shrink-0 text-ink-muted"
            />
          )}
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
          title={label}
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
          {image ?
            <Image
              src={image}
              alt=""
              width={28}
              height={28}
              className="size-6 shrink-0 rounded object-cover sm:size-7"
            />
          : !entry.recipe && (
              // A custom meal has no picture; the pencil marks it as
              // something typed in rather than a recipe with a broken image.
              <span className="flex size-6 shrink-0 items-center justify-center rounded bg-surface-raised text-ink-muted sm:size-7">
                <PencilLine className="size-3.5" />
              </span>
            )
          }
          <span className="min-w-0 flex-1">
            <span className="line-clamp-2 text-[11px] font-medium leading-tight sm:text-xs">
              {label}
            </span>
            {hasOwnTime && (
              // Shown only when it differs from the row's time, so a
              // meal at its usual hour carries no extra noise.
              <span className="mt-0.5 flex items-center gap-1 text-[10px] leading-none text-ink-muted tabular-nums">
                <Clock
                  aria-hidden
                  className="size-2.5 shrink-0"
                />
                {formatSlotTime(time)}
              </span>
            )}
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
          <p className="mb-2 text-xs font-semibold leading-snug">{label}</p>

          {entry.series && (
            <p className="mb-2 flex items-start gap-1.5 text-[11px] leading-snug text-ink-muted">
              <Repeat className="mt-0.5 size-3 shrink-0" />
              {describeRepeatRule(entry.series)}
            </p>
          )}

          {hasOwnTime && slot && (
            <p className="mb-2 flex items-start gap-1.5 text-[11px] leading-snug text-ink-muted">
              <Clock className="mt-0.5 size-3 shrink-0" />
              <span>
                {formatSlotTime(time)}, instead of {slot.label} at{" "}
                {formatSlotTime(slotTime)}
              </span>
            </p>
          )}

          {entry.recipe ?
            <a
              href={entry.recipe.recipe.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
            >
              <ExternalLink className="size-3.5" />
              Open recipe
            </a>
          : <p className="flex items-center gap-1.5 text-xs text-ink-muted">
              <PencilLine className="size-3.5" />
              Custom meal
            </p>
          }

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

              {onSetTime && slot && (
                <div className="mt-3 border-t border-line pt-3">
                  {
                    timeDraft !== null ?
                      <>
                        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                          Time
                        </p>
                        <div className="flex gap-1.5">
                          <input
                            type="time"
                            value={timeDraft}
                            onChange={(event) =>
                              setTimeDraft(event.target.value)
                            }
                            aria-label="Time"
                            className="h-8 min-w-0 flex-1 rounded-md border border-line bg-transparent px-2 text-xs tabular-nums"
                          />
                          <button
                            type="button"
                            disabled={!isTimeChanged}
                            onClick={() => {
                              // Picking the slot's own time means "no
                              // override", so a later slot retime still
                              // carries this meal along.
                              onSetTime(
                                entry,
                                timeDraft === slotTime ? null : timeDraft,
                              );
                              setIsOpen(false);
                            }}
                            className={`
                            h-8 shrink-0 rounded-md px-3 text-xs font-semibold transition-colors
                            ${
                              isTimeChanged ?
                                "cursor-pointer bg-accent text-on-accent hover:bg-accent-hover"
                              : "cursor-not-allowed bg-well text-ink-muted"
                            }
                          `}
                          >
                            Set
                          </button>
                        </div>
                        {hasOwnTime && (
                          <button
                            type="button"
                            onClick={() => {
                              onSetTime(entry, null);
                              setIsOpen(false);
                            }}
                            className="mt-1.5 text-[11px] text-ink-muted hover:text-ink"
                          >
                            Back to {slot.label} at {formatSlotTime(slotTime)}
                          </button>
                        )}
                      </>
                      // Collapsed like Repeat: the common case is a meal at
                      // its usual hour, and the header already says when
                      // it isn't.
                    : <button
                        type="button"
                        onClick={() => setTimeDraft(time)}
                        className="flex w-full items-center gap-1.5 text-xs text-ink-muted hover:text-ink"
                      >
                        <Clock className="size-3.5" />
                        Change time...
                      </button>

                  }
                </div>
              )}

              {onRepeat && (
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
                          canClear={!isRepeating}
                        />
                        {isRepeatValid && isRepeatEmpty && (
                          <p className="mt-1.5 text-[11px] text-danger">
                            That rule wouldn&rsquo;t put any meals on the
                            calendar.
                          </p>
                        )}
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
                          {isRepeating ? "Update repeat" : "Repeat this meal"}
                        </button>
                      </>
                      // Collapsed until asked for, so the popover stays short
                      // for the far more common move and remove.
                    : <button
                        type="button"
                        onClick={() =>
                          setRepeatRule(
                            entry.series ?
                              ruleOfSeries(entry.series)
                            : defaultRepeatRule(entry.date),
                          )
                        }
                        className="flex w-full items-center gap-1.5 text-xs text-ink-muted hover:text-ink"
                      >
                        <Repeat className="size-3.5" />
                        {isRepeating ? "Edit repeat..." : "Repeat this meal..."}
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
