"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

import {
  addDays,
  formatWeekRange,
  startOfWeek,
  todayISO,
} from "@lib/mealPlan/dates";

interface WeekNavProps {
  weekStart: string;
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onChange: (_weekStart: string) => void;
}

const WeekNav: React.FC<WeekNavProps> = ({ weekStart, onChange }) => {
  const isCurrentWeek = weekStart === startOfWeek(todayISO());

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onChange(addDays(weekStart, -7))}
        aria-label="Previous week"
        className="flex size-7 items-center justify-center rounded-md border border-line bg-surface-raised text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
      >
        <ChevronLeft className="size-4" />
      </button>

      <span className="min-w-40 text-center text-[13px] font-semibold tabular-nums sm:min-w-44">
        {formatWeekRange(weekStart)}
      </span>

      <button
        type="button"
        onClick={() => onChange(addDays(weekStart, 7))}
        aria-label="Next week"
        className="flex size-7 items-center justify-center rounded-md border border-line bg-surface-raised text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
      >
        <ChevronRight className="size-4" />
      </button>

      <button
        type="button"
        onClick={() => onChange(startOfWeek(todayISO()))}
        disabled={isCurrentWeek}
        className={`
          ml-1 flex h-7 items-center gap-1 rounded-md px-2 text-xs font-medium
          transition-colors
          ${
            isCurrentWeek ?
              "cursor-not-allowed text-ink-muted/50"
            : "cursor-pointer text-ink-muted hover:bg-well hover:text-ink"
          }
        `}
      >
        Today
      </button>
    </div>
  );
};

export default WeekNav;
