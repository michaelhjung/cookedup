"use client";

import { PanelLeftClose, PanelLeftOpen, SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

import PantryNotice, {
  PantryHandoff,
  readPantryHandoff,
} from "@components/SearchAndRecipes/PantryNotice";
import Recipes from "@components/SearchAndRecipes/Recipes";
import Search from "@components/SearchAndRecipes/Search";
import { useAuth } from "@context/AuthContext";
import { useToast } from "@context/ToastContext";
import { Hit, RecipeData } from "@interfaces/edamam";
import { supabase } from "@utils/supabase";

const SearchAndRecipes = () => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [savedRecipes, setSavedRecipes] = useState<Hit[]>([]);
  // Lives here rather than in Search so the results area's empty state
  // can seed it with example ingredients.
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [recipesData, setRecipesData] = useState<RecipeData | null>(null);
  const [isLoadingRecipes, setIsLoadingRecipes] = useState(false);
  const [errorFetchingRecipes, setErrorFetchingRecipes] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  // Phone-only: once results land, the search sidebar (which can take
  // half the viewport) folds into a one-line summary so the results get
  // the room. Tapping the summary brings it back. Ignored from `lg` up,
  // where the sidebar has its own column.
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(false);

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
  // The recipe URL "Surprise me" most recently highlighted, if any.
  const [highlightedRecipeUrl, setHighlightedRecipeUrl] = useState<
    string | null
  >(null);
  // Arriving from the pantry's "Find recipes with what I have": the
  // URL carries the stocked items to search with, plus what was left
  // out, which the note above the results explains.
  const [pantryHandoff, setPantryHandoff] = useState<PantryHandoff | null>(
    null,
  );
  const [autoSearchToken, setAutoSearchToken] = useState(0);

  useEffect(() => {
    const handoff = readPantryHandoff(window.location.search);
    if (!handoff) return;
    // Read once; a refresh or back-navigation shouldn't re-run it.
    window.history.replaceState(null, "", window.location.pathname);
    setPantryHandoff(handoff);
    if (handoff.terms.length === 0) return;
    setSelectedIngredients(handoff.terms);
    setAutoSearchToken((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const checkForURLErrors = () => {
      const { hash } = window.location;
      if (!hash.includes("error")) return;
      const params = new URLSearchParams(hash.substring(1));
      const errorDescription = params.get("error_description");
      if (errorDescription) showToast(errorDescription);
    };
    checkForURLErrors();
  }, [showToast]);

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

  const searchSummary =
    recipesSource === "saved" ? "Saved recipes"
    : recipesSource === "filter" ?
      `${activeFilterKeys.length} ${activeFilterKeys.length === 1 ? "filter" : "filters"}`
    : selectedIngredients.join(", ");

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
        className="hidden lg:flex fixed top-1/2 left-0 z-50 -translate-y-1/2 rounded-r-md border border-l-0 border-line bg-surface-raised p-1.5 text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ?
          <PanelLeftClose className="size-4" />
        : <PanelLeftOpen className="size-4" />}
      </button>

      {/* Collapsed search summary (phones only, once results exist). */}
      {isSearchCollapsed && (
        <button
          type="button"
          onClick={() => setIsSearchCollapsed(false)}
          className={`
            mb-3 flex h-10 w-full shrink-0 items-center gap-2.5
            rounded-md border border-line bg-surface-raised px-3 text-left
            transition-colors hover:border-line-strong active:bg-well
            lg:hidden
          `}
        >
          <SearchIcon
            strokeWidth={1.75}
            className="size-4 shrink-0 text-ink-muted"
          />
          <span className="min-w-0 flex-1 truncate text-sm text-ink">
            {searchSummary}
          </span>
          <span className="shrink-0 text-[13px] font-medium text-accent">
            Edit
          </span>
        </button>
      )}

      {/* Search Sidebar. Hidden (not unmounted, it owns the filter
          selection) on phones while collapsed. */}
      <div
        className={`
          max-h-1/2 lg:max-h-full
          mb-4 lg:p-0 lg:mb-0
          transition-all duration-300 ease-in-out
          lg:overflow-hidden
          ${isSidebarOpen ? "lg:w-1/3" : "lg:w-0"}
          ${isSearchCollapsed ? "hidden lg:block" : ""}
        `}
      >
        <Search
          user={user}
          savedRecipes={savedRecipes}
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
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
          onResultsLoaded={() => setIsSearchCollapsed(true)}
          autoSearchToken={autoSearchToken}
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
        notice={
          pantryHandoff && (
            <PantryNotice
              handoff={pantryHandoff}
              onDismiss={() => setPantryHandoff(null)}
            />
          )
        }
        onAddIngredient={(ingredient) =>
          setSelectedIngredients((prev) =>
            prev.includes(ingredient) ? prev : [...prev, ingredient],
          )
        }
      />
    </div>
  );
};

export default SearchAndRecipes;
