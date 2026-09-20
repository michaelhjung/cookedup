"use client";

import { useState } from "react";

import { DEMO_LOGIN } from "@lib/auth/demo";

/**
 * One click into the seeded demo account.
 *
 * Rendered only when the layout decides to — the guard is server-side, so
 * on any build without it this component is not in the HTML at all. It
 * goes through the test-login route rather than adding a second way in.
 * The session lands in cookies, which the browser client only reads on
 * load, hence the full reload rather than a router refresh.
 */
const DemoSignIn = () => {
  const [isBusy, setIsBusy] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    setIsBusy(true);
    setError("");

    const response = await fetch("/api/test/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(DEMO_LOGIN),
    });

    if (!response.ok) {
      setIsBusy(false);
      setError("No demo account yet. Run `npm run seed:demo`, then try again.");
      return;
    }

    window.location.reload();
  };

  return (
    <div className="flex flex-col gap-2 border-t border-line pt-4">
      <p className="text-xs text-ink-muted">Local development only.</p>
      <button
        type="button"
        disabled={isBusy}
        onClick={handleSignIn}
        className="h-10 w-full rounded-md border border-line text-sm font-medium text-ink-muted transition-colors hover:border-line-strong hover:text-ink disabled:opacity-60"
      >
        {isBusy ? "Signing in…" : "Sign in as demo"}
      </button>
      {error && (
        <p
          role="alert"
          className="text-xs text-danger"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default DemoSignIn;
