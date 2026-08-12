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
  WARMUP: "/de-identification/warmup",
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

/**
 * Asks the backend to wake the Presidio analyzer.
 *
 * Presidio runs on an Eco dyno and sleeps after 30 minutes of inactivity; its
 * cold start can outlast the 30s Heroku request limit. Calling this when the
 * de-identification page opens gives it a head start while the user is still
 * pasting text.
 *
 * Best-effort by design: a failed warm-up must never surface to the user.
 */
export const warmUpAnalyzer = async (): Promise<void> => {
  try {
    await apiClient.get(DEIDENTIFICATION_ENDPOINTS.WARMUP);
  } catch {
    // ignored on purpose
  }
};
