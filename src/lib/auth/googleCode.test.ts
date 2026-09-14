import { describe, expect, it, vi } from "vitest";

import { exchangeGoogleCode } from "@lib/auth/googleCode";

const CREDENTIALS = { clientId: "client-id", clientSecret: "client-secret" };

/** A fetch that answers Google's token endpoint with the given body. */
const googleResponds = (status: number, body: unknown) =>
  vi.fn(async () => new Response(JSON.stringify(body), { status }));

describe("exchangeGoogleCode", () => {
  it("trades the code for an ID token at Google's token endpoint", async () => {
    const fetchImpl = googleResponds(200, {
      id_token: "jwt",
      access_token: "x",
    });

    const result = await exchangeGoogleCode("the-code", {
      ...CREDENTIALS,
      fetchImpl,
    });

    expect(result).toEqual({ ok: true, idToken: "jwt" });

    const [url, init] = fetchImpl.mock.calls[0] as unknown as [
      string,
      RequestInit,
    ];
    expect(url).toBe("https://oauth2.googleapis.com/token");
    expect(init.method).toBe("POST");
    // Google wants the classic form encoding here, not JSON, and the
    // popup flow's fixed redirect_uri of "postmessage".
    const params = new URLSearchParams(init.body as string);
    expect(Object.fromEntries(params)).toEqual({
      code: "the-code",
      client_id: "client-id",
      client_secret: "client-secret",
      redirect_uri: "postmessage",
      grant_type: "authorization_code",
    });
  });

  it("reports Google's reason when the code is rejected", async () => {
    // A reused or expired code comes back as a 400 with an error body.
    const result = await exchangeGoogleCode("stale", {
      ...CREDENTIALS,
      fetchImpl: googleResponds(400, {
        error: "invalid_grant",
        error_description: "Bad Request",
      }),
    });

    expect(result).toEqual({ ok: false, reason: "invalid_grant" });
  });

  it("fails when a successful response carries no ID token", async () => {
    // Happens if the requested scopes omit openid.
    const result = await exchangeGoogleCode("the-code", {
      ...CREDENTIALS,
      fetchImpl: googleResponds(200, { access_token: "x" }),
    });

    expect(result).toEqual({ ok: false, reason: "missing_id_token" });
  });

  it("fails cleanly when Google cannot be reached", async () => {
    const result = await exchangeGoogleCode("the-code", {
      ...CREDENTIALS,
      fetchImpl: vi.fn(async () => {
        throw new Error("ECONNRESET");
      }),
    });

    expect(result).toEqual({ ok: false, reason: "network" });
  });
});
