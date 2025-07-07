import Bowl from "@components/loaders/Bowl";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import React from "react";

import Icon from "@/components/Icon2";
import { Hit, RecipeData } from "@interfaces/edamam";
import chefConfusedImg from "@public/imgs/chef-confused.png";

import RecipeCard from "./RecipeCard";

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
}) => {
  const loadMoreRecipes = async () => {
    if (!recipesData) return;

    const nextLink = recipesData?._links?.next?.href;
    if (!nextLink) return;

    try {
      setIsLoadingRecipes(true);
      const nextRecipesPageResponse = await fetch(nextLink);
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

  return (
    <section
      className={`
        size-full flex flex-col grow items-center
        transition-all duration-500 ease-in-out p-4
        overflow-auto
        ${isSidebarOpen ? "" : "pl-8"}
      `}
    >
      <div>
        <Icon
          type="fork-and-spoon"
          className="mb-4 text-2xl text-cinerous sm:text-5xl"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        {!recipesData?.from && (
          <p className="text-xs sm:text-sm md:text-base">
            Enter ingredients with the search bar to find recipes!
          </p>
        )}

        {recipesData?.from && recipesData.count === 0 && (
          <div className="my-4 flex flex-col items-center gap-2 text-xs sm:text-sm md:text-base">
            <Image
              src={chefConfusedImg}
              alt="chef confused"
              className="size-24 rounded md:size-40 xl:size-48"
            />
            <p className="text-center">
              No recipes found for those combination of ingredients. Try out
              some other ingredients!
            </p>
          </div>
        )}

        {recipesData?.from && recipesData.count > 0 && (
          <>
            <p className="mb-4 text-xs sm:text-sm md:text-base">
              Found{" "}
              <span className="font-bold">
                {recipesData.count.toLocaleString()}
              </span>{" "}
              {recipesData.count > 1 ? "recipes" : "recipe"}!
            </p>

            <div className="grid w-full gap-6 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
              {recipesData.hits.map((hit: Hit, index: number) => (
                <RecipeCard
                  key={index}
                  hit={hit}
                  user={user}
                  savedRecipes={savedRecipes}
                  setSavedRecipes={setSavedRecipes}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {isLoadingRecipes && (
        <div className="mt-5 flex flex-col items-center">
          <Bowl />
          <p className="text-xs md:text-sm">Looking up some recipes...</p>
        </div>
      )}

      {errorFetchingRecipes && (
        <p className="mt-5 text-xs text-red-500 md:text-sm">
          Oops! There was an error when searching up recipes... Please try again
          at another time.
        </p>
      )}

      {!isLoadingRecipes &&
        !errorFetchingRecipes &&
        recipesData?._links?.next?.href && (
          <button
            type="button"
            className={`
              my-10
              bg-[var(--pastel-brown)]/20
              px-4 py-2
              md:px-6 md:py-3
              text-[0.7rem] text-cinerous
              md:text-sm
              rounded-3xl
              hover:scale-105
              transition-transform
            `}
            onClick={loadMoreRecipes}
          >
            Load more recipes
          </button>
        )}
    </section>
  );
};

export default Recipes;
