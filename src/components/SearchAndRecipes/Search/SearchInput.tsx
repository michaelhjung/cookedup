import { SearchIcon } from "lucide-react";

import Tooltip from "@components/Tooltip";

interface SearchInputProps {
  ingredients: {
    all: string[];
    filtered: string[];
  };
  showIngredientsList: boolean;
  setShowIngredientsList: React.Dispatch<React.SetStateAction<boolean>>;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setFocusedIngredientIndex: React.Dispatch<React.SetStateAction<number>>;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
  ingredientRefs: React.RefObject<(HTMLDivElement | null)[]>;
  handleSelectIngredient: (_ingredient: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  ingredients,
  showIngredientsList,
  setShowIngredientsList,
  searchInput,
  setSearchInput,
  setFocusedIngredientIndex,
  searchInputRef,
  ingredientRefs,
  handleSelectIngredient,
}) => {
  const handleSearchFocusAndClick = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    handleSearchInputChange(e as React.ChangeEvent<HTMLInputElement>);
    setShowIngredientsList(true);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!showIngredientsList) setShowIngredientsList(true);
    const { value } = e.currentTarget;
    setSearchInput(value);
  };

  const handleSearchInputKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter": {
        const searchInputValue = searchInput.trim().toLowerCase();
        if (searchInputValue) handleSelectIngredient(searchInputValue);
        break;
      }
      case "ArrowUp":
      case "ArrowLeft": {
        const lastIndexInList = ingredients.filtered.length - 1;

        setFocusedIngredientIndex(lastIndexInList);
        ingredientRefs?.current[lastIndexInList]?.focus();
        break;
      }
      case "ArrowDown":
      case "ArrowRight":
        setFocusedIngredientIndex(0);
        ingredientRefs?.current[0]?.focus();
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
    <Tooltip
      text="Select from the list below or type a custom ingredient and press enter"
      isVisible={showIngredientsList}
      delay={150}
    >
      <div className="relative flex-grow">
        <input
          ref={searchInputRef}
          className={`
          h-10 max-w-[7.5rem] sm:h-12 md:max-w-[8.5rem] md:h-14
          rounded-full border-1
          py-4 pl-6 pr-12
          text-[0.65rem] sm:text-xs md:text-sm lg:text-base
          outline-none duration-300 ease-in-out
          focus:max-w-[10rem] focus:border-[var(--pastel-blue)]
        `}
          type="text"
          value={searchInput}
          placeholder="Search"
          onChange={handleSearchInputChange}
          onFocus={handleSearchFocusAndClick}
          onKeyDown={handleSearchInputKeyDown}
        />
        <SearchIcon
          strokeWidth={1.5}
          className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-gray-400"
        />
      </div>
    </Tooltip>
  );
};

export default SearchInput;
