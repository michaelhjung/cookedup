"use client";

import Search from "@/components/main/search";
import Recipes from "@/components/main/recipes";
import { useState } from "react";
import { RecipeData } from "@/interfaces/edamam";

const Main = () => {
  const [recipesData, setRecipesData] = useState<RecipeData | null>(null);
  const [isLoadingRecipes, setIsLoadingRecipes] = useState(false);
  const [errorFetchingRecipes, setErrorFetchingRecipes] = useState(false);

  return (
    <main className="w-full h-full flex flex-col lg:flex-row flex-grow-0 lg:justify-between items-center mt-4 overflow-auto">
      <Search
        setRecipesData={setRecipesData}
        setIsLoadingRecipes={setIsLoadingRecipes}
        setErrorFetchingRecipes={setErrorFetchingRecipes}
      />

      <Recipes
        recipesData={recipesData}
        isLoadingRecipes={isLoadingRecipes}
        errorFetchingRecipes={errorFetchingRecipes}
      />
    </main>
  );
};

export default Main;
