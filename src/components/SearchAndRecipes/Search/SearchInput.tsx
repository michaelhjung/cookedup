import { SearchIcon } from "lucide-react";

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
  // Whether any ingredient or filter is selected — gates Enter-to-search
  // and the placeholder hint that advertises it.
  hasSelection: boolean;
  onSearch: () => void;
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
  hasSelection,
  onSearch,
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
        if (searchInputValue) {
          handleSelectIngredient(searchInputValue);
          break;
        }

        // Empty box + something selected: run the search from right
        // here, so the flow is type → Enter → type → Enter → Enter with
        // no trip down to the pinned Search button. Focus stays on the
        // input after a pick, so this is one keystroke away.
        if (!hasSelection) break;
        setShowIngredientsList(false);
        setFocusedIngredientIndex(0);
        onSearch();
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
    <div className="relative w-full">
      <input
        ref={searchInputRef}
        className={`
          h-9 w-full
          rounded-md border border-line
          pl-9 pr-3
          text-[13px]
          transition-colors
          hover:border-line-strong focus:border-ink
        `}
        type="text"
        value={searchInput}
        placeholder={
          hasSelection ? "Add more · Enter to search" : "Add an ingredient…"
        }
        onChange={handleSearchInputChange}
        onFocus={handleSearchFocusAndClick}
        onKeyDown={handleSearchInputKeyDown}
      />
      <SearchIcon
        strokeWidth={1.75}
        className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-muted"
      />
    </div>
  );
};

export default SearchInput;
