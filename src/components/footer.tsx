import React from "react";

import Icon from "@components/icon";

const Footer = () => {
  const heartClasses = "heart text-base animate-pulse";

  return (
    <footer className="mt-4 flex flex-col items-center justify-center backdrop-blur-md">
      <div className="flex flex-col items-center text-xs text-slate-800 sm:text-sm">
        <p className="flex items-center gap-1 whitespace-nowrap">
          <span>Built with</span>
          <Icon
            type="heart"
            className={heartClasses}
          />
          <span>by</span>
          <a
            className="font-bold text-slate-800 hover:text-pastel-green"
            href="https://www.michaelhjung.com"
            target="_blank"
            rel="noopener"
          >
            Michael Jung
          </a>
        </p>
        <span className="mt-1 text-[0.6rem] opacity-50 sm:text-xs">
          Copyright &copy; 2024-2025 Michael Jung. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
