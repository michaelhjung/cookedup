"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import Bowl from "@components/loaders/Bowl";
import { useAuth } from "@context/AuthContext";
import { acceptInvite } from "@lib/mealPlan/client";

type Status = "pending" | "accepting" | "accepted" | "invalid" | "error";

/**
 * Redeems a meal-plan invite link. Accepting requires an account, so a
 * logged-out visitor is asked to sign in first — the token stays in the
 * URL, and the magic-link redirect brings them straight back here with a
 * session, at which point the effect below redeems it.
 */
const AcceptInvite: React.FC<{ token: string }> = ({ token }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [status, setStatus] = useState<Status>("pending");

  useEffect(() => {
    if (loading || !user || status !== "pending") return;

    let cancelled = false;

    const redeem = async () => {
      setStatus("accepting");
      try {
        const planId = await acceptInvite(token);
        if (cancelled) return;

        if (!planId) {
          setStatus("invalid");
          return;
        }

        setStatus("accepted");
        router.push("/plan");
      } catch (caught) {
        console.error("Failed to accept invite:", caught);
        if (!cancelled) setStatus("error");
      }
    };

    redeem();
    return () => {
      cancelled = true;
    };
  }, [user, loading, token, status, router]);

  if (loading || status === "accepting" || status === "accepted")
    return <Bowl />;

  if (!user)
    return (
      <div className="flex max-w-md flex-col items-center gap-2 text-center">
        <h2 className="text-lg font-semibold">You&rsquo;ve been invited</h2>
        <p className="text-xs text-gray-500 sm:text-sm">
          Someone shared their meal plan with you. Log in with the button in the
          top right to accept — you&rsquo;ll come straight back here.
        </p>
      </div>
    );

  return (
    <div className="flex max-w-md flex-col items-center gap-2 text-center">
      <h2 className="text-lg font-semibold">
        {status === "invalid" ?
          "This invite isn't valid"
        : "Something went wrong"}
      </h2>
      <p className="text-xs text-gray-500 sm:text-sm">
        {status === "invalid" ?
          "It may have already been used, or it may have expired. Ask whoever sent it for a fresh link."
        : "Couldn't accept that invite. Try the link again in a moment."}
      </p>
    </div>
  );
};

export default AcceptInvite;
