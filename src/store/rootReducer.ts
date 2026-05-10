import { combineReducers } from "@reduxjs/toolkit";

import { clinicalInputReducer } from "@/store/clinicalInputSlice";
import { complianceFrameworkReducer } from "@/store/complianceFrameworkSlice";
import { deidentifyStepReducer } from "@/store/deidentifyStepSlice";
import { billingApi } from "@/common/api/billingApi";
import { dashboardApiSlice } from "./dashboardApiSlice";

const exampleReducer = (state = { message: "Hello world" }) => state;

export const rootReducer = combineReducers({
  exampleWork: exampleReducer,
  clinicalInput: clinicalInputReducer,
  complianceFramework: complianceFrameworkReducer,
  deidentifyStep: deidentifyStepReducer,
  [billingApi.reducerPath]: billingApi.reducer,
  [dashboardApiSlice.reducerPath]: dashboardApiSlice.reducer,
});
