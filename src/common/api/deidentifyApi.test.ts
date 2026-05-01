import { beforeEach, describe, expect, it, vi } from "vitest";

import { COMPLIANCE_FRAMEWORK } from "@/components/ComplianceSelect/constants";
import type {
  AnalyzeRequest,
  AnalyzeResponse,
  PreviewRequest,
  PreviewResponse,
} from "./deidentifyApiTypes";

const { postMock } = vi.hoisted(() => ({
  postMock: vi.fn(),
}));

vi.mock("./apiClient", () => ({
  apiClient: {
    post: postMock,
  },
}));

import { analyzeText, previewAnonymization } from "./deidentifyApi";

describe("deidentifyApi", () => {
  beforeEach(() => {
    postMock.mockReset();
  });

  it("sends analyze request to the analyze endpoint", async () => {
    const request: AnalyzeRequest = {
      text: "Patient John Doe",
      framework: COMPLIANCE_FRAMEWORK.HIPAA,
      threshold: 0.5,
      preserveStructure: true,
    };

    const responseData: AnalyzeResponse = {
      jobId: "job-1",
      findings: [],
    };

    postMock.mockResolvedValue({ data: responseData });

    const result = await analyzeText(request);

    expect(postMock).toHaveBeenCalledWith(
      "/de-identification/analyze",
      request,
    );
    expect(result).toEqual(responseData);
  });

  it("maps unknown analyze errors to explicit Error", async () => {
    const request: AnalyzeRequest = {
      text: "Patient John Doe",
      framework: COMPLIANCE_FRAMEWORK.HIPAA,
      threshold: 0.5,
      preserveStructure: true,
    };

    postMock.mockRejectedValue("unknown");

    await expect(analyzeText(request)).rejects.toThrow(
      "Failed to analyze de-identification data",
    );
  });

  it("sends GDPR_EU framework for analyze request", async () => {
    const request: AnalyzeRequest = {
      text: "Patient Jane Doe",
      framework: COMPLIANCE_FRAMEWORK.GDPR_EU,
      threshold: 0.7,
      preserveStructure: false,
    };

    postMock.mockResolvedValue({
      data: {
        jobId: "job-2",
        findings: [],
      } satisfies AnalyzeResponse,
    });

    await analyzeText(request);

    expect(postMock).toHaveBeenCalledWith(
      "/de-identification/analyze",
      request,
    );
  });

  it("sends GDPR_UK framework for analyze request", async () => {
    const request: AnalyzeRequest = {
      text: "Patient Jane Doe",
      framework: COMPLIANCE_FRAMEWORK.GDPR_UK,
      threshold: 0.7,
      preserveStructure: false,
    };

    postMock.mockResolvedValue({
      data: {
        jobId: "job-3",
        findings: [],
      } satisfies AnalyzeResponse,
    });

    await analyzeText(request);

    expect(postMock).toHaveBeenCalledWith(
      "/de-identification/analyze",
      request,
    );
  });

  it("sends preview request to preview endpoint", async () => {
    const request: PreviewRequest = {
      jobId: "job-1",
      text: "Patient John Doe",
      framework: COMPLIANCE_FRAMEWORK.HIPAA,
      activeIds: ["finding-1"],
    };

    const responseData: PreviewResponse = {
      anonymizedText: "Patient [PERSON]",
    };

    postMock.mockResolvedValue({ data: responseData });

    const result = await previewAnonymization(request);

    expect(postMock).toHaveBeenCalledWith(
      "/de-identification/preview",
      request,
    );
    expect(result).toEqual(responseData);
  });

  it("sends GDPR_EU framework for preview request", async () => {
    const request: PreviewRequest = {
      jobId: "job-4",
      text: "Patient John Doe",
      framework: COMPLIANCE_FRAMEWORK.GDPR_EU,
      activeIds: ["finding-1"],
    };

    postMock.mockResolvedValue({
      data: {
        anonymizedText: "Patient [PERSON]",
      } satisfies PreviewResponse,
    });

    await previewAnonymization(request);

    expect(postMock).toHaveBeenCalledWith(
      "/de-identification/preview",
      request,
    );
  });

  it("sends GDPR_UK framework for preview request", async () => {
    const request: PreviewRequest = {
      jobId: "job-5",
      text: "Patient John Doe",
      framework: COMPLIANCE_FRAMEWORK.GDPR_UK,
      activeIds: ["finding-1"],
    };

    postMock.mockResolvedValue({
      data: {
        anonymizedText: "Patient [PERSON]",
      } satisfies PreviewResponse,
    });

    await previewAnonymization(request);

    expect(postMock).toHaveBeenCalledWith(
      "/de-identification/preview",
      request,
    );
  });
});
