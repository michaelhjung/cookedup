"use client";

import { LogIn, X, UserRoundCheck } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

import { useAuth } from "@context/AuthContext";
import { supabase } from "@utils/supabase";

const AuthButton = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: window.location.origin,
      },
    });

    setLoading(false);
    setMessage(error ? "Error sending link. Try again." : "Check your email!");
  };

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
          className="rounded-md hover:scale-105"
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
        <div className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-sm">
          <div
            ref={modalRef}
            className="w-80 max-w-sm border border-zinc-500/15 rounded-md p-4 shadow-xl"
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
            : <form
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
                {message && <p className="text-center text-xs">{message}</p>}
              </form>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default AuthButton;
