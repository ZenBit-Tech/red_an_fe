import { createApi } from "@reduxjs/toolkit/query/react";
import { type AxiosRequestConfig } from "axios";
import { apiClient } from "@/common/api/apiClient";
import { type DashboardResponse } from "@/types/dashboard";

const axiosBaseQuery =
  () =>
  async ({
    url,
    method,
    data,
  }: Required<Pick<AxiosRequestConfig, "url">> &
    Pick<AxiosRequestConfig, "method" | "data">) => {
    try {
      const result =
        method === "GET"
          ? await apiClient.get(url)
          : await apiClient.post(url, data);

      return { data: result.data };
    } catch (axiosError) {
      return { error: axiosError };
    }
  };

export const dashboardApiSlice = createApi({
  reducerPath: "dashboardApiSlice",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getDashboardStats: builder.query<DashboardResponse, void>({
      query: () => ({
        url: "/de-identification/stats",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetDashboardStatsQuery } = dashboardApiSlice;
