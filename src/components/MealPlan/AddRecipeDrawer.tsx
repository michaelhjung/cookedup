"use client";

import { Search, Star, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

import Ellipsis from "@components/loaders/Ellipsis";
import { Hit, RecipeData } from "@interfaces/edamam";
import { formatFullDate } from "@lib/mealPlan/dates";
import { MealSlotDef, formatSlotTime } from "@lib/mealPlan/types";

interface AddRecipeDrawerProps {
  date: string;
  slot: MealSlotDef;
  savedRecipes: Hit[];
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onSelect: (_hit: Hit) => void;
  onClose: () => void;
}

type Tab = "saved" | "search";

const RecipeRow: React.FC<{ hit: Hit; onSelect: () => void }> = ({
  hit,
  onSelect,
}) => {
  const image =
    hit.recipe.images?.THUMBNAIL?.url ||
    hit.recipe.images?.SMALL?.url ||
    hit.recipe.image;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        flex w-full items-center gap-3
        rounded-md border border-transparent
        p-2
        text-left
        transition-colors
        hover:border-[var(--pastel-blue)] hover:bg-[var(--pastel-blue)]/10
      `}
    >
      {image && (
        <Image
          src={image}
          alt=""
          width={44}
          height={44}
          className="size-11 shrink-0 rounded object-cover"
        />
      )}
      <span className="min-w-0 flex-1">
        <span className="line-clamp-2 block text-xs font-medium sm:text-sm">
          {hit.recipe.label}
        </span>
        <span className="block truncate text-[0.65rem] text-gray-400">
          {hit.recipe.source}
          {hit.recipe.totalTime > 0 ? ` · ${hit.recipe.totalTime} min` : ""}
        </span>
      </span>
    </button>
  );
};

/**
 * The picker behind every "+" in the planner. Two ways in, because the
 * two are genuinely different jobs: "put that thing I already liked on
 * Tuesday" is a lookup, and "find me something for Tuesday" is a search.
 */
const AddRecipeDrawer: React.FC<AddRecipeDrawerProps> = ({
  date,
  slot,
  savedRecipes,
  onSelect,
  onClose,
}) => {
  const [tab, setTab] = useState<Tab>(
    savedRecipes.length > 0 ? "saved" : "search",
  );
  const [savedFilter, setSavedFilter] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Hit[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const filteredSaved = useMemo(() => {
    const needle = savedFilter.trim().toLowerCase();
    if (!needle) return savedRecipes;
    return savedRecipes.filter((hit) =>
      hit.recipe.label.toLowerCase().includes(needle),
    );
  }, [savedRecipes, savedFilter]);

  const runSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    setIsSearching(true);
    setSearchError("");

    try {
      const response = await fetch(
        `/api/edamam?ingredients=${encodeURIComponent(trimmed)}`,
      );
      const data: RecipeData = await response.json();
      setResults(data.hits ?? []);
    } catch (error) {
      console.error("Recipe search failed:", error);
      setSearchError("Couldn't search right now. Try again.");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center backdrop-blur-sm sm:items-center"
      onMouseDown={(event) => {
        if (!panelRef.current?.contains(event.target as Node)) onClose();
      }}
    >
      <div
        ref={panelRef}
        className={`
          flex max-h-[85vh] w-full max-w-lg flex-col
          rounded-t-xl sm:rounded-xl
          border border-zinc-500/20
          bg-[var(--background-color)]
          shadow-2xl
        `}
      >
        <div className="flex shrink-0 items-start justify-between gap-2 border-b border-zinc-500/15 p-4">
          <div>
            <h2 className="text-sm font-semibold sm:text-base">
              Add to {slot.label}
            </h2>
            <p className="text-xs text-gray-400">
              {formatFullDate(date)} · {formatSlotTime(slot.time)}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded p-1 transition-colors hover:bg-zinc-500/10"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="flex shrink-0 gap-1 border-b border-zinc-500/15 px-4 pt-3">
          {(["saved", "search"] as Tab[]).map((candidate) => (
            <button
              key={candidate}
              type="button"
              onClick={() => setTab(candidate)}
              className={`
                flex items-center gap-1.5 rounded-t-md px-3 py-2 text-xs font-medium sm:text-sm
                transition-colors
                ${
                  tab === candidate ?
                    "border-b-2 border-[var(--pastel-blue)] text-[var(--pastel-blue)]"
                  : "border-b-2 border-transparent text-gray-400 hover:text-current"
                }
              `}
            >
              {candidate === "saved" ?
                <>
                  <Star className="size-3.5" /> Saved ({savedRecipes.length})
                </>
              : <>
                  <Search className="size-3.5" /> Search
                </>
              }
            </button>
          ))}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-3">
          {tab === "saved" ?
            <>
              {savedRecipes.length > 0 && (
                <input
                  type="text"
                  value={savedFilter}
                  onChange={(event) => setSavedFilter(event.target.value)}
                  placeholder="Filter your saved recipes..."
                  className="mb-2 h-9 w-full rounded-full border border-zinc-500/30 bg-transparent px-3 text-xs outline-none focus:border-[var(--pastel-blue)]"
                />
              )}

              {filteredSaved.length === 0 ?
                <p className="p-6 text-center text-xs text-gray-400">
                  {savedRecipes.length === 0 ?
                    "You haven't starred any recipes yet. Try the Search tab."
                  : `No saved recipes match "${savedFilter}".`}
                </p>
              : filteredSaved.map((hit) => (
                  <RecipeRow
                    key={hit.recipe.url}
                    hit={hit}
                    onSelect={() => onSelect(hit)}
                  />
                ))
              }
            </>
          : <>
              <form
                onSubmit={runSearch}
                className="mb-2 flex gap-2"
              >
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="chicken, rice, broccoli..."
                  className="h-9 flex-1 rounded-full border border-zinc-500/30 bg-transparent px-3 text-xs outline-none focus:border-[var(--pastel-blue)]"
                />
                <button
                  type="submit"
                  disabled={!query.trim() || isSearching}
                  className={`
                    rounded-3xl px-4 text-xs font-semibold
                    ${
                      !query.trim() || isSearching ?
                        "cursor-not-allowed bg-[var(--pastel-brown)]/10 text-gray-400"
                      : "cursor-pointer bg-[var(--pastel-blue)] text-blue-900"
                    }
                  `}
                >
                  Search
                </button>
              </form>

              {isSearching ?
                <div className="flex justify-center p-6">
                  <Ellipsis />
                </div>
              : searchError ?
                <p className="p-6 text-center text-xs text-red-400">
                  {searchError}
                </p>
              : results === null ?
                <p className="p-6 text-center text-xs text-gray-400">
                  Search by ingredient or dish to find something for this meal.
                </p>
              : results.length === 0 ?
                <p className="p-6 text-center text-xs text-gray-400">
                  No recipes found for &ldquo;{query}&rdquo;.
                </p>
              : results.map((hit) => (
                  <RecipeRow
                    key={hit.recipe.url}
                    hit={hit}
                    onSelect={() => onSelect(hit)}
                  />
                ))
              }
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default AddRecipeDrawer;
