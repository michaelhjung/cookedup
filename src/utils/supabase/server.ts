import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";

/**
 * Creates a Supabase client scoped to a single request, authenticated as
 * the user who owns the given access token. All calls made with this
 * client (table queries, storage uploads, auth.getUser) run as that user
 * and are subject to their RLS policies.
 */
export const createAuthedSupabaseClient = (accessToken: string) =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    },
  );

/**
 * An unauthenticated client for server code that reads public data — the
 * share-token feeds go through security-definer functions and have no user
 * to act as. Separate from the browser client in "./index" because that
 * one is bound to cookies that only exist in a browser.
 */
export const publicSupabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

/**
 * A client bound to the request's cookie jar, for the auth callback to
 * write the session into after trading the PKCE code for it. Takes the
 * cookie store rather than reaching for it so the caller — a route
 * handler, where cookies are writable — owns that decision.
 */
export const createCookieSupabaseClient = (cookieStore: {
  getAll: () => { name: string; value: string }[];
  set: (_name: string, _value: string, _options: CookieOptions) => void;
}) =>
  createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookies) => {
          for (const { name, value, options } of cookies)
            cookieStore.set(name, value, options);
        },
      },
    },
  );
