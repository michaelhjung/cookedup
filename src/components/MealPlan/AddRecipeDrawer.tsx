"use client";

import { Search, Star, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

import Ellipsis from "@components/loaders/Ellipsis";
import RepeatRuleEditor from "@components/MealPlan/RepeatRuleEditor";
import { Hit, RecipeData } from "@interfaces/edamam";
import { formatFullDate } from "@lib/mealPlan/dates";
import { RepeatRule, validateRepeatRule } from "@lib/mealPlan/recurrence";
import { MealSlotDef, SlotId, formatSlotTime } from "@lib/mealPlan/types";

interface AddRecipeDrawerProps {
  date: string;
  slot: MealSlotDef;
  /** Every slot in the plan, so the meal can be switched from here. */
  slots: MealSlotDef[];
  savedRecipes: Hit[];
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onSlotChange: (_slot: SlotId) => void;
  /** `rule` is null when the meal shouldn't repeat. */
  onSelect: (_hit: Hit, _rule: RepeatRule | null) => void;
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
        hover:border-line-strong hover:bg-well
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
        <span className="block truncate text-[11px] text-ink-muted">
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
  slots,
  savedRecipes,
  onSlotChange,
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
  const [repeatRule, setRepeatRule] = useState<RepeatRule | null>(null);

  // A recipe can't be added under a rule that won't expand; the list
  // stays clickable but hands over no rule until it's fixed.
  const isRuleValid =
    repeatRule === null || validateRepeatRule(repeatRule, date) === null;
  const choose = (hit: Hit) => {
    if (!isRuleValid) return;
    onSelect(hit, repeatRule);
  };
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
      className="fixed inset-0 z-50 flex items-end justify-center bg-scrim backdrop-blur-sm sm:items-center"
      onMouseDown={(event) => {
        if (!panelRef.current?.contains(event.target as Node)) onClose();
      }}
    >
      <div
        ref={panelRef}
        className={`
          flex max-h-[85vh] w-full max-w-lg flex-col
          rounded-t-lg sm:rounded-lg
          border border-line
          bg-surface-raised
          shadow-2xl
        `}
      >
        <div className="flex shrink-0 items-start justify-between gap-2 border-b border-line p-4">
          <div className="min-w-0">
            <h2 className="text-sm font-semibold sm:text-base">
              Add to {slot.label}
            </h2>
            <p className="text-xs text-ink-muted">
              {formatFullDate(date)} · {formatSlotTime(slot.time)}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-sm p-1 transition-colors hover:bg-line"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="grid shrink-0 grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 gap-y-2 border-b border-line px-4 py-3 text-xs">
          <label
            htmlFor="add-recipe-slot"
            className="pt-2 text-ink-muted"
          >
            Meal
          </label>
          <select
            id="add-recipe-slot"
            value={slot.id}
            onChange={(event) => onSlotChange(event.target.value)}
            className="h-8 w-full rounded-md border border-line bg-surface-raised px-2 text-xs outline-none focus:border-ink"
          >
            {slots.map((candidate) => (
              <option
                key={candidate.id}
                value={candidate.id}
              >
                {candidate.label} · {formatSlotTime(candidate.time)}
              </option>
            ))}
          </select>

          <span className="pt-2 text-ink-muted">Repeat</span>
          <RepeatRuleEditor
            startDate={date}
            rule={repeatRule}
            onChange={setRepeatRule}
            dense
          />
        </div>

        <div className="flex shrink-0 gap-1 border-b border-line px-4 pt-3">
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
                    "border-b-2 border-accent text-accent"
                  : "border-b-2 border-transparent text-ink-muted hover:text-current"
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
                  className="mb-2 h-9 w-full rounded-md border border-line bg-transparent px-3 text-xs outline-none focus:border-ink"
                />
              )}

              {filteredSaved.length === 0 ?
                <p className="p-6 text-center text-xs text-ink-muted">
                  {savedRecipes.length === 0 ?
                    "You haven't starred any recipes yet. Try the Search tab."
                  : `No saved recipes match "${savedFilter}".`}
                </p>
              : filteredSaved.map((hit) => (
                  <RecipeRow
                    key={hit.recipe.url}
                    hit={hit}
                    onSelect={() => choose(hit)}
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
                  className="h-9 flex-1 rounded-md border border-line bg-transparent px-3 text-xs outline-none focus:border-ink"
                />
                <button
                  type="submit"
                  disabled={!query.trim() || isSearching}
                  className={`
                    rounded-md px-4 text-xs font-semibold
                    ${
                      !query.trim() || isSearching ?
                        "cursor-not-allowed bg-well text-ink-muted"
                      : "cursor-pointer bg-accent hover:bg-accent-hover text-on-accent"
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
                <p className="p-6 text-center text-xs text-danger">
                  {searchError}
                </p>
              : results === null ?
                <p className="p-6 text-center text-xs text-ink-muted">
                  Search by ingredient or dish to find something for this meal.
                </p>
              : results.length === 0 ?
                <p className="p-6 text-center text-xs text-ink-muted">
                  No recipes found for &ldquo;{query}&rdquo;.
                </p>
              : results.map((hit) => (
                  <RecipeRow
                    key={hit.recipe.url}
                    hit={hit}
                    onSelect={() => choose(hit)}
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
