// src/components/SearchAndRecipes/Search/FilterCategories/index.tsx
//
// The cuisine/diet/health/meal/dish checkbox sections, plus a chip
// summary of what's selected. Purely presentational — Search/index.tsx
// owns `selectedKeys` so it can factor them into a combined
// ingredients + filters search alongside the ingredient picker above it.

"use client";

import { X } from "lucide-react";
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

  return (
    <div className="flex w-full flex-col gap-3">
      {/* Each category is its own hairline row — label left, the current
          selection ("Any" or a count) right — so the sidebar reads as a
          short settings list rather than a nested tree. */}
      <div className="flex w-full flex-col border-t border-line">
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

      {selectedOptions.length > 0 && (
        <div className="flex w-full flex-wrap gap-1.5">
          {selectedOptions.map((option) => (
            <button
              key={option.key}
              type="button"
              className="group flex h-6 items-center gap-1 rounded-sm border border-line bg-surface-raised pl-2 pr-1 text-xs font-medium text-ink transition-colors hover:border-danger/40 hover:bg-danger-tint hover:text-danger"
              onClick={() => onToggle(option.key)}
            >
              {option.label}
              <X className="size-3 text-ink-muted group-hover:text-danger" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterCategories;
