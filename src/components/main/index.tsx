"use client";

import React, { useEffect, useState } from "react";

import Recipes from "@components/main/recipes";
import Search from "@components/main/search";
import { useAuth } from "@context/AuthContext";
import { Hit, RecipeData } from "@interfaces/edamam";
import { supabase } from "@utils/supabase";

const Main = () => {
  const { user } = useAuth();
  const [savedRecipes, setSavedRecipes] = useState<Hit[]>([]);
  const [recipesData, setRecipesData] = useState<RecipeData | null>(null);
  const [isLoadingRecipes, setIsLoadingRecipes] = useState(false);
  const [errorFetchingRecipes, setErrorFetchingRecipes] = useState(false);

  useEffect(() => {
    const checkForURLErrors = () => {
      const { hash } = window.location;

      if (!hash.includes("error")) return;

      const params = new URLSearchParams(hash.substring(1));
      const errorDescription = params.get("error_description");
      if (errorDescription) alert(errorDescription);
    };

    checkForURLErrors();
  }, []);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from("recipes")
        .select("data")
        .eq("user_id", user.id)
        .eq("type", "starred");

      if (error || !data?.length) {
        console.error(
          "Error fetching saved recipes:",
          error || "no saved recipes found",
        );
        return;
      }

      {
        const userSavedRecipes = data.map((item) => item.data);
        setSavedRecipes(userSavedRecipes);
      }
    };

    fetchSavedRecipes();
  }, [user]);

  return (
    <main className="mt-4 flex size-full grow-0 flex-col items-center overflow-auto lg:flex-row lg:justify-between">
      <Search
        user={user}
        savedRecipes={savedRecipes}
        setRecipesData={setRecipesData}
        setIsLoadingRecipes={setIsLoadingRecipes}
        setErrorFetchingRecipes={setErrorFetchingRecipes}
      />

      <Recipes
        user={user}
        savedRecipes={savedRecipes}
        setSavedRecipes={setSavedRecipes}
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
