"use client";

import { Camera, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import {
  ACCEPTED_IMAGE_TYPES,
  prepareRecipeImage,
} from "@lib/userRecipes/image";

/** What the editor will do with the photo when the recipe is saved. */
export type PhotoChange =
  | { kind: "keep" }
  | { kind: "replace"; blob: Blob }
  | { kind: "remove" };

interface PhotoFieldProps {
  /** The recipe's current photo, if it has one. */
  currentUrl: string | null;
  change: PhotoChange;
  onChange: (_change: PhotoChange) => void;
  onError: (_message: string) => void;
}

/**
 * A 16:9 preview tile with a file picker behind it. The picked file is
 * shrunk in the browser at once (so a slow phone shows its progress
 * here, not on Save) and held as a blob until the recipe is saved.
 */
const PhotoField: React.FC<PhotoFieldProps> = ({
  currentUrl,
  change,
  onChange,
  onError,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPreparing, setIsPreparing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // An object URL for the pending blob, released when it changes.
  useEffect(() => {
    if (change.kind !== "replace") {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(change.blob);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [change]);

  const shownUrl =
    change.kind === "replace" ? previewUrl
    : change.kind === "remove" ? null
    : currentUrl;

  const pick = async (file: File | undefined) => {
    if (!file) return;
    setIsPreparing(true);
    try {
      onChange({ kind: "replace", blob: await prepareRecipeImage(file) });
    } catch (caught) {
      onError(
        caught instanceof Error ? caught.message : "Couldn't use that photo.",
      );
    } finally {
      setIsPreparing(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_IMAGE_TYPES}
        className="sr-only"
        onChange={(event) => pick(event.target.files?.[0])}
      />
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-line bg-well">
        {shownUrl ?
          // A plain <img>: the source is a blob URL or a bucket URL we
          // just built, neither worth routing through the optimizer.
          <img
            src={shownUrl}
            alt=""
            className="size-full object-cover"
          />
        : <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={isPreparing}
            className="flex size-full flex-col items-center justify-center gap-1.5 text-ink-muted transition-colors hover:text-ink disabled:opacity-60"
          >
            <Camera className="size-6" />
            <span className="text-xs font-medium">
              {isPreparing ? "Preparing…" : "Add a photo"}
            </span>
          </button>
        }

        {shownUrl && (
          <div className="absolute right-2 bottom-2 flex gap-1.5">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={isPreparing}
              className="flex h-8 items-center gap-1.5 rounded-md bg-surface-raised/90 px-2.5 text-xs font-medium text-ink shadow-md backdrop-blur-sm transition-colors hover:bg-surface-raised disabled:opacity-60"
            >
              <Camera className="size-3.5" />
              {isPreparing ? "Preparing…" : "Change"}
            </button>
            <button
              type="button"
              onClick={() => onChange({ kind: "remove" })}
              aria-label="Remove photo"
              className="flex size-8 items-center justify-center rounded-md bg-surface-raised/90 text-ink shadow-md backdrop-blur-sm transition-colors hover:bg-surface-raised hover:text-danger"
            >
              <X className="size-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoField;
