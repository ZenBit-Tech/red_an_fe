import { type DetectableEntityType } from "@/components/complianceSelect/constants";
import type { AnalyzeFinding } from "@/common/api/deidentifyApiTypes";

export type EntityType = DetectableEntityType;

export const ENTITY_TYPE_COLORS: Partial<Record<EntityType, string>> = {
  PERSON: "#FFB3BA",
  LOCATION: "#BAE1FF",
  ORGANIZATION: "#F8C8DC",
  DATE: "#CDEAC0",
  TIME: "#BDE0FE",
  MEDICAL_RECORD_NUMBER: "#E0BBE4",
  DATE_TIME: "#BAFFC9",
  PHONE_NUMBER: "#BAE1FF",
  EMAIL_ADDRESS: "#FFDFBA",
  MEDICAL_RECORD: "#FFDFD3",
  AGE: "#FFD9BA",
  ID_NUMBER: "#FFD6A5",
  NATIONAL_ID: "#E7C6FF",
  PASSPORT: "#FFADAD",
  SSN: "#FFADAD",
  CREDIT_CARD: "#FFB4A2",
  BANK_ACCOUNT: "#D8F3DC",
  ACCOUNT_NUMBER: "#D8F3DC",
  HEALTH_PLAN_BENEFICIARY_NUMBER: "#CDB4DB",
  CERTIFICATE_NUMBER: "#F1C0E8",
  VEHICLE_ID: "#CDE7BE",
  DEVICE_ID: "#BEE1E6",
  URL: "#A9DEF9",
  IP_ADDRESS: "#A9DEF9",
  BIOMETRIC_ID: "#FFC6FF",
  BIOLOGICAL_DATA: "#FFDDE1",
  PHOTO_IMAGE: "#FEC89A",
  FULL_FACE_PHOTO: "#FEC89A",
  FREE_TEXT: "#E9EDC9",
  GEOPOINT: "#B8F2E6",
  UNIQUE_IDENTIFIER: "#E5E5E5",
} as const;

export const DEFAULT_ENTITY_COLOR = "#E5E7EB";

export interface Entity {
  id: string;
  type: EntityType;
  value: string;
  startIdx: number;
  endIdx: number;
  replacement: string;
  isSelected: boolean;
  score: number;
  recognizer: string;
  patternName: string;
  originalScore: number;
  decisionFactor: "Low" | "Medium" | "High";
}

export interface AnalysisResultsState {
  entities: Entity[];
  selectedEntityIds: Set<string>;
}

// Mock data for demo purposes
export const MOCK_ENTITIES: Entity[] = [
  {
    id: "0",
    type: "PERSON",
    value: "Dr. Sarah Johnson",
    startIdx: 9,
    endIdx: 26,
    replacement: "[REDACTED]",
    isSelected: true,
    score: 0.86,
    recognizer: "Name",
    patternName: "PERSON",
    originalScore: 0.86,
    decisionFactor: "Medium",
  },
  {
    id: "1",
    type: "PERSON",
    value: "Sarah Johnson",
    startIdx: 13,
    endIdx: 26,
    replacement: "[REDACTED]",
    isSelected: true,
    score: 0.85,
    recognizer: "Name",
    patternName: "PERSON",
    originalScore: 0.85,
    decisionFactor: "Medium",
  },
  {
    id: "2",
    type: "DATE_TIME",
    value: "March 15, 2026",
    startIdx: 42,
    endIdx: 56,
    replacement: "[REDACTED]",
    isSelected: true,
    score: 0.76,
    recognizer: "Pattern",
    patternName: "DATE_TIME",
    originalScore: 0.76,
    decisionFactor: "Medium",
  },
  {
    id: "3",
    type: "MEDICAL_RECORD_NUMBER",
    value: "MRN789456123",
    startIdx: 57,
    endIdx: 71,
    replacement: "[REDACTED]",
    isSelected: true,
    score: 0.77,
    recognizer: "Name",
    patternName: "PERSON",
    originalScore: 0.77,
    decisionFactor: "Medium",
  },
  {
    id: "4",
    type: "MEDICAL_RECORD_NUMBER",
    value: "MRN789456123",
    startIdx: 80,
    endIdx: 92,
    replacement: "[REDACTED]",
    isSelected: true,
    score: 0.79,
    recognizer: "Pattern",
    patternName: "MEDICAL_RECORD_NUMBER",
    originalScore: 0.79,
    decisionFactor: "Medium",
  },
  {
    id: "5",
    type: "PERSON",
    value: "Chief Complaint",
    startIdx: 94,
    endIdx: 109,
    replacement: "[REDACTED]",
    isSelected: true,
    score: 0.87,
    recognizer: "Name",
    patternName: "PERSON",
    originalScore: 0.87,
    decisionFactor: "Medium",
  },
  {
    id: "6",
    type: "AGE",
    value: "45-year-old",
    startIdx: 128,
    endIdx: 139,
    replacement: "[REDACTED]",
    isSelected: true,
    score: 0.86,
    recognizer: "Pattern",
    patternName: "AGE",
    originalScore: 0.86,
    decisionFactor: "Medium",
  },
  {
    id: "7",
    type: "DATE_TIME",
    value: "02/28/2026",
    startIdx: 286,
    endIdx: 296,
    replacement: "[REDACTED]",
    isSelected: true,
    score: 0.94,
    recognizer: "Pattern",
    patternName: "DATE_TIME",
    originalScore: 0.94,
    decisionFactor: "High",
  },
  {
    id: "8",
    type: "PHONE_NUMBER",
    value: "555-123-4567",
    startIdx: 357,
    endIdx: 369,
    replacement: "[REDACTED]",
    isSelected: true,
    score: 0.78,
    recognizer: "Phone (Medium)",
    patternName: "PHONE_NUMBER",
    originalScore: 0.78,
    decisionFactor: "Medium",
  },
  {
    id: "9",
    type: "EMAIL_ADDRESS",
    value: "sarah.johnson@email.com",
    startIdx: 373,
    endIdx: 396,
    replacement: "[REDACTED]",
    isSelected: true,
    score: 0.82,
    recognizer: "Email (Medium)",
    patternName: "EMAIL_ADDRESS",
    originalScore: 0.82,
    decisionFactor: "Medium",
  },
  {
    id: "10",
    type: "PERSON",
    value: "Physical Address",
    startIdx: 399,
    endIdx: 415,
    replacement: "[REDACTED]",
    isSelected: true,
    score: 0.88,
    recognizer: "Name",
    patternName: "PERSON",
    originalScore: 0.88,
    decisionFactor: "Medium",
  },
  {
    id: "11",
    type: "PERSON",
    value: "Medical Center",
    startIdx: 421,
    endIdx: 435,
    replacement: "[REDACTED]",
    isSelected: true,
    score: 0.77,
    recognizer: "Name",
    patternName: "PERSON",
    originalScore: 0.77,
    decisionFactor: "Medium",
  },
];

const CONFIDENCE_HIGH_THRESHOLD = 85;
const CONFIDENCE_MEDIUM_THRESHOLD = 60;
const CONFIDENCE_PERCENT_DIVISOR = 100;

const getDecisionFactor = (confidence: number): "Low" | "Medium" | "High" => {
  if (confidence > CONFIDENCE_HIGH_THRESHOLD) return "High";
  if (confidence > CONFIDENCE_MEDIUM_THRESHOLD) return "Medium";
  return "Low";
};

export const mapFindingToEntity = (
  finding: AnalyzeFinding,
  sourceText: string,
): Entity => ({
  id: finding.id,
  type: finding.category as EntityType,
  value: sourceText.slice(finding.start, finding.end),
  startIdx: finding.start,
  endIdx: finding.end,
  replacement: `[${finding.proxyType.toUpperCase()}]`,
  isSelected: true,
  score: finding.confidence / CONFIDENCE_PERCENT_DIVISOR,
  recognizer: finding.proxyType,
  patternName: finding.category,
  originalScore: finding.confidence / CONFIDENCE_PERCENT_DIVISOR,
  decisionFactor: getDecisionFactor(finding.confidence),
});

export const TABLE_COLUMNS = {
  TYPE: "type",
  VALUE: "value",
  REPLACEMENT: "replacement",
  ACTION: "action",
} as const;

export const OUTPUT_EXPORT = {
  FILE_NAME_BASE: "deidentified-output",
  TXT_EXTENSION: ".txt",
  PDF_EXTENSION: ".pdf",
  TXT_MIME_TYPE: "text/plain;charset=utf-8",
} as const;

export const DOWNLOAD_FORMAT = {
  TXT: "txt",
  PDF: "pdf",
} as const;

export type DownloadFormat =
  (typeof DOWNLOAD_FORMAT)[keyof typeof DOWNLOAD_FORMAT];

export const PDF_EXPORT = {
  UNIT: "pt",
  FORMAT: "a4",
  FONT_SIZE: 11,
  PAGE_MARGIN: 40,
  LINE_HEIGHT: 16,
} as const;
