import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiClient } from "@/common/api/apiClient";
import type {
  GenerateSyntheticRequest,
  GenerateSyntheticZipResponse,
  PersistEntityStatusesRequest,
  PersistEntityStatusesResponse,
} from "@/common/api/deidentifyApiTypes";

const DEIDENTIFICATION_ENDPOINTS = {
  SYNTHETIC: "/de-identification/synthetic",
  ENTITY_STATUSES: "/de-identification/entities/statuses",
} as const;

const DEFAULT_SYNTHETIC_ZIP_FILENAME = "synthetic-variants.zip";

const extractFilenameFromContentDisposition = (
  contentDisposition: string | undefined,
): string => {
  if (!contentDisposition) {
    return DEFAULT_SYNTHETIC_ZIP_FILENAME;
  }

  const filenameMatch = contentDisposition.match(
    /filename\*?=(?:UTF-8''|")?([^";]+)/i,
  );

  if (!filenameMatch?.[1]) {
    return DEFAULT_SYNTHETIC_ZIP_FILENAME;
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
    generateSyntheticZip: builder.mutation<
      GenerateSyntheticZipResponse,
      GenerateSyntheticRequest
    >({
      async queryFn(request) {
        try {
          const response = await apiClient.postBlob(
            DEIDENTIFICATION_ENDPOINTS.SYNTHETIC,
            request,
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
  }),
});

export const {
  usePersistEntityStatusesMutation,
  useGenerateSyntheticZipMutation,
} = syntheticApi;
