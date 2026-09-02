// src/components/SearchAndRecipes/Search/RandomRecipeFilters/CheckboxFilterGroup.tsx

"use client";

import React, { useMemo, useState } from "react";

interface CheckboxOption {
  key: string;
  label: string;
}

interface CheckboxFilterGroupProps {
  groupLabel: string;
  options: CheckboxOption[];
  selectedKeys: string[];
  // ESLint no-unused-vars requires callback params to start with _ if not used in type definition
  onToggle: (_key: string) => void;
  columns?: 1 | 2;
  // Wraps the group in a native <details> disclosure, collapsed by
  // default. Used for categories with too many options (Health) to show
  // flat without dominating the sidebar. <details> keeps everything in
  // normal document flow — no absolute positioning, so it can't repeat
  // the dropdown-clipping/overlap bugs the old TagMultiSelect had.
  collapsible?: boolean;
  // Adds a small text input above the checkboxes that filters them by
  // label. Only meaningful (and only shown) for large option lists.
  searchable?: boolean;
}

const CheckboxFilterGroup: React.FC<CheckboxFilterGroupProps> = ({
  groupLabel,
  options,
  selectedKeys,
  onToggle,
  columns = 1,
  collapsible = false,
  searchable = false,
}) => {
  const [search, setSearch] = useState("");

  const selectedCount = useMemo(
    () => options.filter((option) => selectedKeys.includes(option.key)).length,
    [options, selectedKeys],
  );

  const filteredOptions = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return options;
    return options.filter((option) =>
      option.label.toLowerCase().includes(query),
    );
  }, [options, search]);

  const checkboxList = (
    <div
      className={`
        grid gap-x-3 gap-y-1
        ${columns === 2 ? "grid-cols-2" : "grid-cols-1"}
      `}
    >
      {filteredOptions.map((option) => (
        <label
          key={option.key}
          className="flex cursor-pointer items-start gap-2 text-xs sm:text-sm"
        >
          <input
            type="checkbox"
            checked={selectedKeys.includes(option.key)}
            onChange={() => onToggle(option.key)}
            className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[var(--pastel-brown)] sm:h-4 sm:w-4"
          />
          {/* Wraps rather than truncates — hiding part of a filter's
              name is worse than a slightly taller row. */}
          <span className="leading-snug">{option.label}</span>
        </label>
      ))}
      {filteredOptions.length === 0 && (
        <p className="col-span-full text-xs text-gray-400">
          No matches for &ldquo;{search}&rdquo;.
        </p>
      )}
    </div>
  );

  const heading = `${groupLabel}${selectedCount > 0 ? ` (${selectedCount} selected)` : ""}`;

  if (collapsible) {
    return (
      <details className="w-full text-left">
        <summary className="cursor-pointer text-xs font-semibold sm:text-sm">
          {heading}
        </summary>
        <div className="mt-2 flex flex-col gap-2">
          {searchable && (
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${groupLabel.toLowerCase()}...`}
              className="h-8 w-full rounded-full border-1 px-3 text-xs outline-none focus:border-[var(--pastel-blue)]"
            />
          )}
          {checkboxList}
        </div>
      </details>
    );
  }

  return (
    <div className="w-full text-left">
      <p className="mb-1 text-xs font-semibold sm:text-sm">{heading}</p>
      {checkboxList}
    </div>
  );
};

export default CheckboxFilterGroup;
