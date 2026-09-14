"use client";

import Script from "next/script";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

import { createNonce } from "@lib/auth/nonce";
import { supabase } from "@utils/supabase";

// Google's sign-in, done on this origin rather than through Supabase's
// OAuth redirect. The difference is what the consent screen names as the
// party asking: the redirect flow shows the Supabase project domain, which
// looks like a phishing page to anyone who doesn't know what Supabase is.
//
// Here Google's script renders the button, the handshake happens in a
// Google popup against *this* site's client ID, and what comes back is an
// ID token. Supabase only has to verify that token — signature, audience,
// nonce — and mint a session, which the browser client writes to cookies.
// No redirect, so the /auth/callback route is not involved.
//
// Console setup (once per environment):
//   Google Cloud → Credentials → OAuth client (Web application):
//     Authorized JavaScript origins = every origin the button is served
//     from, exactly (http://localhost:3000, https://www.cookedup.app).
//     No redirect URI is needed for this flow.
//   Supabase → Authentication → Providers → Google: enabled, with the
//     same client ID (and in "Authorized Client IDs" if that field is
//     shown — it is what the token's audience is checked against).
//   NEXT_PUBLIC_GOOGLE_CLIENT_ID = the client ID. It is public by design;
//     on Vercel that means the plain/Config variable type, not Sensitive.
//     Redeploy after setting it — NEXT_PUBLIC_ values are inlined at build.

const GSI_SCRIPT = "https://accounts.google.com/gsi/client";
const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

/** False until NEXT_PUBLIC_GOOGLE_CLIENT_ID is set; the caller hides the option. */
export const googleSignInEnabled = Boolean(CLIENT_ID);

interface Props {
  onSuccess: () => void;
  onError: (_message: string) => void;
  /** Google clamps this to 200–400px. */
  width: number;
}

const GoogleSignInButton = ({ onSuccess, onError, width }: Props) => {
  const slotRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  // onReady fires once the script is loaded, and again on every mount of
  // this component — the modal unmounts it on close, and Google's button
  // does not survive that, so it has to be drawn fresh each time.
  const [ready, setReady] = useState(false);

  // The callbacks are inline arrows in the parent and change identity on
  // every render there (each keystroke in the email field, say). Reading
  // them through a ref keeps the effect below from redrawing the button
  // on each of those, while still calling whatever the parent passed last.
  const callbacks = useRef({ onSuccess, onError });
  callbacks.current = { onSuccess, onError };

  useEffect(() => {
    const google = window.google;
    if (!ready || !CLIENT_ID || !google) return;

    let cancelled = false;

    const draw = async () => {
      const nonce = await createNonce();
      // The modal may have closed, or the theme changed again, while the
      // nonce was being generated.
      if (cancelled || !slotRef.current) return;

      google.accounts.id.initialize({
        client_id: CLIENT_ID,
        nonce: nonce.hashed,
        callback: async ({ credential }) => {
          const { error } = await supabase.auth.signInWithIdToken({
            provider: "google",
            token: credential,
            nonce: nonce.raw,
          });

          if (error)
            callbacks.current.onError("Google sign-in failed. Try again.");
          else callbacks.current.onSuccess();
        },
      });

      // renderButton appends rather than replaces, so clear any button
      // drawn for the previous theme first.
      slotRef.current.replaceChildren();
      google.accounts.id.renderButton(slotRef.current, {
        type: "standard",
        // Google's dark option is a solid black button; there is no
        // outline-on-dark variant.
        theme: resolvedTheme === "dark" ? "filled_black" : "outline",
        size: "large",
        text: "continue_with",
        width,
      });
    };

    void draw();

    return () => {
      cancelled = true;
    };
  }, [ready, resolvedTheme, width]);

  return (
    <>
      {/* Reserve the button's height so the modal doesn't jump when Google draws into it. */}
      <div
        ref={slotRef}
        className="flex justify-center min-h-10"
      />
      <Script
        src={GSI_SCRIPT}
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      />
    </>
  );
};

export default GoogleSignInButton;
