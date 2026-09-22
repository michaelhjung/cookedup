// src/lib/admin/server.ts
//
// Whether the request's user is an admin, decided in the database. The
// admin page 404s on anything but true, so a non-admin can't tell the
// route exists; the nav link is only a convenience on top of this.

import { cookies } from "next/headers";

import { createCookieSupabaseClient } from "@utils/supabase/server";

export const loadIsAdmin = async (): Promise<boolean> => {
  const cookieStore = await cookies();
  const supabase = createCookieSupabaseClient({
    getAll: () => cookieStore.getAll(),
    set: () => {},
  });

  const { data, error } = await supabase.rpc("is_app_admin");
  if (error) {
    console.error("Failed to check admin role:", error);
    return false;
  }
  return data === true;
};
