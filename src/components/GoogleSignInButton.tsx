"use client";

import Script from "next/script";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

import { supabase } from "@utils/supabase";

// Google's sign-in, done on this origin rather than through Supabase's
// OAuth redirect. The difference is what the consent screen names as the
// party asking: the redirect flow shows the Supabase project domain, which
// looks like a phishing page to anyone who doesn't know what Supabase is.
//
// The button is drawn here, not by Google's script. Google's own rendered
// button forces a white tile behind the logo in dark mode; drawing our
// own means using the authorization-code flow instead of the ID-token
// one, since that is the only GIS flow that allows a custom button. So:
//
//   click → Google popup (against this site's client ID) → one-time code
//   → POST /api/auth/google, which trades it for an ID token using the
//     client secret → supabase.auth.signInWithIdToken in the browser.
//
// Supabase only has to verify the ID token — signature and audience — and
// mint a session, which the browser client writes to cookies. No
// redirect, so the /auth/callback route is not involved.
//
// Console setup (once per environment):
//   Google Cloud → Credentials → OAuth client (Web application):
//     Authorized JavaScript origins = every origin the button is served
//     from, exactly (http://localhost:3000, https://www.cookedup.app).
//     No redirect URI is needed for the popup flow.
//   Supabase → Authentication → Providers → Google: enabled, with the
//     same client ID (and in "Authorized Client IDs" if that field is
//     shown — it is what the token's audience is checked against).
//   NEXT_PUBLIC_GOOGLE_CLIENT_ID = the client ID. Public by design; on
//     Vercel that means the plain/Config variable type, not Sensitive.
//     Redeploy after setting it — NEXT_PUBLIC_ values are inlined at build.
//   GOOGLE_CLIENT_SECRET = the client secret. Server-only; Sensitive is
//     right for this one.

const GSI_SCRIPT = "https://accounts.google.com/gsi/client";
const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

/** False until NEXT_PUBLIC_GOOGLE_CLIENT_ID is set; the caller hides the option. */
export const googleSignInEnabled = Boolean(CLIENT_ID);

/**
 * Google's "G" mark, in Google's own colors as their branding guidelines
 * for sign-in buttons require. Inline rather than from lucide-react,
 * which carries no brand icons.
 */
const GoogleIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 18 18"
    aria-hidden="true"
  >
    <path
      fill="#4285F4"
      d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62Z"
    />
    <path
      fill="#34A853"
      d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.83.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18Z"
    />
    <path
      fill="#FBBC05"
      d="M3.97 10.72a5.4 5.4 0 0 1 0-3.44V4.95H.96a9 9 0 0 0 0 8.1l3.01-2.33Z"
    />
    <path
      fill="#EA4335"
      d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58Z"
    />
  </svg>
);

// Colors from Google's branding guidelines for self-rendered buttons
// (light: white on #747775 border; dark: #131314 on #8E918F border), which
// unlike the script-rendered button put the logo straight on the surface.
const THEME_CLASSES = {
  light: "bg-white border-[#747775] text-[#1f1f1f] hover:bg-[#1f1f1f]/8",
  dark: "bg-[#131314] border-[#8e918f] text-[#e3e3e3] hover:bg-[#e3e3e3]/8",
};

interface Props {
  onSuccess: () => void;
  onError: (_message: string) => void;
}

const GoogleSignInButton = ({ onSuccess, onError }: Props) => {
  const { resolvedTheme } = useTheme();
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const codeClient = useRef<GoogleCodeClient | null>(null);

  // The callbacks are inline arrows in the parent and change identity on
  // every render there (each keystroke in the email field, say). Reading
  // them through a ref keeps the effect below from re-initializing on
  // each of those, while still calling whatever the parent passed last.
  const callbacks = useRef({ onSuccess, onError });
  callbacks.current = { onSuccess, onError };

  // onReady fires once the script is loaded, and again on every mount of
  // this component — the modal unmounts it on close.
  useEffect(() => {
    const google = window.google;
    if (!ready || !CLIENT_ID || !google) return;

    codeClient.current = google.accounts.oauth2.initCodeClient({
      client_id: CLIENT_ID,
      // openid is what makes Google issue an ID token alongside the rest.
      scope: "openid email profile",
      ux_mode: "popup",
      callback: async ({ code, error }) => {
        // A missing code with an error is the user declining on the
        // consent screen — their choice, not a failure to report.
        if (!code) {
          if (error && error !== "access_denied")
            callbacks.current.onError("Google sign-in failed. Try again.");
          setBusy(false);
          return;
        }

        try {
          const response = await fetch("/api/auth/google", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code }),
          });
          if (!response.ok) throw new Error(`exchange ${response.status}`);

          const { idToken } = (await response.json()) as { idToken: string };
          const { error: signInError } = await supabase.auth.signInWithIdToken({
            provider: "google",
            token: idToken,
          });
          if (signInError) throw signInError;

          callbacks.current.onSuccess();
        } catch {
          callbacks.current.onError("Google sign-in failed. Try again.");
        } finally {
          setBusy(false);
        }
      },
      // The popup was closed or blocked before Google answered.
      error_callback: () => setBusy(false),
    });
  }, [ready]);

  const handleClick = () => {
    // requestCode has to run inside the click, or the popup is blocked.
    if (!codeClient.current) return;
    setBusy(true);
    codeClient.current.requestCode();
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        disabled={!ready || busy}
        className={`
          relative flex h-10 w-full items-center justify-center
          rounded border px-3
          text-sm font-medium
          transition
          disabled:cursor-not-allowed disabled:opacity-50
          ${THEME_CLASSES[resolvedTheme === "dark" ? "dark" : "light"]}
        `}
      >
        <span className="absolute left-3 flex">
          <GoogleIcon />
        </span>
        {busy ? "Signing in..." : "Continue with Google"}
      </button>
      <Script
        src={GSI_SCRIPT}
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      />
    </>
  );
};

export default GoogleSignInButton;
