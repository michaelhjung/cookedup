import EllipsisLoader from "@components/loaders/Ellipsis";
import { BrowseOrder, IngredientSection } from "@lib/ingredients";

interface IngredientsListProps {
  sections: IngredientSection[];
  /** Nothing typed: the list is a browse, and the order toggle shows. */
  isBrowsing: boolean;
  browseOrder: BrowseOrder;
  onBrowseOrderChange: (_order: BrowseOrder) => void;
  setShowIngredientsList: React.Dispatch<React.SetStateAction<boolean>>;
  selectedIngredients: string[];
  isLoadingIngredientsList: boolean;
  setFocusedIngredientIndex: React.Dispatch<React.SetStateAction<number>>;
  ingredientRefs: React.RefObject<(HTMLDivElement | null)[]>;
  handleSelectIngredient: (_ingredient: string) => void;
}

const BROWSE_ORDERS: { order: BrowseOrder; label: string }[] = [
  { order: "aisle", label: "By aisle" },
  { order: "alphabetical", label: "A–Z" },
];

/**
 * The dropdown under the ingredient input. Rows run in one keyboard
 * sequence across sections, so arrowing down from the last row of one
 * aisle lands on the first row of the next; the refs are indexed by
 * that flat position.
 */
const IngredientsList: React.FC<IngredientsListProps> = ({
  sections,
  isBrowsing,
  browseOrder,
  onBrowseOrderChange,
  setShowIngredientsList,
  selectedIngredients,
  isLoadingIngredientsList,
  setFocusedIngredientIndex,
  ingredientRefs,
  handleSelectIngredient,
}) => {
  const rowCount = sections.reduce(
    (count, section) => count + section.ingredients.length,
    0,
  );

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
          const nextIndex = prevIndex === 0 ? rowCount - 1 : prevIndex - 1;
          ingredientRefs.current[nextIndex]?.focus();
          return nextIndex;
        });
        break;
      case "ArrowDown":
      case "ArrowRight":
        setFocusedIngredientIndex((prevIndex: number) => {
          const nextIndex = prevIndex + 1 === rowCount ? 0 : prevIndex + 1;
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

  // Each section's rows start where the previous section's ended.
  let rowIndex = 0;

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
      <div className="flex items-center justify-between gap-2 px-2 pb-1.5 pt-1 text-xs text-ink-muted">
        <p>
          {isBrowsing ?
            "Or type to search."
          : "Pick from the list, or type your own and press Enter."}
        </p>
        {isBrowsing && (
          <div
            role="group"
            aria-label="List order"
            className="flex shrink-0 items-center gap-2"
          >
            {BROWSE_ORDERS.map(({ order, label }) => (
              <button
                key={order}
                type="button"
                aria-pressed={browseOrder === order}
                // Pointer-down rather than click so the input's blur
                // doesn't close the list before the click lands.
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => onBrowseOrderChange(order)}
                className={`rounded-sm transition-colors hover:text-ink ${
                  browseOrder === order ? "font-semibold text-ink" : ""
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {!isLoadingIngredientsList && sections.length === 0 && (
        <div className="p-2 text-ink-muted">
          No matching ingredients found. Press enter to add this custom
          ingredient to your list.
        </div>
      )}

      {isLoadingIngredientsList && <EllipsisLoader />}

      {!isLoadingIngredientsList &&
        sections.map((section) => (
          <div key={section.heading ?? "matches"}>
            {section.heading && (
              <p className="sticky top-0 z-10 -mx-1.5 bg-surface-raised px-3.5 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-muted">
                {section.heading}
              </p>
            )}
            {section.ingredients.map(({ name, category }) => {
              const index = rowIndex++;
              return (
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
                  {/* Same aisle label the pantry's add bar shows, so the
                      two pickers read as one list. Redundant under an
                      aisle heading, so left off there. */}
                  {!section.heading && (
                    <span className="shrink-0 text-xs text-ink-muted">
                      {category}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default IngredientsList;
