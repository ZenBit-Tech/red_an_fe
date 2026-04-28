import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { DEIDENTIFY_STEP } from "@/pages/Deidentify/useDeidentify";

interface DeidentifyStepState {
  activeStep: number;
}

const initialState: DeidentifyStepState = {
  activeStep: DEIDENTIFY_STEP.FRAMEWORK,
};

const deidentifyStepSlice = createSlice({
  name: "deidentifyStep",
  initialState,
  reducers: {
    setActiveStep(state, action: PayloadAction<number>) {
      state.activeStep = action.payload;
    },
    resetActiveStep(state) {
      state.activeStep = DEIDENTIFY_STEP.FRAMEWORK;
    },
  },
});

export const { setActiveStep, resetActiveStep } = deidentifyStepSlice.actions;

export const deidentifyStepReducer = deidentifyStepSlice.reducer;
