import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import {
  CLINICAL_INPUT_TAB,
  DEFAULT_CLINICAL_TEXT,
  DEFAULT_FILE_ERROR,
  DEFAULT_UPLOADED_FILE_PATH,
  type ClinicalInputTab,
} from "@/components/ClinicalInput/constants";

export interface RejectedFileMeta {
  name: string;
  sizeBytes: number;
}

interface ClinicalInputState {
  activeTab: ClinicalInputTab;
  clinicalText: string;
  uploadedFilePath: string;
  uploadedFileSizeBytes: number;
  fileError: string;
  rejectedFile: RejectedFileMeta | null;
}

interface SetFileResultPayload {
  text: string;
  path: string;
  sizeBytes: number;
}

interface SetFileTooLargePayload {
  error: string;
  file: RejectedFileMeta;
}

const initialState: ClinicalInputState = {
  activeTab: CLINICAL_INPUT_TAB.ENTER_TEXT,
  clinicalText: DEFAULT_CLINICAL_TEXT,
  uploadedFilePath: DEFAULT_UPLOADED_FILE_PATH,
  uploadedFileSizeBytes: 0,
  fileError: DEFAULT_FILE_ERROR,
  rejectedFile: null,
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
    setFileTooLarge(state, action: PayloadAction<SetFileTooLargePayload>) {
      state.fileError = action.payload.error;
      state.rejectedFile = action.payload.file;
    },
    clearFileError(state) {
      state.fileError = DEFAULT_FILE_ERROR;
      state.rejectedFile = null;
    },
    setFileResult(state, action: PayloadAction<SetFileResultPayload>) {
      state.clinicalText = action.payload.text;
      state.uploadedFilePath = action.payload.path;
      state.uploadedFileSizeBytes = action.payload.sizeBytes;
      state.fileError = DEFAULT_FILE_ERROR;
      state.rejectedFile = null;
    },
    clearUploadedFile(state) {
      state.uploadedFilePath = DEFAULT_UPLOADED_FILE_PATH;
      state.uploadedFileSizeBytes = 0;
      state.clinicalText = DEFAULT_CLINICAL_TEXT;
      state.fileError = DEFAULT_FILE_ERROR;
      state.rejectedFile = null;
    },
  },
});

export const {
  setActiveTab,
  setClinicalText,
  setFileTooLarge,
  clearFileError,
  setFileResult,
  clearUploadedFile,
} = clinicalInputSlice.actions;

export const clinicalInputReducer = clinicalInputSlice.reducer;
