// src/lib/auth/demo.ts
//
// The local demo account's sign-in.
//
// Here rather than in scripts/seed-demo.ts so the sign-in modal can offer
// the button without pulling the seeder — and its service-role client —
// anywhere near the browser bundle. These credentials are deliberately
// public: the account only exists on a developer's machine, behind the
// same double guard as the test-login route.

export const DEMO_LOGIN = {
  email: "demo@cookedup.local",
  password: "cookedup-demo",
} as const;

/** A second account, an editor on the demo plan, for testing sharing. */
export const DEMO_SECOND_EMAIL = "friend@cookedup.local";

/**
 * Whether the "Sign in as demo" button and /api/test/login exist at all.
 * Decided on the server: on any build without both conditions the button
 * is not in the HTML and the route 404s. Never set ALLOW_TEST_LOGIN in
 * production — the NODE_ENV check is the backstop, not the plan.
 */
export const isDemoLoginEnabled = (): boolean =>
  process.env.NODE_ENV !== "production" &&
  process.env.ALLOW_TEST_LOGIN === "true";
