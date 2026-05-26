import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { cleanEnv, str } from "envalid";
import { APP_ROUTES, STORAGE_KEYS } from "@/constants/index";

export type SubscriptionStatus =
  | "active"
  | "trialing"
  | "past_due"
  | "canceled"
  | "incomplete"
  | "incomplete_expired"
  | "unpaid";

export interface SubscriptionResponse {
  id: string;
  userId: string;
  stripeSubscriptionId: string | null;
  stripeCustomerId: string;
  stripePriceId: string;
  status: SubscriptionStatus;
  currentPeriodEnd: string | null;
  cancelAtPeriodEnd: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentHistoryItem {
  id: string;
  userId: string;
  stripeInvoiceId: string;
  invoiceNumber: string | null;
  amount: number;
  status: "pending" | "paid" | "failed";
  createdAt: string;
  updatedAt: string;
}

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

export const BILLING_PLAN_TIER = {
  FREE: "FREE",
  PROFESSIONAL: "PROFESSIONAL",
} as const;

export const BILLING_PLAN_STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PAST_DUE: "PAST_DUE",
  CANCELED: "CANCELED",
} as const;

export type BillingPlanTier =
  (typeof BILLING_PLAN_TIER)[keyof typeof BILLING_PLAN_TIER];

export type BillingPlanStatus =
  (typeof BILLING_PLAN_STATUS)[keyof typeof BILLING_PLAN_STATUS];

export type BillingStatusResponse = {
  planTier: BillingPlanTier;
  planStatus: BillingPlanStatus;
  dailyLimit: number | null;
  usedToday: number;
  remainingToday: number | null;
  currentPeriodEnd: string | null;
  hasActiveSubscription: boolean;
  canUpgrade: boolean;
  canManageSubscription: boolean;
};

export const billingApi = createApi({
  reducerPath: "billingApi",
  tagTypes: ["Subscription"],
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
    getCheckoutSession: builder.query<
      { status: "paid" | "unpaid" | "pending"; customerEmail: string | null },
      string
    >({
      query: (sessionId) => `/checkout-session/${sessionId}`,
    }),
    getSubscription: builder.query<SubscriptionResponse, void>({
      query: () => "/subscription",
      providesTags: ["Subscription"],
    }),
    createCheckoutSession: builder.mutation<
      { url: string },
      { targetPlan: typeof BILLING_PLAN_TIER.PROFESSIONAL }
    >({
      query: (body) => ({
        url: "/create-checkout-session",
        method: "POST",
        body,
      }),
    }),

    cancelSubscription: builder.mutation<
      { success: boolean; cancelAtPeriodEnd: boolean },
      void
    >({
      query: () => ({
        url: "/cancel-subscription",
        method: "POST",
      }),
      invalidatesTags: ["Subscription"],
    }),

    createCustomerPortalSession: builder.mutation<{ url: string }, void>({
      query: () => ({
        url: "/customer-portal",
        method: "POST",
      }),
    }),
    getBillingStatus: builder.query<BillingStatusResponse, void>({
      query: () => "/status",
    }),

    getPaymentHistory: builder.query<PaymentHistoryItem[], void>({
      query: () => "/history",
    }),
  }),
});

export const {
  useGetSubscriptionQuery,
  useCreateCheckoutSessionMutation,
  useCancelSubscriptionMutation,
  useGetCheckoutSessionQuery,
  useGetPaymentHistoryQuery,
} = billingApi;
