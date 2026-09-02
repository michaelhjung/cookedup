// src/components/SearchAndRecipes/Search/RandomRecipeFilters/index.tsx

"use client";

import React, { useEffect, useRef, useState } from "react";

import {
  buildRandomRecipeSearchParams,
  RANDOM_RECIPE_FILTER_CATEGORIES,
  RANDOM_RECIPE_FILTER_OPTIONS,
} from "@data/randomRecipeFilters";
import { RecipeData } from "@interfaces/edamam";

import CheckboxFilterGroup from "./CheckboxFilterGroup";

// How long the "Pick one for me" highlight stays on a card before fading.
const HIGHLIGHT_DURATION_MS = 2500;

interface RandomRecipeFiltersProps {
  recipesData: RecipeData | null;
  setRecipesData: React.Dispatch<React.SetStateAction<RecipeData | null>>;
  setIsLoadingRecipes: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorFetchingRecipes: React.Dispatch<React.SetStateAction<boolean>>;
  setRecipesSource: React.Dispatch<
    React.SetStateAction<"ingredients" | "filter" | "saved" | null>
  >;
  setActiveFilterKeys: React.Dispatch<React.SetStateAction<string[]>>;
  setFilterGeneration: React.Dispatch<React.SetStateAction<number>>;
  setHighlightedRecipeUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

const RandomRecipeFilters: React.FC<RandomRecipeFiltersProps> = ({
  recipesData,
  setRecipesData,
  setIsLoadingRecipes,
  setErrorFetchingRecipes,
  setRecipesSource,
  setActiveFilterKeys,
  setFilterGeneration,
  setHighlightedRecipeUrl,
}) => {
  const [selectedFilterKeys, setSelectedFilterKeys] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const highlightTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  useEffect(() => {
    return () => {
      if (highlightTimeoutRef.current)
        clearTimeout(highlightTimeoutRef.current);
    };
  }, []);

  const toggleFilterKey = (key: string) => {
    setSelectedFilterKeys((prev) =>
      prev.includes(key) ?
        prev.filter((selectedKey) => selectedKey !== key)
      : [...prev, key],
    );
  };

  const handleGenerateRandomRecipes = async () => {
    if (selectedFilterKeys.length === 0 || isGenerating) return;

    const params = buildRandomRecipeSearchParams(selectedFilterKeys);

    try {
      setIsGenerating(true);
      setIsLoadingRecipes(true);
      setHighlightedRecipeUrl(null);
      const response = await fetch(`/api/edamam?${params.toString()}`);
      if (!response.ok) throw new Error("Failed to generate recipes.");

      const data: RecipeData = await response.json();

      setErrorFetchingRecipes(false);
      // `count`/`to` reflect what's actually shown, not Edamam's total
      // match count (often 10,000+) or un-sliced `to`, which would be
      // misleading for a random draw. `_links` is explicitly cleared —
      // "load more" for this mode is driven by Recipes' filter-mode
      // scroll loader (fresh random draws + dedupe), not Edamam's
      // cursor, which `random=true` doesn't return anyway.
      setRecipesData({
        ...data,
        count: data.hits.length,
        to: data.hits.length,
        _links: undefined,
      });
      // Recorded *after* a successful draw so Recipes' scroll-to-load-more
      // only activates once there's something on screen to append to.
      // `filterGeneration` is bumped unconditionally (even with unchanged
      // filters) so Recipes' exhausted-draws counter resets on every
      // Generate/regenerate click, not just when the filter selection
      // itself changes.
      setActiveFilterKeys(selectedFilterKeys);
      setRecipesSource("filter");
      setFilterGeneration((prev) => prev + 1);
    } catch (error) {
      console.error(
        "An error occurred while generating random recipes:",
        error,
      );
      setRecipesData(null);
      setErrorFetchingRecipes(true);
    } finally {
      setIsLoadingRecipes(false);
      setIsGenerating(false);
    }
  };

  const handlePickRandomLoaded = () => {
    const hits = recipesData?.hits;
    if (!hits || hits.length === 0) return;

    const randomHit = hits[Math.floor(Math.random() * hits.length)];

    if (highlightTimeoutRef.current) clearTimeout(highlightTimeoutRef.current);
    setHighlightedRecipeUrl(randomHit.recipe.url);
    highlightTimeoutRef.current = setTimeout(
      () => setHighlightedRecipeUrl(null),
      HIGHLIGHT_DURATION_MS,
    );
  };

  const selectedOptions = RANDOM_RECIPE_FILTER_OPTIONS.filter((option) =>
    selectedFilterKeys.includes(option.key),
  );

  const hasLoadedRecipes = !!recipesData?.hits?.length;

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex w-full max-w-xs flex-col gap-4">
        {RANDOM_RECIPE_FILTER_CATEGORIES.map((category) => (
          <CheckboxFilterGroup
            key={category.param}
            groupLabel={category.groupLabel}
            options={category.options}
            selectedKeys={selectedFilterKeys}
            onToggle={toggleFilterKey}
            columns={
              (
                category.param === "cuisineType" ||
                category.param === "dishType"
              ) ?
                2
              : 1
            }
            collapsible={category.param === "health"}
            searchable={category.param === "health"}
          />
        ))}
      </div>

      {selectedOptions.length > 0 && (
        <div className="flex w-full max-w-xs flex-wrap justify-center gap-2">
          {selectedOptions.map((option) => (
            <button
              key={option.key}
              type="button"
              className="group flex items-center rounded bg-blue-100 px-2 py-1 text-xs"
              onClick={() => toggleFilterKey(option.key)}
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

      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          disabled={selectedFilterKeys.length === 0 || isGenerating}
          className={`
            rounded-3xl px-4 py-2 text-xs sm:text-sm
            transition-transform
            ${
              selectedFilterKeys.length === 0 || isGenerating ?
                "cursor-not-allowed bg-[var(--pastel-brown)]/10 text-gray-400"
              : "cursor-pointer bg-[var(--pastel-brown)]/20 text-cinerous hover:scale-105"
            }
          `}
          onClick={handleGenerateRandomRecipes}
        >
          Generate
        </button>

        <button
          type="button"
          disabled={!hasLoadedRecipes}
          title="Randomly highlight one of the recipes already loaded below"
          className={`
            rounded-3xl px-4 py-2 text-xs sm:text-sm
            transition-transform
            ${
              !hasLoadedRecipes ?
                "cursor-not-allowed bg-[var(--pastel-brown)]/10 text-gray-400"
              : "cursor-pointer bg-[var(--pastel-brown)]/20 text-cinerous hover:scale-105"
            }
          `}
          onClick={handlePickRandomLoaded}
        >
          🎲 Pick one for me
        </button>
      </div>
    </div>
  );
};

export default RandomRecipeFilters;
