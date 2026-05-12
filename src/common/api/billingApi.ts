import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}/billing`,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

export const billingApi = createApi({
  reducerPath: "billingApi",
  baseQuery: async (args, api, extraOptions) => {
    const result = await rawBaseQuery(args, api, extraOptions);
    if (result.error?.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      window.location.href = "/signin";
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
