"use client";

import { CircleAlert, X } from "lucide-react";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  ReactNode,
} from "react";

// Brief, non-blocking failure notices — what `window.alert()` was being
// used for. Only errors go through here; successes show inline where
// they happen (the star fills, the check appears) and don't need a
// banner on top.

const TOAST_DURATION_MS = 5000;

interface Toast {
  id: number;
  message: string;
}

interface ToastContextType {
  showToast: (_message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextIdRef = useRef(0);

  const dismissToast = useCallback((id: number) => {
    setToasts((previous) => previous.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string) => {
      const id = nextIdRef.current++;
      setToasts((previous) => [...previous, { id, message }]);
      window.setTimeout(() => dismissToast(id), TOAST_DURATION_MS);
    },
    [dismissToast],
  );

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}

      {toasts.length > 0 && (
        <div
          role="status"
          aria-live="polite"
          className="pointer-events-none fixed inset-x-0 bottom-4 z-60 flex flex-col items-center gap-2 px-4"
        >
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`
                pointer-events-auto
                flex w-full max-w-sm items-start gap-2.5
                rounded-md border border-danger/30 bg-surface-raised
                py-2.5 pl-3 pr-2
                text-sm text-ink
                shadow-lg
                animate-toast-in
              `}
            >
              <CircleAlert className="mt-0.5 size-4 shrink-0 text-danger" />
              <p className="grow">{toast.message}</p>
              <button
                type="button"
                aria-label="Dismiss"
                onClick={() => dismissToast(toast.id)}
                className="rounded-sm p-1 text-ink-muted transition-colors hover:bg-line hover:text-ink"
              >
                <X className="size-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
};
