"use client";

import { Copy, Plus, Settings2 } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

import Bowl from "@components/loaders/Bowl";
import AddRecipeDrawer from "@components/MealPlan/AddRecipeDrawer";
import CalendarNav, {
  CalendarView,
  cursorFor,
} from "@components/MealPlan/CalendarNav";
import ConfirmDialog from "@components/MealPlan/ConfirmDialog";
import DayAgenda from "@components/MealPlan/DayAgenda";
import { EntryDragProvider } from "@components/MealPlan/DragContext";
import MonthGrid from "@components/MealPlan/MonthGrid";
import PlanSettings from "@components/MealPlan/PlanSettings";
import SeriesScopeDialog from "@components/MealPlan/SeriesScopeDialog";
import WeekGrid from "@components/MealPlan/WeekGrid";
import { useAuth } from "@context/AuthContext";
import { useToast } from "@context/ToastContext";
import { Hit } from "@interfaces/edamam";
import { useHousehold } from "@lib/household/useHousehold";
import {
  addCustomEntry,
  addEntry,
  copyEntries,
  createPlan,
  createSeries,
  deleteSeries,
  endSeriesBefore,
  fetchEntries,
  fetchPlans,
  fetchStarredRecipes,
  moveEntry,
  removeEntry,
  setEntryTime,
  setSeriesTime,
  shiftSeries,
  updateSeries,
} from "@lib/mealPlan/client";
import {
  addDays,
  addMonths,
  daysBetween,
  formatMonthLabel,
  formatWeekRange,
  monthGridDates,
  startOfWeek,
  todayISO,
} from "@lib/mealPlan/dates";
import { RepeatRule, validateRepeatRule } from "@lib/mealPlan/recurrence";
import {
  MealPlan,
  MealPlanEntry,
  SeriesScope,
  SlotId,
  findSlot,
} from "@lib/mealPlan/types";
import { useIsDesktop } from "@lib/useIsDesktop";

const VIEW_STORAGE_KEY = "cookedup:plan-view";

const readStoredView = (): CalendarView => {
  try {
    return localStorage.getItem(VIEW_STORAGE_KEY) === "month" ?
        "month"
      : "week";
  } catch {
    return "week";
  }
};

/** First and last dates the planner needs loaded for what's on screen. */
const visibleRange = (
  view: CalendarView,
  cursor: string,
): { start: string; end: string } => {
  if (view === "month") {
    const dates = monthGridDates(cursor);
    return { start: dates[0], end: dates[dates.length - 1] };
  }

  const start = startOfWeek(cursor);
  return { start, end: addDays(start, 6) };
};

/**
 * What "copy the previous period" would copy: last week shifted forward
 * a week, or last month shifted by whole weeks so meals land on the same
 * weekdays (a Monday roast stays on a Monday; the alternative, matching
 * day-of-month, puts it on whatever weekday the 3rd happens to be).
 */
const previousPeriod = (view: CalendarView, cursor: string) => {
  if (view === "month") {
    const previous = addMonths(cursor, -1);
    return {
      from: previous,
      to: addDays(cursor, -1),
      dayDelta: daysBetween(startOfWeek(previous), startOfWeek(cursor)),
      label: formatMonthLabel(previous),
    };
  }

  const start = startOfWeek(cursor);
  return {
    from: addDays(start, -7),
    to: addDays(start, -1),
    dayDelta: 7,
    label: formatWeekRange(addDays(start, -7)),
  };
};

/** A change waiting on a "this / following / all" answer. */
type PendingSeriesAction =
  | { action: "move"; entry: MealPlanEntry; date: string; slot: SlotId }
  | { action: "remove"; entry: MealPlanEntry }
  | { action: "edit"; entry: MealPlanEntry; rule: RepeatRule }
  | { action: "retime"; entry: MealPlanEntry; time: string | null };

const MealPlanner = () => {
  const { user, loading: authLoading, openAuthModal } = useAuth();
  const { household, isLoading: isHouseholdLoading } = useHousehold();
  const { showToast } = useToast();
  const isDesktop = useIsDesktop();

  const [plans, setPlans] = useState<MealPlan[]>([]);
  const [activePlanId, setActivePlanId] = useState<string | null>(null);
  const [entries, setEntries] = useState<MealPlanEntry[]>([]);
  const [savedRecipes, setSavedRecipes] = useState<Hit[]>([]);

  const [selectedDate, setSelectedDate] = useState(todayISO());
  const [view, setView] = useState<CalendarView>("week");
  /** Sunday of the visible week, or the 1st of the visible month. */
  const [cursor, setCursor] = useState(startOfWeek(todayISO()));

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [addTarget, setAddTarget] = useState<{
    date: string;
    slot: SlotId;
  } | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [pendingSeries, setPendingSeries] =
    useState<PendingSeriesAction | null>(null);
  const [isConfirmingCopy, setIsConfirmingCopy] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

  // The last view used is remembered per browser; it's a preference,
  // not data, so localStorage is the right home for it.
  useEffect(() => {
    setView(readStoredView());
  }, []);

  const changeView = (next: CalendarView) => {
    setView(next);
    setCursor(cursorFor(next, selectedDate));
    try {
      localStorage.setItem(VIEW_STORAGE_KEY, next);
    } catch {
      // Private mode or blocked storage: the view still switches.
    }
  };

  // Below `lg` there's only the day agenda, which always works a week at
  // a time regardless of which view the desktop had chosen.
  const activeView: CalendarView =
    isDesktop && view === "month" ? "month" : "week";
  const range = visibleRange(activeView, cursor);
  const isInRange = (date: string) => date >= range.start && date <= range.end;

  const activePlan = plans.find((plan) => plan.id === activePlanId) ?? null;
  const canEdit = activePlan?.role !== "viewer";
  // The drawer needs the whole slot, not just the id it was opened with,
  // and a slot deleted while the drawer was open simply isn't there.
  const addTargetSlot =
    addTarget ? findSlot(activePlan?.slots ?? [], addTarget.slot) : undefined;

  const adoptPlan = useCallback((plan: MealPlan) => {
    setPlans((previous) =>
      previous.some((candidate) => candidate.id === plan.id) ? previous : (
        [...previous, plan]
      ),
    );
    setActivePlanId(plan.id);
  }, []);

  // Creating the first plan is offered as an explicit action as well as
  // attempted automatically on load, so a failure here is recoverable
  // from the UI instead of leaving the page with nothing to click.
  const handleCreatePlan = useCallback(async () => {
    if (!user) return;

    setIsCreating(true);
    setError("");
    try {
      adoptPlan(await createPlan(user.id, household?.id ?? null));
    } catch (caught) {
      console.error("Failed to create meal plan:", caught);
      setError(
        caught instanceof Error && caught.message ?
          `Couldn't create a meal plan: ${caught.message}`
        : "Couldn't create a meal plan.",
      );
    } finally {
      setIsCreating(false);
    }
  }, [user, household, adoptPlan]);

  // Load the user's plans, creating a default one the first time so the
  // planner usually opens straight onto a usable week. That first plan
  // belongs to the household if there is one, so it waits for that.
  useEffect(() => {
    if (authLoading || isHouseholdLoading) return;

    if (!user) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      try {
        const userPlans = await fetchPlans(user.id);
        if (cancelled) return;

        setPlans(userPlans);

        if (userPlans.length > 0) {
          setActivePlanId((current) => current ?? userPlans[0].id);
          return;
        }

        // No plans yet. A failure to auto-create isn't fatal — it falls
        // through to the empty state, which offers the same action.
        try {
          const created = await createPlan(user.id, household?.id ?? null);
          if (!cancelled) adoptPlan(created);
        } catch (caught) {
          console.error("Failed to create a first meal plan:", caught);
          if (!cancelled)
            setError(
              caught instanceof Error && caught.message ?
                `Couldn't create your first meal plan: ${caught.message}`
              : "Couldn't create your first meal plan.",
            );
        }
      } catch (caught) {
        console.error("Failed to load meal plans:", caught);
        if (!cancelled)
          setError(
            caught instanceof Error && caught.message ?
              `Couldn't load your meal plans: ${caught.message}`
            : "Couldn't load your meal plans.",
          );
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [user, authLoading, isHouseholdLoading, household, adoptPlan]);

  useEffect(() => {
    if (!user) return;
    fetchStarredRecipes(user.id).then(setSavedRecipes).catch(console.error);
  }, [user]);

  const loadEntries = useCallback(async () => {
    if (!activePlanId) return;

    try {
      setEntries(await fetchEntries(activePlanId, range.start, range.end));
    } catch (caught) {
      console.error("Failed to load plan entries:", caught);
      setError("Couldn't load the meals for this period.");
    }
  }, [activePlanId, range.start, range.end]);

  useEffect(() => {
    loadEntries();
  }, [loadEntries]);

  // The agenda can walk off the end of the loaded week; follow it so the
  // fetched range always contains the day being shown.
  const changeSelectedDate = (date: string) => {
    setSelectedDate(date);
    setCursor(cursorFor(activeView, date));
  };

  const changeCursor = (next: string) => {
    setCursor(next);
    setSelectedDate(next);
  };

  // From the month view, a day number opens that week.
  const openDay = (date: string) => {
    setSelectedDate(date);
    setView("week");
    setCursor(startOfWeek(date));
    try {
      localStorage.setItem(VIEW_STORAGE_KEY, "week");
    } catch {
      // See changeView.
    }
  };

  const reportError = (caught: unknown, fallback: string) => {
    console.error(fallback, caught);
    setError(
      caught instanceof Error && caught.message ?
        `${fallback} ${caught.message}`
      : fallback,
    );
  };

  /**
   * Both ways of adding a meal end the same way: the row is inserted,
   * optionally expanded into a series, and the range is refetched.
   * `insert` is the only thing that differs.
   */
  const addMeal = async (
    insert: () => Promise<string>,
    rule: RepeatRule | null,
    fallback: string,
  ) => {
    if (!addTarget) return;

    setIsAdding(true);
    setError("");

    try {
      const entryId = await insert();

      // The first occurrence is added like any meal, then expanded. If
      // expanding fails the single meal is still there, so the error
      // says exactly that rather than implying nothing happened.
      if (rule) {
        try {
          await createSeries({ id: entryId, date: addTarget.date }, rule);
        } catch (caught) {
          reportError(caught, "Added the meal, but couldn't make it repeat.");
        }
      }

      // Refetched rather than appended: the server assigns the entry id
      // and its position within the slot, and guessing either would make
      // the next remove or move act on a row that doesn't exist.
      await loadEntries();
      setAddTarget(null);
    } catch (caught) {
      reportError(caught, fallback);
    } finally {
      setIsAdding(false);
    }
  };

  const handleAdd = (hit: Hit, rule: RepeatRule | null) => {
    if (!addTarget || !activePlanId) return;

    return addMeal(
      () => addEntry(activePlanId, hit, addTarget.date, addTarget.slot),
      rule,
      "Couldn't add that recipe.",
    );
  };

  const handleAddCustom = (title: string, rule: RepeatRule | null) => {
    if (!addTarget || !activePlanId) return;

    return addMeal(
      () => addCustomEntry(activePlanId, title, addTarget.date, addTarget.slot),
      rule,
      "Couldn't add that meal.",
    );
  };

  const startSeries = async (entry: MealPlanEntry, rule: RepeatRule) => {
    setError("");
    try {
      await createSeries(entry, rule);
      await loadEntries();
    } catch (caught) {
      reportError(caught, "Couldn't make that meal repeat.");
    }
  };

  const editWithScope = async (
    entry: MealPlanEntry,
    rule: RepeatRule,
    scope: SeriesScope,
  ) => {
    if (!entry.series) return;

    // "All" re-expands from the series' own first date, which may be
    // earlier than the meal that was clicked, so the year cap is
    // re-checked against that anchor.
    const fromDate = scope === "all" ? entry.series.startDate : entry.date;
    const problem = validateRepeatRule(rule, fromDate);
    if (problem) {
      setError(problem);
      return;
    }

    setError("");
    // Like a move, this rebuilds the series' rows, so a reload is the
    // only way to get fresh ids.
    try {
      await updateSeries(entry.series.id, fromDate, rule);
      await loadEntries();
    } catch (caught) {
      reportError(caught, "Couldn't change how that meal repeats.");
    }
  };

  // A meal that already repeats gets the "following / all" question
  // first; one that doesn't simply becomes a series.
  const handleRepeat = (entry: MealPlanEntry, rule: RepeatRule) => {
    if (entry.series) setPendingSeries({ action: "edit", entry, rule });
    else startSeries(entry, rule);
  };

  const removeWithScope = async (entry: MealPlanEntry, scope: SeriesScope) => {
    const snapshot = entries;
    const series = entry.series;

    // Optimistic: drop exactly the rows the database is about to.
    setEntries((previous) =>
      previous.filter((candidate) => {
        if (candidate.id === entry.id) return false;
        if (scope === "one" || !series || candidate.series?.id !== series.id)
          return true;
        return scope === "following" ? candidate.date < entry.date : false;
      }),
    );

    try {
      if (scope === "one" || !series) await removeEntry(entry.id);
      else if (scope === "following")
        await endSeriesBefore(series.id, entry.date);
      else await deleteSeries(series.id);
    } catch (caught) {
      setEntries(snapshot);
      reportError(caught, "Couldn't remove that meal.");
    }
  };

  const moveWithScope = async (
    entry: MealPlanEntry,
    date: string,
    slot: SlotId,
    scope: SeriesScope,
  ) => {
    const snapshot = entries;

    if (scope === "one" || !entry.series) {
      // A time set for one slot doesn't carry to another; `moveEntry`
      // drops it the same way.
      const time = slot === entry.slot ? entry.time : null;
      setEntries((previous) =>
        previous.map((candidate) =>
          candidate.id === entry.id ?
            { ...candidate, date, slot, time }
          : candidate,
        ),
      );

      try {
        await moveEntry(entry, date, slot);
        // Moving out of the visible range means the entry should vanish
        // from it, which only a refetch gets right.
        if (!isInRange(date)) await loadEntries();
      } catch (caught) {
        setEntries(snapshot);
        reportError(caught, "Couldn't move that meal.");
      }
      return;
    }

    // Shifting a series re-creates its rows, so the ids on screen are
    // stale the moment it succeeds: no optimistic update, just a reload.
    try {
      await shiftSeries(
        entry,
        scope === "all" ? entry.series.startDate : entry.date,
        date,
        slot,
      );
      await loadEntries();
    } catch (caught) {
      reportError(caught, "Couldn't move those meals.");
    }
  };

  const retimeWithScope = async (
    entry: MealPlanEntry,
    time: string | null,
    scope: SeriesScope,
  ) => {
    const snapshot = entries;
    const series = entry.series;
    const fromDate = scope === "all" ? series?.startDate : entry.date;

    // Time isn't part of the repeat rule, so the rows keep their ids and
    // an optimistic update is safe even across a whole series.
    setEntries((previous) =>
      previous.map((candidate) => {
        if (candidate.id === entry.id) return { ...candidate, time };
        if (scope === "one" || !series || candidate.series?.id !== series.id)
          return candidate;
        return fromDate && candidate.date >= fromDate ?
            { ...candidate, time }
          : candidate;
      }),
    );

    try {
      if (scope === "one" || !series || !fromDate)
        await setEntryTime(entry.id, time);
      else await setSeriesTime(series.id, fromDate, time);
    } catch (caught) {
      setEntries(snapshot);
      reportError(caught, "Couldn't change that meal's time.");
    }
  };

  // A meal that repeats gets the "this / following / all" question
  // first; the answer comes back through handleSeriesScope.
  const handleRemove = (entry: MealPlanEntry) => {
    if (entry.series) setPendingSeries({ action: "remove", entry });
    else removeWithScope(entry, "one");
  };

  const handleMove = (entry: MealPlanEntry, date: string, slot: SlotId) => {
    if (entry.series) setPendingSeries({ action: "move", entry, date, slot });
    else moveWithScope(entry, date, slot, "one");
  };

  const handleSetTime = (entry: MealPlanEntry, time: string | null) => {
    if (entry.series) setPendingSeries({ action: "retime", entry, time });
    else retimeWithScope(entry, time, "one");
  };

  const handleSeriesScope = (scope: SeriesScope) => {
    if (!pendingSeries) return;
    setPendingSeries(null);

    if (pendingSeries.action === "remove")
      removeWithScope(pendingSeries.entry, scope);
    else if (pendingSeries.action === "edit")
      editWithScope(pendingSeries.entry, pendingSeries.rule, scope);
    else if (pendingSeries.action === "retime")
      retimeWithScope(pendingSeries.entry, pendingSeries.time, scope);
    else
      moveWithScope(
        pendingSeries.entry,
        pendingSeries.date,
        pendingSeries.slot,
        scope,
      );
  };

  const copySource = previousPeriod(activeView, cursor);

  const handleCopyPrevious = async () => {
    if (!activePlanId) return;

    setIsCopying(true);
    setError("");
    try {
      const copied = await copyEntries(
        activePlanId,
        copySource.from,
        copySource.to,
        copySource.dayDelta,
      );
      await loadEntries();
      setIsConfirmingCopy(false);
      showToast(
        copied === 0 ?
          "Nothing new to copy from " + copySource.label + "."
        : `Copied ${copied} ${copied === 1 ? "meal" : "meals"} from ${copySource.label}.`,
      );
    } catch (caught) {
      reportError(caught, "Couldn't copy those meals.");
    } finally {
      setIsCopying(false);
    }
  };

  if (authLoading || (user && isLoading))
    return (
      <div className="flex grow items-center justify-center">
        <Bowl />
      </div>
    );

  if (!user)
    return (
      <div className="flex grow flex-col items-center justify-center gap-2 p-8 text-center">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Plan your week of meals
        </h2>
        <p className="max-w-md text-sm text-ink-muted sm:text-base">
          Drop recipes onto a calendar, subscribe to it from Google Calendar or
          any other calendar app, and share it with whoever you cook for.
        </p>
        <button
          type="button"
          onClick={openAuthModal}
          className="mt-2 h-9 rounded-md bg-accent px-4 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
        >
          Sign in to get started
        </button>
      </div>
    );

  if (!activePlan)
    return (
      <div className="flex grow flex-col items-center justify-center gap-3 p-8 text-center">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          You don&rsquo;t have a meal plan yet
        </h2>
        <p className="max-w-md text-sm text-ink-muted sm:text-base">
          Create one to start dropping recipes onto a calendar you can subscribe
          to and share.
        </p>

        <button
          type="button"
          onClick={handleCreatePlan}
          disabled={isCreating}
          className={`
            flex h-9 items-center gap-1.5
            rounded-md px-4 text-sm font-semibold
            transition-colors
            ${
              isCreating ?
                "cursor-not-allowed bg-well text-ink-muted"
              : "cursor-pointer bg-accent text-on-accent hover:bg-accent-hover"
            }
          `}
        >
          <Plus className="size-4" />
          {isCreating ? "Creating..." : "Create a meal plan"}
        </button>

        {error && <p className="max-w-md text-xs text-danger">{error}</p>}
      </div>
    );

  return (
    <EntryDragProvider onDrop={handleMove}>
      <div className="flex size-full min-h-0 flex-col gap-4">
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-2">
          {plans.length > 1 ?
            <select
              value={activePlan.id}
              onChange={(event) => setActivePlanId(event.target.value)}
              className="h-8 rounded-md border border-line bg-surface-raised px-2 text-base font-semibold tracking-tight"
            >
              {plans.map((plan) => (
                <option
                  key={plan.id}
                  value={plan.id}
                >
                  {plan.name}
                  {plan.householdId ?
                    " (household)"
                  : plan.role !== "owner" ?
                    " (shared)"
                  : ""}
                </option>
              ))}
            </select>
          : <h2 className="text-lg font-semibold tracking-tight">
              {activePlan.name}
            </h2>
          }

          <button
            type="button"
            onClick={() => setIsSettingsOpen(true)}
            className="flex h-8 items-center gap-1.5 rounded-md border border-line bg-surface-raised px-3 text-[13px] font-medium text-ink transition-colors hover:border-line-strong"
          >
            <Settings2 className="size-3.5 text-ink-muted" />
            Settings &amp; sharing
          </button>
        </div>

        {isDesktop && (
          <div className="shrink-0">
            <CalendarNav
              view={activeView}
              cursor={cursor}
              onCursorChange={changeCursor}
              onViewChange={changeView}
            >
              {canEdit && (
                <button
                  type="button"
                  onClick={() => setIsConfirmingCopy(true)}
                  className="flex h-7 items-center gap-1.5 rounded-md px-2 text-xs font-medium text-ink-muted transition-colors hover:bg-well hover:text-ink"
                >
                  <Copy className="size-3.5" />
                  Copy last {activeView}
                </button>
              )}
            </CalendarNav>
          </div>
        )}

        {error && <p className="shrink-0 text-xs text-danger">{error}</p>}

        <div className="min-h-0 flex-1 overflow-y-auto pb-2">
          {isDesktop === null ?
            null
          : !isDesktop ?
            <DayAgenda
              date={selectedDate}
              entries={entries}
              slots={activePlan.slots}
              readOnly={!canEdit}
              onDateChange={changeSelectedDate}
              onAdd={(date, slot) => setAddTarget({ date, slot })}
              onRemove={handleRemove}
              onMove={handleMove}
              onRepeat={handleRepeat}
              onSetTime={handleSetTime}
            />
          : activeView === "month" ?
            <MonthGrid
              monthStart={cursor}
              entries={entries}
              slots={activePlan.slots}
              readOnly={!canEdit}
              onOpenDay={openDay}
              onAdd={(date) =>
                setAddTarget({ date, slot: activePlan.slots[0].id })
              }
              onRemove={handleRemove}
              onMove={handleMove}
              onRepeat={handleRepeat}
              onSetTime={handleSetTime}
            />
          : <WeekGrid
              weekStart={cursor}
              entries={entries}
              slots={activePlan.slots}
              readOnly={!canEdit}
              onAdd={(date, slot) => setAddTarget({ date, slot })}
              onRemove={handleRemove}
              onMove={handleMove}
              onRepeat={handleRepeat}
              onSetTime={handleSetTime}
            />
          }
        </div>

        {addTarget && addTargetSlot && (
          <AddRecipeDrawer
            date={addTarget.date}
            slot={addTargetSlot}
            slots={activePlan.slots}
            savedRecipes={savedRecipes}
            onSlotChange={(slot) => setAddTarget({ ...addTarget, slot })}
            onSelect={isAdding ? () => {} : handleAdd}
            onAddCustom={isAdding ? () => {} : handleAddCustom}
            onClose={() => setAddTarget(null)}
          />
        )}

        {pendingSeries && (
          <SeriesScopeDialog
            entry={pendingSeries.entry}
            action={pendingSeries.action}
            onChoose={handleSeriesScope}
            onCancel={() => setPendingSeries(null)}
          />
        )}

        {isConfirmingCopy && (
          <ConfirmDialog
            title={`Copy last ${activeView}?`}
            body={
              <>
                Every meal from{" "}
                <strong className="text-ink">{copySource.label}</strong> will be
                added to this {activeView}
                {activeView === "month" ? " on the same weekdays" : ""}. Meals
                already planned here are kept.
              </>
            }
            confirmLabel="Copy meals"
            busyLabel="Copying..."
            isBusy={isCopying}
            onConfirm={handleCopyPrevious}
            onCancel={() => setIsConfirmingCopy(false)}
          />
        )}

        {isSettingsOpen && (
          <PlanSettings
            plan={activePlan}
            household={household}
            onPlanChange={(updated) => {
              setPlans((previous) =>
                previous.map((plan) =>
                  plan.id === updated.id ? updated : plan,
                ),
              );
              // Removing a meal deletes its planned recipes, so what's on
              // screen is stale until it's re-read.
              loadEntries();
            }}
            onClose={() => setIsSettingsOpen(false)}
          />
        )}
      </div>
    </EntryDragProvider>
  );
};

export default MealPlanner;
