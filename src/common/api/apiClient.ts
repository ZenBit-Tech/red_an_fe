import axios from "axios";
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { cleanEnv, str } from "envalid";
import { APP_ROUTES, STORAGE_KEYS } from "@/constants/index";

const env = cleanEnv(import.meta.env, {
  VITE_API_URL: str({ desc: "Base API URL" }),
});

const BASE_URL = env.VITE_API_URL.trim().replace(/\/+$/, "");

export const ApiError = {
  Network: "ERR_NETWORK",
  Server: "ERR_SERVER",
  Unknown: "ERR_UNKNOWN",
} as const;

export type ApiErrorType = (typeof ApiError)[keyof typeof ApiError];

export class ApiClientError extends Error {
  public readonly status?: number;
  public readonly code?: string;

  public constructor(message: string, status?: number, code?: string) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
    this.code = code;
  }
}

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRedirectingToLogin = false;

type ApiRequestOptions = {
  requiresAuth?: boolean;
};

type ApiRequestConfig = AxiosRequestConfig & ApiRequestOptions;
type InternalApiRequestConfig = InternalAxiosRequestConfig & ApiRequestOptions;

instance.interceptors.request.use((config) => {
  const requestConfig = config as InternalApiRequestConfig;
  const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

  if (requestConfig.requiresAuth === undefined) {
    requestConfig.requiresAuth = true;
  }

  if (token) {
    requestConfig.headers.set("Authorization", `Bearer ${token}`);
  }

  return requestConfig;
});

instance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const requestConfig = error.config as ApiRequestConfig | undefined;
    const requiresAuth = requestConfig?.requiresAuth !== false;

    if (
      requiresAuth &&
      error.response?.status === 401 &&
      !isRedirectingToLogin
    ) {
      isRedirectingToLogin = true;
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER);
      window.location.href = APP_ROUTES.SESSION_EXPIRED;
    }
    return Promise.reject(error);
  },
);

export const apiClient = {
  async post<T, D = Record<string, unknown>>(
    endpoint: string,
    data: D,
    options?: ApiRequestOptions,
  ): Promise<AxiosResponse<T>> {
    try {
      return await instance.post<T>(
        endpoint,
        data,
        options as ApiRequestConfig,
      );
    } catch (error) {
      throw this.handleError(error);
    }
  },

  async get<T>(
    endpoint: string,
    options?: ApiRequestOptions,
  ): Promise<AxiosResponse<T>> {
    try {
      return await instance.get<T>(endpoint, options as ApiRequestConfig);
    } catch (error) {
      throw this.handleError(error);
    }
  },

  async getBlob(
    endpoint: string,
    options?: ApiRequestOptions,
  ): Promise<AxiosResponse<Blob>> {
    try {
      return await instance.get(endpoint, {
        ...(options as ApiRequestConfig),
        responseType: "blob",
      });
    } catch (error) {
      throw this.handleError(error);
    }
  },

  async patch<T, D = Record<string, unknown>>(
    endpoint: string,
    data: D,
    options?: ApiRequestOptions,
  ): Promise<AxiosResponse<T>> {
    try {
      return await instance.patch<T>(
        endpoint,
        data,
        options as ApiRequestConfig,
      );
    } catch (error) {
      throw this.handleError(error);
    }
  },

  async postBlob<D = Record<string, unknown>>(
    endpoint: string,
    data: D,
    options?: ApiRequestOptions,
  ): Promise<AxiosResponse<Blob>> {
    try {
      return await instance.post(endpoint, data, {
        ...(options as ApiRequestConfig),
        responseType: "blob",
      });
    } catch (error) {
      throw this.handleError(error);
    }
  },

  handleError(error: unknown): Error {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message?: string }>;
      if (axiosError.code === ApiError.Network) {
        return new ApiClientError(
          ApiError.Network,
          undefined,
          ApiError.Network,
        );
      }

      if (axiosError.response) {
        const serverMessage = axiosError.response.data?.message;
        const status = axiosError.response.status;
        return new ApiClientError(
          serverMessage || `${ApiError.Server}_${status}`,
          status,
          ApiError.Server,
        );
      }
    }

    return error instanceof Error
      ? error
      : new ApiClientError(ApiError.Unknown, undefined, ApiError.Unknown);
  },
};
