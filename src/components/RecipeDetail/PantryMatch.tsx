"use client";

import React from "react";

import { countPantryMatches } from "@lib/ingredients";
import { useStockedKeys } from "@lib/pantry/useStockedKeys";

interface PantryMatchProps {
  /** The `food` of each ingredient line. */
  foods: string[];
}

/** "3 of 8 in your pantry", or nothing when signed out or nothing matches. */
const PantryMatch: React.FC<PantryMatchProps> = ({ foods }) => {
  const stockedKeys = useStockedKeys();
  const matches = countPantryMatches(foods, stockedKeys);
  if (matches === 0) return null;
  return (
    <span className="text-ink">
      {matches} of {foods.length} in your pantry
    </span>
  );
};

export default PantryMatch;
