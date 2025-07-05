import { User } from "@supabase/supabase-js";
import Image from "next/image";
import React from "react";

import Icon from "@components/Icon";
import Bowl from "@components/loaders/Bowl";
import RecipeCard from "@components/main/Recipes/Recipe-Card";
import StarIcon from "@components/main/Recipes/StarIcon";
import { Hit, RecipeData } from "@interfaces/edamam";
import chefConfusedImg from "@public/imgs/chef-confused.png";

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
    <section className="flex h-full flex-col items-center overflow-auto lg:w-2/3 lg:p-4">
      <div>
        <Icon
          type="fork-and-spoon"
          className="mb-4 text-2xl text-cinerous sm:text-5xl"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-center">
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
              Found <span className="font-bold">{recipesData.count}</span>{" "}
              {recipesData.count > 1 ? "recipes" : "recipe"}!
            </p>

            <div className="overflow-visible">
              {recipesData.hits.map((hit: Hit, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-2"
                >
                  <StarIcon
                    hit={hit}
                    user={user}
                    savedRecipes={savedRecipes}
                    setSavedRecipes={setSavedRecipes}
                  />

                  <RecipeCard hit={hit} />
                </div>
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
            className="my-10 rounded-full bg-pastel-brown/25 px-4 py-2 text-[0.7rem] text-cinerous md:px-6 md:py-3 md:text-sm"
            onClick={loadMoreRecipes}
          >
            Load more recipes
          </button>
        )}
    </section>
  );
};

export default Recipes;
