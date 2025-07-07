"use client";

import { User } from "@supabase/supabase-js";
import { RefreshCcw, SearchIcon, Star } from "lucide-react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Icon from "@components/Icon";
import EllipsisLoader from "@components/loaders/Ellipsis";
import Tooltip from "@components/Tooltip";
import ingredientsList from "@data/ingredients.json";
import { Hit, RecipeData } from "@interfaces/edamam";
import { debounce } from "@utils/index";

const DEFAULT_INGREDIENTS_LIST = {
  all: ingredientsList,
  filtered: ingredientsList,
};

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

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!showIngredientsList) setShowIngredientsList(true);
    const { value } = e.currentTarget;
    setSearchInput(value);
  };

  const handleSearchFocusAndClick = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    handleSearchInputChange(e as React.ChangeEvent<HTMLInputElement>);
    setShowIngredientsList(true);
  };

  const handleSearchInputKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter": {
        const searchInputValue = searchInput.trim().toLowerCase();
        if (searchInputValue) handleSelectIngredient(searchInputValue);
        break;
      }
      case "ArrowUp":
      case "ArrowLeft": {
        const lastIndexInList = ingredients.filtered.length - 1;

        setFocusedIngredientIndex(lastIndexInList);
        ingredientRefs?.current[lastIndexInList]?.focus();
        break;
      }
      case "ArrowDown":
      case "ArrowRight":
        setFocusedIngredientIndex(0);
        ingredientRefs?.current[0]?.focus();
        break;
      case "Escape":
        setShowIngredientsList(false);
        setFocusedIngredientIndex(0);
        break;
      default:
        break;
    }
  };

  const handleIngredientsListKeyDown = (
    e: React.KeyboardEvent,
    ingredient: string,
  ) => {
    switch (e.key) {
      case "Enter":
      case " ":
        handleSelectIngredient(ingredient);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        setFocusedIngredientIndex((prevIndex) => {
          const nextIndex =
            prevIndex === 0 ? ingredients.filtered.length - 1 : prevIndex - 1;
          ingredientRefs.current[nextIndex]?.focus();
          return nextIndex;
        });
        break;
      case "ArrowDown":
      case "ArrowRight":
        setFocusedIngredientIndex((prevIndex) => {
          const nextIndex =
            prevIndex + 1 === ingredients.filtered.length ? 0 : prevIndex + 1;
          ingredientRefs.current[nextIndex]?.focus();
          return nextIndex;
        });
        break;
      case "Escape":
        setShowIngredientsList(false);
        setFocusedIngredientIndex(0);
        break;
      default:
        break;
    }
  };

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

            <Tooltip
              text="Select from the list below or type a custom ingredient and press enter"
              isVisible={showIngredientsList}
              delay={150}
            >
              <div className="relative flex-grow">
                <input
                  ref={searchInputRef}
                  className={`
                    h-10 max-w-[7.5rem] sm:h-12 md:max-w-[8.5rem] md:h-14
                    rounded-full border-1
                    py-4 pl-6 pr-12
                    text-[0.65rem] sm:text-xs md:text-sm lg:text-base
                    outline-none duration-300 ease-in-out
                    focus:max-w-[10rem] focus:border-[var(--pastel-blue)]
                  `}
                  type="text"
                  value={searchInput}
                  placeholder="Search"
                  onChange={handleSearchInputChange}
                  onFocus={handleSearchFocusAndClick}
                  onKeyDown={handleSearchInputKeyDown}
                />
                <SearchIcon
                  strokeWidth={1.5}
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-gray-400"
                />
              </div>
            </Tooltip>

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

            <Tooltip
              text={
                user ? "View saved recipes" : "Log in to view saved recipes"
              }
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

          {showIngredientsList && (
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
              {ingredients.filtered.length === 0 && (
                <div>
                  No matching ingredients found. Press enter to add this custom
                  ingredient to your list.
                </div>
              )}

              {isLoadingIngredientsList && <EllipsisLoader />}

              {!isLoadingIngredientsList &&
                ingredients.filtered.length > 0 &&
                ingredients.filtered.map((ingredient, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      ingredientRefs.current[index] = el;
                    }}
                    role="button"
                    className={`rounded-lg p-1 lowercase outline-none ${
                      (
                        selectedIngredients.some(
                          (ingred) => ingred === ingredient,
                        )
                      ) ?
                        "cursor-default italic text-gray-400"
                      : "cursor-pointer hover:bg-pastel-brown/35 focus:border-2 focus:border-pastel-brown focus:bg-pastel-brown/35"
                    }`}
                    onClick={() => handleSelectIngredient(ingredient)}
                    onKeyDown={(e) =>
                      handleIngredientsListKeyDown(e, ingredient)
                    }
                    tabIndex={0}
                  >
                    {ingredient}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className="h-full mt-4 flex flex-col items-center sm:h-3/5 lg:h-4/5">
        <h2 className="text-xs sm:text-sm md:text-base">
          Selected Ingredients:
        </h2>
        <div className="my-2 flex flex-wrap justify-center gap-2 overflow-auto">
          {selectedIngredients.map((ingredient, index) => (
            <button
              key={index}
              type="button"
              className="group flex items-center rounded bg-blue-100 px-2 py-1 text-xs"
              onClick={() =>
                setSelectedIngredients((prev) =>
                  prev.filter((ingred) => ingred !== ingredient),
                )
              }
            >
              <span className="font-semibold lowercase text-blue-800 group-hover:text-red-400 text-[0.65rem] sm:text-xs">
                {ingredient}
              </span>
              <span className="ml-2 text-xl text-blue-500 group-hover:font-semibold group-hover:text-red-400">
                ×
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
