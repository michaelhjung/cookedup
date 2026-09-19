// src/components/SearchAndRecipes/Search/FilterCategories/CheckboxFilterGroup.tsx

"use client";

import { ChevronDown } from "lucide-react";
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
          className="flex cursor-pointer items-start gap-2 text-[13px] text-ink"
        >
          <input
            type="checkbox"
            checked={selectedKeys.includes(option.key)}
            onChange={() => onToggle(option.key)}
            className="mt-0.5 size-3.5 shrink-0 accent-accent"
          />
          {/* Wraps rather than truncates — hiding part of a filter's
              name is worse than a slightly taller row. */}
          <span className="leading-snug">{option.label}</span>
        </label>
      ))}
      {filteredOptions.length === 0 && (
        <p className="col-span-full text-xs text-ink-muted">
          No matches for &ldquo;{search}&rdquo;.
        </p>
      )}
    </div>
  );

  const status = selectedCount > 0 ? `${selectedCount} selected` : "Any";

  if (collapsible) {
    return (
      // A hairline row: label left, the current selection and a chevron
      // right. Named group ("group/category") so the chevron follows
      // this <details> alone and not any ancestor's open state.
      <details className="group/category w-full border-b border-line text-left">
        <summary className="flex h-10 cursor-pointer items-center justify-between gap-2 text-[13px] font-medium text-ink">
          <span>{groupLabel}</span>
          <span
            className={`flex items-center gap-1 text-xs ${selectedCount > 0 ? "text-accent" : "text-ink-muted"}`}
          >
            {status}
            <ChevronDown
              strokeWidth={2}
              className="size-3.5 shrink-0 text-ink-muted transition-transform duration-200 group-open/category:rotate-180"
            />
          </span>
        </summary>
        <div className="flex flex-col gap-2 pb-3">
          {searchable && (
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${groupLabel.toLowerCase()}…`}
              className="h-8 w-full rounded-md border border-line px-2.5 text-xs outline-none transition-colors focus:border-ink"
            />
          )}
          {checkboxList}
        </div>
      </details>
    );
  }

  return (
    <div className="w-full text-left">
      <p className="mb-1 text-xs font-semibold sm:text-sm">{groupLabel}</p>
      {checkboxList}
    </div>
  );
};

export default CheckboxFilterGroup;
