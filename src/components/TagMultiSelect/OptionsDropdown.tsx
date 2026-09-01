import React from "react";

import { TagMultiSelectOption } from "./types";

interface OptionsDropdownProps {
  options: TagMultiSelectOption[];
  selectedKeys: string[];
  setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
  optionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  onSelect: (_key: string) => void;
  onClose: () => void;
}

const OptionsDropdown: React.FC<OptionsDropdownProps> = ({
  options,
  selectedKeys,
  setFocusedIndex,
  optionRefs,
  onSelect,
  onClose,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "Enter":
      case " ": {
        e.preventDefault();
        const option = options[index];
        if (option) onSelect(option.key);
        break;
      }
      case "ArrowDown": {
        e.preventDefault();
        const nextIndex = index + 1 === options.length ? 0 : index + 1;
        setFocusedIndex(nextIndex);
        optionRefs.current[nextIndex]?.focus();
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const nextIndex = index === 0 ? options.length - 1 : index - 1;
        setFocusedIndex(nextIndex);
        optionRefs.current[nextIndex]?.focus();
        break;
      }
      case "Escape":
        onClose();
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
      {options.length === 0 && <div>No matching filters found.</div>}

      {options.map((option, index) => {
        const isSelected = selectedKeys.includes(option.key);
        return (
          <div
            key={option.key}
            ref={(el) => {
              optionRefs.current[index] = el;
            }}
            role="button"
            className={`rounded-lg p-1 outline-none ${
              isSelected ?
                "cursor-default italic text-gray-400"
              : "cursor-pointer hover:bg-pastel-brown/35 focus:border-2 focus:border-pastel-brown focus:bg-pastel-brown/35"
            }`}
            onClick={() => onSelect(option.key)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
};

export default OptionsDropdown;
