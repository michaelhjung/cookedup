"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

import Popover from "@components/Popover";
import {
  addDays,
  addMonths,
  formatMonthLabel,
  formatWeekRange,
  startOfMonth,
  startOfWeek,
  todayISO,
} from "@lib/mealPlan/dates";

export type CalendarView = "week" | "month";

interface CalendarNavProps {
  view: CalendarView;
  /** The Sunday of the visible week, or the 1st of the visible month. */
  cursor: string;
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onCursorChange: (_cursor: string) => void;
  /** When absent the Week / Month toggle isn't shown (the shared view). */
  onViewChange?: (_view: CalendarView) => void;
  /** Extra controls rendered at the trailing edge. */
  children?: React.ReactNode;
}

/** The week or month containing `date`, depending on the view. */
export const cursorFor = (view: CalendarView, date: string): string =>
  view === "week" ? startOfWeek(date) : startOfMonth(date);

const navButtonClass =
  "flex size-7 items-center justify-center rounded-md border border-line bg-surface-raised text-ink-muted transition-colors hover:border-line-strong hover:text-ink";

/**
 * Previous / next, the current range, "Today", and the view switch. The
 * range label doubles as a jump-to-date control: clicking it opens a
 * native date picker rather than a hand-built month calendar, because
 * the browser's one already handles keyboard input and locale.
 */
const CalendarNav: React.FC<CalendarNavProps> = ({
  view,
  cursor,
  onCursorChange,
  onViewChange,
  children,
}) => {
  const [labelAnchor, setLabelAnchor] = useState<HTMLButtonElement | null>(
    null,
  );
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const today = todayISO();
  const isOnToday = cursor === cursorFor(view, today);

  const step = (direction: -1 | 1) =>
    onCursorChange(
      view === "week" ?
        addDays(cursor, 7 * direction)
      : addMonths(cursor, direction),
    );

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => step(-1)}
        aria-label={view === "week" ? "Previous week" : "Previous month"}
        className={navButtonClass}
      >
        <ChevronLeft className="size-4" />
      </button>

      <button
        ref={setLabelAnchor}
        type="button"
        onClick={() => setIsPickerOpen((previous) => !previous)}
        title="Jump to a date"
        className="h-7 min-w-40 rounded-md px-2 text-center text-[13px] font-semibold tabular-nums transition-colors hover:bg-well sm:min-w-44"
      >
        {view === "week" ? formatWeekRange(cursor) : formatMonthLabel(cursor)}
      </button>

      <button
        type="button"
        onClick={() => step(1)}
        aria-label={view === "week" ? "Next week" : "Next month"}
        className={navButtonClass}
      >
        <ChevronRight className="size-4" />
      </button>

      <button
        type="button"
        onClick={() => onCursorChange(cursorFor(view, today))}
        disabled={isOnToday}
        className={`
          ml-1 flex h-7 items-center gap-1 rounded-md px-2 text-xs font-medium
          transition-colors
          ${
            isOnToday ?
              "cursor-not-allowed text-ink-muted/50"
            : "cursor-pointer text-ink-muted hover:bg-well hover:text-ink"
          }
        `}
      >
        Today
      </button>

      {onViewChange && (
        <div
          role="group"
          aria-label="Calendar view"
          className="ml-1 flex h-7 rounded-md border border-line bg-surface-raised p-0.5"
        >
          {(["week", "month"] as CalendarView[]).map((candidate) => (
            <button
              key={candidate}
              type="button"
              aria-pressed={view === candidate}
              onClick={() => onViewChange(candidate)}
              className={`
                rounded-sm px-2.5 text-xs font-medium capitalize
                transition-colors
                ${
                  view === candidate ? "bg-well text-ink" : (
                    "text-ink-muted hover:text-ink"
                  )
                }
              `}
            >
              {candidate}
            </button>
          ))}
        </div>
      )}

      {children && (
        <div className="ml-auto flex items-center gap-2">{children}</div>
      )}

      {isPickerOpen && (
        <Popover
          anchor={labelAnchor}
          onClose={() => setIsPickerOpen(false)}
          width={200}
        >
          <label className="flex flex-col gap-1.5 text-xs">
            <span className="font-semibold">Jump to</span>
            <input
              type="date"
              autoFocus
              defaultValue={cursor}
              onChange={(event) => {
                // An incomplete value (mid-typing) is an empty string.
                if (!event.target.value) return;
                onCursorChange(cursorFor(view, event.target.value));
                setIsPickerOpen(false);
              }}
              className="h-8 rounded-md border border-line bg-transparent px-2 text-xs outline-none focus:border-ink"
            />
          </label>
        </Popover>
      )}
    </div>
  );
};

export default CalendarNav;
