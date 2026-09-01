// src/components/SearchAndRecipes/Search/RandomRecipeFilters/index.tsx

"use client";

import React, { useState } from "react";

import TagMultiSelect from "@components/TagMultiSelect";
import {
  buildRandomRecipeSearchParams,
  RANDOM_RECIPE_FILTER_OPTIONS,
} from "@data/randomRecipeFilters";
import { Hit, RecipeData } from "@interfaces/edamam";

const RESULT_COUNT_OPTIONS = [1, 5, 10, 20] as const;
type ResultCount = (typeof RESULT_COUNT_OPTIONS)[number];

interface RandomRecipeFiltersProps {
  setRecipesData: React.Dispatch<React.SetStateAction<RecipeData | null>>;
  setIsLoadingRecipes: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorFetchingRecipes: React.Dispatch<React.SetStateAction<boolean>>;
}

const RandomRecipeFilters: React.FC<RandomRecipeFiltersProps> = ({
  setRecipesData,
  setIsLoadingRecipes,
  setErrorFetchingRecipes,
}) => {
  const [selectedFilterKeys, setSelectedFilterKeys] = useState<string[]>([]);
  const [resultCount, setResultCount] = useState<ResultCount>(10);

  const handleGenerateRandomRecipes = async () => {
    if (selectedFilterKeys.length === 0) return;

    const params = buildRandomRecipeSearchParams(selectedFilterKeys);

    try {
      setIsLoadingRecipes(true);
      const response = await fetch(`/api/edamam?${params.toString()}`);
      if (!response.ok) throw new Error("Failed to generate recipes.");

      const data: RecipeData = await response.json();
      const hits: Hit[] = data.hits.slice(0, resultCount);

      setErrorFetchingRecipes(false);
      // count reflects the (sliced) batch actually shown, not Edamam's
      // total match count (often 10,000+), which would be misleading
      // here — "Found 10,000 recipes!" makes no sense for a random draw.
      setRecipesData({ ...data, hits, count: hits.length });
    } catch (error) {
      console.error(
        "An error occurred while generating random recipes:",
        error,
      );
      setRecipesData(null);
      setErrorFetchingRecipes(true);
    } finally {
      setIsLoadingRecipes(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-1 text-xs sm:text-sm">
        <label htmlFor="random-recipe-count">How many to show:</label>
        <select
          id="random-recipe-count"
          className="rounded-full border-1 px-3 py-1 outline-none"
          value={resultCount}
          onChange={(e) =>
            setResultCount(Number(e.target.value) as ResultCount)
          }
        >
          {RESULT_COUNT_OPTIONS.map((count) => (
            <option
              key={count}
              value={count}
            >
              {count}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        disabled={selectedFilterKeys.length === 0}
        className={`
          rounded-3xl px-4 py-2 text-xs sm:text-sm
          transition-transform
          ${
            selectedFilterKeys.length === 0 ?
              "cursor-not-allowed bg-[var(--pastel-brown)]/10 text-gray-400"
            : "cursor-pointer bg-[var(--pastel-brown)]/20 text-cinerous hover:scale-105"
          }
        `}
        onClick={handleGenerateRandomRecipes}
      >
        Generate
      </button>

      <TagMultiSelect
        options={RANDOM_RECIPE_FILTER_OPTIONS}
        selectedKeys={selectedFilterKeys}
        onChange={setSelectedFilterKeys}
        placeholder="Search filters (cuisine, diet, health...)"
      />
    </div>
  );
};

export default RandomRecipeFilters;
