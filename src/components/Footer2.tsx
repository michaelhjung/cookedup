import { Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-6 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-xs sm:text-sm">
        <p className="flex items-center gap-1 tracking-wide">
          <span>Built with</span>
          <Heart className="heart w-5 h-5 text-red-300 hover:text-red-500 transition animate-pulse" />
          <span>by</span>
          <a
            className="font-semibold hover:underline"
            href="https://www.michaelhjung.com"
            target="_blank"
            rel="noopener"
          >
            Michael Jung
          </a>
        </p>
        <span className="mt-1 text-[0.65rem] sm:text-xs opacity-50 tracking-tight">
          Copyright &copy; 2024-2025 Michael Jung. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
