"use client";

import { BookOpenText, Plus } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

import Bowl from "@components/loaders/Bowl";
import RecipeCard from "@components/SearchAndRecipes/Recipes/RecipeCard";
import DisplayNameEditor from "@components/UserRecipes/DisplayNameEditor";
import { useAuth } from "@context/AuthContext";
import { useToast } from "@context/ToastContext";
import { Hit } from "@interfaces/edamam";
import { useHousehold } from "@lib/household/useHousehold";
import { useStockedKeys } from "@lib/pantry/useStockedKeys";
import {
  ensureProfile,
  fetchCommunityRecipes,
  fetchMyRecipes,
  fetchSharedRecipes,
  saveProfile,
} from "@lib/userRecipes/client";
import { Profile, UserRecipe } from "@lib/userRecipes/types";
import { supabase } from "@utils/supabase";

type Tab = "mine" | "shared" | "community";

const TAB_LABELS: Record<Tab, string> = {
  mine: "Yours",
  shared: "Shared with you",
  community: "Community",
};

/** The badge on the author's own cards: who can see this one. */
const describeVisibility = (recipe: UserRecipe): string =>
  recipe.visibility === "public" ? "Public"
  : recipe.householdId ? "Household"
  : "Private";

const UserRecipesPage: React.FC = () => {
  const { user, loading: authLoading, openAuthModal } = useAuth();
  const { household, isLoading: isHouseholdLoading } = useHousehold();
  const { showToast } = useToast();
  const stockedKeys = useStockedKeys();

  const [tab, setTab] = useState<Tab>("mine");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [mine, setMine] = useState<UserRecipe[] | null>(null);
  const [shared, setShared] = useState<UserRecipe[] | null>(null);
  const [community, setCommunity] = useState<UserRecipe[] | null>(null);
  const [hasMoreCommunity, setHasMoreCommunity] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  // The star on each card reads and writes the user's saved list, the
  // same way the search page does.
  const [savedRecipes, setSavedRecipes] = useState<Hit[]>([]);

  const isSignedIn = Boolean(user);
  const activeTab: Tab = isSignedIn ? tab : "community";

  useEffect(() => {
    if (authLoading || isHouseholdLoading) return;
    if (!user) {
      setMine(null);
      setShared(null);
      return;
    }

    let cancelled = false;

    Promise.all([
      ensureProfile(user),
      fetchMyRecipes(user.id),
      fetchSharedRecipes(user.id, household?.id ?? null),
      supabase
        .from("recipes")
        .select("data")
        .eq("user_id", user.id)
        .eq("is_starred", true),
    ])
      .then(([loadedProfile, loadedMine, loadedShared, saved]) => {
        if (cancelled) return;
        setProfile(loadedProfile);
        setMine(loadedMine);
        setShared(loadedShared);
        setSavedRecipes((saved.data ?? []).map((row) => row.data as Hit));
      })
      .catch((caught) => {
        console.error("Failed to load recipes:", caught);
        if (!cancelled) showToast("Couldn't load your recipes.");
      });

    return () => {
      cancelled = true;
    };
  }, [user, authLoading, isHouseholdLoading, household, showToast]);

  // Community is public, so it loads regardless of sign-in.
  useEffect(() => {
    let cancelled = false;
    fetchCommunityRecipes()
      .then(({ recipes, hasMore }) => {
        if (cancelled) return;
        setCommunity(recipes);
        setHasMoreCommunity(hasMore);
      })
      .catch((caught) => {
        console.error("Failed to load community recipes:", caught);
        if (!cancelled) showToast("Couldn't load community recipes.");
      });
    return () => {
      cancelled = true;
    };
  }, [showToast]);

  const loadMoreCommunity = useCallback(async () => {
    if (!community || community.length === 0) return;
    setIsLoadingMore(true);
    try {
      const { recipes, hasMore } = await fetchCommunityRecipes(
        community[community.length - 1].createdAt,
      );
      setCommunity((previous) => [...(previous ?? []), ...recipes]);
      setHasMoreCommunity(hasMore);
    } catch (caught) {
      console.error("Failed to load more community recipes:", caught);
      showToast("Couldn't load more recipes.");
    } finally {
      setIsLoadingMore(false);
    }
  }, [community, showToast]);

  const handleSaveDisplayName = async (displayName: string) => {
    if (!user) return;
    try {
      const saved = await saveProfile(user.id, displayName);
      setProfile(saved);
      // Bylines are rebuilt in the database; re-read so the cards agree.
      fetchMyRecipes(user.id).then(setMine).catch(console.error);
    } catch (caught) {
      console.error("Failed to save display name:", caught);
      showToast("Couldn't change your name.");
      throw caught;
    }
  };

  // ------------------------------------------------------------------

  if (authLoading)
    return (
      <div className="flex grow items-center justify-center">
        <Bowl />
      </div>
    );

  const recipesForTab =
    activeTab === "mine" ? mine
    : activeTab === "shared" ? shared
    : community;

  const emptyCopy: Record<Tab, { title: string; body: string }> = {
    mine: {
      title: "Write down what you cook",
      body: "Your own recipes get a page here with the ingredients, the steps, and a photo. Keep them to yourself, share them with your household, or publish them for everyone.",
    },
    shared: {
      title: "Nothing shared with you yet",
      body: "Recipes your household writes, and ones people send you by invite link, show up here.",
    },
    community: {
      title: "No public recipes yet",
      body: "Be the first: write a recipe and set it to Public.",
    },
  };

  const grid =
    recipesForTab === null ?
      <div className="flex justify-center py-16">
        <Bowl />
      </div>
    : recipesForTab.length === 0 ?
      <div className="flex flex-col items-center px-4 pt-12 pb-6 text-center">
        <span className="flex size-12 items-center justify-center rounded-md bg-accent-tint text-accent">
          <BookOpenText className="size-6" />
        </span>
        <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em]">
          {emptyCopy[activeTab].title}
        </h3>
        <p className="mt-1 max-w-[40ch] text-sm text-ink-muted">
          {emptyCopy[activeTab].body}
        </p>
        {activeTab === "mine" && (
          <Link
            href="/recipes/new"
            className="mt-5 flex h-10 items-center gap-1.5 rounded-md bg-accent px-4 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
          >
            <Plus className="size-4" />
            New recipe
          </Link>
        )}
      </div>
    : <>
        <div className="grid w-full grid-cols-1 gap-2.5 sm:gap-4 sm:[grid-template-columns:repeat(auto-fill,minmax(240px,1fr))]">
          {/* Each wrapper is a one-cell grid so the card stretches to
              the row's height like it does on the search page, where it
              is the grid child itself; the wrapper only exists to anchor
              the badge. */}
          {recipesForTab.map((recipe) => (
            <div
              key={recipe.id}
              className="relative grid"
            >
              <RecipeCard
                hit={recipe.hit}
                user={user}
                savedRecipes={savedRecipes}
                setSavedRecipes={setSavedRecipes}
                stockedKeys={stockedKeys}
              />
              {activeTab === "mine" && (
                <span className="pointer-events-none absolute top-2 left-2 hidden rounded-sm bg-surface-raised/90 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-ink-muted backdrop-blur-sm sm:inline">
                  {describeVisibility(recipe)}
                </span>
              )}
            </div>
          ))}
        </div>
        {activeTab === "community" && hasMoreCommunity && (
          <div className="flex justify-center pt-6">
            <button
              type="button"
              onClick={loadMoreCommunity}
              disabled={isLoadingMore}
              className="h-9 rounded-md border border-line bg-surface-raised px-4 text-sm font-medium text-ink transition-colors hover:border-line-strong disabled:opacity-50"
            >
              {isLoadingMore ? "Loading..." : "Load more"}
            </button>
          </div>
        )}
      </>;

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
            Recipes
          </h2>
          {isSignedIn ?
            profile && (
              <DisplayNameEditor
                displayName={profile.displayName}
                onSave={handleSaveDisplayName}
              />
            )
          : <p className="text-xs text-ink-muted">
              Recipes people have written and published here.
            </p>
          }
        </div>
        {isSignedIn ?
          <Link
            href="/recipes/new"
            className="flex h-10 shrink-0 items-center gap-1.5 rounded-md bg-accent px-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover active:translate-y-px"
          >
            <Plus className="size-4" />
            <span className="hidden sm:inline">New recipe</span>
            <span className="sm:hidden">New</span>
          </Link>
        : <button
            type="button"
            onClick={openAuthModal}
            className="h-10 shrink-0 rounded-md border border-line bg-surface-raised px-3 text-sm font-semibold text-ink transition-colors hover:border-line-strong"
          >
            Sign in to write your own
          </button>
        }
      </div>

      {isSignedIn && (
        <div
          role="radiogroup"
          aria-label="Show"
          className="mb-4 flex gap-0.5 rounded-md bg-well p-0.5"
        >
          {(["mine", "shared", "community"] as Tab[]).map((option) => {
            const isSelected = option === activeTab;
            const count =
              option === "mine" ? mine?.length
              : option === "shared" ? shared?.length
              : undefined;
            return (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setTab(option)}
                className={`
                  h-10 flex-1 truncate rounded-sm px-1 text-xs font-medium transition-colors sm:h-9
                  ${isSelected ? "bg-surface-raised text-ink shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "text-ink-muted hover:text-ink"}
                `}
              >
                {TAB_LABELS[option]}
                {count !== undefined && (
                  <span className="ml-1 text-ink-muted">{count}</span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {grid}
    </div>
  );
};

export default UserRecipesPage;
