"use client";

import { User } from "@supabase/supabase-js";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { fetchIsAdmin } from "@lib/admin/client";
import { supabase } from "@utils/supabase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
  // The sign-in modal is rendered once by AuthButton in the header, but
  // signed-out prompts elsewhere (the planner, invites, the save star)
  // open it from here instead of pointing at the top-right corner.
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  /**
   * Whether the sign-in modal offers the local "Sign in as demo" button.
   * Decided by the server layout (see isDemoLoginEnabled) and only
   * carried here, so the decision never depends on a public env var.
   */
  isDemoLoginEnabled: boolean;
  /**
   * Whether the signed-in user has the admin role: the nav shows the
   * Admin link. One `app_roles` read per sign-in; the page itself
   * checks again on the server, so this is a hint, not a gate.
   */
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{
  children: ReactNode;
  isDemoLoginEnabled?: boolean;
}> = ({ children, isDemoLoginEnabled = false }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!user) {
      setIsAdmin(false);
      return;
    }
    let cancelled = false;
    fetchIsAdmin(user.id)
      .then((value) => {
        if (!cancelled) setIsAdmin(value);
      })
      .catch(() => {
        if (!cancelled) setIsAdmin(false);
      });
    return () => {
      cancelled = true;
    };
  }, [user]);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const openAuthModal = useCallback(() => setIsAuthModalOpen(true), []);
  const closeAuthModal = useCallback(() => setIsAuthModalOpen(false), []);

  const contextValue = useMemo(
    () => ({
      user,
      loading,
      signOut,
      isAuthModalOpen,
      openAuthModal,
      closeAuthModal,
      isDemoLoginEnabled,
      isAdmin,
    }),
    [
      user,
      loading,
      isAuthModalOpen,
      openAuthModal,
      closeAuthModal,
      isDemoLoginEnabled,
      isAdmin,
    ],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
