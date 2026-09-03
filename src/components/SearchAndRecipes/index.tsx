"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import React, { useEffect, useState } from "react";

import Recipes from "@components/SearchAndRecipes/Recipes";
import Search from "@components/SearchAndRecipes/Search";
import { useAuth } from "@context/AuthContext";
import { Hit, RecipeData } from "@interfaces/edamam";
import { supabase } from "@utils/supabase";

const SearchAndRecipes = () => {
  const { user } = useAuth();
  const [savedRecipes, setSavedRecipes] = useState<Hit[]>([]);
  const [recipesData, setRecipesData] = useState<RecipeData | null>(null);
  const [isLoadingRecipes, setIsLoadingRecipes] = useState(false);
  const [errorFetchingRecipes, setErrorFetchingRecipes] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Which flow populated `recipesData`, so Recipes knows how to fetch
  // more of it on scroll (ingredient-search pagination vs. re-drawing
  // random filter results vs. the saved-recipes view, which has no
  // "more" to load).
  const [recipesSource, setRecipesSource] = useState<
    "ingredients" | "filter" | "saved" | null
  >(null);
  // The filter keys behind the current filter-mode results, so scroll-
  // triggered "load more" can re-draw with the same filters.
  const [activeFilterKeys, setActiveFilterKeys] = useState<string[]>([]);
  // Bumped on every Generate/regenerate click so Recipes' exhausted-
  // draws tracking resets even when the filter selection is unchanged.
  const [filterGeneration, setFilterGeneration] = useState(0);
  // The recipe URL "Pick one for me" most recently highlighted, if any.
  const [highlightedRecipeUrl, setHighlightedRecipeUrl] = useState<
    string | null
  >(null);

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
    const handleResize = () => {
      if (window.innerWidth < 1024) setIsSidebarOpen(true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from("recipes")
        .select("data")
        .eq("user_id", user.id)
        .eq("is_starred", true);

      if (error || !data?.length) {
        console.error("Error fetching saved recipes:", error || "none found");
        return;
      }

      const userSavedRecipes = data.map((item) => item.data);
      setSavedRecipes(userSavedRecipes);
    };

    fetchSavedRecipes();
  }, [user]);

  return (
    <div
      className={`
      size-full relative flex flex-col grow
      lg:flex-row
      ${isSidebarOpen ? "lg:gap-6" : "lg:gap-0"}
    `}
    >
      {/* Sidebar Toggle (visible only on lg+). Solid background (rather
          than transparent) so it fully occludes whatever sidebar content
          happens to sit behind it at the viewport's vertical center,
          instead of visually bleeding through it. */}
      <button
        onClick={toggleSidebar}
        className="hidden lg:flex fixed top-1/2 left-0 z-50 -translate-y-1/2 rounded-r-md border border-zinc-500/40 bg-[var(--background-color)] p-1 shadow-md"
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ?
          <PanelLeftClose className="w-7 h-7" />
        : <PanelLeftOpen className="w-7 h-7" />}
      </button>

      {/* Search Sidebar */}
      <div
        className={`
          max-h-1/2 lg:max-h-full
          mb-4 lg:p-0 lg:mb-0
          transition-all duration-300 ease-in-out
          lg:overflow-hidden
          ${isSidebarOpen ? "lg:w-1/3" : "lg:w-0"}
        `}
      >
        <Search
          user={user}
          savedRecipes={savedRecipes}
          recipesData={recipesData}
          setRecipesData={setRecipesData}
          setIsLoadingRecipes={setIsLoadingRecipes}
          setErrorFetchingRecipes={setErrorFetchingRecipes}
          setRecipesSource={setRecipesSource}
          setActiveFilterKeys={setActiveFilterKeys}
          setFilterGeneration={setFilterGeneration}
          setHighlightedRecipeUrl={setHighlightedRecipeUrl}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </div>

      {/* Recipes Section */}
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
        isSidebarOpen={isSidebarOpen}
        recipesSource={recipesSource}
        activeFilterKeys={activeFilterKeys}
        filterGeneration={filterGeneration}
        highlightedRecipeUrl={highlightedRecipeUrl}
      />
    </div>
  );
};

export default SearchAndRecipes;
