"use client";

import React from "react";

import CheckboxFilterGroup from "@components/SearchAndRecipes/Search/FilterCategories/CheckboxFilterGroup";
import { RANDOM_RECIPE_FILTER_CATEGORIES } from "@data/randomRecipeFilters";
import { RecipeTags } from "@lib/userRecipes/types";

interface TagPickerProps {
  tags: RecipeTags;
  onChange: (_tags: RecipeTags) => void;
}

/**
 * The five tag groups, as the same hairline rows the search filters
 * use, over the same vocabulary, so a recipe tagged here answers the
 * same filters an Edamam recipe does.
 */
const TagPicker: React.FC<TagPickerProps> = ({ tags, onChange }) => (
  <div className="flex w-full flex-col border-t border-line">
    {RANDOM_RECIPE_FILTER_CATEGORIES.map((category) => {
      const values = tags[category.param];
      const selectedKeys = category.options
        .filter((option) => values.includes(option.label))
        .map((option) => option.key);

      const toggle = (key: string) => {
        const option = category.options.find(
          (candidate) => candidate.key === key,
        );
        if (!option) return;
        const next =
          values.includes(option.label) ?
            values.filter((value) => value !== option.label)
          : [...values, option.label];
        onChange({ ...tags, [category.param]: next });
      };

      return (
        <CheckboxFilterGroup
          key={category.param}
          groupLabel={category.groupLabel}
          options={category.options}
          selectedKeys={selectedKeys}
          onToggle={toggle}
          columns={
            (
              category.param === "cuisineType" ||
              category.param === "dishType" ||
              category.param === "health"
            ) ?
              2
            : 1
          }
          collapsible
          searchable={category.param === "health"}
        />
      );
    })}
  </div>
);

export default TagPicker;
