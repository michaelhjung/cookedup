// src/lib/profiles/displayName.ts
//
// Pure helpers for what to call someone. Until a person sets a display
// name, the part of their email before the @ stands in for it.

export const DISPLAY_NAME_MAX = 40;

/**
 * What to call someone when all we have is their email: the part before
 * the @. "sam" beats "sam@example.com" in a member list.
 */
export const getDisplayName = (email: string | null | undefined): string => {
  if (!email) return "Someone";
  const local = email.split("@")[0];
  return local || email;
};

/** The default name a fresh profile gets, cut to fit the column. */
export const getDefaultDisplayName = (
  email: string | null | undefined,
): string => getDisplayName(email).slice(0, DISPLAY_NAME_MAX);

/**
 * The name to show for someone, given whatever we know about them: the
 * profile name if they've set one, else the email fallback.
 */
export const resolveDisplayName = (
  profileName: string | null | undefined,
  email: string | null | undefined,
): string => profileName?.trim() || getDisplayName(email);
