// src/lib/profiles/client.ts
//
// The name a person goes by in the app: the byline on their recipes,
// the member list of their household, "marked low · sam". Rows are
// public to read and made lazily; until someone sets a name, the part
// of their email before the @ stands in for it everywhere.

import type { User } from "@supabase/supabase-js";

import { getDefaultDisplayName } from "@lib/profiles/displayName";
import { supabase } from "@utils/supabase";

export {
  DISPLAY_NAME_MAX,
  getDefaultDisplayName,
  getDisplayName,
  resolveDisplayName,
} from "@lib/profiles/displayName";

export interface Profile {
  userId: string;
  displayName: string;
}

export const fetchProfile = async (userId: string): Promise<Profile | null> => {
  const { data, error } = await supabase
    .from("profiles")
    .select("user_id, display_name")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data ? { userId: data.user_id, displayName: data.display_name } : null;
};

/**
 * Display names for a set of people, keyed by user id. People without a
 * profile row are simply absent; callers fall back to the email.
 */
export const fetchDisplayNames = async (
  userIds: string[],
): Promise<Map<string, string>> => {
  const unique = [...new Set(userIds)];
  if (unique.length === 0) return new Map();

  const { data, error } = await supabase
    .from("profiles")
    .select("user_id, display_name")
    .in("user_id", unique);

  if (error) throw new Error(error.message);
  return new Map((data ?? []).map((row) => [row.user_id, row.display_name]));
};

export const saveProfile = async (
  userId: string,
  displayName: string,
): Promise<Profile> => {
  const { data, error } = await supabase
    .from("profiles")
    .upsert({ user_id: userId, display_name: displayName.trim() })
    .select("user_id, display_name")
    .single();

  if (error) throw new Error(error.message);
  return { userId: data.user_id, displayName: data.display_name };
};

/**
 * The profile, made on the spot from the email's local part if it
 * doesn't exist yet. Recipe bylines are built from it in the database,
 * so it has to exist before the first recipe is saved.
 */
export const ensureProfile = async (user: User): Promise<Profile> => {
  const existing = await fetchProfile(user.id);
  if (existing) return existing;
  return saveProfile(user.id, getDefaultDisplayName(user.email));
};
