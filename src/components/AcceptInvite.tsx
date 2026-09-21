"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

import Bowl from "@components/loaders/Bowl";
import { useAuth } from "@context/AuthContext";
import { acceptInvite, getInviteDestination } from "@lib/sharing/client";

type Status = "pending" | "accepting" | "accepted" | "invalid" | "error";

/**
 * Redeems an invite link — to a meal plan, a pantry, a grocery list or a
 * household — and sends the person to whatever they just joined.
 * Accepting requires an account, so a logged-out visitor is asked to
 * sign in first: the token stays in the URL, and the magic-link redirect
 * brings them straight back here with a session, at which point the
 * effect below redeems it.
 */
const AcceptInvite: React.FC<{ token: string }> = ({ token }) => {
  const { user, loading, openAuthModal } = useAuth();
  const router = useRouter();
  const [status, setStatus] = useState<Status>("pending");
  const [errorMessage, setErrorMessage] = useState("");
  // Redeeming is a write, so it must run exactly once even though React
  // (in development) mounts, unmounts and remounts the effect. A ref
  // survives that; a cleanup flag would abandon the first, real attempt.
  const hasRedeemedRef = useRef(false);

  useEffect(() => {
    if (loading || !user || hasRedeemedRef.current) return;
    hasRedeemedRef.current = true;

    const redeem = async () => {
      setStatus("accepting");
      try {
        const accepted = await acceptInvite(token);

        if (!accepted) {
          setStatus("invalid");
          return;
        }

        setStatus("accepted");
        router.push(getInviteDestination(accepted));
      } catch (caught) {
        console.error("Failed to accept invite:", caught);
        // "You're already in a household" is worth passing on verbatim;
        // anything else is a generic failure.
        setErrorMessage(
          caught instanceof Error && /household/i.test(caught.message) ?
            caught.message
          : "",
        );
        setStatus("error");
      }
    };

    redeem();
  }, [user, loading, token, router]);

  if (loading || status === "accepting" || status === "accepted")
    return <Bowl />;

  if (!user)
    return (
      <div className="flex max-w-md flex-col items-center gap-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          You&rsquo;ve been invited
        </h2>
        <p className="text-xs text-ink-muted sm:text-sm">
          Someone shared something with you. Sign in to accept, and you&rsquo;ll
          come straight back here.
        </p>
        <button
          type="button"
          onClick={openAuthModal}
          className="mt-2 h-10 rounded-md bg-accent hover:bg-accent-hover px-6 text-sm font-semibold text-on-accent transition"
        >
          Sign in
        </button>
      </div>
    );

  return (
    <div className="flex max-w-md flex-col items-center gap-2 text-center">
      <h2 className="text-2xl font-bold tracking-tight">
        {status === "invalid" ?
          "This link has expired"
        : errorMessage ?
          "Can't join yet"
        : "Something went wrong"}
      </h2>
      <p className="text-xs text-ink-muted sm:text-sm">
        {status === "invalid" ?
          "Invite links last seven days. Ask whoever sent it for a fresh one."
        : errorMessage ||
          "Couldn't accept that invite. Try the link again in a moment."
        }
      </p>
      <Link
        href={errorMessage ? "/household" : "/"}
        className="mt-2 text-xs font-semibold text-accent hover:underline"
      >
        {errorMessage ? "Go to your household" : "Back home"}
      </Link>
    </div>
  );
};

export default AcceptInvite;
