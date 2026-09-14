/**
 * The server half of Google sign-in.
 *
 * The browser gets a one-time authorization code from Google's popup and
 * posts it here. Trading that code for tokens needs the client secret,
 * which is why this step cannot happen in the browser. Only the ID token
 * is of interest — it is what Supabase's signInWithIdToken verifies.
 *
 * `fetchImpl` is injectable so the exchange can be tested without Google.
 */

const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";

export type GoogleCodeExchange =
  | { ok: true; idToken: string }
  | { ok: false; reason: string };

export const exchangeGoogleCode = async (
  code: string,
  {
    clientId,
    clientSecret,
    fetchImpl = fetch,
  }: {
    clientId: string;
    clientSecret: string;
    fetchImpl?: typeof fetch;
  },
): Promise<GoogleCodeExchange> => {
  let response: Response;
  try {
    response = await fetchImpl(TOKEN_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        // The fixed value Google expects for codes issued to a popup
        // (as opposed to a redirect) — there is no real redirect URI.
        redirect_uri: "postmessage",
        grant_type: "authorization_code",
      }).toString(),
    });
  } catch {
    return { ok: false, reason: "network" };
  }

  const body = (await response.json().catch(() => ({}))) as {
    id_token?: string;
    error?: string;
  };

  if (!response.ok) return { ok: false, reason: body.error ?? "rejected" };
  if (!body.id_token) return { ok: false, reason: "missing_id_token" };

  return { ok: true, idToken: body.id_token };
};
