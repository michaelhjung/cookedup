// src/lib/sharing/client.ts
//
// One-object-at-a-time sharing, for people who aren't in a household
// (or want to share something with someone outside it). Plans, pantries
// and grocery lists all use the same two tables, keyed by kind + id, so
// this module is the only one that knows how a share or an invite is
// stored.

import { supabase } from "@utils/supabase";

export type ResourceKind =
  | "meal_plan"
  | "pantry"
  | "grocery_list"
  | "user_recipe";
export type ShareRole = "viewer" | "editor";

export interface Share {
  userId: string;
  email: string | null;
  role: ShareRole;
}

/** Where an accepted invite leads. */
export type AcceptedInvite =
  | { kind: ResourceKind; id: string }
  | { kind: "household"; id: string };

export const fetchShares = async (
  kind: ResourceKind,
  resourceId: string,
): Promise<Share[]> => {
  const { data, error } = await supabase
    .from("shares")
    .select("user_id, email, role")
    .eq("resource_kind", kind)
    .eq("resource_id", resourceId)
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);

  return (data ?? []).map((share) => ({
    userId: share.user_id,
    email: share.email,
    role: share.role,
  }));
};

export const removeShare = async (
  kind: ResourceKind,
  resourceId: string,
  userId: string,
): Promise<void> => {
  const { error } = await supabase
    .from("shares")
    .delete()
    .eq("resource_kind", kind)
    .eq("resource_id", resourceId)
    .eq("user_id", userId);

  if (error) throw new Error(error.message);
};

/**
 * Returns the invite token; the caller builds the link around it. The
 * link works for anyone who has it for seven days, then dies.
 */
export const createInvite = async (
  kind: ResourceKind | "household",
  resourceId: string,
  role: ShareRole | "member",
): Promise<string> => {
  const { data, error } = await supabase
    .from("invites")
    .insert({ resource_kind: kind, resource_id: resourceId, role })
    .select("token")
    .single();

  if (error) throw new Error(error.message);
  return data.token;
};

/**
 * Resolves to what was joined, or null if the link is dead (expired or
 * never existed — the database doesn't say which). Joining a household
 * while already in one throws with a message worth showing.
 */
export const acceptInvite = async (
  token: string,
): Promise<AcceptedInvite | null> => {
  const { data, error } = await supabase.rpc("accept_invite", {
    p_token: token,
  });

  if (error) throw new Error(error.message);

  const result = data as { kind: string; id: string } | null;
  if (!result?.id) return null;

  return result as AcceptedInvite;
};

/**
 * Who's who around one object, for "marked low · sam" and "sam is also
 * on this list": emails of everyone it's shared with, plus the
 * household's members if it's in one. The owner of a one-off shared
 * object isn't in either and shows no name.
 */
export const fetchPeople = async (
  kind: ResourceKind,
  resourceId: string,
  householdId: string | null,
): Promise<Map<string, string | null>> => {
  const [{ data: shares }, { data: members }] = await Promise.all([
    supabase
      .from("shares")
      .select("user_id, email")
      .eq("resource_kind", kind)
      .eq("resource_id", resourceId),
    householdId ?
      supabase
        .from("household_members")
        .select("user_id, email")
        .eq("household_id", householdId)
    : Promise.resolve({
        data: [] as { user_id: string; email: string | null }[],
      }),
  ]);

  const people = new Map<string, string | null>();
  for (const row of [...(members ?? []), ...(shares ?? [])])
    people.set(row.user_id, row.email);
  return people;
};

/** Where to send someone after they've accepted. */
export const getInviteDestination = (accepted: AcceptedInvite): string => {
  switch (accepted.kind) {
    case "household":
      return "/household";
    case "pantry":
      return "/pantry";
    case "grocery_list":
      return `/grocery/${accepted.id}`;
    case "user_recipe":
      return `/recipes/${accepted.id}`;
    default:
      return "/plan";
  }
};

/**
 * What to call someone when all we have is their email: the part before
 * the @. There's no profiles table, and "sam" beats "sam@example.com" in
 * a member list or a "marked low by" subline.
 */
export const getDisplayName = (email: string | null | undefined): string => {
  if (!email) return "Someone";
  const local = email.split("@")[0];
  return local || email;
};
