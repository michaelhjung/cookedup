// src/app/privacy/page.tsx
//
// Static privacy policy. Google's OAuth consent screen requires a public
// privacy-policy URL on our own domain before the app can leave Testing
// mode, and it is what the Branding page there points at. Keep this in
// step with what the app actually collects — it describes the real data
// flows (Supabase, Edamam, Google sign-in, Umami), not boilerplate.

import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Cooked Up!",
  description: "What Cooked Up! collects, why, and how to get it removed.",
};

const LAST_UPDATED = "September 14, 2026";

const PrivacyPage = () => (
  <div className="flex min-h-screen flex-col p-4 md:p-6 lg:p-8">
    <main className="mx-auto w-full max-w-2xl grow">
      <Link
        href="/"
        className="text-sm hover:underline"
      >
        ← Back to Cooked Up!
      </Link>

      <article className="mt-6 flex flex-col gap-6 text-sm sm:text-base">
        <header>
          <h1 className="text-2xl font-bold sm:text-3xl">Privacy Policy</h1>
          <p className="mt-1 text-xs opacity-60">Last updated {LAST_UPDATED}</p>
        </header>

        <p>
          Cooked Up! (<strong>cookedup.app</strong>) is a recipe finder and meal
          planner run by Michael Jung. This page explains what information the
          app handles, why, and what you can do about it. The short version: the
          app keeps only what it needs to work, never sells it, and deletes it
          when you ask.
        </p>

        <Section title="What is collected">
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>
              <strong>Your account.</strong> If you sign in with a magic link,
              that is your email address. If you sign in with Google, it is the
              name, email address, and account identifier Google shares for
              sign-in. The app never sees your Google password and asks for no
              access to your Gmail, Calendar, or anything else in your Google
              account.
            </li>
            <li>
              <strong>What you create.</strong> Recipes you save, the meal plans
              you build (plan names, meal slots, and which recipe goes where),
              and any share links or invitations you generate.
            </li>
            <li>
              <strong>Your searches.</strong> The ingredients and filters you
              search with are sent to Edamam, the recipe database the app
              queries, to fetch results. They are not stored against your
              account.
            </li>
            <li>
              <strong>Usage analytics.</strong> The app uses Umami, a
              privacy-focused analytics service, to count page views and see
              which features get used. It sets no cookies, does not track you
              across other sites, and does not identify you personally.
            </li>
            <li>
              <strong>Cookies and browser storage.</strong> A cookie keeps you
              signed in. Your light/dark theme preference is stored in your
              browser. That is the full list.
            </li>
          </ul>
        </Section>

        <Section title="How it is used">
          <p>
            To run the app: to sign you in, show you your saved recipes and meal
            plans, and let you share a plan with someone you cook for. Nothing
            is sold, rented, or used for advertising, and no marketing email is
            sent.
          </p>
        </Section>

        <Section title="Who else handles it">
          <p>
            The app is built on a few services that process data on its behalf,
            each under its own privacy policy:
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>
              <strong>Supabase</strong> — stores your account, saved recipes,
              and meal plans, and handles sign-in.
            </li>
            <li>
              <strong>Vercel</strong> — hosts the app.
            </li>
            <li>
              <strong>Edamam</strong> — the recipe search API your searches are
              sent to.
            </li>
            <li>
              <strong>Google</strong> — only if you choose to sign in with
              Google, and only to confirm who you are.
            </li>
            <li>
              <strong>Umami</strong> — anonymous usage analytics.
            </li>
          </ul>
          <p>
            Beyond those, your information is not shared with anyone unless the
            law requires it.
          </p>
        </Section>

        <Section title="Sharing a meal plan">
          <p>
            A shared plan link, and the calendar feed that goes with it, can be
            opened by anyone who has the link — treat it like any other link you
            would pass around. Inviting someone to edit a plan gives them access
            to that plan only. You can revoke a share link or an invitation at
            any time from the plan.
          </p>
        </Section>

        <Section title="Keeping and deleting it">
          <p>
            Your data is kept for as long as you have an account. To delete your
            account and everything in it — saved recipes, meal plans, share
            links — get in touch using the contact below, and it will be removed
            promptly. Signing out on its own does not delete anything.
          </p>
        </Section>

        <Section title="Children">
          <p>
            The app is not directed at children under 13, and no account
            information is knowingly collected from them.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            If this policy changes in a way that matters, the date at the top
            will move and the change will be described here.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions, or a deletion request: reach Michael through{" "}
            <a
              className="font-semibold hover:underline"
              href="https://www.michaelhjung.com"
              target="_blank"
              rel="noopener"
            >
              michaelhjung.com
            </a>
            .
          </p>
        </Section>
      </article>
    </main>

    <Footer />
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="flex flex-col gap-2">
    <h2 className="text-lg font-semibold sm:text-xl">{title}</h2>
    {children}
  </section>
);

export default PrivacyPage;
