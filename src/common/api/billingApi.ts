import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { cleanEnv, str } from "envalid";
import { APP_ROUTES, STORAGE_KEYS } from "@/constants/index";

const env = cleanEnv(import.meta.env, {
  VITE_API_URL: str({ desc: "Base API URL" }),
});

const BASE_URL = env.VITE_API_URL.trim().replace(/\/+$/, "");

const rawBaseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/billing`,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

let isRedirectingToLogin = false;

export const billingApi = createApi({
  reducerPath: "billingApi",
  baseQuery: async (args, api, extraOptions) => {
    const result = await rawBaseQuery(args, api, extraOptions);
    if (result.error?.status === 401 && !isRedirectingToLogin) {
      isRedirectingToLogin = true;
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER);
      window.location.href = APP_ROUTES.SESSION_EXPIRED;
    }
    return result;
  },

  endpoints: (builder) => ({
    createCheckoutSession: builder.mutation<
      { url: string },
      { priceId: string }
    >({
      query: (body) => ({
        url: "/create-checkout-session",
        method: "POST",
        body,
      }),
    }),
    getCheckoutSession: builder.query<
      { status: "paid" | "unpaid" | "pending"; customerEmail: string | null },
      string
    >({
      query: (sessionId) => `/checkout-session/${sessionId}`,
    }),
  }),
});

export const { useCreateCheckoutSessionMutation, useGetCheckoutSessionQuery } =
  billingApi;
