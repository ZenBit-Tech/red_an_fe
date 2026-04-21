import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import {
  COMPLIANCE_FRAMEWORK,
  type ComplianceFramework,
} from "@/components/ComplianceSelect/constants";

interface ComplianceFrameworkState {
  selectedFramework: ComplianceFramework;
}

const initialState: ComplianceFrameworkState = {
  selectedFramework: COMPLIANCE_FRAMEWORK.HIPAA,
};

const complianceFrameworkSlice = createSlice({
  name: "complianceFramework",
  initialState,
  reducers: {
    setSelectedFramework(state, action: PayloadAction<ComplianceFramework>) {
      state.selectedFramework = action.payload;
    },
  },
});

export const { setSelectedFramework } = complianceFrameworkSlice.actions;

export const complianceFrameworkReducer = complianceFrameworkSlice.reducer;
