export const CLINICAL_INPUT_TAB = {
  ENTER_TEXT: "ENTER_TEXT",
  UPLOAD_DOCUMENT: "UPLOAD_DOCUMENT",
} as const;

export type ClinicalInputTab =
  (typeof CLINICAL_INPUT_TAB)[keyof typeof CLINICAL_INPUT_TAB];

export const SUPPORTED_FILE_EXTENSIONS = {
  TXT: ".txt",
  DOC: ".doc",
  DOCX: ".docx",
  PDF: ".pdf",
} as const;

export const SUPPORTED_FILE_EXTENSIONS_LABEL =
  ".txt, .doc, .docx, .pdf" as const;

export const FILE_INPUT_ACCEPT = [
  SUPPORTED_FILE_EXTENSIONS.TXT,
  SUPPORTED_FILE_EXTENSIONS.DOC,
  SUPPORTED_FILE_EXTENSIONS.DOCX,
  SUPPORTED_FILE_EXTENSIONS.PDF,
].join(",");

export const DEFAULT_UPLOADED_FILE_PATH = "";
export const DEFAULT_CLINICAL_TEXT = "";
export const DEFAULT_FILE_ERROR = "";
export const PDF_TEXT_JOIN_SEPARATOR = "\n";
export const EMPTY_TEXT_SEGMENT = "";
export const FILE_PATH_REDACTED_PREFIX = "C:\\fakepath\\";
export const MAX_UPLOAD_FILE_SIZE_BYTES = 5 * 1024 * 1024;
export const MAX_UPLOAD_FILE_SIZE_MB = 5;
export const MAX_CLINICAL_TEXT_CHARACTERS = 250_000;
