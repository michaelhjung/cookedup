"use client";

import { ChevronRight, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import NewListDialog from "@components/Grocery/NewListDialog";
import Bowl from "@components/loaders/Bowl";
import { useAuth } from "@context/AuthContext";
import { fetchLists, fetchRemainingCounts } from "@lib/grocery/client";
import { GroceryList } from "@lib/grocery/types";
import { useHousehold } from "@lib/household/useHousehold";
import { fetchPantries } from "@lib/pantry/client";
import { Pantry } from "@lib/pantry/types";

const describeList = (
  list: GroceryList,
  pantryName: string | undefined,
  householdName: string | undefined,
): string => {
  const who =
    list.householdId ? (householdName ?? "Household")
    : list.role === "owner" ? "Personal"
    : `Shared with you · ${list.role === "editor" ? "can edit" : "view only"}`;
  return pantryName ? `${who} · ${pantryName}` : who;
};

/**
 * Every list the person can see, one card each. Arriving here from the
 * pantry's "Add N to a grocery list" (`?add=pantry`) turns the cards
 * into a "which list?" chooser, or skips straight through when there's
 * only one to choose from.
 */
const GroceryIndex: React.FC = () => {
  const { user, loading: authLoading, openAuthModal } = useAuth();
  const { household, isLoading: isHouseholdLoading } = useHousehold();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [lists, setLists] = useState<GroceryList[]>([]);
  const [pantries, setPantries] = useState<Pantry[]>([]);
  const [remaining, setRemaining] = useState<Map<string, number>>(new Map());
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const addSource = searchParams.get("add");
  const addPantryId = searchParams.get("pantry");
  const isChoosing = addSource === "pantry";
  const addQuery =
    isChoosing ?
      `?add=pantry${addPantryId ? `&pantry=${addPantryId}` : ""}`
    : "";

  useEffect(() => {
    if (authLoading || isHouseholdLoading) return;
    if (!user) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;

    const load = async () => {
      try {
        const [loadedLists, loadedPantries] = await Promise.all([
          fetchLists(user.id, household?.id ?? null),
          fetchPantries(user.id, household?.id ?? null),
        ]);
        if (cancelled) return;

        setLists(loadedLists);
        setPantries(
          loadedPantries.filter((pantry) => pantry.role !== "viewer"),
        );
        fetchRemainingCounts(loadedLists.map((list) => list.id))
          .then((counts) => {
            if (!cancelled) setRemaining(counts);
          })
          .catch(console.error);

        // Coming from the pantry with exactly one editable list: no
        // question to ask.
        if (isChoosing) {
          const editable = loadedLists.filter((list) => list.role !== "viewer");
          if (editable.length === 1)
            router.replace(`/grocery/${editable[0].id}${addQuery}`);
          else if (editable.length === 0) setIsCreating(true);
        }
      } catch (caught) {
        console.error("Failed to load grocery lists:", caught);
        if (!cancelled)
          setError(
            caught instanceof Error && caught.message ?
              caught.message
            : "Couldn't load your lists.",
          );
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [
    user,
    authLoading,
    isHouseholdLoading,
    household,
    isChoosing,
    addQuery,
    router,
  ]);

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
          Shop from your pantry and your plan
        </h2>
        <p className="max-w-md text-sm text-ink-muted sm:text-base">
          Build a list per store from what&rsquo;s running low and what this
          week&rsquo;s meals need, then check it off in the aisle.
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

  if (error)
    return <p className="p-8 text-center text-sm text-danger">{error}</p>;

  const pantryNameById = new Map(
    pantries.map((pantry) => [pantry.id, pantry.name]),
  );

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
            {isChoosing ? "Add to which list?" : "Grocery lists"}
          </h2>
          {isChoosing && (
            <p className="text-xs text-ink-muted">
              Your pantry&rsquo;s low and out items will be added to it.
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={() => setIsCreating(true)}
          className="flex h-10 shrink-0 items-center gap-1.5 rounded-md bg-accent px-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover active:translate-y-px"
        >
          <Plus className="size-4" />
          New list
        </button>
      </div>

      {lists.length === 0 ?
        <div className="flex flex-col items-center px-4 pt-12 pb-6 text-center">
          <span className="flex size-12 items-center justify-center rounded-md bg-accent-tint text-accent">
            <ShoppingCart className="size-6" />
          </span>
          <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em]">
            No lists yet
          </h3>
          <p className="mt-1 max-w-[36ch] text-sm text-ink-muted">
            Make one per store. Fill it from your pantry&rsquo;s low and out
            items, from the meals you&rsquo;ve planned, or by hand.
          </p>
        </div>
      : <ul className="flex flex-col gap-2">
          {lists
            .filter((list) => !isChoosing || list.role !== "viewer")
            .map((list) => {
              const left = remaining.get(list.id);
              return (
                <li key={list.id}>
                  <Link
                    href={`/grocery/${list.id}${addQuery}`}
                    className="flex min-h-[68px] items-center gap-3 rounded-lg border border-line bg-surface-raised px-4 py-3 transition-colors hover:border-line-strong active:translate-y-px"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[15px] font-semibold">
                        {list.name}
                      </p>
                      <p className="truncate text-xs text-ink-muted">
                        {describeList(
                          list,
                          list.pantryId ?
                            pantryNameById.get(list.pantryId)
                          : undefined,
                          household?.name,
                        )}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs text-ink-muted">
                      {left === undefined ?
                        ""
                      : left === 0 ?
                        "All done"
                      : `${left} left`}
                    </span>
                    <ChevronRight className="size-4 shrink-0 text-ink-muted" />
                  </Link>
                </li>
              );
            })}
        </ul>
      }

      {isCreating && (
        <NewListDialog
          userId={user.id}
          household={household}
          pantries={pantries}
          onCreated={(list) => router.push(`/grocery/${list.id}${addQuery}`)}
          onClose={() => setIsCreating(false)}
        />
      )}
    </div>
  );
};

export default GroceryIndex;
