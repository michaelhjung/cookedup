"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import Bowl from "@components/loaders/Bowl";
import RecipeEditor from "@components/RecipeEditor";
import { useAuth } from "@context/AuthContext";
import { fetchRecipe } from "@lib/userRecipes/client";
import { UserRecipe } from "@lib/userRecipes/types";

/**
 * Loads the recipe for the editor. Anyone but its author gets a polite
 * dead end rather than a form that RLS would refuse on save.
 */
const EditRecipe: React.FC<{ id: string }> = ({ id }) => {
  const { user, loading: authLoading } = useAuth();
  const [recipe, setRecipe] = useState<UserRecipe | null | undefined>();

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setRecipe(null);
      return;
    }
    let cancelled = false;
    fetchRecipe(id)
      .then((loaded) => {
        if (!cancelled) setRecipe(loaded);
      })
      .catch((caught) => {
        console.error("Failed to load recipe:", caught);
        if (!cancelled) setRecipe(null);
      });
    return () => {
      cancelled = true;
    };
  }, [id, user, authLoading]);

  if (authLoading || (user && recipe === undefined))
    return (
      <div className="flex grow items-center justify-center">
        <Bowl />
      </div>
    );

  // Signed out: the editor shows its own sign-in prompt.
  if (!user) return <RecipeEditor />;

  if (!recipe || recipe.userId !== user.id)
    return (
      <div className="flex grow flex-col items-center justify-center gap-2 p-8 text-center">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">
          Not yours to edit
        </h2>
        <p className="max-w-md text-sm text-ink-muted">
          Only the person who wrote a recipe can change it.
        </p>
        <Link
          href={recipe ? `/recipes/${recipe.id}` : "/recipes"}
          className="mt-2 text-sm font-medium text-accent hover:underline"
        >
          {recipe ? "Back to the recipe" : "Back to recipes"}
        </Link>
      </div>
    );

  return <RecipeEditor recipe={recipe} />;
};

export default EditRecipe;
