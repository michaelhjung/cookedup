"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

import ActionSheet from "@components/ActionSheet";
import SharingSection from "@components/SharingSection";
import { useToast } from "@context/ToastContext";
import { useHousehold } from "@lib/household/useHousehold";
import { updateRecipeVisibility } from "@lib/userRecipes/client";
import { RecipeVisibility, UserRecipe } from "@lib/userRecipes/types";

interface RecipeSharingSheetProps {
  recipe: UserRecipe;
  onClose: () => void;
}

/**
 * Who can see the recipe, changed from its page: Private or Public,
 * the household, and viewer invites through the same SharingSection
 * plans and pantries use. Changes save at once; the page re-renders
 * behind the sheet so its badge agrees.
 */
const RecipeSharingSheet: React.FC<RecipeSharingSheetProps> = ({
  recipe,
  onClose,
}) => {
  const { household } = useHousehold();
  const { showToast } = useToast();
  const router = useRouter();
  const [visibility, setVisibility] = useState<RecipeVisibility>(
    recipe.visibility,
  );
  const [householdId, setHouseholdId] = useState(recipe.householdId);
  const [isBusy, setIsBusy] = useState(false);

  const changeVisibility = async (next: RecipeVisibility) => {
    if (next === visibility || isBusy) return;
    setIsBusy(true);
    try {
      await updateRecipeVisibility(recipe.id, { visibility: next });
      setVisibility(next);
      router.refresh();
    } catch (caught) {
      console.error("Failed to change visibility:", caught);
      showToast("Couldn't change who can see this recipe.");
    } finally {
      setIsBusy(false);
    }
  };

  const changeHousehold = async (next: string | null) => {
    await updateRecipeVisibility(recipe.id, { householdId: next });
    setHouseholdId(next);
    router.refresh();
  };

  return (
    <ActionSheet
      title="Sharing"
      onClose={onClose}
    >
      <div className="flex flex-col gap-4 px-1 pb-1 sm:px-2.5">
        <div>
          <div
            role="radiogroup"
            aria-label="Visibility"
            className="grid grid-cols-2 rounded-md border border-line p-0.5"
          >
            {(
              [
                { value: "private", label: "Private" },
                { value: "public", label: "Public" },
              ] as { value: RecipeVisibility; label: string }[]
            ).map((option) => {
              const isSelected = visibility === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  disabled={isBusy}
                  onClick={() => changeVisibility(option.value)}
                  className={`
                    h-9 rounded-sm px-2 text-xs font-medium transition-colors
                    ${isSelected ? "bg-ink text-surface" : "text-ink-muted hover:text-ink"}
                  `}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          <p className="mt-1.5 text-[11px] leading-snug text-ink-muted">
            {visibility === "public" ?
              "Anyone can find it under Community and open its link. Your name is shown as the author."
            : "Only you, your household if you choose below, and people you invite."
            }
          </p>
        </div>

        <SharingSection
          kind="user_recipe"
          resourceId={recipe.id}
          noun="recipe"
          householdId={householdId}
          household={household}
          isOwner
          canManage
          roles={["viewer"]}
          onVisibilityChange={changeHousehold}
          onError={showToast}
        />
      </div>
    </ActionSheet>
  );
};

export default RecipeSharingSheet;
