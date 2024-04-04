"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Ingredient } from "@/config";
import { INGREDIENTS } from "@/ingredients";
import { debounce } from "@/utils";
import EllipsisLoader from "@/components/loaders/ellipsis";
import Icon from "@/components/icon";
import Tooltip from "../tooltip";

const DEFAULT_INGREDIENTS_LIST = {
  all: INGREDIENTS,
  filtered: INGREDIENTS,
};

const Search = () => {
  const [ingredients, setIngredients] = useState<{
    all: Ingredient[] | [];
    filtered: Ingredient[] | [];
  }>(DEFAULT_INGREDIENTS_LIST);
  const [showIngredientsList, setShowIngredientsList] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[] | []>([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoadingIngredientsList, setIsLoadingIngredientsList] = useState(false);
  const [_focusedIngredientIndex, setFocusedIngredientIndex] = useState<number>(0);

  const searchWrapperRef = useRef<HTMLDivElement>(null);
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
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(e.target as Node)) {
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
    const debouncedFilter = debounce(filterIngredients, 750);

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
    const { value } = e.currentTarget;
    setSearchInput(value);
  };

  const handleSearchFocusAndClick = (
    e: React.FocusEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    handleSearchInputChange(e as React.ChangeEvent<HTMLInputElement>);
    setShowIngredientsList(true);
  };

  const handleIngredientsListKeyDown = (e: React.KeyboardEvent, ingredient: Ingredient) => {
    e.preventDefault();
    switch (e.key) {
      case "Enter":
      case " ":
        if (selectedIngredients.some((ingred) => ingred.name === ingredient.name)) return;
        setSelectedIngredients((prev) => [...prev, ingredient]);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        setFocusedIngredientIndex((prevIndex) => {
          const nextIndex = prevIndex === 0 ? ingredients.filtered.length - 1 : prevIndex - 1;
          ingredientRefs.current[nextIndex]?.focus();
          return nextIndex;
        });
        break;
      case "ArrowDown":
      case "ArrowRight":
        setFocusedIngredientIndex((prevIndex) => {
          const nextIndex = prevIndex + 1 === ingredients.filtered.length ? 0 : prevIndex + 1;
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

  return (
    <section className="lg:w-1/3 h-full max-h-full flex flex-col items-center">
      <div className="flex flex-col items-center">
        <Icon type="ingredients" className="text-2xl sm:text-5xl mb-4" />

        <div ref={searchWrapperRef} className="flex flex-col items-center relative">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative">
              <input
                className="w-32 focus:w-40 sm:w-40 sm:focus:w-52 h-10 sm:h-12 md:h-14 pl-6 pr-12 py-4 text-xs sm:text-sm md:text-base border-2 rounded-full outline-none focus:border-pastel-blue duration-300 ease-in-out"
                type="text"
                value={searchInput}
                placeholder="Search"
                onChange={handleSearchInputChange}
                onFocus={handleSearchFocusAndClick}
              />
              <Icon
                type="search"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-2xl pointer-events-none"
              />
            </div>

            {selectedIngredients.length > 0 && (
              <Tooltip text="Clear selected ingredients">
                <button
                  type="button"
                  className="cursor-pointer text-4xl text-red-300 hover:text-red-500"
                  onClick={() => setSelectedIngredients([])}
                >
                  <Icon type="reset" />
                </button>
              </Tooltip>
            )}
          </div>

          {showIngredientsList && (
            <div className="w-80 sm:w-96 h-48 sm:h-80 absolute top-full mt-1 text-sm bg-pastel-brown/30 backdrop-blur-lg p-4 border-2 rounded-lg overflow-auto">
              {ingredients.filtered.length === 0 && <div>No matching ingredients found.</div>}

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
                    className="cursor-pointer p-1 outline-none hover:bg-pastel-brown/35 focus:border-2 focus:border-pastel-brown focus:bg-pastel-brown/35 rounded-lg lowercase"
                    onClick={() => {
                      if (selectedIngredients.some((ingred) => ingred.name === ingredient.name))
                        return;
                      setSelectedIngredients((prev) => [...prev, ingredient]);
                    }}
                    onKeyDown={(e) => handleIngredientsListKeyDown(e, ingredient)}
                    tabIndex={0}
                  >
                    {ingredient.name}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className="h-4/5 flex flex-col items-center mt-4">
        <h2 className="text-sm sm:text-base font-semibold">Selected Ingredients:</h2>
        <div className="flex flex-wrap justify-center gap-2 my-2 overflow-auto">
          {selectedIngredients.map((ingredient, index) => (
            <button
              key={index}
              type="button"
              className="flex items-center px-2 py-1 bg-blue-100 text-xs rounded group"
              onClick={() =>
                setSelectedIngredients((prev) => prev.filter((ingred) => ingred !== ingredient))
              }
            >
              <span className="text-blue-800 group-hover:text-red-400 font-semibold lowercase">
                {ingredient.name}
              </span>
              <span className="ml-2 text-blue-500 group-hover:text-red-400 group-hover:font-semibold text-xl">
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
