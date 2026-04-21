import React, { useMemo, useRef } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import {
  CLINICAL_INPUT_TAB,
  FILE_INPUT_ACCEPT,
  type ClinicalInputTab,
} from "@/components/ClinicalInput/constants";
import {
  BrowseButton,
  ClinicalInputOverlayPanel,
  ClinicalInputPanelsContainer,
  ClinicalInputTabButton,
  ClinicalInputTabs,
  ClinicalTextArea,
  ClinicalTextInputContainer,
  ClinicalTextInputSubtitle,
  ClinicalTextInputTitle,
  DropZone,
  DropZoneChip,
  DropZoneChips,
  DropZoneIconBox,
  DropZoneSubtitle,
  DropZoneTitle,
  HelperErrorText,
  HiddenFileInput,
  PanelFooter,
  PanelFooterDot,
  PanelFooterItem,
  UploadedFilePath,
  textAreaProps,
} from "@/components/ClinicalInput/styles";
import { useClinicalTextInput } from "@/components/ClinicalInput/useClinicalTextInput";

const DROPZONE_FILE_TYPES = ["pdf", "txt", "dicom"] as const;

const ClinicalTextInput: React.FC = () => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const {
    activeTab,
    clinicalText,
    filePathLabel,
    fileError,
    switchToTab,
    handleClinicalTextChange,
    handleFileSelected,
  } = useClinicalTextInput();

  const wordCount = useMemo(() => {
    const trimmed = clinicalText.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  }, [clinicalText]);

  const isUploadTab = activeTab === CLINICAL_INPUT_TAB.UPLOAD_DOCUMENT;
  const filesCount = isUploadTab && filePathLabel ? 1 : 0;

  const handleTabChange = (
    _: React.SyntheticEvent,
    nextTab: ClinicalInputTab,
  ) => {
    switchToTab(nextTab);
  };

  const openFilePicker = (): void => {
    fileInputRef.current?.click();
  };

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    await handleFileSelected(selectedFile, event.target.value);
    event.target.value = "";
  };

  const handleDrop = async (
    event: React.DragEvent<HTMLDivElement>,
  ): Promise<void> => {
    event.preventDefault();

    const droppedFile = event.dataTransfer.files[0];

    if (!droppedFile) {
      return;
    }

    await handleFileSelected(droppedFile);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  return (
    <ClinicalTextInputContainer>
      <Box>
        <ClinicalTextInputTitle>
          {t("deidentify.clinicalInput.title")}
        </ClinicalTextInputTitle>
        <ClinicalTextInputSubtitle>
          {t("deidentify.clinicalInput.subtitle")}
        </ClinicalTextInputSubtitle>
      </Box>

      <ClinicalInputTabs value={activeTab} onChange={handleTabChange}>
        <ClinicalInputTabButton
          value={CLINICAL_INPUT_TAB.ENTER_TEXT}
          label={t("deidentify.clinicalInput.tabs.enterText")}
        />
        <ClinicalInputTabButton
          value={CLINICAL_INPUT_TAB.UPLOAD_DOCUMENT}
          label={t("deidentify.clinicalInput.tabs.uploadDocument")}
        />
      </ClinicalInputTabs>

      <ClinicalInputPanelsContainer>
        <ClinicalInputOverlayPanel
          active={activeTab === CLINICAL_INPUT_TAB.ENTER_TEXT}
        >
          <ClinicalTextArea
            fullWidth
            multiline
            value={clinicalText}
            placeholder={t("deidentify.clinicalInput.textPlaceholder")}
            onChange={(event) => handleClinicalTextChange(event.target.value)}
            slotProps={{
              input: textAreaProps,
            }}
          />

          {fileError && <HelperErrorText>{fileError}</HelperErrorText>}
        </ClinicalInputOverlayPanel>

        <ClinicalInputOverlayPanel
          active={activeTab === CLINICAL_INPUT_TAB.UPLOAD_DOCUMENT}
        >
          <UploadedFilePath visible={Boolean(filePathLabel)}>
            {filePathLabel || " "}
          </UploadedFilePath>

          <DropZone onDrop={handleDrop} onDragOver={handleDragOver}>
            <DropZoneIconBox>
              <FileUploadOutlinedIcon fontSize="medium" />
            </DropZoneIconBox>
            <DropZoneTitle>
              {t("deidentify.clinicalInput.dropzone.title")}
            </DropZoneTitle>
            <DropZoneSubtitle>
              {t("deidentify.clinicalInput.dropzone.support")}
            </DropZoneSubtitle>
            <DropZoneChips>
              {DROPZONE_FILE_TYPES.map((type) => (
                <DropZoneChip key={type}>
                  {t(`deidentify.clinicalInput.dropzone.fileTypes.${type}`)}
                </DropZoneChip>
              ))}
            </DropZoneChips>
            <BrowseButton variant="contained" onClick={openFilePicker}>
              {t("deidentify.clinicalInput.browseButton")}
            </BrowseButton>
            <HiddenFileInput
              ref={fileInputRef}
              type="file"
              accept={FILE_INPUT_ACCEPT}
              onChange={handleInputChange}
            />
          </DropZone>

          {fileError && <HelperErrorText>{fileError}</HelperErrorText>}
        </ClinicalInputOverlayPanel>
      </ClinicalInputPanelsContainer>

      <PanelFooter>
        <PanelFooterItem>
          <PanelFooterDot />
          {t("deidentify.clinicalInput.footer.autoSaving")}
        </PanelFooterItem>
        <PanelFooterItem>
          {isUploadTab
            ? t("deidentify.clinicalInput.footer.filesCount", {
                count: filesCount,
              })
            : t("deidentify.clinicalInput.footer.wordCount", {
                count: wordCount,
              })}
        </PanelFooterItem>
      </PanelFooter>
    </ClinicalTextInputContainer>
  );
};

export default ClinicalTextInput;
