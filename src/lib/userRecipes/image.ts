// src/lib/userRecipes/image.ts
//
// Phone photos are 3–12 MB; a recipe card needs 320px and the detail
// page about 1200. The browser shrinks the picture before upload so the
// bucket holds a few hundred kilobytes per recipe and the upload is
// quick on a phone connection. Browser only (canvas).

export const IMAGE_MAX_EDGE = 1600;
export const IMAGE_QUALITY = 0.85;
/** Refused outright, before decoding: something is wrong with the file. */
export const IMAGE_MAX_INPUT_BYTES = 25 * 1024 * 1024;

export const ACCEPTED_IMAGE_TYPES =
  "image/jpeg,image/png,image/webp,image/heic,image/heif";

const loadBitmap = async (file: File): Promise<ImageBitmap> => {
  try {
    // Honors EXIF orientation, so a portrait phone photo stays upright.
    return await createImageBitmap(file, { imageOrientation: "from-image" });
  } catch {
    throw new Error("That file couldn't be read as an image.");
  }
};

/**
 * The file re-encoded as a JPEG no longer than IMAGE_MAX_EDGE on its
 * long side. Always re-encodes (even a small JPEG) so every upload has
 * the same type and the storage path can be fixed per recipe.
 */
export const prepareRecipeImage = async (file: File): Promise<Blob> => {
  if (file.size > IMAGE_MAX_INPUT_BYTES)
    throw new Error("That photo is too large. Try one under 25 MB.");

  const bitmap = await loadBitmap(file);
  try {
    const scale = Math.min(
      1,
      IMAGE_MAX_EDGE / Math.max(bitmap.width, bitmap.height),
    );
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Couldn't prepare the photo.");
    // PNG transparency becomes white rather than JPEG's black.
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
    context.drawImage(bitmap, 0, 0, width, height);

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", IMAGE_QUALITY),
    );
    if (!blob) throw new Error("Couldn't prepare the photo.");
    return blob;
  } finally {
    bitmap.close();
  }
};
