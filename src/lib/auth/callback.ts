/**
 * Decides where a visitor coming back from an auth redirect should land.
 *
 * Under the PKCE flow the magic links Supabase mails out return to
 * /auth/callback with a one-time `code` that has to be traded for a
 * session before the app can see the user. (Google sign-in completes on
 * the page without a redirect, so it never comes through here — but a
 * cancelled provider consent is still handled below in case that flow is
 * ever re-enabled.)
 *
 * Kept separate from the route handler so the branching is testable
 * without standing up a request.
 */

type ExchangeResult = { error: { message: string } | null };

/**
 * Only same-origin paths may be redirected to. Anything else — an
 * absolute URL, a protocol-relative "//host", or the "/\host" spelling
 * some browsers normalize to it — would turn the callback into an open
 * redirect that lands a just-authenticated user on someone else's page.
 */
const isSameOriginPath = (next: string | null): next is string =>
  !!next && /^\/(?![/\\])/.test(next);

export const resolveAuthCallback = async (
  requestUrl: string,
  exchangeCodeForSession: (_code: string) => Promise<ExchangeResult>,
): Promise<string> => {
  const url = new URL(requestUrl);
  const next = url.searchParams.get("next");
  const destination = new URL(isSameOriginPath(next) ? next : "/", url.origin);

  const code = url.searchParams.get("code");
  // Supabase forwards a provider refusal (a cancelled consent screen, say)
  // as `error` params instead of a code — there is nothing to exchange.
  const refused = url.searchParams.has("error");

  const failed =
    refused || !code || Boolean((await exchangeCodeForSession(code)).error);

  if (failed) destination.searchParams.set("auth_error", "1");

  return destination.toString();
};
