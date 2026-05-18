import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { EntityType } from "@/components/AnalysisResults/constants";
import type { ComplianceFramework } from "@/components/ComplianceSelect/constants";

export interface LastDeidentifiedResultState {
  originalInputText: string;
  anonymizedOutputText: string;
  jobId: string;
  activeEntityIds: string[];
  activeEntityTypes: EntityType[];
  framework: ComplianceFramework | null;
  updatedAt: string | null;
}

const initialState: LastDeidentifiedResultState = {
  originalInputText: "",
  anonymizedOutputText: "",
  jobId: "",
  activeEntityIds: [],
  activeEntityTypes: [],
  framework: null,
  updatedAt: null,
};

const lastDeidentifiedResultSlice = createSlice({
  name: "lastDeidentifiedResult",
  initialState,
  reducers: {
    setLastDeidentifiedResult(
      _state,
      action: PayloadAction<LastDeidentifiedResultState>,
    ) {
      return action.payload;
    },
    clearLastDeidentifiedResult() {
      return initialState;
    },
  },
});

export const { setLastDeidentifiedResult, clearLastDeidentifiedResult } =
  lastDeidentifiedResultSlice.actions;

export const lastDeidentifiedResultReducer =
  lastDeidentifiedResultSlice.reducer;
