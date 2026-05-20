export const DOCUMENT_TYPE_IDS = ["nid", "passport", "driving-license"] as const;

export type DocumentTypeId = (typeof DOCUMENT_TYPE_IDS)[number];

export const MAX_DOCUMENT_FILE_BYTES = 3 * 1024 * 1024;

export const ACCEPTED_DOCUMENT_MIME = ["image/jpeg", "image/jpg", "image/png"] as const;

export type DocumentUploadSlot = "front" | "back" | "selfie";

export const DOCUMENT_UPLOAD_SLOTS: DocumentUploadSlot[] = ["front", "back", "selfie"];
