// The slice of Google Identity Services this app touches. The script is
// loaded from accounts.google.com at runtime, so there is no package to
// import types from; declared by hand rather than pulling in
// @types/google.accounts for a handful of fields.
//
// Reference: https://developers.google.com/identity/oauth2/web/reference/js-reference

interface GoogleCodeResponse {
  /** One-time authorization code; absent when `error` is set. */
  code?: string;
  /** e.g. "access_denied" when the user closes the consent popup. */
  error?: string;
  error_description?: string;
}

interface GoogleCodeClientConfig {
  client_id: string;
  /** Space-separated. Must include "openid" for an ID token to be issued. */
  scope: string;
  ux_mode?: "popup" | "redirect";
  callback: (_response: GoogleCodeResponse) => void;
  /** Fires when the popup is closed or blocked before Google answers. */
  error_callback?: (_error: { type: string }) => void;
}

interface GoogleCodeClient {
  requestCode: () => void;
}

interface Window {
  google?: {
    accounts: {
      oauth2: {
        initCodeClient: (_config: GoogleCodeClientConfig) => GoogleCodeClient;
      };
    };
  };
}
