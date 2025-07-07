import React from "react";

import BowlIcon from "@public/icons/bowl.svg";
import ForkAndSpoonIcon from "@public/icons/fork-and-spoon.svg";
import IngredientsIcon from "@public/icons/ingedients.svg";
import RecipeBookIcon from "@public/icons/recipe-book.svg";
import VeggiesIcon from "@public/icons/veggies.svg";

interface IconProps {
  type: string;
  className?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ type, className, onClick }) => {
  const iconClasses = className || "";

  switch (type.trim().toLowerCase()) {
    case "bowl":
      return (
        <BowlIcon
          className={iconClasses}
          onClick={onClick}
        />
      );
    case "fork-and-spoon":
      return (
        <ForkAndSpoonIcon
          className={iconClasses}
          onClick={onClick}
        />
      );
    case "ingredients":
      return (
        <IngredientsIcon
          className={iconClasses}
          onClick={onClick}
        />
      );
    case "recipe-book":
      return (
        <RecipeBookIcon
          className={iconClasses}
          onClick={onClick}
        />
      );
    case "veggies":
      return (
        <VeggiesIcon
          className={iconClasses}
          onClick={onClick}
        />
      );
    default:
      return null;
  }
};

export default Icon;
