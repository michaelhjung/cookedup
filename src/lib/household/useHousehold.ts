"use client";

import { useCallback, useEffect, useState } from "react";

import { useAuth } from "@context/AuthContext";
import { Household, fetchMyHousehold } from "@lib/household/client";

interface HouseholdState {
  household: Household | null;
  /** True until the first fetch settles (or immediately when signed out). */
  isLoading: boolean;
  error: string;
  /** Re-reads after a membership change made on this page. */
  reload: () => Promise<void>;
  /** Applies a change already known to have happened, without a round trip. */
  setHousehold: (_household: Household | null) => void;
}

/**
 * The signed-in user's household. Every page that shows household
 * objects needs it to tell "yours" from "your household's" and to work
 * out what a non-owner may do.
 */
export const useHousehold = (): HouseholdState => {
  const { user, loading: authLoading } = useAuth();
  const [household, setHousehold] = useState<Household | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    if (!user) {
      setHousehold(null);
      setIsLoading(false);
      return;
    }

    try {
      setHousehold(await fetchMyHousehold(user.id));
      setError("");
    } catch (caught) {
      console.error("Failed to load household:", caught);
      setError(
        caught instanceof Error && caught.message ?
          caught.message
        : "Couldn't load your household.",
      );
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (authLoading) return;
    load();
  }, [authLoading, load]);

  return { household, isLoading, error, reload: load, setHousehold };
};
