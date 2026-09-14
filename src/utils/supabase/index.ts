import { createBrowserClient } from "@supabase/ssr";

/**
 * The browser-side Supabase client. Browser only — it keeps the session in
 * cookies it reads and writes through `document`. Server code that needs
 * anonymous access wants `publicSupabase` from "./server" instead.
 *
 * Using the @supabase/ssr client (rather than plain `createClient`) puts
 * auth on the PKCE flow: sign-in redirects come back with a one-time
 * `code` that /auth/callback trades for a session, instead of a token in
 * the URL fragment.
 */
export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);
