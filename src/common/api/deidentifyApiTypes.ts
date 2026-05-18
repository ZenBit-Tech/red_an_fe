import type { ComplianceFramework } from "@/components/ComplianceSelect/constants";

export interface AnalyzeRequest {
  text: string;
  framework: ComplianceFramework;
  threshold: number;
  preserveStructure: boolean;
}

export interface AnalyzeFinding {
  id: string;
  jobId: string;
  category: string;
  confidence: number;
  start: number;
  end: number;
  proxyType: string;
}

export interface AnalyzeResponse {
  jobId: string;
  findings: AnalyzeFinding[];
}

export type PreviewValidationMode = "strict" | "warn_only";

export interface PreviewLeak {
  type: string;
  match: string;
  index: number;
}

export interface PreviewLeakSummaryItem {
  type: string;
  count: number;
}

export interface PreviewPostValidation {
  valid: boolean;
  mode: PreviewValidationMode;
  leaks: PreviewLeak[];
  summary: PreviewLeakSummaryItem[];
}

export interface PreviewRequest {
  jobId: string;
  text: string;
  framework: ComplianceFramework;
  activeIds: string[];
  validationMode?: PreviewValidationMode;
}

export interface PreviewResponse {
  anonymizedText: string;
  postValidation: PreviewPostValidation;
}

export interface GenerateSyntheticTableRequest {
  jobId: string;
  text: string;
  count: number;
  outputFormat: "txt" | "pdf";
}

export interface SyntheticTableRow {
  variantNumber: number;
  entities: Record<string, string>;
}

export interface SyntheticTableSummary {
  totalRows: number;
  generatedAt: string;
  framework: string;
}

export interface SyntheticTableResponse {
  generationId: string;
  columns: string[];
  rows: SyntheticTableRow[];
  summary: SyntheticTableSummary;
}

export interface RegenerateSyntheticTableRequest {
  count: number;
  outputFormat: "txt" | "pdf";
}

export interface SyntheticArchiveResponse {
  blob: Blob;
  fileName: string;
}

export interface PersistEntityStatusesRequest {
  jobId: string;
  activeEntityIds: string[];
}

export interface PersistEntityStatusesFinding {
  id: string;
  jobId: string;
  category: string;
  confidence: number;
  start: number;
  end: number;
  proxyType: string;
  systemStatus: "ACTIVE" | "INACTIVE";
  systemStatusReason:
    | "ANALYZER_DETECTED"
    | "POSTPROCESSOR_ADDED"
    | "FILTERED_CONTEXT"
    | "FILTERED_ALLOWLIST"
    | "FILTERED_OVERLAP"
    | "FILTERED_RULE";
  userStatus: "ACTIVE" | "INACTIVE" | null;
  userStatusReason:
    | "USER_BULK_ACTIVATE"
    | "USER_BULK_DEACTIVATE"
    | "USER_SINGLE_UPDATE"
    | "USER_RESET_OVERRIDE"
    | null;
  source: "ANALYZER" | "POSTPROCESSOR";
  effectiveStatus: "ACTIVE" | "INACTIVE";
  isSyntheticEligible: boolean;
}

export interface PersistEntityStatusesResponse {
  jobId: string;
  updatedCount: number;
  findings: PersistEntityStatusesFinding[];
}
