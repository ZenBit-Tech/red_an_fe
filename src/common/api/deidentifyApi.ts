import { apiClient } from "./apiClient";
import type {
  AnalyzeRequest,
  AnalyzeResponse,
  PreviewRequest,
  PreviewResponse,
} from "./deidentifyApiTypes";

const DEIDENTIFICATION_ENDPOINTS = {
  ANALYZE: "/de-identification/analyze",
  PREVIEW: "/de-identification/preview",
} as const;

export const analyzeText = async (
  request: AnalyzeRequest,
): Promise<AnalyzeResponse> => {
  try {
    const response = await apiClient.post<AnalyzeResponse, AnalyzeRequest>(
      DEIDENTIFICATION_ENDPOINTS.ANALYZE,
      request,
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Failed to analyze de-identification data");
  }
};

export const previewAnonymization = async (
  request: PreviewRequest,
): Promise<PreviewResponse> => {
  try {
    const response = await apiClient.post<PreviewResponse, PreviewRequest>(
      DEIDENTIFICATION_ENDPOINTS.PREVIEW,
      request,
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Failed to preview de-identification data");
  }
};
