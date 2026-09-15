import { X } from "lucide-react";

// src/components/SearchAndRecipes/Search/SelectedIngredients.tsx
//
// The selected-ingredient chip row. Sits directly under the ingredient
// picker's header and above the search input (tag-input style), wraps
// and grows with no height cap of its own — the sidebar's own scroll
// region (further down, around the filters) absorbs any overflow.
// Renders nothing when empty, so it never reserves space it isn't using.

interface SelectedIngredientsProps {
  selectedIngredients: string[];
  setSelectedIngredients: React.Dispatch<React.SetStateAction<string[]>>;
}

const SelectedIngredients: React.FC<SelectedIngredientsProps> = ({
  selectedIngredients,
  setSelectedIngredients,
}) => {
  if (selectedIngredients.length === 0) return null;

  return (
    <div className="flex w-full max-w-xs flex-wrap items-center justify-center gap-2">
      {selectedIngredients.map((ingredient, index) => (
        <button
          key={index}
          type="button"
          className="group flex items-center gap-1.5 rounded-full bg-pastel-blue-tint py-1 pl-2.5 pr-1.5 text-xs transition-colors hover:bg-red-100 dark:hover:bg-red-950/40"
          onClick={() =>
            setSelectedIngredients((prev) =>
              prev.filter((ingred) => ingred !== ingredient),
            )
          }
        >
          <span className="font-medium lowercase text-blue-900 group-hover:text-red-600 dark:text-blue-100 text-[0.65rem] sm:text-xs">
            {ingredient}
          </span>
          <X className="size-3 text-blue-900/60 group-hover:text-red-600 dark:text-blue-100/60" />
        </button>
      ))}

      <button
        type="button"
        className="cursor-pointer text-[0.65rem] text-ink-muted underline-offset-2 hover:text-red-500 hover:underline sm:text-xs"
        onClick={() => setSelectedIngredients([])}
      >
        Clear all
      </button>
    </div>
  );
};

export default SelectedIngredients;
