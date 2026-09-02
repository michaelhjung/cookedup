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

type SearchMode = "ingredients" | "filter";
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
    setHighlightedRecipeUrl(null);
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
    setRecipesSource("ingredients");
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

  return (
    <section
      className={`
        size-full flex flex-col
        transition-opacity duration-300 ease-in-out
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
              mode === "filter" ?
                "bg-[var(--pastel-brown)]/30 font-semibold"
              : "text-gray-400"
            }`}
            onClick={() => setMode("filter")}
          >
            Filter
          </button>
        </div>

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

      {mode === "filter" && (
        // Unlike the ingredients-mode block above (which never overflows
        // its container), the per-category checkbox sections here can
        // comfortably exceed the sidebar's height. This wrapper is a
        // flex-1 child of the section's flex column so it fills the
        // remaining space and scrolls internally, rather than being
        // silently clipped by the sidebar wrapper's `lg:overflow-hidden`
        // (src/components/SearchAndRecipes/index.tsx) further up.
        <div className="min-h-0 w-full flex-1 overflow-y-auto">
          <RandomRecipeFilters
            recipesData={recipesData}
            setRecipesData={setRecipesData}
            setIsLoadingRecipes={setIsLoadingRecipes}
            setErrorFetchingRecipes={setErrorFetchingRecipes}
            setRecipesSource={setRecipesSource}
            setActiveFilterKeys={setActiveFilterKeys}
            setFilterGeneration={setFilterGeneration}
            setHighlightedRecipeUrl={setHighlightedRecipeUrl}
          />
        </div>
      )}
    </section>
  );
};

export default Search;
