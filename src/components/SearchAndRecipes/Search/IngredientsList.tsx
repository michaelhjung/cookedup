import EllipsisLoader from "@components/loaders/Ellipsis";
import { Ingredient } from "@lib/ingredients";

interface IngredientsListProps {
  ingredients: Ingredient[];
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
            prevIndex === 0 ? ingredients.length - 1 : prevIndex - 1;
          ingredientRefs.current[nextIndex]?.focus();
          return nextIndex;
        });
        break;
      case "ArrowDown":
      case "ArrowRight":
        setFocusedIngredientIndex((prevIndex: number) => {
          const nextIndex =
            prevIndex + 1 === ingredients.length ? 0 : prevIndex + 1;
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

      {ingredients.length === 0 && (
        <div className="p-2 text-ink-muted">
          No matching ingredients found. Press enter to add this custom
          ingredient to your list.
        </div>
      )}

      {isLoadingIngredientsList && <EllipsisLoader />}

      {!isLoadingIngredientsList &&
        ingredients.length > 0 &&
        ingredients.map(({ name, category }, index) => (
          <div
            key={name}
            ref={(el) => {
              ingredientRefs.current[index] = el;
            }}
            role="button"
            className={`flex items-center justify-between gap-3 rounded-sm px-2 py-1.5 outline-none ${
              selectedIngredients.some((ingred) => ingred === name) ?
                "cursor-default italic text-ink-muted/60"
              : "cursor-pointer hover:bg-well focus:bg-well"
            }`}
            onClick={() => handleSelectIngredient(name)}
            onKeyDown={(e) => handleIngredientsListKeyDown(e, name)}
            tabIndex={0}
          >
            <span className="truncate lowercase">{name}</span>
            {/* Same aisle label the pantry's add bar shows, so the two
                pickers read as one list. */}
            <span className="shrink-0 text-xs text-ink-muted">{category}</span>
          </div>
        ))}
    </div>
  );
};

export default IngredientsList;
