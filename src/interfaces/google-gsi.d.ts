// The slice of Google Identity Services this app touches. The script is
// loaded from accounts.google.com at runtime, so there is no package to
// import types from; declared by hand rather than pulling in
// @types/google.accounts for a handful of fields.
//
// Reference: https://developers.google.com/identity/gsi/web/reference/js-reference

interface GoogleCredentialResponse {
  /** The ID token: a signed JWT carrying the user's email, name and `sub`. */
  credential: string;
  select_by: string;
}

interface GoogleIdConfiguration {
  client_id: string;
  callback: (_response: GoogleCredentialResponse) => void;
  /** SHA-256 of the value later handed to Supabase, which recomputes it. */
  nonce?: string;
}

interface GoogleButtonConfiguration {
  type?: "standard" | "icon";
  theme?: "outline" | "filled_blue" | "filled_black";
  size?: "large" | "medium" | "small";
  text?: "signin_with" | "signup_with" | "continue_with" | "signin";
  shape?: "rectangular" | "pill" | "circle" | "square";
  logo_alignment?: "left" | "center";
  /** Pixels, 200–400. */
  width?: number;
}

interface Window {
  google?: {
    accounts: {
      id: {
        initialize: (_config: GoogleIdConfiguration) => void;
        renderButton: (
          _parent: HTMLElement,
          _options: GoogleButtonConfiguration,
        ) => void;
      };
    };
  };
}
