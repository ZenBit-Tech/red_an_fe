import axios from "axios";
import type { AxiosError, AxiosResponse } from "axios";
import { cleanEnv, str } from "envalid";
// import { APP_ROUTES, STORAGE_KEYS } from "@/constants/index";

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

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// instance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (axios.isAxiosError(error) && error.response?.status === 401) {
//       localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
//       localStorage.removeItem(STORAGE_KEYS.USER);
//       window.location.href = APP_ROUTES.SIGN_IN;
//     }
//     return Promise.reject(error);
//   },
// );

// instance.interceptors.request.use(
//   (config) => {
//     // УВАГА: Заміни "token" на той ключ, під яким ти зберігаєш токен у localStorage!
//     // Наприклад: "accessToken", "jwt", тощо.
//     const token = localStorage.getItem("accessToken");

//     if (token && config.headers) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const apiClient = {
  async post<T, D = Record<string, unknown>>(
    endpoint: string,
    data: D,
  ): Promise<AxiosResponse<T>> {
    try {
      return await instance.post<T>(endpoint, data);
    } catch (error) {
      throw this.handleError(error);
    }
  },

  async get<T>(endpoint: string): Promise<AxiosResponse<T>> {
    try {
      return await instance.get<T>(endpoint);
    } catch (error) {
      throw this.handleError(error);
    }
  },

  handleError(error: unknown): Error {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message?: string }>;
      if (axiosError.code === ApiError.Network) {
        return new Error(ApiError.Network);
      }

      if (axiosError.response) {
        const serverMessage = axiosError.response.data?.message;
        const status = axiosError.response.status;
        return new Error(serverMessage || `${ApiError.Server}_${status}`);
      }
    }

    return error instanceof Error ? error : new Error(ApiError.Unknown);
  },
};
