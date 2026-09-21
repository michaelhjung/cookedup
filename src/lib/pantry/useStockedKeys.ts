"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@context/AuthContext";
import { buildStockedKeys } from "@lib/ingredients";
import {
  fetchItems,
  fetchPantries,
  readStoredPantryId,
} from "@lib/pantry/client";

const NO_KEYS = new Set<string>();

/**
 * What's stocked in the pantry the user last looked at (or their first
 * one), as match keys for recipe ingredients. Empty while signed out,
 * while loading, or when there's no pantry yet; the search page only
 * reads it, so a failure here just means no badge.
 */
export const useStockedKeys = (): Set<string> => {
  const { user } = useAuth();
  const [stockedKeys, setStockedKeys] = useState<Set<string>>(NO_KEYS);

  useEffect(() => {
    if (!user) {
      setStockedKeys(NO_KEYS);
      return;
    }

    let cancelled = false;

    const load = async () => {
      try {
        // Roles don't matter here, so the household isn't looked up.
        const pantries = await fetchPantries(user.id, null);
        if (cancelled || pantries.length === 0) return;

        const remembered = readStoredPantryId();
        const pantry =
          pantries.find((candidate) => candidate.id === remembered) ??
          pantries[0];
        const items = await fetchItems(pantry.id);
        if (cancelled) return;

        setStockedKeys(buildStockedKeys(items));
      } catch (caught) {
        console.error("Failed to load pantry for recipe matching:", caught);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  return stockedKeys;
};
