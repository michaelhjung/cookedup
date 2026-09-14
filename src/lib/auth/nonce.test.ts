import { createHash } from "node:crypto";

import { describe, expect, it } from "vitest";

import { createNonce } from "@lib/auth/nonce";

describe("createNonce", () => {
  it("pairs a raw nonce with its SHA-256 hex digest", async () => {
    // Google gets the hash and embeds it in the ID token; Supabase gets
    // the raw value, hashes it itself, and refuses the token on mismatch.
    // The two halves only protect against replay if they actually match.
    const { raw, hashed } = await createNonce();

    expect(hashed).toBe(createHash("sha256").update(raw).digest("hex"));
  });

  it("is unpredictable across calls", async () => {
    const [a, b] = await Promise.all([createNonce(), createNonce()]);

    expect(a.raw).not.toBe(b.raw);
    expect(a.raw.length).toBeGreaterThanOrEqual(32);
  });
});
