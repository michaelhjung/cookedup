import { NextRequest, NextResponse } from "next/server";

import { publicSupabase } from "@utils/supabase/server";

/**
 * Pinged daily by the Vercel cron in vercel.json so the free-tier Supabase
 * project sees API traffic and isn't paused for inactivity (Supabase pauses
 * free projects after 7 days without requests; pg_cron inside the database
 * doesn't count, the request has to come from outside).
 *
 * A head-only count is the cheapest request that still goes through
 * PostgREST. It runs as anon, so RLS returns 0 rows -- that's fine, the
 * request itself is what matters.
 */
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get("authorization") !== `Bearer ${secret}`)
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });

  const { error } = await publicSupabase
    .from("recipes")
    .select("id", { count: "exact", head: true })
    .limit(1);

  if (error)
    return NextResponse.json({ message: error.message }, { status: 500 });

  return NextResponse.json({ ok: true, at: new Date().toISOString() });
}
