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

// Brief, non-blocking notices. Errors are the usual case (what
// `window.alert()` was being used for); successes show inline where
// they happen. The exception is a notice with an action, like "Onions
// checked · Undo", where the toast is the only place to put the undo.

const TOAST_DURATION_MS = 5000;

interface ToastAction {
  label: string;
  onClick: () => void;
}

interface Toast {
  id: number;
  message: string;
  tone: "error" | "info";
  action?: ToastAction;
}

interface ToastOptions {
  tone?: "error" | "info";
  action?: ToastAction;
  durationMs?: number;
}

interface ToastContextType {
  showToast: (_message: string, _options?: ToastOptions) => void;
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
    (message: string, options: ToastOptions = {}) => {
      const id = nextIdRef.current++;
      setToasts((previous) => [
        ...previous,
        { id, message, tone: options.tone ?? "error", action: options.action },
      ]);
      window.setTimeout(
        () => dismissToast(id),
        options.durationMs ?? TOAST_DURATION_MS,
      );
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
          // `--toast-inset` lets a page with its own sticky footer (the
          // grocery list's add bar) push toasts up above it.
          className="pointer-events-none fixed inset-x-0 bottom-[calc(1rem+var(--toast-inset,0px))] z-60 flex flex-col items-center gap-2 px-4"
        >
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`
                pointer-events-auto
                flex w-full max-w-sm items-start gap-2.5
                rounded-md border bg-surface-raised
                py-2.5 pl-3 pr-2
                text-sm text-ink
                shadow-lg
                animate-toast-in
                ${toast.tone === "error" ? "border-danger/30" : "border-line"}
              `}
            >
              {toast.tone === "error" && (
                <CircleAlert className="mt-0.5 size-4 shrink-0 text-danger" />
              )}
              <p className="grow">{toast.message}</p>
              {toast.action && (
                <button
                  type="button"
                  onClick={() => {
                    toast.action?.onClick();
                    dismissToast(toast.id);
                  }}
                  className="shrink-0 rounded-sm px-2 py-1 text-sm font-semibold text-accent transition-colors hover:bg-well"
                >
                  {toast.action.label}
                </button>
              )}
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
