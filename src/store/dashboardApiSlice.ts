import { createApi } from "@reduxjs/toolkit/query/react";
import { apiClient } from "@/common/api/apiClient";
import { type DashboardResponse } from "@/types/dashboard";

interface QueryArgs {
  period: string;
  timezone: string;
}

interface InternalQueryArgs {
  url: string;
  method: "GET" | "POST";
  params?: QueryArgs;
}

const axiosBaseQuery =
  () =>
  async ({ url, method, params }: InternalQueryArgs) => {
    try {
      let finalUrl = url;
      if (method === "GET" && params) {
        const queryString = new URLSearchParams({
          period: params.period,
          timezone: params.timezone,
        }).toString();
        finalUrl = `${url}?${queryString}`;
      }

      const result =
        method === "GET"
          ? await apiClient.get<DashboardResponse>(finalUrl)
          : await apiClient.post<DashboardResponse, unknown>(url, {});

      return { data: result.data };
    } catch (error) {
      const typedError = error as Error;
      return {
        error: {
          status: 500,
          data: typedError.message,
        },
      };
    }
  };

export const dashboardApiSlice = createApi({
  reducerPath: "dashboardApiSlice",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getDashboardStats: builder.query<DashboardResponse, QueryArgs>({
      query: (arg: QueryArgs) => ({
        url: "/de-identification/stats",
        method: "GET",
        params: arg,
      }),
    }),
  }),
});

export const { useGetDashboardStatsQuery } = dashboardApiSlice;
