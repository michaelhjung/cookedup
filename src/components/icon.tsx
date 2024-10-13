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
import StarFilledIcon from "@public/icons/star-filled.svg";
import StarOutlineIcon from "@public/icons/star-outline.svg";
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
    case "convo-bubble":
      return (
        <ConvoBubbleIcon
          className={iconClasses}
          onClick={onClick}
        />
      );
    case "close":
      return (
        <CloseIcon
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
    case "github":
      return (
        <GithubIcon
          className={iconClasses}
          onClick={onClick}
        />
      );
    case "heart":
      return (
        <HeartIcon
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
    case "link-arrow":
      return (
        <LinkArrowIcon
          className={iconClasses}
          onClick={onClick}
        />
      );
    case "linkedin":
      return (
        <LinkedinIcon
          className={iconClasses}
          onClick={onClick}
        />
      );
    case "login":
      return (
        <Login
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
    case "reset":
      return (
        <ResetIcon
          className={iconClasses}
          onClick={onClick}
        />
      );
    case "send":
      return (
        <OrigamiAirplaneIcon
          className={iconClasses}
          onClick={onClick}
        />
      );
    case "search":
      return (
        <SearchIcon
          className={iconClasses}
          onClick={onClick}
        />
      );
    case "star-filled":
      return (
        <StarFilledIcon
          className={iconClasses}
          onClick={onClick}
        />
      );
    case "star-outline":
      return (
        <StarOutlineIcon
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
