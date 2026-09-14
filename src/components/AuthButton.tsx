"use client";

import { LogIn, X, UserRoundCheck } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

import GoogleSignInButton, {
  googleSignInEnabled,
} from "@components/GoogleSignInButton";
import { useAuth } from "@context/AuthContext";
import { supabase } from "@utils/supabase";

// The modal is w-80 with p-4 on each side; Google draws the button at a
// fixed pixel width, so it has to be told what fits.
const GOOGLE_BUTTON_WIDTH = 288;

const AuthButton = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

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
    setMessage(error ? "Error sending link. Try again." : "Check your email!");
  };

  // The callback route sends failures back with ?auth_error=1 rather than
  // rendering an error page of its own.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (!url.searchParams.has("auth_error")) return;

    setOpen(true);
    setMessage("That sign-in link didn't work. Try again.");

    url.searchParams.delete("auth_error");
    window.history.replaceState({}, "", url.toString());
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  if (authLoading) return null;

  return (
    <>
      {/* Auth Toggle Button */}
      <div className="fixed right-6 top-6 z-50">
        <button
          aria-label={open ? "Close auth modal" : "Open auth modal"}
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md hover:scale-105 transition-transform"
        >
          {open ?
            <X />
          : user ?
            <UserRoundCheck strokeWidth={1.5} />
          : <LogIn />}
        </button>
      </div>

      {/* Modal Overlay */}
      {open && (
        <div
          className={`
            fixed inset-0 z-40
            flex items-center justify-center
            backdrop-blur-sm
          `}
        >
          <div
            ref={modalRef}
            className={`
              w-80 max-w-sm
              border border-zinc-500/15 rounded-md
              p-4
              shadow-xl
              bg-[var(--background-color)]
            `}
          >
            {user ?
              <div className="flex flex-col items-center gap-2">
                <p className="text-center text-xs sm:text-sm">
                  Logged in as <strong>{user.email}</strong>
                </p>
                <button
                  onClick={() => {
                    signOut();
                    setOpen(false);
                    setMessage("");
                  }}
                  className="mt-2 w-full rounded bg-red-500 py-2 text-sm sm:text-base text-white transition hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            : <div className="flex flex-col gap-3">
                {googleSignInEnabled && (
                  <>
                    <GoogleSignInButton
                      width={GOOGLE_BUTTON_WIDTH}
                      onSuccess={() => {
                        setOpen(false);
                        setMessage("");
                      }}
                      onError={setMessage}
                    />

                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span className="h-px grow bg-zinc-500/25" />
                      or
                      <span className="h-px grow bg-zinc-500/25" />
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
                    placeholder="Enter your email"
                    required
                    className="rounded border px-3 py-2 text-sm focus:ring-1"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded py-2 hover:font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:font-normal"
                  >
                    {loading ? "Sending..." : "Login / Signup"}
                  </button>
                </form>

                {message && <p className="text-center text-xs">{message}</p>}
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default AuthButton;
