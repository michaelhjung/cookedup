import { User } from "@supabase/supabase-js";
import React from "react";

import Icon from "@components/Icon";
import Tooltip from "@components/Tooltip/Tooltip";
import { Hit } from "@interfaces/edamam";
import { supabase } from "@utils/supabase";

interface StarIconProps {
  hit: Hit;
  user: User | null;
  savedRecipes: Hit[];
  setSavedRecipes: React.Dispatch<React.SetStateAction<Hit[]>>;
}

const StarIcon: React.FC<StarIconProps> = ({
  hit,
  user,
  savedRecipes,
  setSavedRecipes,
}) => {
  const isSaved = savedRecipes.some(
    (savedHit) => savedHit?.recipe?.url === hit?.recipe?.url,
  );
  const tooltipText =
    !user ? "Log in to save this recipe"
    : isSaved ? "Click to remove this recipe from your saved list"
    : "Click to save this recipe";

  const saveRecipe = async (data: Hit) => {
    try {
      if (!user) {
        alert("You must be logged in to save recipes.");
        return;
      }

      const { error } = await supabase.from("recipes").insert({
        user_id: user.id,
        type: "starred",
        data,
      });

      if (error) {
        console.error("Supabase error object:", error);
        throw new Error(error.message || "An unknown error occurred.");
      }

      setSavedRecipes((prev) => [...prev, data]);
    } catch (error) {
      alert("There was an error while trying to save the recipe.");
      console.error(
        "An error occurred while attempting to save the recipe:",
        error,
      );
    }
  };

  const removeRecipe = async (data: Hit) => {
    try {
      if (!user) {
        alert("You must be logged in to remove saved recipes.");
        return;
      }

      const { error } = await supabase
        .from("recipes")
        .delete()
        .eq("user_id", user.id)
        .eq("data->recipe->>url", data.recipe.url); // Match based on the recipe URL

      if (error) {
        console.error("Supabase error object:", error);
        throw new Error(error.message || "An unknown error occurred.");
      }

      setSavedRecipes((prev) =>
        prev.filter((savedHit) => savedHit.recipe.url !== data.recipe.url),
      );
    } catch (error) {
      alert("There was an error while trying to remove the saved recipe.");
      console.error(
        "An error occurred while attempting to remove the recipe:",
        error,
      );
    }
  };

  return (
    <Tooltip text={tooltipText}>
      <Icon
        type={isSaved ? "star-filled" : "star-outline"}
        className={
          user ? "cursor-pointer text-2xl" : "cursor-not-allowed text-2xl"
        }
        onClick={() => (isSaved ? removeRecipe(hit) : saveRecipe(hit))}
      />
    </Tooltip>
  );
};

export default StarIcon;
