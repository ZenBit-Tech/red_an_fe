import { combineReducers } from "@reduxjs/toolkit";

import { clinicalInputReducer } from "@/store/clinicalInputSlice";
import { complianceFrameworkReducer } from "@/store/complianceFrameworkSlice";
import { deidentifyStepReducer } from "@/store/deidentifyStepSlice";

const exampleReducer = (state = { message: "Hello world" }) => state;

export const rootReducer = combineReducers({
  exampleWork: exampleReducer,
  clinicalInput: clinicalInputReducer,
  complianceFramework: complianceFrameworkReducer,
  deidentifyStep: deidentifyStepReducer,
});
