import { User } from "@supabase/supabase-js";
import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import AddToPlanButton from "@components/MealPlan/AddToPlanButton";
import { Hit } from "@interfaces/edamam";

import StarIcon from "./StarIcon";

interface RecipeCardProps {
  hit: Hit;
  user: User | null;
  savedRecipes: Hit[];
  setSavedRecipes: React.Dispatch<React.SetStateAction<Hit[]>>;
  isHighlighted?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  hit,
  user,
  savedRecipes,
  setSavedRecipes,
  isHighlighted = false,
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

  // "Surprise me" sets `isHighlighted` on a single card at a time;
  // bring it into view and flash its ring so it's obvious which one was
  // picked, even if it's already loaded off-screen.
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isHighlighted)
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [isHighlighted]);

  return (
    <a
      ref={cardRef}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        h-[400px] w-full max-w-[400px]
        group
        relative
        flex flex-col gap-3
        rounded-lg border border-line bg-surface-raised
        shadow-sm hover:border-pastel-blue/60 hover:shadow-md
        transition-[box-shadow,border-color]
        p-4 pb-10
        ${isHighlighted ? "flash-ring ring-3 ring-pastel-yellow ring-offset-2 ring-offset-surface" : ""}
      `}
    >
      {/* External link badge */}
      <span
        className={`
          absolute right-3 top-3 z-10
          flex size-7 items-center justify-center
          rounded-full bg-black/55 text-white
          backdrop-blur-sm
          transition-colors group-hover:bg-pastel-blue group-hover:text-blue-950
        `}
      >
        <ArrowUpRight
          strokeWidth={2.5}
          className="size-4"
        />
      </span>
      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        <StarIcon
          hit={hit}
          user={user}
          savedRecipes={savedRecipes}
          setSavedRecipes={setSavedRecipes}
        />
        <AddToPlanButton
          hit={hit}
          user={user}
        />
      </div>

      {/* Image */}
      <div className="relative w-full h-[122px] rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={images.LARGE?.url || images.REGULAR?.url || images.SMALL?.url}
          alt={label}
          fill
          quality={85}
          className="object-cover"
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
          <p className="text-xs text-ink-muted">
            {Math.round(calories)} calories
          </p>
        </div>

        {/* Cook Time + Source */}
        <div className="flex justify-between text-xs md:text-sm text-ink-muted">
          {/* Edamam reports 0 when it doesn't know; say nothing rather
              than "unknown". */}
          <span className="flex items-center gap-1">
            {totalTime > 0 && (
              <>
                <Clock className="size-3.5" />
                {totalTime} min
              </>
            )}
          </span>
          <span className="italic truncate max-w-[40%]">By {source}</span>
        </div>

        {/* Ingredients with scroll */}
        <div className="mt-2 text-xs md:text-sm overflow-y-auto pr-1 flex-grow">
          <p className="font-semibold mb-1">Ingredients</p>
          <ul className="list-disc ml-4 space-y-1 text-ink-muted marker:text-line">
            {ingredientLines.slice(0, 5).map((ingr, index) => (
              <li key={index}>{ingr}</li>
            ))}
          </ul>
          {ingredientLines.length > 5 && (
            <p className="mt-1 italic text-ink-muted/70">
              + {ingredientLines.length - 5} more
            </p>
          )}
        </div>
      </div>
    </a>
  );
};

export default RecipeCard;
