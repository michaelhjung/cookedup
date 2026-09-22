// src/app/recipes/guidelines/page.tsx
//
// The rules for a public recipe. Linked from the Recipes page beside
// "New recipe" and from the editor's visibility control; the report
// sheet's reasons and the admin's rejection notes refer back to these.

import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "Community guidelines | Cooked Up!",
  description:
    "What a recipe published to the Cooked Up! community needs to be, and how review works.",
};

const LAST_UPDATED = "September 21, 2026";

const RULES: { title: string; body: ReactNode }[] = [
  {
    title: "It's a recipe",
    body: "Ingredients and steps that make something to eat or drink. A public recipe is complete enough for a stranger to cook from.",
  },
  {
    title: "It's yours, or credited",
    body: "Write recipes in your own words. If it's adapted from a book, a site or a person, say so in the Source field with a link where there is one. Don't paste someone else's text.",
  },
  {
    title: "Keep it decent",
    body: "Nothing hateful, sexual or violent, and no harassment of anyone, in the recipe or in its photo.",
  },
  {
    title: "No personal information",
    body: "No phone numbers, addresses, emails or other contact details, yours or anyone else's. Your display name is the only thing that identifies you.",
  },
  {
    title: "No ads or spam",
    body: "No advertising, affiliate links, promo codes or recipes that exist to send people somewhere else.",
  },
  {
    title: "Only photos you may use",
    body: "Your own photos, or ones you have permission to publish. Stock photos of someone else's dish don't count.",
  },
];

const GuidelinesPage = () => (
  <div className="flex min-h-dvh flex-col p-4 md:p-6 lg:p-8">
    <main
      id="main"
      className="mx-auto w-full max-w-2xl grow"
    >
      <Link
        href="/recipes"
        className="text-sm text-ink-muted transition-colors hover:text-ink hover:underline"
      >
        &larr; Back to recipes
      </Link>

      <article className="mt-6 flex flex-col gap-6 text-sm sm:text-base">
        <header>
          <h1 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Community guidelines
          </h1>
          <p className="mt-1 text-xs text-ink-muted">
            Last updated {LAST_UPDATED}
          </p>
        </header>

        <p>
          Private recipes, and ones you share with your household or by link,
          are yours to write however you like. A recipe you make{" "}
          <strong>public</strong> shows up in the Community tab for everyone,
          signed in or not, so it has to meet a few rules.
        </p>

        <ol className="flex flex-col gap-4">
          {RULES.map((rule, index) => (
            <li
              key={rule.title}
              className="flex gap-3"
            >
              <span className="w-5 shrink-0 pt-px text-sm font-semibold tabular-nums text-ink-muted">
                {index + 1}.
              </span>
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold tracking-tight">{rule.title}</h2>
                <p className="text-ink-muted">{rule.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight">
            How review works
          </h2>
          <p>
            Every recipe set to public is looked at by an admin before it
            appears in Community. Until then it shows as{" "}
            <strong>In review</strong> on your Recipes page; you, your household
            and anyone you've shared it with can still open it. Editing an
            approved recipe puts it back in review.
          </p>
          <p>
            A recipe that doesn't meet these guidelines is sent back to you as
            private with a note saying why. Fix it and publish again, and it
            goes back in the queue. A recipe that is reported after approval may
            be unpublished the same way.
          </p>
          <p>
            See something in Community that breaks these rules? Open the recipe
            and use <strong>Report</strong>.
          </p>
        </section>
      </article>
    </main>

    <Footer />
  </div>
);

export default GuidelinesPage;
