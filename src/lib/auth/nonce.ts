/**
 * The replay guard for Google's ID-token sign-in.
 *
 * Google is given the hash and bakes it into the ID token it issues;
 * Supabase is given the raw value and checks that hashing it reproduces
 * what the token carries. A token lifted from some other site's sign-in
 * can't pass, because its nonce was minted for that site.
 *
 * Web Crypto rather than node:crypto so it runs in the browser, where
 * the sign-in actually happens.
 */
export const createNonce = async (): Promise<{
  raw: string;
  hashed: string;
}> => {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  const raw = toHex(bytes);

  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(raw),
  );

  return { raw, hashed: toHex(new Uint8Array(digest)) };
};

const toHex = (bytes: Uint8Array): string =>
  Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
