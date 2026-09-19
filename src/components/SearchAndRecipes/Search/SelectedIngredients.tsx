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
    <div className="flex w-full flex-wrap items-center gap-1.5">
      {selectedIngredients.map((ingredient, index) => (
        <button
          key={index}
          type="button"
          className="group flex h-7 items-center gap-1 rounded-md border border-line bg-surface-raised pl-2.5 pr-1.5 text-xs font-medium lowercase text-ink transition-colors hover:border-danger/40 hover:bg-danger-tint hover:text-danger"
          onClick={() =>
            setSelectedIngredients((prev) =>
              prev.filter((ingred) => ingred !== ingredient),
            )
          }
        >
          {ingredient}
          <X className="size-3 text-ink-muted group-hover:text-danger" />
        </button>
      ))}

      <button
        type="button"
        className="ml-1 cursor-pointer text-xs text-ink-muted underline-offset-2 hover:text-danger hover:underline"
        onClick={() => setSelectedIngredients([])}
      >
        Clear all
      </button>
    </div>
  );
};

export default SelectedIngredients;
