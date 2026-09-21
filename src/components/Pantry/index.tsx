"use client";

import {
  ChefHat,
  ChevronDown,
  ListPlus,
  Package,
  Settings2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import Bowl from "@components/loaders/Bowl";
import AddItemBar from "@components/Pantry/AddItemBar";
import ItemSheet from "@components/Pantry/ItemSheet";
import PantryItemRow from "@components/Pantry/PantryItemRow";
import PantrySettings from "@components/Pantry/PantrySettings";
import { useAuth } from "@context/AuthContext";
import { useToast } from "@context/ToastContext";
import { useHousehold } from "@lib/household/useHousehold";
import { pickSearchableItems } from "@lib/ingredients";
import {
  DuplicateItemError,
  addItem,
  createPantry,
  fetchItems,
  fetchPantries,
  removeItem,
  updateItem,
} from "@lib/pantry/client";
import { groupByCategory, pickRestockItems } from "@lib/pantry/items";
import {
  Category,
  Pantry,
  PantryItem,
  PantryStatus,
  STATUS_LABELS,
} from "@lib/pantry/types";
import { fetchPeople, getDisplayName } from "@lib/sharing/client";
import { useIsDesktop } from "@lib/useIsDesktop";

const PANTRY_STORAGE_KEY = "cookedup:pantry";

type Filter = "all" | PantryStatus;

const FILTERS: Filter[] = ["all", "stocked", "low", "out"];

const STARTER_ITEMS: { name: string; category: Category }[] = [
  { name: "Eggs", category: "Dairy & eggs" },
  { name: "Olive oil", category: "Pantry staples" },
  { name: "Rice", category: "Pantry staples" },
  { name: "Garlic", category: "Produce" },
  { name: "Butter", category: "Dairy & eggs" },
];

const readStoredPantryId = (): string | null => {
  try {
    return localStorage.getItem(PANTRY_STORAGE_KEY);
  } catch {
    return null;
  }
};

const describePantry = (pantry: Pantry): string =>
  pantry.householdId ? "Household"
  : pantry.role === "owner" ? "Personal"
  : pantry.role === "editor" ? "Shared with you"
  : "Shared with you · view only";

const PantryPage: React.FC = () => {
  const { user, loading: authLoading, openAuthModal } = useAuth();
  const { household, isLoading: isHouseholdLoading } = useHousehold();
  const { showToast } = useToast();
  const router = useRouter();
  const isDesktop = useIsDesktop();

  const [pantries, setPantries] = useState<Pantry[]>([]);
  const [activePantryId, setActivePantryId] = useState<string | null>(null);
  const [items, setItems] = useState<PantryItem[]>([]);
  const [people, setPeople] = useState<Map<string, string | null>>(new Map());
  const [filter, setFilter] = useState<Filter>("all");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingItems, setIsLoadingItems] = useState(false);
  const [error, setError] = useState("");
  const [menuItemId, setMenuItemId] = useState<string | null>(null);
  const [flashItemId, setFlashItemId] = useState<string | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const activePantry =
    pantries.find((pantry) => pantry.id === activePantryId) ?? null;
  const canEdit = activePantry !== null && activePantry.role !== "viewer";

  const choosePantry = useCallback((pantryId: string) => {
    setActivePantryId(pantryId);
    setFilter("all");
    try {
      localStorage.setItem(PANTRY_STORAGE_KEY, pantryId);
    } catch {
      // Private mode: the choice just isn't remembered.
    }
  }, []);

  // Load the pantries, making one on the first visit so the page never
  // opens onto nothing. That first pantry is the household's if there is
  // one, so this waits for the household to resolve.
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
        let loaded = await fetchPantries(user.id, household?.id ?? null);
        if (cancelled) return;

        if (loaded.length === 0) {
          loaded = [await createPantry(user.id, household?.id ?? null)];
          if (cancelled) return;
        }

        setPantries(loaded);
        const remembered = readStoredPantryId();
        setActivePantryId(
          (current) =>
            current ??
            (loaded.some((pantry) => pantry.id === remembered) ? remembered : (
              loaded[0].id
            )),
        );
      } catch (caught) {
        console.error("Failed to load pantries:", caught);
        if (!cancelled)
          setError(
            caught instanceof Error && caught.message ?
              caught.message
            : "Couldn't load your pantry.",
          );
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [user, authLoading, isHouseholdLoading, household]);

  // Items and the who's-who follow the active pantry.
  useEffect(() => {
    if (!activePantry) return;

    let cancelled = false;
    setIsLoadingItems(true);

    Promise.all([
      fetchItems(activePantry.id),
      fetchPeople("pantry", activePantry.id, activePantry.householdId),
    ])
      .then(([loadedItems, loadedPeople]) => {
        if (cancelled) return;
        setItems(loadedItems);
        setPeople(loadedPeople);
      })
      .catch((caught) => {
        console.error("Failed to load pantry items:", caught);
        if (!cancelled) showToast("Couldn't load what's in this pantry.");
      })
      .finally(() => {
        if (!cancelled) setIsLoadingItems(false);
      });

    return () => {
      cancelled = true;
    };
  }, [activePantry, showToast]);

  useEffect(() => {
    if (!flashItemId) return;
    const timer = setTimeout(() => setFlashItemId(null), 1400);
    return () => clearTimeout(timer);
  }, [flashItemId]);

  const counts = useMemo(
    () => ({
      all: items.length,
      stocked: items.filter((item) => item.status === "stocked").length,
      low: items.filter((item) => item.status === "low").length,
      out: items.filter((item) => item.status === "out").length,
    }),
    [items],
  );

  const visibleItems = useMemo(
    () =>
      filter === "all" ? items : items.filter((item) => item.status === filter),
    [items, filter],
  );
  const groups = useMemo(() => groupByCategory(visibleItems), [visibleItems]);
  const restockItems = useMemo(() => pickRestockItems(items), [items]);
  const existingKeys = useMemo(
    () => new Set(items.map((item) => item.nameKey)),
    [items],
  );
  const searchable = useMemo(() => pickSearchableItems(items), [items]);

  const flashExisting = (nameKey: string) => {
    const existing = items.find((item) => item.nameKey === nameKey);
    if (!existing) return;
    // Bring it into view even if the filter is hiding it.
    if (filter !== "all" && existing.status !== filter) setFilter("all");
    setFlashItemId(existing.id);
    requestAnimationFrame(() => {
      document
        .getElementById(`pantry-item-${existing.id}`)
        ?.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  };

  const handleAdd = async (name: string, category: Category) => {
    if (!activePantry || !user) return;

    // Optimistic: the row appears at once under a temporary id and is
    // swapped for the saved one.
    const tempId = `temp-${Date.now()}`;
    const optimistic: PantryItem = {
      id: tempId,
      pantryId: activePantry.id,
      name,
      nameKey: name.toLowerCase(),
      status: "stocked",
      category,
      updatedAt: new Date().toISOString(),
      updatedBy: user.id,
    };
    setItems((previous) => [...previous, optimistic]);

    try {
      const saved = await addItem(activePantry.id, user.id, name, category);
      setItems((previous) =>
        previous.map((item) => (item.id === tempId ? saved : item)),
      );
    } catch (caught) {
      setItems((previous) => previous.filter((item) => item.id !== tempId));
      if (caught instanceof DuplicateItemError) {
        // A race with someone else adding the same thing: refresh and point at it.
        const fresh = await fetchItems(activePantry.id).catch(() => null);
        if (fresh) setItems(fresh);
        showToast(caught.message);
        return;
      }
      console.error("Failed to add item:", caught);
      showToast(`Couldn't add ${name}.`);
    }
  };

  const handleStatusChange = async (item: PantryItem, status: PantryStatus) => {
    if (!user) return;
    const previous = item;
    setItems((current) =>
      current.map((candidate) =>
        candidate.id === item.id ?
          {
            ...candidate,
            status,
            updatedAt: new Date().toISOString(),
            updatedBy: user.id,
          }
        : candidate,
      ),
    );

    try {
      await updateItem(item.id, user.id, { status });
    } catch (caught) {
      console.error("Failed to update status:", caught);
      setItems((current) =>
        current.map((candidate) =>
          candidate.id === item.id ? previous : candidate,
        ),
      );
      showToast(
        `Couldn't mark ${item.name} as ${STATUS_LABELS[status].toLowerCase()}.`,
      );
    }
  };

  const handleRename = async (item: PantryItem, name: string) => {
    if (!user) return;
    await updateItem(item.id, user.id, { name });
    setItems((current) =>
      current.map((candidate) =>
        candidate.id === item.id ?
          { ...candidate, name, nameKey: name.toLowerCase() }
        : candidate,
      ),
    );
    // The key is computed server-side too; re-read so a later add sees it.
    fetchItems(item.pantryId).then(setItems).catch(console.error);
  };

  const handleCategoryChange = async (item: PantryItem, category: Category) => {
    if (!user) return;
    await updateItem(item.id, user.id, { category });
    setItems((current) =>
      current.map((candidate) =>
        candidate.id === item.id ? { ...candidate, category } : candidate,
      ),
    );
  };

  const handleRemove = async (item: PantryItem) => {
    await removeItem(item.id);
    setItems((current) =>
      current.filter((candidate) => candidate.id !== item.id),
    );
  };

  const findRecipes = () => {
    const params = new URLSearchParams();
    params.set("ingredients", searchable.terms.join(","));
    if (searchable.skipped.length > 0)
      params.set("skipped", searchable.skipped.join(","));
    if (searchable.truncated > 0)
      params.set("truncated", String(searchable.truncated));
    router.push(`/?${params.toString()}`);
  };

  const markedByFor = (item: PantryItem): string | null => {
    if (!item.updatedBy || item.updatedBy === user?.id) return null;
    const email = people.get(item.updatedBy);
    return email ? getDisplayName(email) : null;
  };

  // ------------------------------------------------------------------

  if (authLoading || isDesktop === null || (user && isLoading))
    return (
      <div className="flex grow items-center justify-center">
        <Bowl />
      </div>
    );

  if (!user)
    return (
      <div className="flex grow flex-col items-center justify-center gap-2 p-8 text-center">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Know what&rsquo;s in your kitchen
        </h2>
        <p className="max-w-md text-sm text-ink-muted sm:text-base">
          Keep a running list of what you have, mark things low or out with one
          tap, and turn them into a grocery list when it&rsquo;s time to shop.
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

  if (error || !activePantry)
    return (
      <div className="flex grow flex-col items-center justify-center gap-2 p-8 text-center">
        <p className="text-sm text-danger">
          {error || "Couldn't find a pantry to show."}
        </p>
      </div>
    );

  const menuItem = items.find((item) => item.id === menuItemId) ?? null;
  const restockCount = restockItems.length;
  const showRestockAction = canEdit && restockCount > 0 && filter !== "stocked";
  const showRecipeAction =
    searchable.terms.length > 0 && filter !== "low" && filter !== "out";
  const restockHref = `/grocery?add=pantry&pantry=${activePantry.id}`;

  const titleRow = (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        {pantries.length > 1 ?
          <label className="relative inline-flex max-w-full items-center">
            <span className="sr-only">Pantry</span>
            <span className="flex items-center gap-1.5 truncate text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
              {activePantry.name}
              <ChevronDown className="size-4 shrink-0 text-ink-muted" />
            </span>
            <select
              value={activePantry.id}
              onChange={(event) => choosePantry(event.target.value)}
              className="absolute inset-0 cursor-pointer opacity-0"
            >
              {pantries.map((pantry) => (
                <option
                  key={pantry.id}
                  value={pantry.id}
                >
                  {pantry.name} ({describePantry(pantry)})
                </option>
              ))}
            </select>
          </label>
        : <h2 className="truncate text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
            {activePantry.name}
          </h2>
        }
        <p className="text-xs text-ink-muted">
          {describePantry(activePantry)}
          {activePantry.householdId && household ? ` · ${household.name}` : ""}
        </p>
      </div>
      <button
        type="button"
        onClick={() => setIsSettingsOpen(true)}
        aria-label="Pantry settings"
        className="flex size-10 shrink-0 items-center justify-center rounded-md border border-line bg-surface-raised text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
      >
        <Settings2 className="size-[18px]" />
      </button>
    </div>
  );

  const filterRow = (
    <div
      role="radiogroup"
      aria-label="Show"
      className="flex gap-0.5 rounded-md bg-well p-0.5"
    >
      {FILTERS.map((option) => {
        const isSelected = option === filter;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => setFilter(option)}
            className={`
              h-10 flex-1 rounded-sm px-1 text-xs font-medium transition-colors sm:h-9
              ${isSelected ? "bg-surface-raised text-ink shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "text-ink-muted hover:text-ink"}
            `}
          >
            {option === "all" ? "All" : STATUS_LABELS[option]}
            <span className="ml-1 text-ink-muted">{counts[option]}</span>
          </button>
        );
      })}
    </div>
  );

  const list =
    isLoadingItems ?
      <div className="flex justify-center py-16">
        <Bowl />
      </div>
    : items.length === 0 ?
      <div className="flex flex-col items-center px-4 pt-12 pb-6 text-center">
        <span className="flex size-12 items-center justify-center rounded-md bg-accent-tint text-accent">
          <Package className="size-6" />
        </span>
        <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em]">
          What&rsquo;s in your kitchen?
        </h3>
        <p className="mt-1 max-w-[36ch] text-sm text-ink-muted">
          Keep a running list of what you have. Mark things low or out as you go
          and turn them into a grocery list when it&rsquo;s time to shop.
        </p>
        {canEdit && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {STARTER_ITEMS.map((starter) => (
              <button
                key={starter.name}
                type="button"
                onClick={() => handleAdd(starter.name, starter.category)}
                className="h-9 rounded-md border border-line bg-surface-raised px-3 text-sm transition-colors hover:border-line-strong active:translate-y-px"
              >
                + {starter.name}
              </button>
            ))}
          </div>
        )}
      </div>
    : groups.length === 0 ?
      <p className="py-12 text-center text-sm text-ink-muted">
        Nothing is marked{" "}
        {filter === "all" ? "" : STATUS_LABELS[filter].toLowerCase()}
        {filter === "stocked" ? "" : " right now"}.
      </p>
    : <div className="flex flex-col gap-5">
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
              {group.items.map((item) => (
                <PantryItemRow
                  key={item.id}
                  item={item}
                  markedBy={markedByFor(item)}
                  canEdit={canEdit}
                  isFlashing={item.id === flashItemId}
                  onStatusChange={(status) => handleStatusChange(item, status)}
                  onOpenMenu={() => setMenuItemId(item.id)}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>;

  const addBar = (placement: "bottom" | "top") =>
    canEdit && (
      <AddItemBar
        existingKeys={existingKeys}
        placement={placement}
        onAdd={handleAdd}
        onDuplicate={flashExisting}
      />
    );

  return (
    <>
      {/* Phone and tablet: one column, add bar pinned to the bottom. */}
      {!isDesktop && (
        <div className="flex grow flex-col gap-3">
          {titleRow}
          {filterRow}

          {(showRestockAction || showRecipeAction) && (
            <div className="flex flex-col gap-2">
              {showRestockAction && (
                <Link
                  href={restockHref}
                  className="flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover active:translate-y-px"
                >
                  <ListPlus className="size-4" />
                  Add {restockCount} to a grocery list
                </Link>
              )}
              {showRecipeAction && (
                <button
                  type="button"
                  onClick={findRecipes}
                  className="flex h-10 items-center justify-center gap-2 rounded-md border border-line bg-surface-raised px-4 text-sm font-medium text-ink transition-colors hover:border-line-strong active:translate-y-px"
                >
                  <ChefHat className="size-4 text-ink-muted" />
                  Find recipes with what I have
                </button>
              )}
            </div>
          )}

          <div className="pb-2">{list}</div>

          {canEdit && (
            <div className="sticky bottom-0 -mx-4 mt-auto border-t border-line bg-surface px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:-mx-6">
              {addBar("bottom")}
            </div>
          )}
        </div>
      )}

      {/* Desktop: items in one column, everything secondary in a rail. */}
      {isDesktop && (
        <div className="grid grid-cols-[minmax(0,1fr)_320px] items-start gap-8">
          <div className="flex flex-col gap-4">
            {titleRow}
            <div className="flex items-center gap-3">
              <div className="max-w-[440px] flex-1">{addBar("top")}</div>
              <div className="w-[360px]">{filterRow}</div>
            </div>
            {list}
          </div>

          <aside className="sticky top-6 flex flex-col gap-3">
            <section className="rounded-lg border border-line bg-surface-raised p-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-muted">
                Needs restocking
              </h3>
              {restockCount === 0 ?
                <p className="mt-2 text-sm text-ink-muted">
                  Everything&rsquo;s stocked.
                </p>
              : <>
                  <ul className="mt-1.5 divide-y divide-line">
                    {restockItems.slice(0, 6).map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between py-1.5 text-sm"
                      >
                        <span className="truncate">{item.name}</span>
                        <span
                          className={`ml-2 shrink-0 text-xs ${item.status === "out" ? "text-danger" : "text-accent"}`}
                        >
                          {STATUS_LABELS[item.status]}
                        </span>
                      </li>
                    ))}
                    {restockCount > 6 && (
                      <li className="py-1.5 text-xs text-ink-muted">
                        and {restockCount - 6} more
                      </li>
                    )}
                  </ul>
                  {canEdit && (
                    <Link
                      href={restockHref}
                      className="mt-3 flex h-10 items-center justify-center gap-2 rounded-md bg-accent px-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
                    >
                      <ListPlus className="size-4" />
                      Add {restockCount} to a grocery list
                    </Link>
                  )}
                </>
              }
            </section>

            <section className="rounded-lg border border-line bg-surface-raised p-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-muted">
                Cook with what you have
              </h3>
              <p className="mt-1.5 text-sm text-ink-muted">
                {searchable.terms.length === 0 ?
                  "Mark a few things stocked and search recipes that use them."
                : `Search recipes using ${Math.min(counts.stocked, searchable.terms.length)} of your stocked items.`
                }
              </p>
              <button
                type="button"
                onClick={findRecipes}
                disabled={searchable.terms.length === 0}
                className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-md border border-line px-3 text-sm font-medium text-ink transition-colors hover:border-line-strong disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChefHat className="size-4 text-ink-muted" />
                Find recipes with what I have
              </button>
            </section>

            <section className="rounded-lg border border-line bg-surface-raised p-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-muted">
                Shared with
              </h3>
              <p className="mt-1.5 text-sm text-ink-muted">
                {activePantry.householdId && household ?
                  `${household.name} · ${household.members.length} ${household.members.length === 1 ? "person" : "people"}`
                : people.size > 0 ?
                  `${people.size} ${people.size === 1 ? "person" : "people"} by invite`
                : "Just you"}
              </p>
              <button
                type="button"
                onClick={() => setIsSettingsOpen(true)}
                className="mt-2 text-xs font-semibold text-accent hover:underline"
              >
                Settings &amp; sharing
              </button>
            </section>
          </aside>
        </div>
      )}

      {menuItem && (
        <ItemSheet
          item={menuItem}
          onRename={(name) => handleRename(menuItem, name)}
          onCategoryChange={(category) =>
            handleCategoryChange(menuItem, category)
          }
          onRemove={() => handleRemove(menuItem)}
          onClose={() => setMenuItemId(null)}
        />
      )}

      {isSettingsOpen && (
        <PantrySettings
          // Remounted per pantry so its name field never carries over.
          key={activePantry.id}
          pantry={activePantry}
          pantries={pantries}
          userId={user.id}
          household={household}
          onPantryChange={(updated) =>
            setPantries((previous) =>
              previous.map((pantry) =>
                pantry.id === updated.id ? updated : pantry,
              ),
            )
          }
          onPantryCreated={(created) => {
            setPantries((previous) => [...previous, created]);
            choosePantry(created.id);
          }}
          onPantryDeleted={(pantryId) => {
            const remaining = pantries.filter(
              (pantry) => pantry.id !== pantryId,
            );
            setPantries(remaining);
            setIsSettingsOpen(false);
            if (remaining.length > 0) choosePantry(remaining[0].id);
            else {
              // Deleting the only pantry: make a fresh one so the page
              // doesn't dead-end.
              createPantry(user.id, household?.id ?? null)
                .then((created) => {
                  setPantries([created]);
                  choosePantry(created.id);
                })
                .catch(console.error);
            }
          }}
          onSwitch={(pantryId) => {
            choosePantry(pantryId);
            setIsSettingsOpen(false);
          }}
          onClose={() => setIsSettingsOpen(false)}
        />
      )}
    </>
  );
};

export default PantryPage;
