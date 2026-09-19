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
 * One bordered box: image, title, a single line of facts, and the two
 * actions. The whole card is the link to the recipe; the action buttons
 * stop the click from following it.
 *
 * Below `sm` the card is a list row (thumbnail on the left, actions in
 * a column on the right) so several recipes fit in the short results
 * pane a phone leaves under the search sidebar; from `sm` up it is the
 * vertical card with the hairline action footer.
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
        group flex flex-row sm:flex-col
        rounded-lg border border-line bg-surface-raised
        transition-[border-color,transform] hover:border-line-strong
        active:scale-[0.99] sm:active:scale-100
        ${isHighlighted ? "flash-ring ring-2 ring-accent ring-offset-2 ring-offset-surface" : ""}
      `}
    >
      {/* Clips its own corners (7px: the card's 8px minus the border) so
          the card doesn't need overflow-hidden, which would cut off the
          action tooltips below. As a row the thumbnail stretches to the
          row's height and rounds the left edge; as a card it is a fixed
          16:10 band across the top. */}
      <div
        className={`
          relative shrink-0 overflow-hidden bg-well
          w-24 self-stretch rounded-l-[7px]
          sm:aspect-[16/10] sm:w-full sm:self-auto sm:rounded-l-none sm:rounded-t-[7px]
        `}
      >
        <Image
          src={images.LARGE?.url || images.REGULAR?.url || images.SMALL?.url}
          alt={label}
          fill
          quality={85}
          sizes="(max-width: 640px) 96px, 320px"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 px-3 py-2.5 sm:flex-none sm:justify-start sm:px-3.5 sm:pt-3 sm:pb-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug tracking-tight">
          {label}
        </h3>
        {/* Sized so all three facts stay on one line in the phone row. */}
        <p className="flex flex-wrap items-center gap-x-2 text-[11px] text-ink-muted tabular-nums sm:gap-x-3 sm:text-xs">
          {facts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </p>
        <p className="truncate text-xs text-ink-muted">{source}</p>
      </div>

      <div
        className={`
          flex shrink-0 items-center gap-0.5
          flex-col justify-center border-l border-line px-1.5
          sm:mt-auto sm:flex-row sm:justify-start sm:border-l-0 sm:border-t sm:px-2.5 sm:py-1.5
        `}
      >
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
        <span className="ml-auto hidden items-center gap-1 text-xs text-ink-muted opacity-0 transition-opacity group-hover:opacity-100 sm:flex">
          Open
          <ArrowUpRight className="size-3.5" />
        </span>
      </div>
    </a>
  );
};

export default RecipeCard;
