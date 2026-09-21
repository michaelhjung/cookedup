"use client";

import { User } from "@supabase/supabase-js";
import { Dices, Star } from "lucide-react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Tooltip from "@components/Tooltip";
import { useAuth } from "@context/AuthContext";
import { buildSearchParams } from "@data/randomRecipeFilters";
import { Hit, RecipeData } from "@interfaces/edamam";
import { Ingredient, searchIngredients } from "@lib/ingredients";
import { debounce } from "@utils/index";

import FilterCategories from "./FilterCategories";
import IngredientsList from "./IngredientsList";
import SearchInput from "./SearchInput";
import SelectedIngredients from "./SelectedIngredients";

const ALL_INGREDIENTS = searchIngredients("");

// How long the "Surprise me" highlight stays on a card before fading.
const HIGHLIGHT_DURATION_MS = 2500;

type RecipesSource = "ingredients" | "filter" | "saved" | null;

interface SearchProps {
  user: User | null;
  savedRecipes: Hit[];
  // Owned by SearchAndRecipes so the results area's empty state can
  // add example ingredients to the search as well.
  selectedIngredients: string[];
  setSelectedIngredients: React.Dispatch<React.SetStateAction<string[]>>;
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
  // Fired once a search (or the saved view) has put results on screen,
  // so the parent can tuck this sidebar away on phones.
  onResultsLoaded: () => void;
  /**
   * Bumped by the parent once it has seeded `selectedIngredients` from
   * the URL (arriving from the pantry), to run the search unprompted.
   */
  autoSearchToken: number;
}

const Search: React.FC<SearchProps> = ({
  user,
  savedRecipes,
  selectedIngredients,
  setSelectedIngredients,
  recipesData,
  setRecipesData,
  setIsLoadingRecipes,
  setErrorFetchingRecipes,
  setRecipesSource,
  setActiveFilterKeys,
  setFilterGeneration,
  setHighlightedRecipeUrl,
  isSidebarOpen,
  onResultsLoaded,
  autoSearchToken,
}) => {
  const { openAuthModal } = useAuth();
  const [filteredIngredients, setFilteredIngredients] =
    useState<Ingredient[]>(ALL_INGREDIENTS);
  const [showIngredientsList, setShowIngredientsList] = useState(false);
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

  const filterIngredients = useCallback((searchValue: string) => {
    setFilteredIngredients(searchIngredients(searchValue));
    setIsLoadingIngredientsList(false);
  }, []);

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
      setFilteredIngredients(ALL_INGREDIENTS);
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
        onResultsLoaded();
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
        onResultsLoaded();
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

  // The parent seeds the ingredients and bumps the token in the same
  // render, so by the time this effect runs the closure already sees
  // them.
  const handleSearchRef = useRef(handleSearch);
  handleSearchRef.current = handleSearch;
  useEffect(() => {
    if (autoSearchToken === 0) return;
    handleSearchRef.current();
  }, [autoSearchToken]);

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
      openAuthModal();
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
      onResultsLoaded();
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
        border-line lg:border-r
        pt-4 lg:py-5 lg:pr-6 lg:pl-14
        ${isSidebarOpen ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="mb-3 flex w-full items-center justify-between gap-2">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
          Ingredients
        </h2>

        <Tooltip
          text={user ? "View saved recipes" : "Sign in to view saved recipes"}
          position="bottom"
          align="end"
        >
          <button
            type="button"
            aria-label="View saved recipes"
            className={`
              -mr-2 flex size-8 items-center justify-center rounded-md
              transition-colors hover:bg-well
              ${user ? "text-accent" : "text-ink-muted/50"}
            `}
            onClick={handleViewSavedRecipes}
          >
            <Star
              strokeWidth={2}
              className={`size-4 ${user ? "fill-accent" : ""}`}
            />
          </button>
        </Tooltip>
      </div>

      <div className="flex flex-col gap-3">
        <SelectedIngredients
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />

        <div
          ref={searchWrapperRef}
          className="relative w-full"
        >
          <SearchInput
            ingredients={filteredIngredients}
            showIngredientsList={showIngredientsList}
            setShowIngredientsList={setShowIngredientsList}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setFocusedIngredientIndex={setFocusedIngredientIndex}
            searchInputRef={searchInputRef}
            ingredientRefs={ingredientRefs}
            handleSelectIngredient={handleSelectIngredient}
            hasSelection={hasSelection}
            onSearch={handleSearch}
          />

          {showIngredientsList && (
            <IngredientsList
              ingredients={filteredIngredients}
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
      <div className="mt-5 min-h-0 w-full flex-1 overflow-y-auto">
        <FilterCategories
          selectedKeys={selectedFilterKeys}
          onToggle={toggleFilterKey}
        />
      </div>

      {/* Search is the primary action, so it gets the full row; Reset
          and Surprise me share the quieter row beneath it. */}
      <div className="mt-4 flex w-full shrink-0 flex-col gap-2 border-t border-line pt-4">
        <button
          type="button"
          disabled={!hasSelection || isSearching}
          className={`
            h-9 w-full rounded-md text-sm font-semibold
            transition-colors
            ${
              !hasSelection || isSearching ?
                "cursor-not-allowed bg-well text-ink-muted/60"
              : "cursor-pointer bg-accent text-on-accent hover:bg-accent-hover"
            }
          `}
          onClick={handleSearch}
        >
          {isSearching ? "Searching…" : "Search"}
        </button>

        <div className="flex w-full items-center gap-2">
          <button
            type="button"
            disabled={!hasSelection}
            className={`
              h-8 shrink-0 rounded-md px-3 text-[13px] font-medium
              transition-colors
              ${
                !hasSelection ?
                  "cursor-not-allowed text-ink-muted/50"
                : "cursor-pointer text-ink-muted hover:bg-well hover:text-ink"
              }
            `}
            onClick={handleReset}
          >
            Reset
          </button>

          {/* The one deliberately playful button: the dice tilt on hover. */}
          <button
            type="button"
            disabled={!hasLoadedRecipes}
            title="Pick one of the loaded recipes at random"
            className={`
              group flex h-8 flex-1 items-center justify-center gap-1.5 rounded-md border text-[13px] font-medium
              transition-colors
              ${
                !hasLoadedRecipes ?
                  "cursor-not-allowed border-transparent text-ink-muted/50"
                : "cursor-pointer border-line bg-surface-raised text-ink hover:border-line-strong"
              }
            `}
            onClick={handlePickRandomLoaded}
          >
            <Dices className="size-4 transition-transform group-hover:-rotate-12 group-disabled:rotate-0" />
            Surprise me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
