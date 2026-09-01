# Random Recipe Generator Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let a user pick Edamam cuisine/diet/health/meal-type/dish-type filters and generate a batch of random matching recipes in the existing recipe grid, with full save/star support.

**Architecture:** A new "Random" mode in the existing search sidebar renders a generic, reusable `TagMultiSelect` filter picker over a verified, hardcoded list of Edamam filter values. Generating calls the existing `/api/edamam` route (extended to support `random=true` + repeated filter params) and feeds the results into the same `recipesData` state the ingredient search already populates — so the results grid, `RecipeCard`, and `StarIcon` need no changes at all.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, existing Edamam API integration.

**Spec:** `docs/superpowers/specs/2026-09-01-random-recipe-generator-design.md`

## Global Constraints

- No test framework (Jest/Vitest/etc.) exists in this repo, and introducing
  one is explicitly out of scope for this plan (deferred to the project's
  DRY/maintainability phase). Every task's verification step is manual:
  `npx tsc --noEmit`, `npm run lint`, and `npm run build` must all pass
  cleanly, plus interactively exercising the feature via `npm run dev`
  where a step says to.
- All Edamam filter param values sent from the app must come from the
  verified lists baked into `src/data/randomRecipeFilters.ts` — these were
  live-tested against the real API (see the spec). Do not add, rename, or
  guess additional values.
- Follow existing conventions: `React.FC<Props>` function components,
  `"use client"` on interactive components, Tailwind utility classes
  inline, path aliases from `tsconfig.json` (`@components/*`, `@data/*`,
  `@interfaces/*`, `@utils/*`).
- Do not modify the existing ingredient-search components
  (`SearchInput`, `IngredientsList`, `SelectedIngredients`) beyond what's
  specified in Task 4. Migrating them onto the new `TagMultiSelect` is
  explicitly out of scope (spec's "Explicitly out of scope" section).

---

### Task 1: Filter data and Edamam query-building helper

**Files:**

- Create: `src/data/randomRecipeFilters.ts`

**Interfaces:**

- Produces: `RandomRecipeFilterOption { key: string; label: string; param: "cuisineType" | "diet" | "health" | "mealType" | "dishType"; value: string }`, `RANDOM_RECIPE_FILTER_OPTIONS: RandomRecipeFilterOption[]`, `buildRandomRecipeSearchParams(selectedKeys: string[]): URLSearchParams`

Note: `cuisineType` includes `"Kosher"` and `health` includes `"kosher"` —
these are two distinct, real filters (verified against the live API), so
each option's `key` is `` `${param}:${value}` ``, not the raw value alone,
so the two never collide.

- [ ] **Step 1: Write the data file**

```ts
// src/data/randomRecipeFilters.ts

export type RandomRecipeFilterParam =
  | "cuisineType"
  | "diet"
  | "health"
  | "mealType"
  | "dishType";

export interface RandomRecipeFilterOption {
  key: string;
  label: string;
  param: RandomRecipeFilterParam;
  value: string;
}

// Every value below was live-tested against the Edamam v2 Recipe Search
// API (see docs/superpowers/specs/2026-09-01-random-recipe-generator-design.md).
// `low-fat-abs` is a real Edamam health value but is rejected by this
// account's plan tier, so it's intentionally excluded.
const FILTER_CATEGORIES: {
  param: RandomRecipeFilterParam;
  groupLabel: string;
  values: string[];
}[] = [
  {
    param: "cuisineType",
    groupLabel: "Cuisine",
    values: [
      "American",
      "Asian",
      "British",
      "Caribbean",
      "Central Europe",
      "Chinese",
      "Eastern Europe",
      "French",
      "Greek",
      "Indian",
      "Italian",
      "Japanese",
      "Korean",
      "Kosher",
      "Mediterranean",
      "Mexican",
      "Middle Eastern",
      "Nordic",
      "South American",
      "South East Asian",
    ],
  },
  {
    param: "diet",
    groupLabel: "Diet",
    values: [
      "balanced",
      "high-fiber",
      "high-protein",
      "low-carb",
      "low-fat",
      "low-sodium",
    ],
  },
  {
    param: "health",
    groupLabel: "Health",
    values: [
      "alcohol-cocktail",
      "alcohol-free",
      "celery-free",
      "crustacean-free",
      "dairy-free",
      "DASH",
      "egg-free",
      "fish-free",
      "fodmap-free",
      "gluten-free",
      "immuno-supportive",
      "keto-friendly",
      "kidney-friendly",
      "kosher",
      "low-potassium",
      "low-sugar",
      "lupine-free",
      "Mediterranean",
      "mollusk-free",
      "mustard-free",
      "no-oil-added",
      "paleo",
      "peanut-free",
      "pescatarian",
      "pork-free",
      "red-meat-free",
      "sesame-free",
      "shellfish-free",
      "soy-free",
      "sugar-conscious",
      "sulfite-free",
      "tree-nut-free",
      "vegan",
      "vegetarian",
      "wheat-free",
    ],
  },
  {
    param: "mealType",
    groupLabel: "Meal Type",
    values: ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"],
  },
  {
    param: "dishType",
    groupLabel: "Dish Type",
    values: [
      "Alcohol Cocktail",
      "Biscuits and cookies",
      "Bread",
      "Cereals",
      "Condiments and sauces",
      "Desserts",
      "Drinks",
      "Main course",
      "Pancake",
      "Preps",
      "Preserve",
      "Salad",
      "Sandwiches",
      "Side dish",
      "Soup",
      "Starter",
      "Sweets",
    ],
  },
];

const makeOptionKey = (param: RandomRecipeFilterParam, value: string): string =>
  `${param}:${value}`;

export const RANDOM_RECIPE_FILTER_OPTIONS: RandomRecipeFilterOption[] =
  FILTER_CATEGORIES.flatMap(({ param, groupLabel, values }) =>
    values.map((value) => ({
      key: makeOptionKey(param, value),
      label: `${groupLabel}: ${value}`,
      param,
      value,
    })),
  );

/**
 * Turns selected option keys (from RANDOM_RECIPE_FILTER_OPTIONS) into the
 * query params Edamam expects: `random=true` plus each filter repeated
 * per selected value (e.g. `diet=low-carb&diet=high-fiber`).
 */
export const buildRandomRecipeSearchParams = (
  selectedKeys: string[],
): URLSearchParams => {
  const optionsByKey = new Map(
    RANDOM_RECIPE_FILTER_OPTIONS.map((option) => [option.key, option]),
  );

  const params = new URLSearchParams();
  params.set("random", "true");

  selectedKeys.forEach((key) => {
    const option = optionsByKey.get(key);
    if (!option) return;
    params.append(option.param, option.value);
  });

  return params;
};
```

- [ ] **Step 2: Verify the option count and key uniqueness**

This repo has no test framework, so verify with a throwaway script run
directly (Node 24 runs `.ts` files natively — no new dependency needed).
Create it, run it, then delete it; it is not part of the deliverable.

Create the script at the repo root (`cookedup/verify-random-recipe-filters.ts`,
alongside `package.json`), so the import path below resolves exactly as
written:

```ts
// verify-random-recipe-filters.ts (repo root, throwaway — not committed)
import {
  RANDOM_RECIPE_FILTER_OPTIONS,
  buildRandomRecipeSearchParams,
} from "./src/data/randomRecipeFilters";

console.log("total options:", RANDOM_RECIPE_FILTER_OPTIONS.length);
// expected: 20 (cuisine) + 6 (diet) + 35 (health) + 5 (mealType) + 17 (dishType) = 83

const keys = RANDOM_RECIPE_FILTER_OPTIONS.map((o) => o.key);
console.log("unique keys:", new Set(keys).size === keys.length);
// expected: true

// The Kosher/kosher collision case from the spec — must resolve to two
// distinct params.
const params = buildRandomRecipeSearchParams([
  "cuisineType:Kosher",
  "health:kosher",
]);
console.log("collision test:", params.toString());
// expected: random=true&cuisineType=Kosher&health=kosher
```

Run (from the repo root):
`node --experimental-strip-types verify-random-recipe-filters.ts`
Expected output:

```
total options: 83
unique keys: true
collision test: random=true&cuisineType=Kosher&health=kosher
```

Delete the throwaway script once it passes: `rm verify-random-recipe-filters.ts`

- [ ] **Step 3: Typecheck, lint, build**

Run: `npx tsc --noEmit && npm run lint && npm run build`
Expected: all three pass with no new errors.

- [ ] **Step 4: Commit**

```bash
git add src/data/randomRecipeFilters.ts
git commit -m "Add verified Edamam filter data for random recipe generator"
```

---

### Task 2: Generic `TagMultiSelect` component

**Files:**

- Create: `src/components/TagMultiSelect/types.ts`
- Create: `src/components/TagMultiSelect/OptionsDropdown.tsx`
- Create: `src/components/TagMultiSelect/index.tsx`

**Interfaces:**

- Consumes: nothing from Task 1 directly (this component is generic and
  option-source-agnostic).
- Produces: `TagMultiSelectOption { key: string; label: string }`, and a
  default-exported `TagMultiSelect` component with props
  `{ options: TagMultiSelectOption[]; selectedKeys: string[]; onChange: (nextSelectedKeys: string[]) => void; placeholder?: string }`.

This mirrors the existing `SearchInput`/`IngredientsList`/
`SelectedIngredients` pattern (search input, filtered dropdown with
keyboard nav, removable chips) but is self-contained — the parent only
supplies `options`/`selectedKeys`/`onChange`, none of the internal
open/filter/focus state used by the ingredient version needs to be
lifted. Unlike ingredient search, there is no freeform "type a custom
value and press Enter" — only listed options are selectable, since every
value must be one Edamam actually accepts.

- [ ] **Step 1: Create the shared option type**

```ts
// src/components/TagMultiSelect/types.ts

export interface TagMultiSelectOption {
  key: string;
  label: string;
}
```

- [ ] **Step 2: Create the dropdown subcomponent**

```tsx
// src/components/TagMultiSelect/OptionsDropdown.tsx

import React from "react";

import { TagMultiSelectOption } from "./types";

interface OptionsDropdownProps {
  options: TagMultiSelectOption[];
  selectedKeys: string[];
  setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
  optionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  onSelect: (key: string) => void;
  onClose: () => void;
}

const OptionsDropdown: React.FC<OptionsDropdownProps> = ({
  options,
  selectedKeys,
  setFocusedIndex,
  optionRefs,
  onSelect,
  onClose,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "Enter":
      case " ": {
        e.preventDefault();
        const option = options[index];
        if (option) onSelect(option.key);
        break;
      }
      case "ArrowDown": {
        e.preventDefault();
        const nextIndex = index + 1 === options.length ? 0 : index + 1;
        setFocusedIndex(nextIndex);
        optionRefs.current[nextIndex]?.focus();
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const nextIndex = index === 0 ? options.length - 1 : index - 1;
        setFocusedIndex(nextIndex);
        optionRefs.current[nextIndex]?.focus();
        break;
      }
      case "Escape":
        onClose();
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={`
        absolute top-full z-10
        h-40 w-80
        sm:h-80 lg:w-64 xl:w-72 2xl:w-96
        mt-1
        text-xs sm:text-sm
        overflow-auto
        bg-[var(--pastel-brown)]/25 p-4
        backdrop-blur-lg
      `}
    >
      {options.length === 0 && <div>No matching filters found.</div>}

      {options.map((option, index) => {
        const isSelected = selectedKeys.includes(option.key);
        return (
          <div
            key={option.key}
            ref={(el) => {
              optionRefs.current[index] = el;
            }}
            role="button"
            className={`rounded-lg p-1 outline-none ${
              isSelected ?
                "cursor-default italic text-gray-400"
              : "cursor-pointer hover:bg-pastel-brown/35 focus:border-2 focus:border-pastel-brown focus:bg-pastel-brown/35"
            }`}
            onClick={() => onSelect(option.key)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
};

export default OptionsDropdown;
```

- [ ] **Step 3: Create the main component**

```tsx
// src/components/TagMultiSelect/index.tsx

"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import OptionsDropdown from "./OptionsDropdown";
import { TagMultiSelectOption } from "./types";

export type { TagMultiSelectOption };

interface TagMultiSelectProps {
  options: TagMultiSelectOption[];
  selectedKeys: string[];
  onChange: (nextSelectedKeys: string[]) => void;
  placeholder?: string;
}

const TagMultiSelect: React.FC<TagMultiSelectProps> = ({
  options,
  selectedKeys,
  onChange,
  placeholder = "Search",
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredOptions = useMemo(() => {
    const query = searchInput.trim().toLowerCase();
    if (!query) return options;
    return options.filter((option) =>
      option.label.toLowerCase().includes(query),
    );
  }, [options, searchInput]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(0);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectOption = (key: string) => {
    if (selectedKeys.includes(key)) return;
    onChange([...selectedKeys, key]);
  };

  const removeOption = (key: string) => {
    onChange(selectedKeys.filter((selectedKey) => selectedKey !== key));
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter": {
        const target = filteredOptions[focusedIndex] ?? filteredOptions[0];
        if (target) selectOption(target.key);
        break;
      }
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex(0);
        optionRefs.current[0]?.focus();
        break;
      case "Escape":
        setIsOpen(false);
        setFocusedIndex(0);
        break;
      default:
        break;
    }
  };

  const selectedOptions = options.filter((option) =>
    selectedKeys.includes(option.key),
  );

  return (
    <div
      ref={wrapperRef}
      className="relative flex w-full flex-col items-center"
    >
      <input
        className={`
          h-10 w-full max-w-xs rounded-full border-1
          px-4 text-xs outline-none
          duration-300 ease-in-out
          focus:border-[var(--pastel-blue)]
          sm:h-12 sm:text-sm
        `}
        type="text"
        value={searchInput}
        placeholder={placeholder}
        onChange={(e) => {
          setSearchInput(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleInputKeyDown}
      />

      {isOpen && (
        <OptionsDropdown
          options={filteredOptions}
          selectedKeys={selectedKeys}
          setFocusedIndex={setFocusedIndex}
          optionRefs={optionRefs}
          onSelect={selectOption}
          onClose={() => setIsOpen(false)}
        />
      )}

      {selectedOptions.length > 0 && (
        <div className="mt-3 flex w-full flex-wrap justify-center gap-2">
          {selectedOptions.map((option) => (
            <button
              key={option.key}
              type="button"
              className="group flex items-center rounded bg-blue-100 px-2 py-1 text-xs"
              onClick={() => removeOption(option.key)}
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

export default TagMultiSelect;
```

- [ ] **Step 4: Typecheck, lint, build**

Run: `npx tsc --noEmit && npm run lint && npm run build`
Expected: all three pass. `TagMultiSelect` has no consumer yet, so this
step confirms it compiles cleanly; full interactive verification happens
in Task 4 once it's wired into `RandomRecipeFilters`.

- [ ] **Step 5: Commit**

```bash
git add src/components/TagMultiSelect
git commit -m "Add generic TagMultiSelect component"
```

---

### Task 3: Extend `/api/edamam` for random/filtered requests

**Files:**

- Modify: `src/app/api/edamam/route.ts`

**Interfaces:**

- Consumes: nothing new from earlier tasks.
- Produces: the route now also accepts `random=true` plus repeated
  `cuisineType`/`diet`/`health`/`mealType`/`dishType` query params. Existing
  `ingredients` and `nextPage` behavior is unchanged.

- [ ] **Step 1: Read the current file to confirm the baseline**

Run: `cat src/app/api/edamam/route.ts`
(Confirms the exact current content before editing — this file has
`nextPage` support added in earlier work this session.)

- [ ] **Step 2: Replace the file with the extended version**

```ts
// src/app/api/edamam/route.ts

import { NextRequest, NextResponse } from "next/server";

const { EDAMAM_APP_ID, EDAMAM_API_KEY } = process.env;
const apiBaseUrl = "https://api.edamam.com";

const getEdamamApiUrl = (ingredientsQuery: string) =>
  `${apiBaseUrl}/api/recipes/v2?type=public&q=${ingredientsQuery}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_API_KEY}`;

// Repeatable filter params for the random recipe generator (e.g.
// `diet=low-carb&diet=high-fiber`), forwarded to Edamam as-is. Values are
// validated client-side against src/data/randomRecipeFilters.ts before
// ever reaching this route.
const RANDOM_RECIPE_FILTER_PARAMS = [
  "cuisineType",
  "diet",
  "health",
  "mealType",
  "dishType",
] as const;

const getRandomRecipesApiUrl = (searchParams: URLSearchParams): string => {
  const edamamParams = new URLSearchParams();
  edamamParams.set("type", "public");
  edamamParams.set("random", "true");

  RANDOM_RECIPE_FILTER_PARAMS.forEach((param) => {
    searchParams.getAll(param).forEach((value) => {
      edamamParams.append(param, value);
    });
  });

  edamamParams.set("app_id", EDAMAM_APP_ID!);
  edamamParams.set("app_key", EDAMAM_API_KEY!);

  return `${apiBaseUrl}/api/recipes/v2?${edamamParams.toString()}`;
};

export async function GET(req: NextRequest) {
  // Edamam's own pagination links (`_links.next.href`) already carry our
  // app_id/app_key. Fetching them server-side (instead of the client
  // fetching that link directly) keeps those credentials out of the
  // browser's network tab.
  const nextPage = req.nextUrl.searchParams.get("nextPage");
  const ingredients = req.nextUrl.searchParams.get("ingredients");
  const isRandomRequest = req.nextUrl.searchParams.get("random") === "true";

  if (!nextPage && !ingredients && !isRandomRequest)
    return NextResponse.json({
      message: "At least one ingredient is required.",
    });

  const ingredientsQuery =
    Array.isArray(ingredients) ? ingredients.join(",") : ingredients;

  const url =
    nextPage ||
    (isRandomRequest ?
      getRandomRecipesApiUrl(req.nextUrl.searchParams)
    : getEdamamApiUrl(ingredientsQuery!));

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to get recipes.");

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
```

- [ ] **Step 3: Typecheck, lint, build**

Run: `npx tsc --noEmit && npm run lint && npm run build`
Expected: all three pass.

- [ ] **Step 4: Manually verify against the running dev server**

Run: `npm run dev` (leave running), then in another terminal:

```bash
curl -s "http://localhost:3000/api/edamam?random=true&cuisineType=Korean" | python3 -c "
import json,sys
d=json.load(sys.stdin)
print('count field:', d.get('count'))
print('hits:', len(d.get('hits', [])))
print('has next link:', 'next' in d.get('_links', {}))
"
```

Expected: `hits: 20` (or fewer), `has next link: False`, and re-running the
same curl command a second time should print different recipe labels if
you also print `[h['recipe']['label'] for h in d['hits'][:3]]` (proving
randomization still works through the proxy).

Then confirm the existing ingredient search still works unchanged:

```bash
curl -s "http://localhost:3000/api/edamam?ingredients=chicken" | python3 -c "
import json,sys
d=json.load(sys.stdin)
print('count:', d.get('count'), '| hits:', len(d.get('hits', [])))
"
```

Expected: a nonzero count and hits, same as before this change.

- [ ] **Step 5: Commit**

```bash
git add src/app/api/edamam/route.ts
git commit -m "Support random/filtered recipe requests in /api/edamam"
```

---

### Task 4: `RandomRecipeFilters` UI and sidebar mode switcher

**Files:**

- Create: `src/components/SearchAndRecipes/Search/RandomRecipeFilters/index.tsx`
- Modify: `src/components/SearchAndRecipes/Search/index.tsx`

**Interfaces:**

- Consumes: `TagMultiSelect` (Task 2), `RANDOM_RECIPE_FILTER_OPTIONS` /
  `buildRandomRecipeSearchParams` (Task 1), the extended `/api/edamam`
  route (Task 3).
- Produces: `RandomRecipeFilters` component with props
  `{ setRecipesData, setIsLoadingRecipes, setErrorFetchingRecipes }`
  (same setter types already used by `Search`/`Recipes`/
  `SearchAndRecipes`).

- [ ] **Step 1: Create the `RandomRecipeFilters` component**

```tsx
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
      <TagMultiSelect
        options={RANDOM_RECIPE_FILTER_OPTIONS}
        selectedKeys={selectedFilterKeys}
        onChange={setSelectedFilterKeys}
        placeholder="Search filters (cuisine, diet, health...)"
      />

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
    </div>
  );
};

export default RandomRecipeFilters;
```

- [ ] **Step 2: Read the current `Search/index.tsx` to confirm the baseline**

Run: `cat src/components/SearchAndRecipes/Search/index.tsx`

- [ ] **Step 3: Replace `Search/index.tsx` with the mode-aware version**

```tsx
// src/components/SearchAndRecipes/Search/index.tsx

"use client";

import { User } from "@supabase/supabase-js";
import { RefreshCcw, Star } from "lucide-react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Icon from "@components/Icon";
import Tooltip from "@components/Tooltip";
import ingredientsList from "@data/ingredients.json";
import { Hit, RecipeData } from "@interfaces/edamam";
import { debounce } from "@utils/index";

import IngredientsList from "./IngredientsList";
import RandomRecipeFilters from "./RandomRecipeFilters";
import SearchInput from "./SearchInput";
import SelectedIngredients from "./SelectedIngredients";

const DEFAULT_INGREDIENTS_LIST = {
  all: ingredientsList,
  filtered: ingredientsList,
};

type SearchMode = "ingredients" | "random";

interface SearchProps {
  user: User | null;
  savedRecipes: Hit[];
  setRecipesData: React.Dispatch<React.SetStateAction<RecipeData | null>>;
  setIsLoadingRecipes: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorFetchingRecipes: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Search: React.FC<SearchProps> = ({
  user,
  savedRecipes,
  setRecipesData,
  setIsLoadingRecipes,
  setErrorFetchingRecipes,
  isSidebarOpen,
}) => {
  const [mode, setMode] = useState<SearchMode>("ingredients");
  const [ingredients, setIngredients] = useState<{
    all: string[] | [];
    filtered: string[] | [];
  }>(DEFAULT_INGREDIENTS_LIST);
  const [showIngredientsList, setShowIngredientsList] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<string[] | []>(
    [],
  );
  const [searchInput, setSearchInput] = useState("");
  const [isLoadingIngredientsList, setIsLoadingIngredientsList] =
    useState(false);
  const [_focusedIngredientIndex, setFocusedIngredientIndex] =
    useState<number>(0);

  const searchWrapperRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const ingredientRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filterIngredients = useCallback(
    (searchValue: string) => {
      const formattedSearchValue = searchValue.trim().toUpperCase();
      const filteredIngredientsList = ingredients.all.filter((ingredient) =>
        ingredient.toUpperCase().includes(formattedSearchValue),
      );
      setIngredients((prev) => ({
        ...prev,
        filtered: filteredIngredientsList,
      }));

      setIsLoadingIngredientsList(false);
    },
    [ingredients.all],
  );

  const debouncedFilter = useMemo(
    () => debounce(filterIngredients, 300),
    [filterIngredients],
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(e.target as Node)
      ) {
        setShowIngredientsList(false);
        setFocusedIngredientIndex(0);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchWrapperRef]);

  useEffect(() => {
    if (searchInput.trim()) {
      setIsLoadingIngredientsList(true);
      debouncedFilter(searchInput);
    } else {
      setIngredients(DEFAULT_INGREDIENTS_LIST);
      setIsLoadingIngredientsList(false);
    }

    return () => debouncedFilter.cancel();
  }, [searchInput, debouncedFilter]);

  const handleSelectIngredient = (ingredient: string) => {
    if (selectedIngredients.some((ingred) => ingred === ingredient)) return;
    setSelectedIngredients((prev) => [...prev, ingredient]);
    searchInputRef.current?.focus();
    setSearchInput("");
  };

  const handleSearchRecipes = async (selectedIngreds: string[]) => {
    setIsLoadingRecipes(true);
    const edamamResponse = await fetch(
      `/api/edamam?ingredients=${selectedIngreds.join(",")}`,
    );
    setIsLoadingRecipes(false);

    if (!edamamResponse.ok) {
      setRecipesData(null);
      setErrorFetchingRecipes(true);
      return;
    }

    setErrorFetchingRecipes(false);
    const edamamData = await edamamResponse.json();
    setRecipesData(edamamData);
  };

  const handleViewSavedRecipes = async () => {
    if (!user) {
      alert("You need to be logged in to view saved recipes.");
      return;
    }

    try {
      setIsLoadingRecipes(true);
      setRecipesData({
        from: 1,
        to: 1,
        count: savedRecipes.length,
        _links: undefined,
        hits: savedRecipes,
      });
      setIsLoadingRecipes(false);
      setErrorFetchingRecipes(false);
    } catch (err) {
      console.error("An error occurred while fetching saved recipes:", err);
      setIsLoadingRecipes(false);
      setErrorFetchingRecipes(true);
    }
  };

  return (
    <section
      className={`
        size-full transition-opacity duration-300 ease-in-out
        border-zinc-500/10 rounded-md lg:border-y-2 lg:border-l-0 lg:border-r-2
        lg:p-4
        ${isSidebarOpen ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="mb-4 flex w-full items-center justify-between gap-2">
        <div className="flex gap-2">
          <button
            type="button"
            className={`rounded-full px-3 py-1 text-xs sm:text-sm ${
              mode === "ingredients" ?
                "bg-[var(--pastel-brown)]/30 font-semibold"
              : "text-gray-400"
            }`}
            onClick={() => setMode("ingredients")}
          >
            Ingredients
          </button>
          <button
            type="button"
            className={`rounded-full px-3 py-1 text-xs sm:text-sm ${
              mode === "random" ?
                "bg-[var(--pastel-brown)]/30 font-semibold"
              : "text-gray-400"
            }`}
            onClick={() => setMode("random")}
          >
            Random
          </button>
        </div>

        <Tooltip
          text={user ? "View saved recipes" : "Log in to view saved recipes"}
        >
          <button
            type="button"
            className={`${user ? "cursor-pointer" : "cursor-not-allowed"} shrink-0 px-1 text-3xl saturate-0 hover:saturate-100 sm:text-4xl md:text-5xl`}
            onClick={user ? handleViewSavedRecipes : undefined}
          >
            <Star
              strokeWidth={1}
              className={`w-6 h-6 sm:w-8 sm:h-8 shrink-0 ${user ? "fill-yellow-300 stroke-yellow-300" : ""}`}
            />
          </button>
        </Tooltip>
      </div>

      {mode === "ingredients" && (
        <>
          <div className="flex flex-col items-center">
            <Icon
              type="ingredients"
              className="w-8 h-8 sm:w-12 sm:h-12 mb-4 text-pastel-blue"
            />

            <div
              ref={searchWrapperRef}
              className="relative flex flex-col items-center"
            >
              <div className="max-w-full flex items-center gap-4">
                {selectedIngredients.length > 0 && (
                  <Tooltip text="Clear selected ingredients">
                    <button
                      type="button"
                      className="shrink-0 cursor-pointer text-3xl text-gray-400 hover:text-red-400 sm:text-4xl md:text-5xl"
                      onClick={() => setSelectedIngredients([])}
                    >
                      <RefreshCcw
                        strokeWidth={1.5}
                        className="w-6 h-6 sm:w-8 sm:h-8 shrink-0"
                      />
                    </button>
                  </Tooltip>
                )}

                <SearchInput
                  ingredients={ingredients}
                  showIngredientsList={showIngredientsList}
                  setShowIngredientsList={setShowIngredientsList}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  setFocusedIngredientIndex={setFocusedIngredientIndex}
                  searchInputRef={searchInputRef}
                  ingredientRefs={ingredientRefs}
                  handleSelectIngredient={handleSelectIngredient}
                />

                {selectedIngredients.length > 0 && (
                  <Tooltip text="Submit recipe search">
                    <button
                      type="button"
                      className="shrink-0 cursor-pointer px-1 text-3xl saturate-0 hover:saturate-100 sm:text-4xl md:text-5xl"
                      onClick={() => handleSearchRecipes(selectedIngredients)}
                    >
                      <Icon
                        className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
                        type="recipe-book"
                      />
                    </button>
                  </Tooltip>
                )}
              </div>

              {showIngredientsList && (
                <IngredientsList
                  ingredients={ingredients}
                  setShowIngredientsList={setShowIngredientsList}
                  selectedIngredients={selectedIngredients}
                  isLoadingIngredientsList={isLoadingIngredientsList}
                  setFocusedIngredientIndex={setFocusedIngredientIndex}
                  ingredientRefs={ingredientRefs}
                  handleSelectIngredient={handleSelectIngredient}
                />
              )}
            </div>
          </div>

          <SelectedIngredients
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
        </>
      )}

      {mode === "random" && (
        <RandomRecipeFilters
          setRecipesData={setRecipesData}
          setIsLoadingRecipes={setIsLoadingRecipes}
          setErrorFetchingRecipes={setErrorFetchingRecipes}
        />
      )}
    </section>
  );
};

export default Search;
```

- [ ] **Step 4: Typecheck, lint, build**

Run: `npx tsc --noEmit && npm run lint && npm run build`
Expected: all three pass with no new errors.

- [ ] **Step 5: Manually verify the full flow**

Run: `npm run dev`, open the app in a browser, then:

1. Confirm the sidebar shows "Ingredients" / "Random" tabs, with
   "Ingredients" active by default, and the star ("view saved recipes")
   button is visible in both modes.
2. Click "Random". Confirm the ingredient search UI is hidden and the
   filter picker appears.
3. Type "kosher" in the filter search box. Confirm **two** distinct
   options appear — "Cuisine: Kosher" and "Health: Kosher" — proving the
   key-collision handling from Task 1 actually works end-to-end. Select
   both.
4. Also select one cuisine (e.g. "Cuisine: Italian") and one diet (e.g.
   "Diet: Low-Carb"). Confirm all four show as removable chips.
5. Set "How many to show" to 5. Click **Generate**. Confirm: the loading
   spinner appears, then up to 5 recipe cards render in the grid, and
   "Found 5 recipes!" (or fewer, if the combination has few matches) is
   shown — not a misleadingly large total.
6. Open the browser Network tab, click **Generate** again with the same
   filters. Confirm the returned recipes differ from the previous batch
   (proving randomization survives the full round trip), and confirm no
   "load more"/infinite-scroll sentinel triggers (there should be no
   further network calls from scrolling, since `random=true` responses
   have no next link).
7. Click the star on one of the generated recipes. Confirm it saves
   successfully (reusing existing `StarIcon` behavior unmodified).
8. Click "Ingredients" again. Confirm the ingredient search UI returns
   exactly as it was before, with any previously-selected ingredients
   still intact.
9. Remove a filter chip by clicking it. Confirm it's removed from the
   selection and the Generate button re-disables if zero filters remain.

- [ ] **Step 6: Commit**

```bash
git add src/components/SearchAndRecipes/Search
git commit -m "Add random recipe generator UI and sidebar mode switcher"
```
