"use client";

import {
  ArrowLeft,
  Check,
  ChevronDown,
  Ellipsis,
  ListPlus,
  Settings2,
  SlidersHorizontal,
  Square,
  SquareCheckBig,
  Tag,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import ActionSheet, { SheetAction } from "@components/ActionSheet";
import GenerateSheet from "@components/Grocery/GenerateSheet";
import ListSettings from "@components/Grocery/ListSettings";
import PreferencesSheet from "@components/Grocery/PreferencesSheet";
import Bowl from "@components/loaders/Bowl";
import AddItemBar from "@components/Pantry/AddItemBar";
import { useAuth } from "@context/AuthContext";
import { useToast } from "@context/ToastContext";
import {
  CheckResult,
  DuplicateLineError,
  LineEvent,
  addLine,
  addLines,
  checkLine,
  deleteCheckedLines,
  deleteLine,
  fetchLines,
  fetchList,
  fetchPantrySettings,
  subscribeToList,
  toLine,
  uncheckAllLines,
  uncheckLine,
  updateLine,
} from "@lib/grocery/client";
import {
  DEFAULT_PANTRY_SETTINGS,
  GroceryLine,
  GroceryList,
  NewLine,
  PantrySettings,
} from "@lib/grocery/types";
import { useHousehold } from "@lib/household/useHousehold";
import { fetchPlans } from "@lib/mealPlan/client";
import { MealPlan } from "@lib/mealPlan/types";
import { fetchItems, fetchPantries } from "@lib/pantry/client";
import { groupByCategory } from "@lib/pantry/items";
import { formatRelativeTime } from "@lib/pantry/time";
import { CATEGORIES, Category, Pantry, PantryItem } from "@lib/pantry/types";
import { fetchPeople } from "@lib/sharing/client";

const UNDO_MS = 6000;

interface ListViewProps {
  listId: string;
}

type Sheet =
  | { kind: "menu" }
  | { kind: "generate"; preferPantry: boolean }
  | { kind: "preferences" }
  | { kind: "settings" }
  | { kind: "line"; line: GroceryLine }
  | { kind: "line-category"; line: GroceryLine }
  | null;

/**
 * One grocery list, laid out for the aisle: unchecked lines grouped in
 * store-walk order with full-row tap targets, checked ones folded away
 * at the bottom, and an Undo toast that reverses both the check and
 * whatever it did to the pantry.
 */
const ListView: React.FC<ListViewProps> = ({ listId }) => {
  const { user, loading: authLoading, openAuthModal } = useAuth();
  const { household, isLoading: isHouseholdLoading } = useHousehold();
  const { showToast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [list, setList] = useState<GroceryList | null>(null);
  const [lines, setLines] = useState<GroceryLine[]>([]);
  const [pantries, setPantries] = useState<Pantry[]>([]);
  const [pantryItems, setPantryItems] = useState<PantryItem[] | null>(null);
  const [plans, setPlans] = useState<MealPlan[]>([]);
  const [settings, setSettings] = useState<PantrySettings>(
    DEFAULT_PANTRY_SETTINGS,
  );
  const [people, setPeople] = useState<Map<string, string>>(new Map());
  const [presentUserIds, setPresentUserIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMissing, setIsMissing] = useState(false);
  const [error, setError] = useState("");
  const [isCheckedOpen, setIsCheckedOpen] = useState(false);
  const [flashLineId, setFlashLineId] = useState<string | null>(null);
  const [sheet, setSheet] = useState<Sheet>(null);
  const hasOpenedFromQuery = useRef(false);
  const addBarRef = useRef<HTMLDivElement>(null);

  const canEdit = list !== null && list.role !== "viewer";
  const pantry =
    list?.pantryId ?
      (pantries.find((candidate) => candidate.id === list.pantryId) ?? null)
    : null;

  // ------------------------------------------------------------------
  // Loading
  // ------------------------------------------------------------------

  useEffect(() => {
    if (authLoading || isHouseholdLoading) return;
    if (!user) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;

    const load = async () => {
      try {
        const householdId = household?.id ?? null;
        const [
          loadedList,
          loadedLines,
          loadedPantries,
          loadedPlans,
          loadedSettings,
        ] = await Promise.all([
          fetchList(listId, user.id, householdId),
          fetchLines(listId),
          fetchPantries(user.id, householdId),
          fetchPlans(user.id),
          fetchPantrySettings(user.id),
        ]);
        if (cancelled) return;

        if (!loadedList) {
          setIsMissing(true);
          return;
        }

        setList(loadedList);
        setLines(loadedLines);
        setPantries(loadedPantries);
        setPlans(loadedPlans);
        setSettings(loadedSettings);

        fetchPeople("grocery_list", loadedList.id, loadedList.householdId)
          .then((loaded) => {
            if (!cancelled) setPeople(loaded);
          })
          .catch(console.error);
      } catch (caught) {
        console.error("Failed to load list:", caught);
        if (!cancelled)
          setError(
            caught instanceof Error && caught.message ?
              caught.message
            : "Couldn't load this list.",
          );
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [listId, user, authLoading, isHouseholdLoading, household]);

  // The linked pantry's items, for restock lines and the check-off
  // toast. Re-read when the link changes.
  useEffect(() => {
    if (!list?.pantryId) {
      setPantryItems(null);
      return;
    }
    let cancelled = false;
    fetchItems(list.pantryId)
      .then((items) => {
        if (!cancelled) setPantryItems(items);
      })
      .catch(console.error);
    return () => {
      cancelled = true;
    };
  }, [list?.pantryId]);

  // Keep toasts (the check-off Undo) clear of the sticky add bar: tell
  // the toast layer how far up the bar's top edge sits.
  useEffect(() => {
    const root = document.documentElement;
    const measure = () => {
      const bar = addBarRef.current;
      if (!bar) {
        root.style.removeProperty("--toast-inset");
        return;
      }
      const inset = Math.max(
        0,
        window.innerHeight - bar.getBoundingClientRect().top,
      );
      root.style.setProperty("--toast-inset", `${inset}px`);
    };
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, {
      passive: true,
      capture: true,
    });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure, { capture: true });
      root.style.removeProperty("--toast-inset");
    };
  }, [canEdit, isLoading]);

  // Arriving from the pantry's "Add N to a grocery list".
  useEffect(() => {
    if (!list || hasOpenedFromQuery.current) return;
    if (searchParams.get("add") !== "pantry") return;
    hasOpenedFromQuery.current = true;
    setSheet({ kind: "generate", preferPantry: true });
    router.replace(`/grocery/${list.id}`);
  }, [list, searchParams, router]);

  // Live updates: other phones checking things off, and who's here.
  const applyLineEvent = useCallback((event: LineEvent) => {
    setLines((current) => {
      if (event.eventType === "DELETE") {
        return current.filter((line) => line.id !== event.old.id);
      }
      const incoming = toLine(event.new as Parameters<typeof toLine>[0]);
      const exists = current.some((line) => line.id === incoming.id);
      return exists ?
          current.map((line) => (line.id === incoming.id ? incoming : line))
        : [...current, incoming];
    });
  }, []);

  useEffect(() => {
    if (!list || !user) return;
    return subscribeToList(list.id, user.id, {
      onLine: applyLineEvent,
      onPresence: setPresentUserIds,
    });
  }, [list, user, applyLineEvent]);

  useEffect(() => {
    if (!flashLineId) return;
    const timer = setTimeout(() => setFlashLineId(null), 1400);
    return () => clearTimeout(timer);
  }, [flashLineId]);

  // ------------------------------------------------------------------
  // Derived
  // ------------------------------------------------------------------

  const unchecked = useMemo(
    () => lines.filter((line) => !line.isChecked),
    [lines],
  );
  const checked = useMemo(
    () =>
      lines
        .filter((line) => line.isChecked)
        .sort((a, b) => (b.checkedAt ?? "").localeCompare(a.checkedAt ?? "")),
    [lines],
  );
  const groups = useMemo(() => groupByCategory(unchecked), [unchecked]);
  const existingKeys = useMemo(
    () => new Set(lines.map((line) => line.nameKey)),
    [lines],
  );
  const othersHere = presentUserIds.filter((id) => id !== user?.id);

  const nameFor = (userId: string | null): string | null => {
    if (!userId || userId === user?.id) return null;
    return people.get(userId) ?? null;
  };

  // ------------------------------------------------------------------
  // Actions
  // ------------------------------------------------------------------

  const setLine = (lineId: string, changes: Partial<GroceryLine>) =>
    setLines((current) =>
      current.map((line) =>
        line.id === lineId ? { ...line, ...changes } : line,
      ),
    );

  const handleCheck = async (line: GroceryLine) => {
    if (!user) return;
    setLine(line.id, {
      isChecked: true,
      checkedAt: new Date().toISOString(),
      checkedBy: user.id,
    });

    let result: CheckResult;
    try {
      result = await checkLine(
        line.id,
        settings.restockOnCheck,
        settings.addNewOnCheck,
      );
    } catch (caught) {
      console.error("Failed to check line:", caught);
      setLine(line.id, { isChecked: false, checkedAt: null, checkedBy: null });
      showToast(`Couldn't check off ${line.name}.`);
      return;
    }

    // Keep the local pantry copy honest for the next generate.
    if (result.pantryAction !== "none")
      setPantryItems((items) =>
        items === null ? items
        : result.pantryAction === "restocked" ?
          items.map((item) =>
            item.nameKey === line.nameKey ?
              { ...item, status: "stocked" }
            : item,
          )
        : [
            ...items,
            {
              id: `local-${line.id}`,
              pantryId: list?.pantryId ?? "",
              name: line.name,
              nameKey: line.nameKey,
              status: "stocked",
              category: line.category,
              updatedAt: new Date().toISOString(),
              updatedBy: user.id,
            },
          ],
      );

    const pantryNote =
      result.pantryAction === "restocked" ?
        ` · marked Stocked in ${pantry?.name ?? "the pantry"}`
      : result.pantryAction === "added" ?
        ` · added to ${pantry?.name ?? "the pantry"}`
      : "";

    showToast(`${line.name} checked${pantryNote}`, {
      tone: "info",
      durationMs: UNDO_MS,
      action: {
        label: "Undo",
        onClick: () => handleUncheck(line, result),
      },
    });
  };

  const handleUncheck = async (
    line: GroceryLine,
    revert: CheckResult | null,
  ) => {
    setLine(line.id, { isChecked: false, checkedAt: null, checkedBy: null });
    try {
      await uncheckLine(line.id, revert);
      if (revert && revert.pantryAction !== "none")
        setPantryItems((items) =>
          items === null ? items
          : revert.pantryAction === "added" ?
            items.filter((item) => item.nameKey !== line.nameKey)
          : items.map((item) =>
              item.nameKey === line.nameKey && revert.previousStatus ?
                { ...item, status: revert.previousStatus }
              : item,
            ),
        );
    } catch (caught) {
      console.error("Failed to uncheck line:", caught);
      setLine(line.id, { isChecked: true });
      showToast(`Couldn't put ${line.name} back.`);
    }
  };

  const flashExisting = (nameKey: string) => {
    const existing = lines.find((line) => line.nameKey === nameKey);
    if (!existing) return;
    if (existing.isChecked) setIsCheckedOpen(true);
    setFlashLineId(existing.id);
    requestAnimationFrame(() => {
      document
        .getElementById(`grocery-line-${existing.id}`)
        ?.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  };

  const handleAdd = async (name: string, category: Category) => {
    if (!list) return;
    const position =
      lines.reduce((max, line) => Math.max(max, line.position), -1) + 1;
    const tempId = `temp-${Date.now()}`;
    setLines((current) => [
      ...current,
      {
        id: tempId,
        listId: list.id,
        name,
        nameKey: name.toLowerCase(),
        category,
        isChecked: false,
        checkedAt: null,
        checkedBy: null,
        source: "manual",
        sourceRecipeNames: [],
        position,
      },
    ]);

    try {
      const saved = await addLine(list.id, name, category, position);
      setLines((current) =>
        // Realtime may have delivered the row already.
        current.some((line) => line.id === saved.id) ?
          current.filter((line) => line.id !== tempId)
        : current.map((line) => (line.id === tempId ? saved : line)),
      );
    } catch (caught) {
      setLines((current) => current.filter((line) => line.id !== tempId));
      if (caught instanceof DuplicateLineError) {
        showToast(caught.message);
        return;
      }
      console.error("Failed to add line:", caught);
      showToast(`Couldn't add ${name}.`);
    }
  };

  const handleGenerate = async (newLines: NewLine[]) => {
    if (!list) return;
    const added = await addLines(list.id, newLines);
    setLines(await fetchLines(list.id));
    showToast(`Added ${added} ${added === 1 ? "item" : "items"}`, {
      tone: "info",
    });
  };

  const handleCategory = async (line: GroceryLine, category: Category) => {
    setLine(line.id, { category });
    try {
      await updateLine(line.id, { category });
    } catch (caught) {
      console.error("Failed to change category:", caught);
      setLine(line.id, { category: line.category });
      showToast("Couldn't change the category.");
    }
  };

  const handleDelete = async (line: GroceryLine) => {
    setLines((current) =>
      current.filter((candidate) => candidate.id !== line.id),
    );
    try {
      await deleteLine(line.id);
    } catch (caught) {
      console.error("Failed to delete line:", caught);
      setLines((current) => [...current, line]);
      showToast(`Couldn't remove ${line.name}.`);
    }
  };

  const handleUncheckAll = async () => {
    if (!list) return;
    const previous = lines;
    setLines((current) =>
      current.map((line) => ({
        ...line,
        isChecked: false,
        checkedAt: null,
        checkedBy: null,
      })),
    );
    try {
      await uncheckAllLines(list.id);
    } catch (caught) {
      console.error("Failed to uncheck all:", caught);
      setLines(previous);
      showToast("Couldn't uncheck everything.");
    }
  };

  const handleClearChecked = async () => {
    if (!list) return;
    const previous = lines;
    setLines((current) => current.filter((line) => !line.isChecked));
    try {
      await deleteCheckedLines(list.id);
    } catch (caught) {
      console.error("Failed to clear checked:", caught);
      setLines(previous);
      showToast("Couldn't clear the checked items.");
    }
  };

  // ------------------------------------------------------------------
  // Render
  // ------------------------------------------------------------------

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
          Sign in to see this list
        </h2>
        <button
          type="button"
          onClick={openAuthModal}
          className="mt-2 h-9 rounded-md bg-accent px-4 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
        >
          Sign in
        </button>
      </div>
    );

  if (isMissing || error || !list)
    return (
      <div className="flex grow flex-col items-center justify-center gap-2 p-8 text-center">
        <h2 className="text-xl font-semibold">
          {isMissing ? "This list isn't here" : "Couldn't load this list"}
        </h2>
        <p className="max-w-sm text-sm text-ink-muted">
          {isMissing ?
            "It may have been deleted, or it's not shared with you."
          : error}
        </p>
        <Link
          href="/grocery"
          className="mt-2 text-sm font-semibold text-accent hover:underline"
        >
          All lists
        </Link>
      </div>
    );

  const lineRow = (line: GroceryLine) => {
    const isFlashing = line.id === flashLineId;
    const checkedBy = nameFor(line.checkedBy);
    return (
      <li
        key={line.id}
        id={`grocery-line-${line.id}`}
        className={`flex items-stretch ${isFlashing ? "flash-row" : ""}`}
      >
        <button
          type="button"
          role="checkbox"
          aria-checked={line.isChecked}
          disabled={!canEdit}
          onClick={() =>
            line.isChecked ? handleUncheck(line, null) : handleCheck(line)
          }
          className="flex min-h-[52px] min-w-0 flex-1 items-center gap-3 py-2 pl-3.5 text-left disabled:cursor-default sm:pl-4"
        >
          <span
            aria-hidden
            className={`
              flex size-6 shrink-0 items-center justify-center rounded-md border-[1.5px] transition-colors
              ${line.isChecked ? "border-accent bg-accent text-on-accent" : "border-line-strong"}
            `}
          >
            {line.isChecked && (
              <Check
                className="size-4"
                strokeWidth={3}
              />
            )}
          </span>
          <span className="min-w-0 flex-1">
            <span
              className={`block text-[15px] leading-tight ${line.isChecked ? "text-ink-muted line-through" : ""}`}
            >
              {line.name}
            </span>
            {line.isChecked ?
              <span className="mt-0.5 block text-[11.5px] text-ink-muted">
                {line.checkedAt ? formatRelativeTime(line.checkedAt) : ""}
                {checkedBy ? ` · ${checkedBy}` : ""}
              </span>
            : line.sourceRecipeNames.length > 0 && (
                <span className="mt-0.5 line-clamp-2 text-[11.5px] leading-snug text-ink-muted">
                  for {line.sourceRecipeNames.join(", ")}
                </span>
              )
            }
          </span>
        </button>
        {canEdit && (
          <button
            type="button"
            aria-label={`Options for ${line.name}`}
            onClick={() => setSheet({ kind: "line", line })}
            className="flex w-11 shrink-0 items-center justify-center text-ink-muted transition-colors hover:bg-well hover:text-ink"
          >
            <Ellipsis className="size-4" />
          </button>
        )}
      </li>
    );
  };

  return (
    <div className="mx-auto flex w-full max-w-2xl grow flex-col gap-3">
      {/* Header */}
      <div className="flex items-center gap-1">
        <Link
          href="/grocery"
          aria-label="All lists"
          className="-ml-2 flex size-10 shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-well hover:text-ink"
        >
          <ArrowLeft className="size-5" />
        </Link>
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
            {list.name}
          </h2>
          <p className="truncate text-xs text-ink-muted">
            {unchecked.length === 0 ?
              lines.length === 0 ?
                "Nothing on it yet"
              : "All done"
            : `${unchecked.length} left`}
            {othersHere.length > 0 &&
              ` · ${othersHere
                .map((id) => nameFor(id) ?? "Someone")
                .join(
                  ", ",
                )} ${othersHere.length === 1 ? "is" : "are"} also on this list`}
          </p>
        </div>
        <button
          type="button"
          aria-label="List options"
          aria-haspopup="dialog"
          onClick={() => setSheet({ kind: "menu" })}
          className="flex size-10 shrink-0 items-center justify-center rounded-md border border-line bg-surface-raised text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
        >
          <Ellipsis className="size-[18px]" />
        </button>
      </div>

      {canEdit && (
        <button
          type="button"
          onClick={() => setSheet({ kind: "generate", preferPantry: false })}
          className="flex h-10 items-center justify-center gap-2 rounded-md border border-line bg-surface-raised px-4 text-sm font-medium text-ink transition-colors hover:border-line-strong active:translate-y-px sm:self-start"
        >
          <ListPlus className="size-4 text-ink-muted" />
          Add items from pantry or plan
        </button>
      )}

      {/* Lines */}
      {lines.length === 0 ?
        <div className="flex flex-col items-center px-4 pt-10 pb-6 text-center">
          <span className="flex size-12 items-center justify-center rounded-md bg-accent-tint text-accent">
            <SquareCheckBig className="size-6" />
          </span>
          <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em]">
            An empty list
          </h3>
          <p className="mt-1 max-w-[34ch] text-sm text-ink-muted">
            Pull in what&rsquo;s low in the pantry, what this week&rsquo;s meals
            need, or type things in below.
          </p>
        </div>
      : <div className="flex flex-col gap-5 pb-2">
          {groups.map((group) => (
            <section key={group.category}>
              <div className="mb-1.5 flex items-baseline justify-between px-0.5">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-muted">
                  {group.category}
                </h3>
                <span className="text-[11px] text-ink-muted">
                  {group.items.length}
                </span>
              </div>
              <ul className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface-raised">
                {group.items.map(lineRow)}
              </ul>
            </section>
          ))}

          {groups.length === 0 && (
            <p className="py-6 text-center text-sm text-ink-muted">
              Everything&rsquo;s checked off.
            </p>
          )}

          {checked.length > 0 && (
            <section>
              <button
                type="button"
                onClick={() => setIsCheckedOpen((open) => !open)}
                aria-expanded={isCheckedOpen}
                className="flex h-10 w-full items-center justify-between px-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-muted"
              >
                <span>Checked · {checked.length}</span>
                <ChevronDown
                  className={`size-4 transition-transform ${isCheckedOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isCheckedOpen && (
                <ul className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface-raised">
                  {checked.map(lineRow)}
                </ul>
              )}
            </section>
          )}
        </div>
      }

      {canEdit && (
        <div
          ref={addBarRef}
          className="sticky bottom-0 -mx-4 mt-auto border-t border-line bg-surface px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:-mx-6 lg:-mx-8"
        >
          <div className="mx-auto max-w-2xl">
            <AddItemBar
              existingKeys={existingKeys}
              placement="bottom"
              placeholder="Add to the list"
              onAdd={handleAdd}
              onDuplicate={flashExisting}
            />
          </div>
        </div>
      )}

      {/* Sheets */}
      {sheet?.kind === "menu" && (
        <ActionSheet
          title={list.name}
          onClose={() => setSheet(null)}
        >
          <div className="flex flex-col">
            {canEdit && (
              <>
                <SheetAction
                  onClick={() =>
                    setSheet({ kind: "generate", preferPantry: false })
                  }
                >
                  <ListPlus className="size-4 text-ink-muted" />
                  Add items from pantry or plan
                </SheetAction>
                <SheetAction
                  onClick={() => {
                    setSheet(null);
                    handleUncheckAll();
                  }}
                >
                  <Square className="size-4 text-ink-muted" />
                  Uncheck all
                </SheetAction>
                <SheetAction
                  onClick={() => {
                    setSheet(null);
                    handleClearChecked();
                  }}
                >
                  <SquareCheckBig className="size-4 text-ink-muted" />
                  Clear checked items
                </SheetAction>
                <div className="my-1 border-t border-line" />
              </>
            )}
            <SheetAction onClick={() => setSheet({ kind: "settings" })}>
              <Settings2 className="size-4 text-ink-muted" />
              Settings &amp; sharing
            </SheetAction>
            <SheetAction onClick={() => setSheet({ kind: "preferences" })}>
              <SlidersHorizontal className="size-4 text-ink-muted" />
              Preferences
            </SheetAction>
          </div>
        </ActionSheet>
      )}

      {sheet?.kind === "generate" && (
        <GenerateSheet
          pantryItems={pantryItems}
          pantryName={pantry?.name ?? null}
          plans={plans}
          existingKeys={existingKeys}
          settings={settings}
          preferPantry={sheet.preferPantry}
          onAdd={handleGenerate}
          onClose={() => setSheet(null)}
        />
      )}

      {sheet?.kind === "preferences" && (
        <PreferencesSheet
          userId={user.id}
          settings={settings}
          onChange={setSettings}
          onClose={() => setSheet(null)}
        />
      )}

      {sheet?.kind === "settings" && (
        <ListSettings
          list={list}
          pantries={pantries}
          household={household}
          onListChange={setList}
          onDeleted={() => router.push("/grocery")}
          onClose={() => setSheet(null)}
        />
      )}

      {sheet?.kind === "line" && (
        <ActionSheet
          title={sheet.line.name}
          onClose={() => setSheet(null)}
        >
          <div className="flex flex-col">
            <SheetAction
              onClick={() =>
                setSheet({ kind: "line-category", line: sheet.line })
              }
            >
              <Tag className="size-4 text-ink-muted" />
              <span className="flex-1">Change category</span>
              <span className="text-xs text-ink-muted">
                {sheet.line.category}
              </span>
            </SheetAction>
            <div className="my-1 border-t border-line" />
            <SheetAction
              isDanger
              onClick={() => {
                setSheet(null);
                handleDelete(sheet.line);
              }}
            >
              <Trash2 className="size-4" />
              Remove from list
            </SheetAction>
          </div>
        </ActionSheet>
      )}

      {sheet?.kind === "line-category" && (
        <ActionSheet
          title={sheet.line.name}
          onClose={() => setSheet(null)}
        >
          <ul
            role="listbox"
            aria-label="Category"
            className="max-h-[60vh] overflow-y-auto"
          >
            {CATEGORIES.map((category) => {
              const isSelected = category === sheet.line.category;
              return (
                <li key={category}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      setSheet(null);
                      if (!isSelected) handleCategory(sheet.line, category);
                    }}
                    className={`
                      flex h-11 w-full items-center justify-between rounded-sm px-1 text-left text-sm hover:bg-well sm:px-2.5
                      ${isSelected ? "font-semibold" : ""}
                    `}
                  >
                    {category}
                    {isSelected && <Check className="size-4 text-accent" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </ActionSheet>
      )}
    </div>
  );
};

export default ListView;
