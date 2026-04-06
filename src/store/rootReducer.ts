import { combineReducers } from "@reduxjs/toolkit";

import { clinicalInputReducer } from "@/store/clinicalInputSlice";
import { complianceFrameworkReducer } from "@/store/complianceFrameworkSlice";

const exampleReducer = (state = { message: "Hello world" }) => state;

export const rootReducer = combineReducers({
  exampleWork: exampleReducer,
  clinicalInput: clinicalInputReducer,
  complianceFramework: complianceFrameworkReducer,
});
