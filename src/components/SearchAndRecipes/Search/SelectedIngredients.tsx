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
          className="group flex items-center rounded bg-blue-100 px-2 py-1 text-xs"
          onClick={() =>
            setSelectedIngredients((prev) =>
              prev.filter((ingred) => ingred !== ingredient),
            )
          }
        >
          <span className="font-semibold lowercase text-blue-800 group-hover:text-red-400 text-[0.65rem] sm:text-xs">
            {ingredient}
          </span>
          <span className="ml-2 text-xl text-blue-500 group-hover:font-semibold group-hover:text-red-400">
            ×
          </span>
        </button>
      ))}

      <button
        type="button"
        className="cursor-pointer text-[0.65rem] text-gray-400 underline-offset-2 hover:text-red-400 hover:underline sm:text-xs"
        onClick={() => setSelectedIngredients([])}
      >
        Clear all
      </button>
    </div>
  );
};

export default SelectedIngredients;
