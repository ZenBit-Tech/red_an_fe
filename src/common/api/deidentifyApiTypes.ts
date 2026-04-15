import type { ComplianceFramework } from "@/components/complianceSelect/constants";

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

export interface PreviewRequest {
  jobId: string;
  text: string;
  framework: ComplianceFramework;
  activeIds: string[];
}

export interface PreviewResponse {
  anonymizedText: string;
}
