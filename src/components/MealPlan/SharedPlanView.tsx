"use client";

import React, { useEffect, useState } from "react";

import CalendarNav from "@components/MealPlan/CalendarNav";
import DayAgenda from "@components/MealPlan/DayAgenda";
import WeekGrid from "@components/MealPlan/WeekGrid";
import { addDays, startOfWeek, todayISO } from "@lib/mealPlan/dates";
import { MealPlanEntry, MealSlotDef } from "@lib/mealPlan/types";

interface SharedPlanViewProps {
  name: string;
  entries: MealPlanEntry[];
  slots: MealSlotDef[];
  /** Origin-relative, since the server doesn't know the public host. */
  feedPath: string;
}

/**
 * The public face of a shared plan. Unlike the owner's planner this gets
 * every entry up front (the share RPC returns the whole plan), so moving
 * between weeks is filtering rather than fetching.
 */
const SharedPlanView: React.FC<SharedPlanViewProps> = ({
  name,
  entries,
  slots,
  feedPath,
}) => {
  const [weekStart, setWeekStart] = useState(startOfWeek(todayISO()));
  const [selectedDate, setSelectedDate] = useState(todayISO());
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);

    const query = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const weekEnd = addDays(weekStart, 6);
  const visibleEntries = entries.filter(
    (entry) => entry.date >= weekStart && entry.date <= weekEnd,
  );

  const feedUrl = `${origin}${feedPath}`;
  const webcalUrl = feedUrl.replace(/^https?:/, "webcal:");

  return (
    <main
      id="main"
      className="mx-auto flex w-full max-w-6xl grow flex-col gap-4"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-[11px] uppercase tracking-widest text-ink-muted">
          Shared meal plan
        </p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {name}
        </h1>
      </div>

      {origin && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            href={`https://calendar.google.com/calendar/r?cid=${encodeURIComponent(webcalUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent hover:bg-accent-hover px-4 py-2 text-xs font-semibold text-on-accent transition"
          >
            Add to Google Calendar
          </a>
          <a
            href={webcalUrl}
            className="rounded-md border border-line bg-surface-raised px-4 py-2 text-xs font-semibold text-ink transition"
          >
            Add to Apple / Outlook
          </a>
        </div>
      )}

      {isDesktop && (
        <CalendarNav
          view="week"
          cursor={weekStart}
          onCursorChange={(next) => {
            setWeekStart(next);
            setSelectedDate(next);
          }}
        />
      )}

      {isDesktop === null ?
        null
      : isDesktop ?
        <WeekGrid
          weekStart={weekStart}
          entries={visibleEntries}
          slots={slots}
          readOnly
        />
      : <DayAgenda
          date={selectedDate}
          entries={entries}
          slots={slots}
          readOnly
          onDateChange={(date) => {
            setSelectedDate(date);
            setWeekStart(startOfWeek(date));
          }}
        />
      }

      <p className="text-center text-[11px] text-ink-muted">
        This is a read-only view. Calendar apps refresh subscribed feeds on
        their own schedule, so updates can take a few hours to appear.
      </p>
    </main>
  );
};

export default SharedPlanView;
