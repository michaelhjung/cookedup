// src/lib/household/client.ts
//
// A household is the group of accounts that see each other's plans,
// pantries and grocery lists without sharing them one at a time. A
// person is in at most one. Membership changes that need to be atomic
// (creating, leaving) go through database functions; the rest is plain
// RLS-guarded writes.

import { fetchDisplayNames, resolveDisplayName } from "@lib/profiles/client";
import { supabase } from "@utils/supabase";

export type HouseholdRole = "admin" | "member";

export interface HouseholdMember {
  userId: string;
  email: string | null;
  /** The profile name, or the email's local part until they set one. */
  displayName: string;
  role: HouseholdRole;
  joinedAt: string;
}

export interface Household {
  id: string;
  name: string;
  /** The current user's role in it. */
  role: HouseholdRole;
  members: HouseholdMember[];
}

interface MemberRow {
  household_id: string;
  user_id: string;
  email: string | null;
  role: HouseholdRole;
  joined_at: string;
  households: { id: string; name: string } | null;
}

/** The user's household, or null if they aren't in one. */
export const fetchMyHousehold = async (
  userId: string,
): Promise<Household | null> => {
  // RLS only returns rows for the household the user is in, so this is
  // every member of it, including themselves.
  const { data, error } = await supabase
    .from("household_members")
    .select(
      "household_id, user_id, email, role, joined_at, households (id, name)",
    )
    .order("joined_at", { ascending: true });

  if (error) throw new Error(error.message);

  const rows = (data ?? []) as unknown as MemberRow[];
  const self = rows.find((row) => row.user_id === userId);
  if (!self?.households) return null;

  const names = await fetchDisplayNames(rows.map((row) => row.user_id));

  return {
    id: self.households.id,
    name: self.households.name,
    role: self.role,
    members: rows.map((row) => ({
      userId: row.user_id,
      email: row.email,
      displayName: resolveDisplayName(names.get(row.user_id), row.email),
      role: row.role,
      joinedAt: row.joined_at,
    })),
  };
};

/** Resolves to the new household's id. The creator is its first admin. */
export const createHousehold = async (name: string): Promise<string> => {
  const { data, error } = await supabase.rpc("create_household", {
    p_name: name,
  });

  if (error) throw new Error(error.message);
  return data as string;
};

export const renameHousehold = async (
  householdId: string,
  name: string,
): Promise<void> => {
  const trimmed = name.trim();
  if (!trimmed) throw new Error("Give the household a name.");

  const { error } = await supabase
    .from("households")
    .update({ name: trimmed })
    .eq("id", householdId);

  if (error) throw new Error(error.message);
};

/**
 * Personal things stay yours; household things stay with the household.
 * If you were the last admin, the longest-standing member takes over;
 * if you were the last member, the household is gone and its objects
 * revert to whoever created them.
 */
export const leaveHousehold = async (): Promise<void> => {
  const { error } = await supabase.rpc("leave_household");
  if (error) throw new Error(error.message);
};

/** Admins only. Every household object reverts to its owner. */
export const deleteHousehold = async (householdId: string): Promise<void> => {
  const { error } = await supabase
    .from("households")
    .delete()
    .eq("id", householdId);

  if (error) throw new Error(error.message);
};

export const removeMember = async (
  householdId: string,
  userId: string,
): Promise<void> => {
  const { error } = await supabase
    .from("household_members")
    .delete()
    .eq("household_id", householdId)
    .eq("user_id", userId);

  if (error) throw new Error(error.message);
};

export const setMemberRole = async (
  householdId: string,
  userId: string,
  role: HouseholdRole,
): Promise<void> => {
  const { error } = await supabase
    .from("household_members")
    .update({ role })
    .eq("household_id", householdId)
    .eq("user_id", userId);

  if (error) throw new Error(error.message);
};

export interface HouseholdSummary {
  planCount: number;
  pantryCount: number;
  listCount: number;
}

/** How much the household shares, for the "In this household" line. */
export const fetchHouseholdSummary = async (
  householdId: string,
): Promise<HouseholdSummary> => {
  const count = async (table: string): Promise<number> => {
    const { count: total, error } = await supabase
      .from(table)
      .select("id", { count: "exact", head: true })
      .eq("household_id", householdId);

    if (error) throw new Error(error.message);
    return total ?? 0;
  };

  const [planCount, pantryCount, listCount] = await Promise.all([
    count("meal_plans"),
    count("pantries"),
    count("grocery_lists"),
  ]);

  return { planCount, pantryCount, listCount };
};
