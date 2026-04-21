import { describe, expect, it } from "vitest";
import type { AxiosError } from "axios";

import { apiClient, ApiError } from "./apiClient";

const createAxiosLikeError = (params: {
  code?: string;
  status?: number;
  message?: string;
}): AxiosError<{ message?: string }> => {
  const responseData = params.message ? { message: params.message } : {};

  return {
    isAxiosError: true,
    code: params.code,
    response:
      typeof params.status === "number"
        ? {
            status: params.status,
            data: responseData,
            statusText: "",
            headers: {},
            config: { headers: {} },
          }
        : undefined,
    config: { headers: {} },
    toJSON: () => ({}),
    name: "AxiosError",
    message: "Request failed",
  } as AxiosError<{ message?: string }>;
};

describe("apiClient.handleError", () => {
  it("maps network errors to ApiError.Network", () => {
    const error = createAxiosLikeError({ code: ApiError.Network });

    const mappedError = apiClient.handleError(error);

    expect(mappedError).toBeInstanceOf(Error);
    expect(mappedError.message).toBe(ApiError.Network);
  });

  it("maps server errors with response message", () => {
    const error = createAxiosLikeError({
      status: 400,
      message: "Validation failed",
    });

    const mappedError = apiClient.handleError(error);

    expect(mappedError.message).toBe("Validation failed");
  });

  it("maps unknown input to ApiError.Unknown", () => {
    const mappedError = apiClient.handleError(null);

    expect(mappedError.message).toBe(ApiError.Unknown);
  });
});
