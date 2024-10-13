"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import Icon from "@components/icon";
import EllipsisLoader from "@components/loaders/ellipsis";
import Tooltip from "@components/tooltip";
import { Ingredient } from "@config";
import { INGREDIENTS } from "@ingredients";
import { Hit, RecipeData } from "@interfaces/edamam";
import { debounce } from "@utils/index";

const DEFAULT_INGREDIENTS_LIST = {
  all: INGREDIENTS,
  filtered: INGREDIENTS,
};

interface SearchProps {
  user: any;
  savedRecipes: Hit[];
  setRecipesData: React.Dispatch<React.SetStateAction<RecipeData | null>>;
  setIsLoadingRecipes: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorFetchingRecipes: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search: React.FC<SearchProps> = ({
  user,
  savedRecipes,
  setRecipesData,
  setIsLoadingRecipes,
  setErrorFetchingRecipes,
}) => {
  const [ingredients, setIngredients] = useState<{
    all: Ingredient[] | [];
    filtered: Ingredient[] | [];
  }>(DEFAULT_INGREDIENTS_LIST);
  const [showIngredientsList, setShowIngredientsList] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<
    Ingredient[] | []
  >([]);
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
        ingredient.name.toUpperCase().includes(formattedSearchValue),
      );
      setIngredients((prev) => ({
        ...prev,
        filtered: filteredIngredientsList,
      }));

      setIsLoadingIngredientsList(false);
    },
    [ingredients.all],
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
    const debouncedFilter = debounce(filterIngredients, 300);

    if (searchInput.trim()) {
      setIsLoadingIngredientsList(true);
      debouncedFilter(searchInput);
    } else {
      setIngredients(DEFAULT_INGREDIENTS_LIST);
      setIsLoadingIngredientsList(false);
    }

    return () => debouncedFilter.cancel();
  }, [searchInput, ingredients.all, filterIngredients]);

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
        const formattedSearchInputValue: Ingredient = {
          name: searchInputValue,
          categories: [],
        };
        if (searchInputValue) handleSelectIngredient(formattedSearchInputValue);
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
    ingredient: Ingredient,
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

  const handleSelectIngredient = (ingredient: Ingredient) => {
    if (selectedIngredients.some((ingred) => ingred.name === ingredient.name))
      return;
    setSelectedIngredients((prev) => [...prev, ingredient]);
    searchInputRef.current?.focus();
    setSearchInput("");
  };

  const handleSearchRecipes = async (selectedIngreds: Ingredient[]) => {
    const ingredientsQuery = selectedIngreds.map((ingr) => ingr.name).join(",");
    setIsLoadingRecipes(true);
    const edamamResponse = await fetch(
      `/api/edamam?ingredients=${ingredientsQuery}`,
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
    <section className="flex h-1/3 max-h-full flex-col items-center border-0 lg:h-full lg:w-1/3 lg:rounded-lg lg:border-2 lg:border-gray-200/70 lg:p-4">
      <div className="flex flex-col items-center">
        <Icon
          type="ingredients"
          className="mb-4 text-2xl text-pastel-blue sm:text-5xl"
        />

        <div
          ref={searchWrapperRef}
          className="relative flex flex-col items-center"
        >
          <div className="flex items-center gap-4">
            {selectedIngredients.length > 0 && (
              <Tooltip text="Clear selected ingredients">
                <button
                  type="button"
                  className="cursor-pointer text-3xl text-gray-400 hover:text-red-400 sm:text-4xl md:text-5xl"
                  onClick={() => setSelectedIngredients([])}
                >
                  <Icon type="reset" />
                </button>
              </Tooltip>
            )}

            <div className="relative">
              <input
                ref={searchInputRef}
                className="h-10 w-32 rounded-full border-2 py-4 pl-6 pr-12 text-xs outline-none duration-300 ease-in-out focus:w-40 focus:border-pastel-blue sm:h-12 sm:w-40 sm:text-sm sm:focus:w-52 md:h-14 md:text-base"
                type="text"
                value={searchInput}
                placeholder="Search"
                onChange={handleSearchInputChange}
                onFocus={handleSearchFocusAndClick}
                onKeyDown={handleSearchInputKeyDown}
              />
              <Icon
                type="search"
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-gray-400"
              />
            </div>

            {selectedIngredients.length > 0 && (
              <Tooltip text="Submit recipe search">
                <button
                  type="button"
                  className="cursor-pointer px-1 text-3xl saturate-0 hover:saturate-100 sm:text-4xl md:text-5xl"
                  onClick={() => handleSearchRecipes(selectedIngredients)}
                >
                  <Icon type="recipe-book" />
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
                className={`${user ? "cursor-pointer" : "cursor-not-allowed"} px-1 text-3xl saturate-0 hover:saturate-100 sm:text-4xl md:text-5xl`}
                onClick={user ? handleViewSavedRecipes : undefined}
              >
                <Icon type={user ? "star-filled" : "star-outline"} />
              </button>
            </Tooltip>
          </div>

          {showIngredientsList && (
            <div className="absolute top-full z-10 mt-1 h-40 w-80 overflow-auto rounded-lg bg-pastel-brown/25 p-4 text-sm backdrop-blur-lg sm:h-80 lg:w-64 xl:w-72 2xl:w-96">
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
                          (ingred) => ingred.name === ingredient.name,
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
                    {ingredient.name}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex h-2/5 flex-col items-center sm:h-3/5 lg:h-4/5">
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
              <span className="font-semibold lowercase text-blue-800 group-hover:text-red-400">
                {ingredient.name}
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
