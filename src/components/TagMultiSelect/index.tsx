"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import OptionsDropdown from "./OptionsDropdown";
import { TagMultiSelectOption } from "./types";

export type { TagMultiSelectOption };

interface TagMultiSelectProps {
  options: TagMultiSelectOption[];
  selectedKeys: string[];
  onChange: (_nextSelectedKeys: string[]) => void;
  placeholder?: string;
}

const TagMultiSelect: React.FC<TagMultiSelectProps> = ({
  options,
  selectedKeys,
  onChange,
  placeholder = "Search",
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredOptions = useMemo(() => {
    const query = searchInput.trim().toLowerCase();
    if (!query) return options;
    return options.filter((option) =>
      option.label.toLowerCase().includes(query),
    );
  }, [options, searchInput]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(0);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectOption = (key: string) => {
    if (selectedKeys.includes(key)) return;
    onChange([...selectedKeys, key]);
  };

  const removeOption = (key: string) => {
    onChange(selectedKeys.filter((selectedKey) => selectedKey !== key));
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter": {
        const target = filteredOptions[focusedIndex] ?? filteredOptions[0];
        if (target) selectOption(target.key);
        break;
      }
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex(0);
        optionRefs.current[0]?.focus();
        break;
      case "Escape":
        setIsOpen(false);
        setFocusedIndex(0);
        break;
      default:
        break;
    }
  };

  const selectedOptions = options.filter((option) =>
    selectedKeys.includes(option.key),
  );

  return (
    <div
      ref={wrapperRef}
      className="relative flex w-full flex-col items-center"
    >
      <input
        className={`
          h-10 w-full max-w-xs rounded-full border-1
          px-4 text-xs outline-none
          duration-300 ease-in-out
          focus:border-[var(--pastel-blue)]
          sm:h-12 sm:text-sm
        `}
        type="text"
        value={searchInput}
        placeholder={placeholder}
        onChange={(e) => {
          setSearchInput(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleInputKeyDown}
      />

      {isOpen && (
        <OptionsDropdown
          options={filteredOptions}
          selectedKeys={selectedKeys}
          setFocusedIndex={setFocusedIndex}
          optionRefs={optionRefs}
          onSelect={selectOption}
          onClose={() => setIsOpen(false)}
        />
      )}

      {selectedOptions.length > 0 && (
        <div className="mt-3 flex w-full flex-wrap justify-center gap-2">
          {selectedOptions.map((option) => (
            <button
              key={option.key}
              type="button"
              className="group flex items-center rounded bg-blue-100 px-2 py-1 text-xs"
              onClick={() => removeOption(option.key)}
            >
              <span className="text-[0.65rem] font-semibold text-blue-800 group-hover:text-red-400 sm:text-xs">
                {option.label}
              </span>
              <span className="ml-2 text-xl text-blue-500 group-hover:font-semibold group-hover:text-red-400">
                ×
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagMultiSelect;
