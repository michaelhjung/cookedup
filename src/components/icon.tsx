import React from "react";

import BowlIcon from "@public/icons/bowl.svg";
import CloseIcon from "@public/icons/close.svg";
import ConvoBubbleIcon from "@public/icons/convo-bubble.svg";
import ForkAndSpoonIcon from "@public/icons/fork-and-spoon.svg";
import GithubIcon from "@public/icons/github.svg";
import HeartIcon from "@public/icons/heart.svg";
import IngredientsIcon from "@public/icons/ingedients.svg";
import LinkArrowIcon from "@public/icons/link-arrow.svg";
import LinkedinIcon from "@public/icons/linkedin.svg";
import Login from "@public/icons/login.svg";
import OrigamiAirplaneIcon from "@public/icons/origami-airplane.svg";
import RecipeBookIcon from "@public/icons/recipe-book.svg";
import ResetIcon from "@public/icons/reset.svg";
import SearchIcon from "@public/icons/search.svg";
import VeggiesIcon from "@public/icons/veggies.svg";

interface IconProps {
  type: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ type, className }) => {
  const iconClasses = className || "";

  switch (type.trim().toLowerCase()) {
    case "bowl":
      return <BowlIcon className={iconClasses} />;
    case "convo-bubble":
      return <ConvoBubbleIcon className={iconClasses} />;
    case "close":
      return <CloseIcon className={iconClasses} />;
    case "fork-and-spoon":
      return <ForkAndSpoonIcon className={iconClasses} />;
    case "github":
      return <GithubIcon className={iconClasses} />;
    case "heart":
      return <HeartIcon className={iconClasses} />;
    case "ingredients":
      return <IngredientsIcon className={iconClasses} />;
    case "link-arrow":
      return <LinkArrowIcon className={iconClasses} />;
    case "linkedin":
      return <LinkedinIcon className={iconClasses} />;
    case "login":
      return <Login className={iconClasses} />;
    case "recipe-book":
      return <RecipeBookIcon className={iconClasses} />;
    case "reset":
      return <ResetIcon className={iconClasses} />;
    case "send":
      return <OrigamiAirplaneIcon className={iconClasses} />;
    case "search":
      return <SearchIcon className={iconClasses} />;
    case "veggies":
      return <VeggiesIcon className={iconClasses} />;
    default:
      return null;
  }
};

export default Icon;
