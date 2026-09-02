"use client";

import { User } from "@supabase/supabase-js";
import { Star } from "lucide-react";
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
import { buildSearchParams } from "@data/randomRecipeFilters";
import { Hit, RecipeData } from "@interfaces/edamam";
import { debounce } from "@utils/index";

import FilterCategories from "./FilterCategories";
import IngredientsList from "./IngredientsList";
import SearchInput from "./SearchInput";
import SelectedIngredients from "./SelectedIngredients";

const DEFAULT_INGREDIENTS_LIST = {
  all: ingredientsList,
  filtered: ingredientsList,
};

// How long the "Pick one for me" highlight stays on a card before fading.
const HIGHLIGHT_DURATION_MS = 2500;

type RecipesSource = "ingredients" | "filter" | "saved" | null;

interface SearchProps {
  user: User | null;
  savedRecipes: Hit[];
  recipesData: RecipeData | null;
  setRecipesData: React.Dispatch<React.SetStateAction<RecipeData | null>>;
  setIsLoadingRecipes: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorFetchingRecipes: React.Dispatch<React.SetStateAction<boolean>>;
  setRecipesSource: React.Dispatch<React.SetStateAction<RecipesSource>>;
  setActiveFilterKeys: React.Dispatch<React.SetStateAction<string[]>>;
  setFilterGeneration: React.Dispatch<React.SetStateAction<number>>;
  setHighlightedRecipeUrl: React.Dispatch<React.SetStateAction<string | null>>;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Search: React.FC<SearchProps> = ({
  user,
  savedRecipes,
  recipesData,
  setRecipesData,
  setIsLoadingRecipes,
  setErrorFetchingRecipes,
  setRecipesSource,
  setActiveFilterKeys,
  setFilterGeneration,
  setHighlightedRecipeUrl,
  isSidebarOpen,
}) => {
  const [ingredients, setIngredients] = useState<{
    all: string[] | [];
    filtered: string[] | [];
  }>(DEFAULT_INGREDIENTS_LIST);
  const [showIngredientsList, setShowIngredientsList] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<string[] | []>(
    [],
  );
  const [selectedFilterKeys, setSelectedFilterKeys] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoadingIngredientsList, setIsLoadingIngredientsList] =
    useState(false);
  const [_focusedIngredientIndex, setFocusedIngredientIndex] =
    useState<number>(0);
  const [isSearching, setIsSearching] = useState(false);

  const searchWrapperRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const ingredientRefs = useRef<(HTMLDivElement | null)[]>([]);
  const highlightTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

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

  useEffect(() => {
    return () => {
      if (highlightTimeoutRef.current)
        clearTimeout(highlightTimeoutRef.current);
    };
  }, []);

  const handleSelectIngredient = (ingredient: string) => {
    if (selectedIngredients.some((ingred) => ingred === ingredient)) return;
    setSelectedIngredients((prev) => [...prev, ingredient]);
    searchInputRef.current?.focus();
    setSearchInput("");
  };

  const toggleFilterKey = (key: string) => {
    setSelectedFilterKeys((prev) =>
      prev.includes(key) ?
        prev.filter((selectedKey) => selectedKey !== key)
      : [...prev, key],
    );
  };

  const hasSelection =
    selectedIngredients.length > 0 || selectedFilterKeys.length > 0;

  const handleReset = () => {
    setSelectedIngredients([]);
    setSelectedFilterKeys([]);
    setSearchInput("");
  };

  const handleSearch = async () => {
    if (!hasSelection || isSearching) return;

    const hasIngredients = selectedIngredients.length > 0;
    const params = buildSearchParams(selectedIngredients, selectedFilterKeys);

    try {
      setIsSearching(true);
      setIsLoadingRecipes(true);
      setHighlightedRecipeUrl(null);
      const response = await fetch(`/api/edamam?${params.toString()}`);
      if (!response.ok) throw new Error("Failed to search recipes.");

      const data: RecipeData = await response.json();
      setErrorFetchingRecipes(false);

      if (hasIngredients) {
        // Real Edamam cursor pagination — Recipes' ingredients-mode
        // scroll loader follows `_links.next.href` as-is.
        setRecipesData(data);
        setRecipesSource("ingredients");
      } else {
        // Filters-only random draw: no real cursor (`_links.next` is
        // always absent from Edamam for `random=true`), so `_links` is
        // cleared — "load more" is handled by Recipes' filter-mode
        // redraw+dedupe loader instead. `count`/`to` are left exactly as
        // Edamam returned them (the true total match count for these
        // filters), matching how an ingredients search already shows
        // its real total rather than just what's loaded so far.
        setRecipesData({ ...data, _links: undefined });
        setActiveFilterKeys(selectedFilterKeys);
        setFilterGeneration((prev) => prev + 1);
        setRecipesSource("filter");
      }
    } catch (error) {
      console.error("An error occurred while searching recipes:", error);
      setRecipesData(null);
      setErrorFetchingRecipes(true);
    } finally {
      setIsLoadingRecipes(false);
      setIsSearching(false);
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

  const handleViewSavedRecipes = async () => {
    if (!user) {
      alert("You need to be logged in to view saved recipes.");
      return;
    }

    try {
      setIsLoadingRecipes(true);
      setHighlightedRecipeUrl(null);
      setRecipesData({
        from: 1,
        to: 1,
        count: savedRecipes.length,
        _links: undefined,
        hits: savedRecipes,
      });
      setRecipesSource("saved");
      setIsLoadingRecipes(false);
      setErrorFetchingRecipes(false);
    } catch (err) {
      console.error("An error occurred while fetching saved recipes:", err);
      setIsLoadingRecipes(false);
      setErrorFetchingRecipes(true);
    }
  };

  const hasLoadedRecipes = !!recipesData?.hits?.length;

  return (
    // `lg:pl-14` (vs. the `lg:pr-4` on the other side) gives extra left
    // clearance so the fixed sidebar-toggle button — 38px wide, centered
    // at the viewport's vertical middle — never overlaps this section's
    // own content, regardless of scroll position.
    //
    // `overflow-y-auto` (at every breakpoint, not just lg) is what keeps
    // this section's own content inside its own box. The parent wrapper
    // (SearchAndRecipes/index.tsx) only clips overflow at `lg:` and up —
    // below that, with a lot of ingredients selected, the ingredient
    // chips can grow tall enough that the fixed-height siblings (chips +
    // input + the pinned action-button row) outgrow this section's
    // `max-h-1/2`-of-viewport allowance. Without this, that overflow
    // doesn't get clipped or scrolled — it just bleeds straight past the
    // section's box and visually overlaps the Recipes content rendered
    // right below it. Scrolling the whole sidebar in that edge case is
    // the fallback; in the common case there's nothing to scroll and
    // this is a no-op.
    <section
      className={`
        size-full flex flex-col
        overflow-y-auto
        transition-opacity duration-300 ease-in-out
        border-zinc-500/10 rounded-md lg:border-y-2 lg:border-l-0 lg:border-r-2
        lg:py-4 lg:pr-4 lg:pl-14
        ${isSidebarOpen ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="mb-4 flex w-full items-center justify-end gap-2">
        <Tooltip
          text={user ? "View saved recipes" : "Log in to view saved recipes"}
          position="bottom"
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

      <div className="flex flex-col items-center gap-3">
        <Icon
          type="ingredients"
          className="w-8 h-8 sm:w-12 sm:h-12 text-pastel-blue"
        />

        <SelectedIngredients
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />

        <div
          ref={searchWrapperRef}
          className="relative flex flex-col items-center"
        >
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

      {/* The filter categories get their own scrollable region rather
          than being silently clipped by the sidebar wrapper's
          `lg:overflow-hidden` (src/components/SearchAndRecipes/index.tsx)
          further up. The ingredient picker above stays outside this
          wrapper on purpose — its dropdown is absolutely positioned, and
          nesting it inside a scroll container risks the dropdown needing
          its own scroll to reach instead of just appearing.

          The action buttons below live *outside* this scrollable region,
          as their own `shrink-0` flex item, so they stay pinned at the
          bottom of the sidebar and reachable no matter how long the
          ingredient/filter selection grows, instead of scrolling out of
          view along with the filters. */}
      <div className="mt-4 min-h-0 w-full flex-1 overflow-y-auto">
        <FilterCategories
          selectedKeys={selectedFilterKeys}
          onToggle={toggleFilterKey}
        />
      </div>

      {/* Three-tier visual weight so the buttons read by role, not just
          by label: Search is the primary action (solid, larger, bolder,
          with a shadow) since it's what most selections are working
          toward; Reset is the quiet secondary action (outline only,
          reddens on hover as a subtle "this clears things" cue); Pick
          one for me is a distinct accent color so it doesn't read as a
          sibling of Search, just a smaller fun extra. */}
      <div className="mt-3 flex shrink-0 flex-wrap items-center justify-center gap-2 border-t border-zinc-500/10 pt-3">
        <button
          type="button"
          disabled={!hasSelection}
          className={`
            rounded-3xl border px-4 py-2 text-xs sm:text-sm
            transition-all
            ${
              !hasSelection ?
                "cursor-not-allowed border-transparent bg-[var(--pastel-brown)]/10 text-gray-400"
              : "cursor-pointer border-zinc-400/50 text-gray-500 hover:scale-105 hover:border-red-400 hover:text-red-400"
            }
          `}
          onClick={handleReset}
        >
          Reset
        </button>

        <button
          type="button"
          disabled={!hasSelection || isSearching}
          className={`
            rounded-3xl px-6 py-2.5 text-sm font-semibold sm:text-base
            transition-all
            ${
              !hasSelection || isSearching ?
                "cursor-not-allowed bg-[var(--pastel-brown)]/10 text-gray-400"
              : "cursor-pointer bg-[var(--pastel-blue)] text-blue-900 shadow-md hover:scale-105 hover:shadow-lg"
            }
          `}
          onClick={handleSearch}
        >
          Search
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
              : "cursor-pointer bg-[var(--pastel-orange)]/70 text-orange-900 hover:scale-105"
            }
          `}
          onClick={handlePickRandomLoaded}
        >
          🎲 Pick one for me
        </button>
      </div>
    </section>
  );
};

export default Search;
