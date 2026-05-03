import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const billingApi = createApi({
  reducerPath: "billingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/billing`,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
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
