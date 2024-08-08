"use client";

import React, { useState } from "react";
import { supabase } from "@utils/supabase";
import { useAuth } from "@/context/AuthContext";
import Icon from "@/components/icon";

const AuthButton = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

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

    if (error) {
      console.error("Error sending magic link:", error);
      setMessage("Error sending magic link. Please try again.");
    } else {
      setMessage("Check your email for the login link!");
    }

    setLoading(false);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  if (authLoading) return null;

  return (
    <div className="fixed right-4 top-4 flex flex-col justify-end text-xs">
      {user ?
        <div className="flex flex-col items-center">
          <p>Logged in as: {user.email}</p>
          <button
            type="button"
            onClick={signOut}
            className="mt-2 rounded bg-pastel-green px-4 py-2 text-white"
          >
            Logout
          </button>
        </div>
      : <>
          <button
            type="button"
            onClick={toggleFormVisibility}
            className="mb-2 flex justify-end rounded px-4 py-2 text-white"
          >
            {isFormVisible ?
              <Icon
                type="close"
                className="text-2xl text-pastel-green"
              />
            : <Icon
                type="login"
                className="text-2xl text-pastel-green"
              />
            }
          </button>

          {isFormVisible && (
            <form
              onSubmit={handleLogin}
              className="flex flex-col items-center rounded bg-white p-4 shadow-lg"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-2 w-full rounded border p-2 outline-none duration-300 ease-in-out focus:border-pastel-blue"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded bg-pastel-green px-4 py-2 text-white"
              >
                {loading ? "Sending..." : "Login / Signup"}
              </button>
              {message && <p className="mt-2 text-sm">{message}</p>}
            </form>
          )}
        </>
      }
    </div>
  );
};

export default AuthButton;
