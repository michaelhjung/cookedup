import { Coffee, Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

// One hairline row: credit and copyright on the left, the two links on
// the right. Ko-fi is the one thing here that asks for a click, so it's
// the one thing drawn as a button. Stacks and centers below `sm`.
const Footer = () => (
  <footer className="mt-4 flex flex-col items-center gap-3 border-t border-line pt-4 text-xs text-ink-muted sm:flex-row sm:justify-between">
    <p className="flex flex-wrap items-center justify-center gap-x-1.5">
      <span className="flex items-center gap-1">
        Made with
        <Heart className="heart size-3 fill-accent text-accent" />
        by
        <a
          className="font-medium text-ink transition-colors hover:text-accent"
          href="https://www.michaelhjung.com"
          target="_blank"
          rel="noopener"
        >
          Michael Jung
        </a>
      </span>
      <span className="opacity-50">·</span>
      <span className="tabular-nums">
        &copy; 2024&ndash;{new Date().getFullYear()}
      </span>
    </p>

    <div className="flex items-center gap-4">
      <Link
        href="/privacy"
        className="transition-colors hover:text-ink"
      >
        Privacy
      </Link>
      <a
        className="flex h-7 items-center gap-1.5 rounded-md border border-line bg-surface-raised px-2.5 font-medium text-ink transition-colors hover:border-line-strong"
        href="https://ko-fi.com/michaelhjung"
        target="_blank"
        rel="noopener"
      >
        <Coffee className="size-3.5 text-ink-muted" />
        Buy me a coffee
      </a>
    </div>
  </footer>
);

export default Footer;
