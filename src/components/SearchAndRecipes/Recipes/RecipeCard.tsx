import { User } from "@supabase/supabase-js";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

import StarIcon from "@components/SearchAndRecipes/Recipes/StarIcon";
import { Hit } from "@interfaces/edamam";

interface RecipeCardProps {
  hit: Hit;
  user: User | null;
  savedRecipes: Hit[];
  setSavedRecipes: React.Dispatch<React.SetStateAction<Hit[]>>;
}

const getFormattedCookTime = (totalTime: number): string =>
  totalTime > 0 ? `${totalTime} minutes` : "Unable to determine";

const RecipeCard: React.FC<RecipeCardProps> = ({
  hit,
  user,
  savedRecipes,
  setSavedRecipes,
}) => {
  const {
    recipe: {
      label,
      url,
      calories,
      source,
      images,
      totalTime,
      ingredientLines,
    },
  } = hit;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        h-[400px] w-full max-w-[400px]
        group
        relative
        flex flex-col gap-3
        border border-[var(--card-border-color)]/50 rounded-xl
        shadow-md hover:shadow-lg
        transition-shadow
        p-4 pb-10
      `}
    >
      {/* External link icon */}
      <ArrowUpRight
        strokeWidth={3}
        size={25}
        className={`
          absolute right-4 top-4
          text-2xl md:text-3xl text-pastel-orange
          bg-zinc-500/90
          p-1
          rounded-full
          group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-bittersweet group-hover:scale-105
          transition-transform
          z-10
        `}
      />
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
        <StarIcon
          hit={hit}
          user={user}
          savedRecipes={savedRecipes}
          setSavedRecipes={setSavedRecipes}
        />
      </div>

      {/* Image */}
      <div className="relative w-full h-[122px] rounded overflow-hidden flex-shrink-0">
        <Image
          src={images.LARGE?.url || images.REGULAR?.url || images.SMALL?.url}
          alt={label}
          fill
          quality={85}
          className="object-cover rounded"
        />
      </div>

      <div
        className="flex flex-col flex-grow overflow-hidden"
        style={{ height: "calc(100% - 122px)" }}
      >
        {/* Title + Calories */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold text-sm md:text-base line-clamp-2">
            {label}
          </h3>
          <p className="text-xs text-gray-500">
            {Math.round(calories)} calories
          </p>
        </div>

        {/* Cook Time + Source */}
        <div className="flex justify-between text-xs md:text-sm text-gray-500/80">
          <span>⏱️ {getFormattedCookTime(totalTime)}</span>
          <span className="italic truncate max-w-[40%]">By {source}</span>
        </div>

        {/* Ingredients with scroll */}
        <div className="mt-2 text-xs md:text-sm overflow-y-auto pr-1 flex-grow">
          <p className="font-semibold mb-1">Ingredients:</p>
          <ul className="list-disc ml-4 space-y-1">
            {ingredientLines.slice(0, 5).map((ingr, index) => (
              <li key={index}>{ingr}</li>
            ))}
          </ul>
          {ingredientLines.length > 5 && (
            <p className="mt-1 italic text-gray-400">
              + {ingredientLines.length - 5} more
            </p>
          )}
        </div>
      </div>
    </a>
  );
};

export default RecipeCard;
