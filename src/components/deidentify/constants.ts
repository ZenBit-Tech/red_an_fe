export const DEIDENTIFICATION_METHOD = {
  REDACT: "REDACT",
  REPLACE: "REPLACE",
  MASK: "MASK",
  HASH: "HASH",
  SYNTHETIC: "SYNTHETIC",
} as const;

export type DeidentificationMethod =
  (typeof DEIDENTIFICATION_METHOD)[keyof typeof DEIDENTIFICATION_METHOD];

export interface DeidentifySettingsFormData {
  deidentificationMethod: DeidentificationMethod;
}

export const DEFAULT_DEIDENTIFY_SETTINGS: DeidentifySettingsFormData = {
  deidentificationMethod: DEIDENTIFICATION_METHOD.REDACT,
};

export const DEIDENTIFICATION_METHODS_OPTIONS = [
  DEIDENTIFICATION_METHOD.REDACT,
  DEIDENTIFICATION_METHOD.REPLACE,
  DEIDENTIFICATION_METHOD.MASK,
  DEIDENTIFICATION_METHOD.HASH,
  DEIDENTIFICATION_METHOD.SYNTHETIC,
] as const;
