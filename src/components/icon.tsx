import React from "react";

import BowlIcon from "@public/icons/bowl.svg";
import GithubIcon from "@public/icons/github.svg";
import HeartIcon from "@public/icons/heart.svg";
import LinkArrowIcon from "@public/icons/link-arrow.svg";
import LinkedinIcon from "@public/icons/linkedin.svg";
import ConvoBubbleIcon from "@public/icons/convo-bubble.svg";
import OrigamiAirplaneIcon from "@public/icons/origami-airplane.svg";
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
    case "convobubble":
      return <ConvoBubbleIcon className={iconClasses} />;
    case "github":
      return <GithubIcon className={iconClasses} />;
    case "heart":
      return <HeartIcon className={iconClasses} />;
    case "linkarrow":
      return <LinkArrowIcon className={iconClasses} />;
    case "linkedin":
      return <LinkedinIcon className={iconClasses} />;
    case "send":
      return <OrigamiAirplaneIcon className={iconClasses} />;
    case "veggies":
      return <VeggiesIcon className={iconClasses} />;
    default:
      return null;
  }
};

export default Icon;
