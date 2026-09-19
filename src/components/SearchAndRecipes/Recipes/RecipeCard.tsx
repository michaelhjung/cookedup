import { User } from "@supabase/supabase-js";
import { ArrowUpRight } from "lucide-react";
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

/**
 * One bordered box: image, title, a single line of facts, and a
 * hairline footer with the two actions. The whole card is the link to
 * the recipe; the footer buttons stop the click from following it.
 */
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

  // Edamam reports 0 minutes when it doesn't know; say nothing rather
  // than "0 min".
  const facts = [
    totalTime > 0 ? `${totalTime} min` : null,
    `${Math.round(calories).toLocaleString()} kcal`,
    `${ingredientLines.length} ingredients`,
  ].filter(Boolean);

  return (
    <a
      ref={cardRef}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group flex flex-col
        rounded-lg border border-line bg-surface-raised
        transition-colors hover:border-line-strong
        ${isHighlighted ? "flash-ring ring-2 ring-accent ring-offset-2 ring-offset-surface" : ""}
      `}
    >
      {/* Clips its own corners (7px: the card's 8px minus the border) so
          the card doesn't need overflow-hidden, which would cut off the
          action tooltips below. */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[7px] bg-well">
        <Image
          src={images.LARGE?.url || images.REGULAR?.url || images.SMALL?.url}
          alt={label}
          fill
          quality={85}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-1 px-3.5 pt-3 pb-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug tracking-tight">
          {label}
        </h3>
        <p className="flex flex-wrap items-center gap-x-1.5 text-xs text-ink-muted tabular-nums">
          {facts.map((fact, index) => (
            <React.Fragment key={fact}>
              {index > 0 && <span className="opacity-50">·</span>}
              <span>{fact}</span>
            </React.Fragment>
          ))}
        </p>
        <p className="truncate text-xs text-ink-muted">{source}</p>
      </div>

      <div className="mt-auto flex items-center gap-0.5 border-t border-line px-2.5 py-1.5">
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
        <span className="ml-auto flex items-center gap-1 text-xs text-ink-muted opacity-0 transition-opacity group-hover:opacity-100">
          Open
          <ArrowUpRight className="size-3.5" />
        </span>
      </div>
    </a>
  );
};

export default RecipeCard;
