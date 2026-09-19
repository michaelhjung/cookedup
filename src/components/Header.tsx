"use client";

import Image from "next/image";
import Link from "next/link";

import AuthButton from "@components/AuthButton";
import Nav from "@components/Nav";
import ThemeToggle from "@components/ThemeToggle";
import chefBulb from "@public/logo.png";

// One hairline bar on every page: brand left, nav centered, theme and
// account on the right. Below `sm` the nav wraps onto its own row under
// the bar (`order-last w-full`) so the brand and controls keep the top
// row to themselves. The nav links stretch to the bar's full height so
// their current-page underline sits on the hairline itself.
const Header = () => (
  <header className="relative flex flex-wrap items-center gap-x-4 border-b border-line">
    <Link
      href="/"
      className="group flex h-14 items-center gap-2.5"
      aria-label="cookedup home"
    >
      <Image
        src={chefBulb}
        alt=""
        priority
        className="w-7 transition-transform duration-300 group-hover:-rotate-6"
      />
      <span className="text-[17px] font-semibold tracking-tight">cookedup</span>
    </Link>

    {/* Absolutely centered at sm+ so it sits on the page's midline
        regardless of how wide the brand and controls are. */}
    <Nav className="order-last -mt-px w-full justify-center border-t border-line sm:absolute sm:inset-x-0 sm:top-0 sm:order-none sm:mt-0 sm:w-auto sm:border-t-0" />

    <div className="ml-auto flex items-center gap-2">
      <ThemeToggle />
      <AuthButton />
    </div>
  </header>
);

export default Header;
