"use client";

import { Check, Copy } from "lucide-react";
import React, { useEffect, useState } from "react";

interface CopyableUrlProps {
  label: string;
  url: string;
}

/** A read-only link with a copy button, labelled like a form field. */
const CopyableUrl: React.FC<CopyableUrlProps> = ({ label, url }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const timer = setTimeout(() => setIsCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <div>
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        {label}
      </p>
      <div className="flex gap-1.5">
        <input
          readOnly
          value={url}
          onFocus={(event) => event.target.select()}
          className="min-w-0 flex-1 rounded-md border border-line bg-transparent px-2 py-1.5 text-[11px]"
        />
        <button
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(url).then(() => setIsCopied(true));
          }}
          aria-label={`Copy ${label}`}
          className="shrink-0 rounded-md border border-line px-2 transition-colors hover:border-line-strong"
        >
          {isCopied ?
            <Check className="size-3.5 text-success" />
          : <Copy className="size-3.5" />}
        </button>
      </div>
    </div>
  );
};

export default CopyableUrl;
