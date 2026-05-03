import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { billingApi } from "@/common/api/billingApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(billingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
