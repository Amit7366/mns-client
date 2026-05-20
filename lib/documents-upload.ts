import { ACCEPTED_DOCUMENT_MIME, MAX_DOCUMENT_FILE_BYTES } from "./documents-data";

export type DocumentFileError = "type" | "size" | null;

export function validateDocumentFile(file: File): DocumentFileError {
  const mime = file.type.toLowerCase();
  const okMime =
    ACCEPTED_DOCUMENT_MIME.includes(mime as (typeof ACCEPTED_DOCUMENT_MIME)[number]) ||
    /\.(jpe?g|png)$/i.test(file.name);

  if (!okMime) return "type";
  if (file.size > MAX_DOCUMENT_FILE_BYTES) return "size";
  return null;
}
