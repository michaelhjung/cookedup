"use client";

import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
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
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <button
        type="button"
        onClick={() => onChange(addDays(weekStart, -7))}
        aria-label="Previous week"
        className="rounded-full p-1.5 transition-colors hover:bg-[var(--pastel-brown)]/15"
      >
        <ChevronLeft className="size-4 sm:size-5" />
      </button>

      <span className="min-w-40 text-center text-sm font-semibold sm:min-w-52 sm:text-base">
        {formatWeekRange(weekStart)}
      </span>

      <button
        type="button"
        onClick={() => onChange(addDays(weekStart, 7))}
        aria-label="Next week"
        className="rounded-full p-1.5 transition-colors hover:bg-[var(--pastel-brown)]/15"
      >
        <ChevronRight className="size-4 sm:size-5" />
      </button>

      <button
        type="button"
        onClick={() => onChange(startOfWeek(todayISO()))}
        disabled={isCurrentWeek}
        className={`
          flex items-center gap-1 rounded-3xl border px-2.5 py-1 text-xs
          transition-colors
          ${
            isCurrentWeek ?
              "cursor-not-allowed border-transparent text-gray-400"
            : "cursor-pointer border-zinc-400/50 text-gray-500 hover:border-[var(--pastel-blue)] hover:text-[var(--pastel-blue)]"
          }
        `}
      >
        <CalendarDays className="size-3.5" />
        Today
      </button>
    </div>
  );
};

export default WeekNav;
