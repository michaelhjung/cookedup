interface SelectedIngredientsProps {
  selectedIngredients: string[];
  setSelectedIngredients: React.Dispatch<React.SetStateAction<string[]>>;
}

const SelectedIngredients: React.FC<SelectedIngredientsProps> = ({
  selectedIngredients,
  setSelectedIngredients,
}) => {
  return (
    <div className="h-full mt-4 flex flex-col items-center sm:h-3/5 lg:h-4/5">
      <h2 className="text-xs sm:text-sm md:text-base">Selected Ingredients:</h2>
      <div className="my-2 flex flex-wrap justify-center gap-2 overflow-auto">
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
      </div>
    </div>
  );
};

export default SelectedIngredients;
