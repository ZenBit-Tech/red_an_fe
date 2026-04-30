import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const billingApi = createApi({
  reducerPath: "billingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/billing`,
    credentials: "include",
    prepareHeaders: (headers) => {
      // Wherever you store the access token from /auth/magic-link/callback —
      // adjust this to read from your auth slice instead of localStorage if applicable.
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
  }),
});

export const { useCreateCheckoutSessionMutation } = billingApi;
