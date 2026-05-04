export const DEIDENTIFICATION_METHOD = {
  REDACT: "REDACT",
  REPLACE: "REPLACE",
  MASK: "MASK",
  HASH: "HASH",
  SYNTHETIC: "SYNTHETIC",
} as const;

export type DeidentificationMethod =
  (typeof DEIDENTIFICATION_METHOD)[keyof typeof DEIDENTIFICATION_METHOD];

export const THRESHOLD_MIN = 0;
export const THRESHOLD_MAX = 1;
export const THRESHOLD_STEP = 0.01;
export const DEFAULT_THRESHOLD = 0.5;
export const DEFAULT_PRESERVE_STRUCTURE = true;

export interface DeidentifySettingsFormData {
  deidentificationMethod: DeidentificationMethod;
  threshold: number;
  preserveStructure: boolean;
}

export const DEFAULT_DEIDENTIFY_SETTINGS: DeidentifySettingsFormData = {
  deidentificationMethod: DEIDENTIFICATION_METHOD.REDACT,
  threshold: DEFAULT_THRESHOLD,
  preserveStructure: DEFAULT_PRESERVE_STRUCTURE,
};

export const DEIDENTIFICATION_METHODS_OPTIONS = [
  DEIDENTIFICATION_METHOD.REDACT,
  DEIDENTIFICATION_METHOD.REPLACE,
  DEIDENTIFICATION_METHOD.MASK,
  DEIDENTIFICATION_METHOD.HASH,
] as const;
export const DROPDOWN_MENU_COLORS = {
  background: "#060e20",
  text: "#d9e2ff",
  border: "rgba(176, 198, 255, 0.08)",
  hoverBg: "rgba(176, 198, 255, 0.08)",
  selectedBg: "rgba(59, 130, 239, 0.25)",
  selectedHoverBg: "rgba(176, 198, 255, 0.1)",
} as const;
