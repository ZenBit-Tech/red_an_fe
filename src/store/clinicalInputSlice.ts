import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import {
  CLINICAL_INPUT_TAB,
  DEFAULT_CLINICAL_TEXT,
  DEFAULT_FILE_ERROR,
  DEFAULT_UPLOADED_FILE_PATH,
  type ClinicalInputTab,
} from "@/components/ClinicalInput/constants";

export interface ClinicalInputState {
  activeTab: ClinicalInputTab;
  clinicalText: string;
  uploadedFilePath: string;
  fileError: string;
}

interface SetFileResultPayload {
  text: string;
  path: string;
}

const initialState: ClinicalInputState = {
  activeTab: CLINICAL_INPUT_TAB.ENTER_TEXT,
  clinicalText: DEFAULT_CLINICAL_TEXT,
  uploadedFilePath: DEFAULT_UPLOADED_FILE_PATH,
  fileError: DEFAULT_FILE_ERROR,
};

const clinicalInputSlice = createSlice({
  name: "clinicalInput",
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<ClinicalInputTab>) {
      state.activeTab = action.payload;
    },
    setClinicalText(state, action: PayloadAction<string>) {
      state.clinicalText = action.payload;
    },
    setFileError(state, action: PayloadAction<string>) {
      state.fileError = action.payload;
    },
    clearFileError(state) {
      state.fileError = DEFAULT_FILE_ERROR;
    },
    setFileResult(state, action: PayloadAction<SetFileResultPayload>) {
      state.clinicalText = action.payload.text;
      state.uploadedFilePath = action.payload.path;
      state.fileError = DEFAULT_FILE_ERROR;
      state.activeTab = CLINICAL_INPUT_TAB.ENTER_TEXT;
    },
  },
});

export const {
  setActiveTab,
  setClinicalText,
  setFileError,
  clearFileError,
  setFileResult,
} = clinicalInputSlice.actions;

export const clinicalInputReducer = clinicalInputSlice.reducer;
