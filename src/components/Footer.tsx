import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-5 flex flex-col items-center justify-center border-t border-line pt-4">
      <div className="flex flex-col items-center text-xs text-ink-muted sm:text-sm">
        <p className="flex items-center gap-1">
          <span>Crafted with</span>
          <Heart className="heart size-4 fill-pastel-orange text-pastel-orange transition-colors hover:fill-red-500 hover:text-red-500" />
          <span>by</span>
          <a
            className="font-semibold text-ink hover:underline"
            href="https://www.michaelhjung.com"
            target="_blank"
            rel="noopener"
          >
            Michael Jung
          </a>
        </p>
        <span className="mt-1 text-[0.65rem] opacity-70 sm:text-xs">
          Copyright &copy; 2024-{new Date().getFullYear()} Michael Jung. All
          rights reserved.
          {" · "}
          <Link
            href="/privacy"
            className="hover:underline"
          >
            Privacy
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
