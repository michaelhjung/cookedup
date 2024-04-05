import React from "react";
import Icon from "@/components/icon";
import Bowl from "@/components/loaders/bowl";
import { Hit } from "@/interfaces/edamam";
import RecipeCard from "./recipe-card";

interface RecipesProps {
  recipesData: any;
  isLoadingRecipes: boolean;
  errorFetchingRecipes: boolean;
}

const Recipes: React.FC<RecipesProps> = ({
  recipesData,
  isLoadingRecipes,
  errorFetchingRecipes,
}) => (
  <section className="h-full flex flex-col items-center lg:w-2/3 lg:p-4 overflow-auto">
    <div>
      <Icon type="fork-and-spoon" className="text-2xl sm:text-5xl text-cinerous mb-4" />
    </div>

    <div className="w-full flex flex-col justify-center items-center">
      {recipesData && recipesData.hits && recipesData.hits.length ? (
        <>
          <p className="text-sm sm:text-base mb-4">
            Found <span className="font-bold">{recipesData.count}</span> recipes!
          </p>

          <div className="overflow-auto">
            {recipesData.hits.map((hit: Hit, index: number) => (
              <RecipeCard key={index} hit={hit} />
            ))}
          </div>
        </>
      ) : (
        <p className="text-sm sm:text-base">Select ingredients to find recipes!</p>
      )}
    </div>

    {isLoadingRecipes && (
      <div className="flex flex-col items-center mt-5">
        <Bowl />
        <p className="text-sm sm:text-base">Looking up some recipes...</p>
      </div>
    )}

    {errorFetchingRecipes && (
      <p className="text-sm sm:text-base text-red-500 mt-5">
        Oops! There was an error when searching up recipes... Please try again at another time.
      </p>
    )}
  </section>
);

export default Recipes;
