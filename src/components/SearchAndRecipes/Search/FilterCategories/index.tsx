// src/components/SearchAndRecipes/Search/FilterCategories/index.tsx
//
// The cuisine/diet/health/meal/dish checkbox sections, plus a chip
// summary of what's selected. Purely presentational — Search/index.tsx
// owns `selectedKeys` so it can factor them into a combined
// ingredients + filters search alongside the ingredient picker above it.

"use client";

import { ChevronDown } from "lucide-react";
import React from "react";

import {
  RANDOM_RECIPE_FILTER_CATEGORIES,
  RANDOM_RECIPE_FILTER_OPTIONS,
} from "@data/randomRecipeFilters";

import CheckboxFilterGroup from "./CheckboxFilterGroup";

interface FilterCategoriesProps {
  selectedKeys: string[];
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onToggle: (_key: string) => void;
}

const FilterCategories: React.FC<FilterCategoriesProps> = ({
  selectedKeys,
  onToggle,
}) => {
  const selectedOptions = RANDOM_RECIPE_FILTER_OPTIONS.filter((option) =>
    selectedKeys.includes(option.key),
  );

  // Collapsed by default — the count in the summary lets you see at a
  // glance whether anything's applied without opening it, and the chip
  // row below stays visible (outside the <details>) either way so
  // active filters are never hidden, only the picker UI is.
  const summaryLabel = `Filters${
    selectedOptions.length > 0 ? ` (${selectedOptions.length} selected)` : ""
  }`;

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {/* Named group ("group/filters") rather than a bare "group" — a
          bare group's `group-open:` cascades to ANY nested group-open
          utility below it (including each category's own chevron in
          CheckboxFilterGroup), rotating every sub-arrow the moment this
          outer <details> opens, regardless of whether that category
          itself is open. Naming scopes the open-state match to just
          this <details>. */}
      <details className="group/filters w-full max-w-xs text-left">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-[var(--pastel-brown)]/15 px-3 py-2 text-sm font-semibold sm:text-base">
          <span>{summaryLabel}</span>
          <ChevronDown
            strokeWidth={2}
            className="h-4 w-4 shrink-0 transition-transform duration-200 group-open/filters:rotate-180"
          />
        </summary>

        {/* The left rule (rather than indentation) is what marks these
            as nested under "Filters" — an actual indent would eat into
            an already-narrow sidebar. */}
        <div className="mt-3 flex w-full flex-col gap-4 border-l-2 border-[var(--pastel-brown)]/25 pl-3">
          {RANDOM_RECIPE_FILTER_CATEGORIES.map((category) => (
            <CheckboxFilterGroup
              key={category.param}
              groupLabel={category.groupLabel}
              options={category.options}
              selectedKeys={selectedKeys}
              onToggle={onToggle}
              columns={
                (
                  category.param === "cuisineType" ||
                  category.param === "dishType"
                ) ?
                  2
                : 1
              }
              collapsible
              searchable={category.param === "health"}
            />
          ))}
        </div>
      </details>

      {selectedOptions.length > 0 && (
        <div className="flex w-full max-w-xs flex-wrap justify-center gap-2">
          {selectedOptions.map((option) => (
            <button
              key={option.key}
              type="button"
              className="group flex items-center rounded bg-blue-100 px-2 py-1 text-xs"
              onClick={() => onToggle(option.key)}
            >
              <span className="text-[0.65rem] font-semibold text-blue-800 group-hover:text-red-400 sm:text-xs">
                {option.label}
              </span>
              <span className="ml-2 text-xl text-blue-500 group-hover:font-semibold group-hover:text-red-400">
                ×
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterCategories;
