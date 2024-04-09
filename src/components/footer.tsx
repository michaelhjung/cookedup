import React from "react";
import Icon from "@/components/icon";

const Footer = () => {
  const heartClasses = "text-base animate-pulse hover:animate-throb";

  return (
    <footer className="flex flex-col justify-center items-center gap-6 mt-4 backdrop-blur-md">
      <div className="flex flex-col items-center text-slate-800 text-xs sm:text-sm">
        <p className="flex items-center gap-1 whitespace-nowrap">
          <span>Designed for you with</span>
          <Icon
            type="heart"
            className={heartClasses}
          />
          <span>by</span>
          <a
            className="font-bold text-slate-800 hover:text-pastel-green"
            href="https://www.michaelhjung.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Michael Jung
          </a>
        </p>
        <span className="mt-2 text-[0.6rem] sm:text-xs">
          Copyright &copy; 2024 Michael Jung. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
