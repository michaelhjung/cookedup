// src/app/api/auth/google/route.ts
//
// Turns the authorization code from Google's sign-in popup into an ID
// token. The exchange needs the client secret, so it lives here rather
// than in the browser; the browser then hands the ID token to Supabase
// itself (signInWithIdToken), which keeps session handling client-side
// exactly as it is for every other sign-in.
//
// Needs GOOGLE_CLIENT_SECRET (server-only) alongside the public
// NEXT_PUBLIC_GOOGLE_CLIENT_ID. See GoogleSignInButton for the rest of
// the console setup.

import { NextRequest, NextResponse } from "next/server";

import { exchangeGoogleCode } from "@lib/auth/googleCode";

export async function POST(req: NextRequest) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || !clientSecret)
    return NextResponse.json(
      { message: "Google sign-in is not configured." },
      { status: 503 },
    );

  let code: unknown;
  try {
    ({ code } = await req.json());
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  if (typeof code !== "string" || !code)
    return NextResponse.json({ message: "Missing code." }, { status: 400 });

  const result = await exchangeGoogleCode(code, { clientId, clientSecret });

  if (!result.ok) {
    console.error("Google code exchange failed:", result.reason);
    return NextResponse.json(
      { message: "Google sign-in failed." },
      { status: 502 },
    );
  }

  return NextResponse.json({ idToken: result.idToken });
}
