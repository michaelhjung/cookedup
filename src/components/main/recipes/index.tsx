/* eslint-disable no-underscore-dangle */
import React from "react";
import { Hit, RecipeData } from "@/interfaces/edamam";
import Icon from "@/components/icon";
import Bowl from "@/components/loaders/bowl";
import RecipeCard from "@/components/main/recipes/recipe-card";
import chefConfusedImg from "@public/imgs/chef-confused.png";
import Image from "next/image";

interface RecipesProps {
  recipesData: any;
  setRecipesData: React.Dispatch<React.SetStateAction<RecipeData | null>>;
  isLoadingRecipes: boolean;
  setIsLoadingRecipes: React.Dispatch<React.SetStateAction<boolean>>;
  errorFetchingRecipes: boolean;
  setErrorFetchingRecipes: React.Dispatch<React.SetStateAction<boolean>>;
}

const Recipes: React.FC<RecipesProps> = ({
  recipesData,
  setRecipesData,
  isLoadingRecipes,
  setIsLoadingRecipes,
  errorFetchingRecipes,
  setErrorFetchingRecipes,
}) => {
  const loadMoreRecipes = async () => {
    if (!recipesData) return;

    const nextLink = recipesData?._links?.next?.href;
    if (!nextLink) return;

    try {
      setIsLoadingRecipes(true);
      const nextRecipesPageResponse = await fetch(nextLink);
      if (!nextRecipesPageResponse.ok) throw new Error("No aditional recipes found.");

      const nextRecipesPageData: RecipeData = await nextRecipesPageResponse.json();
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
    <section className="h-full flex flex-col items-center lg:w-2/3 lg:p-4 overflow-auto">
      <div>
        <Icon type="fork-and-spoon" className="text-2xl sm:text-5xl text-cinerous mb-4" />
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        {!recipesData?.from && (
          <p className="text-xs sm:text-sm md:text-base">Select ingredients to find recipes!</p>
        )}

        {recipesData?.from && recipesData.count === 0 && (
          <div className="flex flex-col items-center gap-2 text-xs sm:text-sm md:text-base my-4">
            <Image
              src={chefConfusedImg}
              alt="chef confused"
              className="rounded w-24 h-24 md:w-40 md:h-40 xl:w-48 xl:h-48"
            />
            <p className="text-center">
              No recipes found for those combination of ingredients. Try out some other ingredients!
            </p>
          </div>
        )}

        {recipesData?.from && recipesData.count > 0 && (
          <>
            <p className="text-xs sm:text-sm md:text-base mb-4">
              Found <span className="font-bold">{recipesData.count}</span>{" "}
              {recipesData.count > 1 ? "recipes" : "recipe"}!
            </p>

            <div className="overflow-auto">
              {recipesData.hits.map((hit: Hit, index: number) => (
                <RecipeCard key={index} hit={hit} />
              ))}
            </div>
          </>
        )}
      </div>

      {isLoadingRecipes && (
        <div className="flex flex-col items-center mt-5">
          <Bowl />
          <p className="text-xs md:text-sm">Looking up some recipes...</p>
        </div>
      )}

      {errorFetchingRecipes && (
        <p className="text-xs md:text-sm text-red-500 mt-5">
          Oops! There was an error when searching up recipes... Please try again at another time.
        </p>
      )}

      {!isLoadingRecipes && !errorFetchingRecipes && recipesData?._links?.next?.href && (
        <button
          type="button"
          className="px-4 md:px-6 py-2 md:py-3 my-10 text-[0.7rem] md:text-sm text-cinerous bg-pastel-brown/25 rounded-full"
          onClick={loadMoreRecipes}
        >
          Load more recipes
        </button>
      )}
    </section>
  );
};

export default Recipes;
