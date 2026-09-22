"use client";

import React, { useState } from "react";

import { StoredIngredient, isIngredientHeading } from "@lib/userRecipes/types";

interface IngredientListProps {
  ingredients: StoredIngredient[];
}

/**
 * The ingredients, with their headings. Each line is a checkbox for
 * ticking off while cooking or shopping; the ticks live in this
 * component alone and are gone on reload, which is all they're for.
 */
const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (index: number) =>
    setChecked((previous) => {
      const next = new Set(previous);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <ul className="flex flex-col">
      {ingredients.map((ingredient, index) =>
        isIngredientHeading(ingredient) ?
          <li
            key={index}
            className={`text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-muted ${index > 0 ? "mt-4" : ""} mb-1.5`}
          >
            {ingredient.heading}
          </li>
        : <li
            key={index}
            className="border-b border-line last:border-b-0"
          >
            <label className="flex min-h-10 cursor-pointer items-start gap-2.5 py-2 text-sm leading-snug">
              <input
                type="checkbox"
                checked={checked.has(index)}
                onChange={() => toggle(index)}
                className="mt-0.5 size-4 shrink-0 accent-accent"
              />
              <span
                className={
                  checked.has(index) ?
                    "text-ink-muted line-through"
                  : "text-ink"
                }
              >
                {ingredient.text}
              </span>
            </label>
          </li>,
      )}
    </ul>
  );
};

export default IngredientList;
