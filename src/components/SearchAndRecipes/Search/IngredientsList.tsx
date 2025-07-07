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
        h-40 w-80
        sm:h-80 lg:w-64 xl:w-72 2xl:w-96
        mt-1
        text-xs sm:text-sm
        overflow-auto
        bg-[var(--pastel-brown)]/25 p-4
        backdrop-blur-lg
      `}
    >
      {ingredients.filtered.length === 0 && (
        <div>
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
            className={`rounded-lg p-1 lowercase outline-none ${
              selectedIngredients.some((ingred) => ingred === ingredient) ?
                "cursor-default italic text-gray-400"
              : "cursor-pointer hover:bg-pastel-brown/35 focus:border-2 focus:border-pastel-brown focus:bg-pastel-brown/35"
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
