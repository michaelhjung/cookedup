import { Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-4 flex flex-col items-center justify-center backdrop-blur-md">
      <div className="flex flex-col items-center text-xs text-slate-800 sm:text-sm">
        <p className="flex items-center gap-1 whitespace-nowrap">
          <span>Built with</span>
          <Heart className="heart w-5 h-5 text-red-300 hover:text-red-500 transition-colors ease-out duration-300 animate-pulse throb-on-hover" />
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
