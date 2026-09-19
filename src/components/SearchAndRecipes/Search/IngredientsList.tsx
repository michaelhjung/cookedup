import EllipsisLoader from "@components/loaders/Ellipsis";

interface IngredientsListProps {
  ingredients: {
    all: string[];
    filtered: string[];
  };
  setShowIngredientsList: React.Dispatch<React.SetStateAction<boolean>>;
  selectedIngredients: string[];
  isLoadingIngredientsList: boolean;
  setFocusedIngredientIndex: React.Dispatch<React.SetStateAction<number>>;
  ingredientRefs: React.RefObject<(HTMLDivElement | null)[]>;
  handleSelectIngredient: (_ingredient: string) => void;
}

const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredients,
  setShowIngredientsList,
  selectedIngredients,
  isLoadingIngredientsList,
  setFocusedIngredientIndex,
  ingredientRefs,
  handleSelectIngredient,
}) => {
  const handleIngredientsListKeyDown = (
    e: React.KeyboardEvent,
    ingredient: string,
  ) => {
    switch (e.key) {
      case "Enter":
      case " ":
        handleSelectIngredient(ingredient);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        setFocusedIngredientIndex((prevIndex: number) => {
          const nextIndex =
            prevIndex === 0 ? ingredients.filtered.length - 1 : prevIndex - 1;
          ingredientRefs.current[nextIndex]?.focus();
          return nextIndex;
        });
        break;
      case "ArrowDown":
      case "ArrowRight":
        setFocusedIngredientIndex((prevIndex: number) => {
          const nextIndex =
            prevIndex + 1 === ingredients.filtered.length ? 0 : prevIndex + 1;
          ingredientRefs.current[nextIndex]?.focus();
          return nextIndex;
        });
        break;
      case "Escape":
        setShowIngredientsList(false);
        setFocusedIngredientIndex(0);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={`
        absolute top-full z-10
        h-40 w-full sm:h-72
        mt-1.5
        text-[13px]
        overflow-auto
        rounded-md border border-line bg-surface-raised p-1.5
        shadow-lg
      `}
    >
      <p className="px-2 pb-1.5 pt-1 text-xs text-ink-muted">
        Pick from the list, or type your own and press Enter.
      </p>

      {ingredients.filtered.length === 0 && (
        <div className="p-2 text-ink-muted">
          No matching ingredients found. Press enter to add this custom
          ingredient to your list.
        </div>
      )}

      {isLoadingIngredientsList && <EllipsisLoader />}

      {!isLoadingIngredientsList &&
        ingredients.filtered.length > 0 &&
        ingredients.filtered.map((ingredient, index) => (
          <div
            key={index}
            ref={(el) => {
              ingredientRefs.current[index] = el;
            }}
            role="button"
            className={`rounded-sm px-2 py-1.5 lowercase outline-none ${
              selectedIngredients.some((ingred) => ingred === ingredient) ?
                "cursor-default italic text-ink-muted/60"
              : "cursor-pointer hover:bg-well focus:bg-well"
            }`}
            onClick={() => handleSelectIngredient(ingredient)}
            onKeyDown={(e) => handleIngredientsListKeyDown(e, ingredient)}
            tabIndex={0}
          >
            {ingredient}
          </div>
        ))}
    </div>
  );
};

export default IngredientsList;
