// src/app/auth/callback/route.ts
//
// Where magic links land. Under the PKCE flow the link Supabase mails out
// returns here with a one-time `code` that has to be exchanged for a
// session; the exchange writes the session cookies this response carries
// back, which is why it has to happen server-side. (Google sign-in does
// not come through here — see GoogleSignInButton.)
//
// Supabase only redirects to URLs on its allow list (Authentication → URL
// Configuration → Redirect URLs); anything else silently falls back to
// the Site URL, i.e. production. Each environment needs its own entry,
// with a trailing wildcard so the `?next=` query is accepted:
//   http://localhost:3000/auth/callback**
//   https://www.cookedup.app/auth/callback**
//
// The branching lives in @lib/auth/callback so it can be tested without
// standing up a request.

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { resolveAuthCallback } from "@lib/auth/callback";
import { createCookieSupabaseClient } from "@utils/supabase/server";

export const GET = async (request: Request) => {
  const cookieStore = await cookies();
  const supabase = createCookieSupabaseClient(cookieStore);

  const destination = await resolveAuthCallback(request.url, (code) =>
    supabase.auth.exchangeCodeForSession(code),
  );

  return NextResponse.redirect(destination);
};
