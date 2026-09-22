import Image from "next/image";
import Link from "next/link";
import React from "react";

import { UserRecipe } from "@lib/userRecipes/types";

interface RecipeSummaryProps {
  recipe: UserRecipe;
  /** "Submitted 2 hours ago", "Public since …". */
  subline: string;
}

/** Thumbnail, title as a link to the page, byline: one row's identity. */
const RecipeSummary: React.FC<RecipeSummaryProps> = ({ recipe, subline }) => (
  <div className="flex min-w-0 items-center gap-3">
    <div className="relative size-14 shrink-0 overflow-hidden rounded-md bg-well">
      <Image
        src={recipe.imageUrl ?? "/recipe-placeholder.svg"}
        alt=""
        fill
        sizes="56px"
        className="object-cover"
      />
    </div>
    <div className="min-w-0">
      <Link
        href={`/recipes/${recipe.id}`}
        target="_blank"
        className="line-clamp-1 text-sm font-semibold tracking-tight hover:underline"
      >
        {recipe.title}
      </Link>
      <p className="truncate text-xs text-ink-muted">
        by {recipe.hit.recipe.source} · {subline}
      </p>
    </div>
  </div>
);

export default RecipeSummary;
