import { createClient } from "@supabase/supabase-js";

/**
 * Creates a Supabase client scoped to a single request, authenticated as
 * the user who owns the given access token. All calls made with this
 * client (table queries, storage uploads, auth.getUser) run as that user
 * and are subject to their RLS policies.
 */
export const createAuthedSupabaseClient = (accessToken: string) =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    },
  );
