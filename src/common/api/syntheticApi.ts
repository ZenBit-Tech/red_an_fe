import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiClient } from "@/common/api/apiClient";
import type {
  GenerateSyntheticTableRequest,
  RegenerateSyntheticTableRequest,
  PersistEntityStatusesRequest,
  PersistEntityStatusesResponse,
  SyntheticArchiveResponse,
  SyntheticTableResponse,
} from "@/common/api/deidentifyApiTypes";

const DEIDENTIFICATION_ENDPOINTS = {
  SYNTHETIC_GENERATE: "/de-identification/synthetic/generate",
  SYNTHETIC_DOWNLOAD: (generationId: string) =>
    `/de-identification/synthetic/${generationId}/download`,
  SYNTHETIC_REGENERATE: (generationId: string) =>
    `/de-identification/synthetic/${generationId}/regenerate`,
  ENTITY_STATUSES: "/de-identification/entities/statuses",
} as const;

const DEFAULT_SYNTHETIC_ARCHIVE_FILENAME = "variants.zip";

const extractFilenameFromContentDisposition = (
  contentDisposition: string | undefined,
): string => {
  if (!contentDisposition) {
    return DEFAULT_SYNTHETIC_ARCHIVE_FILENAME;
  }

  const filenameMatch = contentDisposition.match(
    /filename\*?=(?:UTF-8''|")?([^";]+)/i,
  );

  if (!filenameMatch?.[1]) {
    return DEFAULT_SYNTHETIC_ARCHIVE_FILENAME;
  }

  return decodeURIComponent(filenameMatch[1]).trim();
};

export const syntheticApi = createApi({
  reducerPath: "syntheticApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    persistEntityStatuses: builder.mutation<
      PersistEntityStatusesResponse,
      PersistEntityStatusesRequest
    >({
      async queryFn(request) {
        try {
          const response = await apiClient.patch<
            PersistEntityStatusesResponse,
            PersistEntityStatusesRequest
          >(DEIDENTIFICATION_ENDPOINTS.ENTITY_STATUSES, request);

          return { data: response.data };
        } catch (error: unknown) {
          const errorMessage =
            error instanceof Error
              ? error.message
              : "Failed to persist entity statuses";

          return {
            error: {
              status: 500,
              data: errorMessage,
            },
          };
        }
      },
    }),
    generateSyntheticTable: builder.mutation<
      SyntheticTableResponse,
      GenerateSyntheticTableRequest
    >({
      async queryFn(request) {
        try {
          const response = await apiClient.post<
            SyntheticTableResponse,
            GenerateSyntheticTableRequest
          >(DEIDENTIFICATION_ENDPOINTS.SYNTHETIC_GENERATE, request);

          return {
            data: response.data,
          };
        } catch (error: unknown) {
          const errorMessage =
            error instanceof Error
              ? error.message
              : "Failed to generate synthetic data";

          return {
            error: {
              status: 500,
              data: errorMessage,
            },
          };
        }
      },
    }),
    regenerateSyntheticTable: builder.mutation<
      SyntheticTableResponse,
      { generationId: string; request: RegenerateSyntheticTableRequest }
    >({
      async queryFn({ generationId, request }) {
        try {
          const response = await apiClient.post<
            SyntheticTableResponse,
            RegenerateSyntheticTableRequest
          >(
            DEIDENTIFICATION_ENDPOINTS.SYNTHETIC_REGENERATE(generationId),
            request,
          );

          return {
            data: response.data,
          };
        } catch (error: unknown) {
          const errorMessage =
            error instanceof Error
              ? error.message
              : "Failed to regenerate synthetic data";

          return {
            error: {
              status: 500,
              data: errorMessage,
            },
          };
        }
      },
    }),
    downloadSyntheticArchive: builder.mutation<
      SyntheticArchiveResponse,
      string
    >({
      async queryFn(generationId) {
        try {
          const response = await apiClient.getBlob(
            DEIDENTIFICATION_ENDPOINTS.SYNTHETIC_DOWNLOAD(generationId),
          );

          const headerValue =
            typeof response.headers["content-disposition"] === "string"
              ? response.headers["content-disposition"]
              : undefined;

          const fileName = extractFilenameFromContentDisposition(headerValue);

          return {
            data: {
              blob: response.data,
              fileName,
            },
          };
        } catch (error: unknown) {
          const errorMessage =
            error instanceof Error
              ? error.message
              : "Failed to download synthetic archive";

          return {
            error: {
              status: 500,
              data: errorMessage,
            },
          };
        }
      },
    }),
  }),
});

export const {
  usePersistEntityStatusesMutation,
  useGenerateSyntheticTableMutation,
  useRegenerateSyntheticTableMutation,
  useDownloadSyntheticArchiveMutation,
} = syntheticApi;
