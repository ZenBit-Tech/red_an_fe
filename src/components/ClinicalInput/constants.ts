import { theme } from "@/common/theme/theme";

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
export const BYTES_PER_MB = 1024 * 1024;
export const MAX_UPLOAD_FILE_SIZE_BYTES = 5 * BYTES_PER_MB;
export const MAX_UPLOAD_FILE_SIZE_MB = 5;
export const MAX_CLINICAL_TEXT_CHARACTERS = 250_000;
export const PROGRESS_ZERO = 0;
export const PROGRESS_COMPLETE = 100;

export const SUCCESS_GREEN = "#10ac60";

export type FileUploadCardState = "processing" | "success" | "error";
export type FileBadgeKind = "PDF" | "DOC" | "TXT";

const BYTES_PER_KB = 1024;

export const formatFileSizeMb = (bytes: number): string => {
  const mb = bytes / BYTES_PER_MB;
  return mb.toFixed(1);
};

export const formatFileSize = (bytes: number): string => {
  if (bytes >= BYTES_PER_MB) {
    return `${(bytes / BYTES_PER_MB).toFixed(1)} MB`;
  }
  if (bytes >= BYTES_PER_KB) {
    return `${(bytes / BYTES_PER_KB).toFixed(0)} KB`;
  }
  return `${bytes} B`;
};

export const getFileBadgeKind = (fileName: string): FileBadgeKind => {
  const lower = fileName.toLowerCase();

  if (lower.endsWith(SUPPORTED_FILE_EXTENSIONS.PDF)) {
    return "PDF";
  }

  if (
    lower.endsWith(SUPPORTED_FILE_EXTENSIONS.DOC) ||
    lower.endsWith(SUPPORTED_FILE_EXTENSIONS.DOCX)
  ) {
    return "DOC";
  }

  return "TXT";
};

export const FILE_CARD_STATE_TO_STATUS_COLOR: Record<
  FileUploadCardState,
  string
> = {
  processing: theme.palette.primaryColors[200],
  success: SUCCESS_GREEN,
  error: theme.palette.error.main,
};

export const FILE_CARD_STATE_TO_PROGRESS_COLOR: Record<
  FileUploadCardState,
  string
> = {
  processing: theme.palette.primaryColors[200],
  success: theme.palette.primaryColors[500],
  error: theme.palette.error.main,
};

export const FILE_CARD_STATE_TO_ICON_COLOR: Record<
  FileUploadCardState,
  string
> = {
  processing: theme.palette.primaryColors[200],
  success: theme.palette.primaryColors[500],
  error: theme.palette.error.main,
};

export const FILE_BADGE_KIND_TO_COLOR: Record<FileBadgeKind, string> = {
  PDF: theme.palette.error.main,
  DOC: theme.palette.primaryColors[500],
  TXT: theme.palette.neutralColors[300],
};
