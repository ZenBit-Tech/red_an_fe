import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { billingApi } from "@/common/api/billingApi";
import { syntheticApi } from "@/common/api/syntheticApi";
import { dashboardApiSlice } from "./dashboardApiSlice";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      billingApi.middleware,
      syntheticApi.middleware,
      dashboardApiSlice.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
