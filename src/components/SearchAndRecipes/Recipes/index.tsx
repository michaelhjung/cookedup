import { User } from "@supabase/supabase-js";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import Bowl from "@components/loaders/Bowl";
import { buildRandomRecipeSearchParams } from "@data/randomRecipeFilters";
import { Hit, RecipeData } from "@interfaces/edamam";
import chefConfusedImg from "@public/imgs/chef-confused.png";
import chefBulb from "@public/logo.png";

import RecipeCard from "./RecipeCard";

// Shown as one-click starters in the empty state so a first visit can
// produce results without typing anything.
const EXAMPLE_INGREDIENTS = ["chicken", "eggs", "rice", "tomato", "garlic"];

const HOW_IT_WORKS = [
  "Add ingredients",
  "Search or filter",
  "Save or plan your week",
];

type RecipesSource = "ingredients" | "filter" | "saved" | null;

// Safety valve for filter mode: each scroll-triggered "load more" is a
// live Edamam call (random mode has no real cursor, so it's a fresh draw
// every time). Cap total accumulated hits so an unusually large or
// diverse filter combination can't auto-fire calls indefinitely while
// the user scrolls.
const MAX_FILTER_RECIPES = 200;
// How many consecutive random draws must come back with zero recipes not
// already shown before we conclude this filter combination is exhausted
// and stop auto-loading. >1 tolerates the normal case where a draw
// returns some overlap but still has a few new recipes mixed in.
const MAX_CONSECUTIVE_EMPTY_DRAWS = 3;

interface RecipesProps {
  user: User | null;
  savedRecipes: Hit[];
  setSavedRecipes: React.Dispatch<React.SetStateAction<Hit[]>>;
  recipesData: RecipeData | null;
  setRecipesData: React.Dispatch<React.SetStateAction<RecipeData | null>>;
  isLoadingRecipes: boolean;
  setIsLoadingRecipes: React.Dispatch<React.SetStateAction<boolean>>;
  errorFetchingRecipes: boolean;
  setErrorFetchingRecipes: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
  recipesSource: RecipesSource;
  activeFilterKeys: string[];
  filterGeneration: number;
  highlightedRecipeUrl: string | null;
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onAddIngredient: (_ingredient: string) => void;
}

const Recipes: React.FC<RecipesProps> = ({
  user,
  savedRecipes,
  setSavedRecipes,
  recipesData,
  setRecipesData,
  isLoadingRecipes,
  setIsLoadingRecipes,
  errorFetchingRecipes,
  setErrorFetchingRecipes,
  isSidebarOpen,
  recipesSource,
  activeFilterKeys,
  filterGeneration,
  highlightedRecipeUrl,
  onAddIngredient,
}) => {
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const loadMoreSentinelRef = useRef<HTMLDivElement | null>(null);
  const consecutiveEmptyDrawsRef = useRef(0);
  const [hasMoreFilterDraws, setHasMoreFilterDraws] = useState(true);

  // A fresh Generate/regenerate click (even with unchanged filters)
  // bumps `filterGeneration`, which should always restart the
  // exhausted-draws tracking for the new batch.
  useEffect(() => {
    consecutiveEmptyDrawsRef.current = 0;
    setHasMoreFilterDraws(true);
  }, [filterGeneration]);

  const loadMoreRecipes = async () => {
    if (!recipesData) return;

    const nextLink = recipesData?._links?.next?.href;
    if (!nextLink) return;

    try {
      setIsLoadingRecipes(true);
      // Proxied through our own API route (instead of fetching Edamam's
      // link directly) so our app_id/app_key never reach the browser.
      const nextRecipesPageResponse = await fetch(
        `/api/edamam?nextPage=${encodeURIComponent(nextLink)}`,
      );
      if (!nextRecipesPageResponse.ok)
        throw new Error("No aditional recipes found.");

      const nextRecipesPageData: RecipeData =
        await nextRecipesPageResponse.json();
      setRecipesData((prev) => {
        if (!prev) return null;

        return {
          ...prev,
          to: nextRecipesPageData.to,
          count: nextRecipesPageData.count,
          _links: {
            ...prev?._links,
            next: nextRecipesPageData._links?.next,
          },
          hits: [...(prev?.hits || []), ...nextRecipesPageData.hits],
        };
      });
    } catch (_error) {
      setErrorFetchingRecipes(true);
    } finally {
      setIsLoadingRecipes(false);
    }
  };

  // Filter mode has no real cursor — Edamam's `random=true` omits
  // `_links.next` entirely (confirmed by live-testing against the API).
  // "Load more" here means: draw again with the same filters, and keep
  // only recipes not already shown.
  const loadMoreFilterRecipes = async () => {
    if (!recipesData || activeFilterKeys.length === 0) return;
    if (recipesData.hits.length >= MAX_FILTER_RECIPES) {
      setHasMoreFilterDraws(false);
      return;
    }

    try {
      setIsLoadingRecipes(true);
      const params = buildRandomRecipeSearchParams(activeFilterKeys);
      const response = await fetch(`/api/edamam?${params.toString()}`);
      if (!response.ok) throw new Error("Failed to load more recipes.");

      const data: RecipeData = await response.json();
      const existingUrls = new Set(
        recipesData.hits.map((hit) => hit.recipe.url),
      );
      const newHits = data.hits.filter(
        (hit) => !existingUrls.has(hit.recipe.url),
      );

      if (newHits.length === 0) {
        consecutiveEmptyDrawsRef.current += 1;
        if (consecutiveEmptyDrawsRef.current >= MAX_CONSECUTIVE_EMPTY_DRAWS)
          setHasMoreFilterDraws(false);
        return;
      }

      consecutiveEmptyDrawsRef.current = 0;
      setRecipesData((prev) => {
        if (!prev) return null;

        // `count`/`to` are left untouched — they already reflect
        // Edamam's real total match count for these filters (set once,
        // from the initial draw), not how many have been loaded so far.
        return {
          ...prev,
          hits: [...prev.hits, ...newHits],
        };
      });
    } catch (_error) {
      setErrorFetchingRecipes(true);
    } finally {
      setIsLoadingRecipes(false);
    }
  };

  const nextPageHref = recipesData?._links?.next?.href;
  const canLoadMoreIngredients =
    recipesSource === "ingredients" && !!nextPageHref;
  const canLoadMoreFilterRecipes =
    recipesSource === "filter" && hasMoreFilterDraws;
  const canLoadMore = canLoadMoreIngredients || canLoadMoreFilterRecipes;

  // Auto-load more recipes as the sentinel below the recipe grid scrolls
  // near the bottom of the (internally-scrolling) section. Depending on
  // the concrete triggers below (rather than just "is there more") makes
  // sure this re-runs, and re-closes over fresh state, whenever the
  // active search actually changes — including a brand new search or
  // filter draw replacing the results outright.
  useEffect(() => {
    if (!canLoadMore || errorFetchingRecipes) return;

    const sentinel = loadMoreSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || isLoadingRecipes) return;
        if (canLoadMoreIngredients) loadMoreRecipes();
        else if (canLoadMoreFilterRecipes) loadMoreFilterRecipes();
      },
      { root: scrollContainerRef.current, rootMargin: "600px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [
    canLoadMore,
    canLoadMoreIngredients,
    canLoadMoreFilterRecipes,
    errorFetchingRecipes,
    isLoadingRecipes,
  ]);

  return (
    <section
      ref={scrollContainerRef}
      className={`
        size-full flex flex-col grow items-center
        transition-all duration-500 ease-in-out p-4
        overflow-auto
        ${isSidebarOpen ? "" : "pl-8"}
      `}
    >
      <div className="w-full flex flex-col items-center justify-center">
        {/* The empty state doubles as the welcome: what the app does and
            how to get a first result in one click. */}
        {!recipesData?.from && !isLoadingRecipes && (
          <div className="flex max-w-lg flex-col items-center gap-4 pt-4 text-center lg:pt-12">
            {/* The header already shows the bulb on phones, where the
                vertical space matters more. */}
            <Image
              src={chefBulb}
              alt=""
              className="hidden w-20 sm:block"
            />
            <div className="flex flex-col gap-1.5">
              <h2 className="text-lg font-semibold sm:text-2xl">
                What&rsquo;s in your kitchen?
              </h2>
              <p className="max-w-md text-sm text-ink-muted sm:text-base">
                Pick a few ingredients you already have and we&rsquo;ll find
                recipes that use them. Save the keepers and drop them into your
                weekly plan.
              </p>
            </div>

            <ol className="flex flex-col gap-2 text-left text-xs text-ink-muted sm:flex-row sm:gap-5 sm:text-sm">
              {HOW_IT_WORKS.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-pastel-blue-tint text-[0.65rem] font-semibold text-blue-950 dark:text-blue-100">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
              <span className="text-ink-muted">Try:</span>
              {EXAMPLE_INGREDIENTS.map((ingredient) => (
                <button
                  key={ingredient}
                  type="button"
                  onClick={() => onAddIngredient(ingredient)}
                  className="rounded-md border border-line bg-surface-raised px-3 py-1 transition-colors hover:border-pastel-blue hover:bg-pastel-blue-tint"
                >
                  {ingredient}
                </button>
              ))}
            </div>
          </div>
        )}

        {recipesData?.from && recipesData.count === 0 && (
          <div className="my-4 flex flex-col items-center gap-2 text-xs sm:text-sm md:text-base">
            <Image
              src={chefConfusedImg}
              alt="chef confused"
              className="size-24 rounded-md md:size-40 xl:size-48"
            />
            <p className="text-center text-ink-muted">
              No recipes matched. Try a different combination!
            </p>
          </div>
        )}

        {recipesData?.from && recipesData.count > 0 && (
          <>
            <p className="mb-4 text-xs text-ink-muted sm:text-sm md:text-base">
              Found{" "}
              <span className="font-semibold text-ink">
                {recipesData.count.toLocaleString()}
              </span>{" "}
              {recipesData.count > 1 ? "recipes" : "recipe"}
            </p>

            <div className="grid w-full gap-6 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
              {recipesData.hits.map((hit: Hit) => (
                <RecipeCard
                  key={hit.recipe.url}
                  hit={hit}
                  user={user}
                  savedRecipes={savedRecipes}
                  setSavedRecipes={setSavedRecipes}
                  isHighlighted={hit.recipe.url === highlightedRecipeUrl}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {isLoadingRecipes && (
        <div className="mt-5 flex flex-col items-center">
          <Bowl />
          <p className="text-xs text-ink-muted md:text-sm">
            Looking up some recipes...
          </p>
        </div>
      )}

      {errorFetchingRecipes && (
        <p className="mt-5 text-xs text-red-500 md:text-sm">
          Oops! There was an error when searching up recipes... Please try again
          at another time.
        </p>
      )}

      {!errorFetchingRecipes &&
        recipesSource === "filter" &&
        !hasMoreFilterDraws &&
        !!recipesData?.hits?.length &&
        !isLoadingRecipes && (
          <p className="mt-5 text-xs text-ink-muted md:text-sm">
            That&rsquo;s every recipe we could find for these filters — try
            adjusting them for more.
          </p>
        )}

      {/* Invisible trigger for auto-loading more recipes on scroll. */}
      {!errorFetchingRecipes && canLoadMore && (
        <div
          ref={loadMoreSentinelRef}
          className="h-px w-full"
        />
      )}
    </section>
  );
};

export default Recipes;
