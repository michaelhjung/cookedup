"use client";

import { Home, LogIn, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

import DemoSignIn from "@components/DemoSignIn";
import DisplayNameEditor from "@components/DisplayNameEditor";
import GoogleSignInButton, {
  googleSignInEnabled,
} from "@components/GoogleSignInButton";
import { useAuth } from "@context/AuthContext";
import { supabase } from "@utils/supabase";

const AuthButton = () => {
  const {
    user,
    loading: authLoading,
    signOut,
    isAuthModalOpen: open,
    openAuthModal,
    closeAuthModal,
    isDemoLoginEnabled,
  } = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  // Magic links come back through the callback route, which trades the
  // one-time code for a session and returns the user to the page they
  // started on. (Google signs in without leaving the page.)
  const callbackUrl = () =>
    `${window.location.origin}/auth/callback?next=${encodeURIComponent(
      window.location.pathname,
    )}`;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: callbackUrl(),
      },
    });

    setLoading(false);
    setMessage(
      error ?
        "We couldn't send the link. Try again."
      : "Check your email for a sign-in link.",
    );
  };

  // The callback route sends failures back with ?auth_error=1 rather than
  // rendering an error page of its own.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (!url.searchParams.has("auth_error")) return;

    openAuthModal();
    setMessage("That sign-in link didn't work. Try again.");

    url.searchParams.delete("auth_error");
    window.history.replaceState({}, "", url.toString());
  }, [openAuthModal]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeAuthModal();
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, closeAuthModal]);

  // Reserve the button's footprint while the session loads so the
  // header doesn't reflow once it resolves.
  if (authLoading) return <div className="h-8 w-8 sm:w-20" />;

  const initial = user?.email?.[0]?.toUpperCase() ?? "?";

  return (
    <>
      {user ?
        <button
          aria-label="Account"
          title={user.email}
          onClick={() => (open ? closeAuthModal() : openAuthModal())}
          className={`
            flex size-8 items-center justify-center
            rounded-full border border-line bg-surface-raised
            text-xs font-semibold text-ink
            transition-colors hover:border-line-strong
          `}
        >
          {initial}
        </button>
      : <button
          aria-label="Sign in"
          onClick={() => (open ? closeAuthModal() : openAuthModal())}
          className={`
            flex h-8 items-center justify-center gap-1.5
            rounded-md bg-accent px-2.5 sm:px-3.5
            text-[13px] font-semibold text-on-accent
            transition-colors hover:bg-accent-hover
          `}
        >
          <LogIn className="size-4" />
          <span className="hidden sm:inline">Sign in</span>
        </button>
      }

      {/* Modal Overlay */}
      {open && (
        <div
          className={`
            fixed inset-0 z-40
            flex items-center justify-center
            bg-scrim p-4 backdrop-blur-sm
          `}
        >
          <div
            ref={modalRef}
            className={`
              w-full max-w-sm
              rounded-lg border border-line
              bg-surface-raised
              p-5
              shadow-xl
            `}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-semibold">
                {user ? "Your account" : "Sign in"}
              </h2>
              <button
                type="button"
                aria-label="Close"
                onClick={closeAuthModal}
                className="rounded-sm p-1 text-ink-muted transition-colors hover:bg-line hover:text-ink"
              >
                <X className="size-4" />
              </button>
            </div>

            {user ?
              <div className="flex flex-col gap-3">
                <p className="text-sm text-ink-muted">
                  Signed in as{" "}
                  <strong className="text-ink">{user.email}</strong>
                </p>
                <DisplayNameEditor />
                <span className="h-px bg-line" />
                <Link
                  href="/household"
                  onClick={closeAuthModal}
                  className="flex h-10 w-full items-center justify-center gap-1.5 rounded-md border border-line text-sm font-medium text-ink transition-colors hover:border-line-strong"
                >
                  <Home className="size-4 text-ink-muted" />
                  Your household
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    closeAuthModal();
                    setMessage("");
                  }}
                  className="h-10 w-full rounded-md border border-line text-sm font-medium text-ink-muted transition-colors hover:border-danger hover:text-danger"
                >
                  Sign out
                </button>
              </div>
            : <div className="flex flex-col gap-3">
                {googleSignInEnabled && (
                  <>
                    <GoogleSignInButton
                      onSuccess={() => {
                        closeAuthModal();
                        setMessage("");
                      }}
                      onError={setMessage}
                    />

                    <div className="flex items-center gap-2 text-xs text-ink-muted">
                      <span className="h-px grow bg-line" />
                      or
                      <span className="h-px grow bg-line" />
                    </div>
                  </>
                )}

                <form
                  onSubmit={handleLogin}
                  className="flex flex-col gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="h-11 rounded-md border border-line px-3 text-sm transition-colors focus:border-ink"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="h-10 rounded-md bg-accent hover:bg-accent-hover text-sm font-semibold text-on-accent transition disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Email me a sign-in link"}
                  </button>
                </form>

                {message && (
                  <p className="text-center text-xs text-ink-muted">
                    {message}
                  </p>
                )}

                {isDemoLoginEnabled && <DemoSignIn />}
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default AuthButton;
