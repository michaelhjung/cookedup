"use client";

import { CalendarDays, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LINKS = [
  { href: "/", label: "Find Recipes", Icon: Search },
  { href: "/plan", label: "Meal Plan", Icon: CalendarDays },
] as const;

interface NavProps {
  className?: string;
}

/**
 * The app was a single page until the planner arrived, so this is its
 * first navigation of any kind. Kept to a small pill row rather than a
 * full nav bar: with two destinations, anything heavier would take up
 * more of the screen than it earns.
 */
const Nav = ({ className = "" }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center gap-1 rounded-full bg-pastel-brown-tint p-1">
        {LINKS.map(({ href, label, Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={`
                flex items-center gap-1.5
                rounded-full px-3 py-1.5
                text-xs sm:text-sm
                transition-colors
                ${
                  isActive ?
                    "bg-surface-raised font-semibold text-ink shadow-sm"
                  : "text-ink-muted hover:text-ink"
                }
              `}
            >
              <Icon className="size-3.5 sm:size-4" />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
