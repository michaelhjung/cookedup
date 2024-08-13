"use client";

import Search from "@components/main/search";
import Recipes from "@components/main/recipes";
import { useState } from "react";
import { RecipeData } from "@interfaces/edamam";

const Main = () => {
  const [recipesData, setRecipesData] = useState<RecipeData | null>(null);
  const [isLoadingRecipes, setIsLoadingRecipes] = useState(false);
  const [errorFetchingRecipes, setErrorFetchingRecipes] = useState(false);

  return (
    <main className="mt-4 flex size-full grow-0 flex-col items-center overflow-auto lg:flex-row lg:justify-between">
      <Search
        setRecipesData={setRecipesData}
        setIsLoadingRecipes={setIsLoadingRecipes}
        setErrorFetchingRecipes={setErrorFetchingRecipes}
      />

      <Recipes
        recipesData={recipesData}
        setRecipesData={setRecipesData}
        isLoadingRecipes={isLoadingRecipes}
        setIsLoadingRecipes={setIsLoadingRecipes}
        errorFetchingRecipes={errorFetchingRecipes}
        setErrorFetchingRecipes={setErrorFetchingRecipes}
      />
    </main>
  );
};

export default Main;
