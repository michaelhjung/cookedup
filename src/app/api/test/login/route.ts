// src/app/api/test/login/route.ts
//
// Local-only sign-in. Magic links and Google can't be driven by a button
// or by Playwright, so this signs a seeded user in server-side and sets
// the same session cookies the real flows do.
//
// Double-guarded: 404 unless the build is non-production AND
// ALLOW_TEST_LOGIN is explicitly set (see isDemoLoginEnabled).

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { isDemoLoginEnabled } from "@lib/auth/demo";
import { createCookieSupabaseClient } from "@utils/supabase/server";

export const POST = async (request: Request) => {
  if (!isDemoLoginEnabled())
    return new NextResponse("Not found", { status: 404 });

  const { email, password } = (await request.json()) as {
    email?: string;
    password?: string;
  };
  if (!email || !password)
    return new NextResponse("Email and password are required", {
      status: 400,
    });

  const cookieStore = await cookies();
  const supabase = createCookieSupabaseClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return new NextResponse(error.message, { status: 401 });

  return NextResponse.json({ ok: true });
};
