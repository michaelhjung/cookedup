"use client";

import React, { useState } from "react";
import { supabase } from "@utils/supabase";

const AuthButton = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
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

  return (
    <div className="fixed right-4 top-4">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center rounded bg-white p-4 shadow-lg"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 w-full rounded border p-2"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-pastel-green px-4 py-2 text-white"
        >
          {loading ? "Sending..." : "Login/Signup"}
        </button>
        {message && <p className="mt-2 text-sm">{message}</p>}
      </form>
    </div>
  );
};

export default AuthButton;
