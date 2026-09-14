import { describe, expect, it, vi } from "vitest";

import { resolveAuthCallback } from "@lib/auth/callback";

const ORIGIN = "https://cookedup.example";

/** Stands in for supabase.auth.exchangeCodeForSession. */
const exchangeSucceeds = () => vi.fn(async () => ({ error: null }));
const exchangeFails = () =>
  vi.fn(async () => ({ error: { message: "invalid flow state" } }));

describe("resolveAuthCallback", () => {
  it("exchanges the code and sends the user to the app root", async () => {
    const exchange = exchangeSucceeds();

    const destination = await resolveAuthCallback(
      `${ORIGIN}/auth/callback?code=abc123`,
      exchange,
    );

    expect(exchange).toHaveBeenCalledWith("abc123");
    expect(destination).toBe(`${ORIGIN}/`);
  });

  it("returns the user to the page they logged in from", async () => {
    const destination = await resolveAuthCallback(
      `${ORIGIN}/auth/callback?code=abc123&next=%2Fplan`,
      exchangeSucceeds(),
    );

    expect(destination).toBe(`${ORIGIN}/plan`);
  });

  it("ignores an off-site next parameter", async () => {
    // Without this guard the callback is an open redirect: an attacker
    // sends ?next=https://evil.example and lands the freshly-authed user
    // on their page.
    for (const next of [
      "https://evil.example/phish",
      "//evil.example/phish",
      "http://evil.example",
      // Some browsers read a backslash here as the protocol-relative "//".
      "/\\evil.example/phish",
    ]) {
      const destination = await resolveAuthCallback(
        `${ORIGIN}/auth/callback?code=abc123&next=${encodeURIComponent(next)}`,
        exchangeSucceeds(),
      );

      expect(destination).toBe(`${ORIGIN}/`);
    }
  });

  it("flags an error and skips the exchange when no code came back", async () => {
    const exchange = exchangeSucceeds();

    const destination = await resolveAuthCallback(
      `${ORIGIN}/auth/callback`,
      exchange,
    );

    expect(exchange).not.toHaveBeenCalled();
    expect(destination).toBe(`${ORIGIN}/?auth_error=1`);
  });

  it("flags an error when the provider refuses, without exchanging", async () => {
    // Supabase forwards the provider's failure as query params — this is
    // what a user who cancels the Google consent screen comes back with.
    const exchange = exchangeSucceeds();

    const destination = await resolveAuthCallback(
      `${ORIGIN}/auth/callback?error=access_denied&error_description=User+denied`,
      exchange,
    );

    expect(exchange).not.toHaveBeenCalled();
    expect(destination).toBe(`${ORIGIN}/?auth_error=1`);
  });

  it("flags an error when the code exchange fails", async () => {
    const destination = await resolveAuthCallback(
      `${ORIGIN}/auth/callback?code=expired`,
      exchangeFails(),
    );

    expect(destination).toBe(`${ORIGIN}/?auth_error=1`);
  });

  it("keeps the user on their destination page when the exchange fails", async () => {
    const destination = await resolveAuthCallback(
      `${ORIGIN}/auth/callback?code=expired&next=%2Fplan`,
      exchangeFails(),
    );

    expect(destination).toBe(`${ORIGIN}/plan?auth_error=1`);
  });
});
