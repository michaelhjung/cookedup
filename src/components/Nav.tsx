"use client";

import { CalendarDays, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LINKS = [
  { href: "/", label: "Find recipes", Icon: Search },
  { href: "/plan", label: "Meal plan", Icon: CalendarDays },
] as const;

interface NavProps {
  className?: string;
}

/**
 * Two destinations, marked by an underline on the current one. The
 * links are as tall as the header so the underline lands on the bar's
 * own hairline rather than floating above it.
 */
const Nav = ({ className = "" }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav className={`pointer-events-none flex items-center ${className}`}>
      <div className="pointer-events-auto flex items-center gap-6">
        {LINKS.map(({ href, label, Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`
                flex h-12 items-center gap-1.5 sm:h-14
                -mb-px border-b-[1.5px]
                text-sm font-medium
                transition-colors
                ${
                  isActive ?
                    "border-accent text-ink"
                  : "border-transparent text-ink-muted hover:text-ink"
                }
              `}
            >
              <Icon
                className="size-4"
                strokeWidth={2}
              />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
