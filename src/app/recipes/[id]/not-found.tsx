import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@components/Footer";
import Header from "@components/Header";

export const metadata: Metadata = {
  title: "Recipe not found | Cooked Up!",
  robots: { index: false, follow: false },
};

// A private recipe and a deleted one look the same from outside, on
// purpose: the link says nothing about whether a recipe exists.
const RecipeNotFound = () => (
  <div className="flex min-h-dvh flex-col p-4 md:p-6 lg:p-8">
    <Header />

    <main
      id="main"
      className="flex grow flex-col items-center justify-center gap-3 py-16 text-center"
    >
      <p className="text-[11px] font-semibold tracking-[0.08em] text-accent tabular-nums">
        404
      </p>
      <h1 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
        No recipe here
      </h1>
      <p className="max-w-md text-sm text-ink-muted sm:text-base">
        This recipe is private, or its author has taken it down. If someone sent
        you the link, ask them to share it with you.
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        <Link
          href="/recipes"
          className="flex h-9 items-center rounded-md bg-accent px-4 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
        >
          Browse recipes
        </Link>
        <Link
          href="/"
          className="flex h-9 items-center rounded-md border border-line bg-surface-raised px-4 text-sm font-medium text-ink transition-colors hover:border-line-strong"
        >
          Search
        </Link>
      </div>
    </main>

    <Footer />
  </div>
);

export default RecipeNotFound;
