import React, { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import {
  CLINICAL_INPUT_TAB,
  FILE_INPUT_ACCEPT,
  MAX_CLINICAL_TEXT_CHARACTERS,
  MAX_UPLOAD_FILE_SIZE_MB,
  PROGRESS_COMPLETE,
  PROGRESS_ZERO,
  formatFileSize,
  formatFileSizeMb,
  getFileBadgeKind,
  type ClinicalInputTab,
  type FileUploadCardState,
} from "@/components/ClinicalInput/constants";
import {
  BannerErrorIcon,
  ClinicalInputHeader,
  ClinicalInputOverlayPanel,
  ClinicalInputPanel,
  ClinicalInputPanelsContainer,
  ClinicalInputTabButton,
  ClinicalInputTabs,
  ClinicalTextArea,
  ClinicalTextAreaWrapper,
  ClinicalTextInputContainer,
  ClinicalTextInputSubtitle,
  ClinicalTextInputTitle,
  ClinicalTextInputTitleHighlight,
  DataLimitAlert,
  DataLimitAlertHighlight,
  DataLimitAlertMessage,
  DataLimitAlertOverlay,
  DataLimitAlertTitle,
  DeleteFileButton,
  DropZone,
  DropZoneIconBox,
  DropZonePrompt,
  FileCardHeader,
  FileErrorBanner,
  FileIconBox,
  FileLimitHighlight,
  FileMetaColumn,
  FileMetaText,
  FileName,
  FileNameRow,
  FileProgressFill,
  FileProgressPercent,
  FileProgressTrack,
  FileProgressWrapper,
  FileStatusRow,
  FileTypeBadge,
  FileTypeChipsRow,
  FileTypeSquare,
  FileTypeSquareBadge,
  FileUploadCard,
  HiddenFileInput,
  LimitErrorIcon,
  StatusCheckIcon,
  UploadFooter,
  UploadFooterCount,
  UploadFooterLabel,
  UploadIcon,
  UploadPanelBody,
  UploadStatusMessage,
  textAreaProps,
} from "@/components/ClinicalInput/styles";
import { useClinicalTextInput } from "@/components/ClinicalInput/useClinicalTextInput";

const ClinicalTextInput: React.FC = () => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const {
    activeTab,
    clinicalText,
    filePathLabel,
    uploadedFileName,
    uploadedFileSizeBytes,
    fileError,
    rejectedFile,
    isCharLimitExceeded,
    isProcessing,
    uploadProgress,
    switchToTab,
    handleClinicalTextChange,
    handleFileSelected,
    clearUploadedFileState,
  } = useClinicalTextInput();

  const wordCount = useMemo(() => {
    const trimmed = clinicalText.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  }, [clinicalText]);

  const isUploadTab = activeTab === CLINICAL_INPUT_TAB.UPLOAD_DOCUMENT;
  const filesCount = isUploadTab && (filePathLabel || isProcessing) ? 1 : 0;

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

    await handleFileSelected(selectedFile, selectedFile.name);
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

  const handleResetUpload = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    clearUploadedFileState();
  };

  const renderUploadCard = (): React.ReactNode => {
    if (fileError && rejectedFile) {
      return renderRejectedFileCard();
    }

    if (isProcessing || filePathLabel) {
      return renderActiveFileCard();
    }

    return null;
  };

  const renderRejectedFileCard = (): React.ReactNode => {
    if (!rejectedFile || !fileError) {
      return null;
    }

    const badgeKind = getFileBadgeKind(rejectedFile.name);

    return (
      <UploadPanelBody>
        <FileUploadCard state="error">
          <FileCardHeader>
            <FileIconBox state="error">
              <DescriptionOutlinedIcon fontSize="medium" />
            </FileIconBox>
            <FileMetaColumn>
              <FileNameRow>
                <FileName>{rejectedFile.name}</FileName>
              </FileNameRow>
              <FileMetaText>
                {t("deidentify.clinicalInput.uploadCardDetails.sizeMegabytes", {
                  value: formatFileSizeMb(rejectedFile.sizeBytes),
                })}
                <FileLimitHighlight>
                  <LimitErrorIcon />
                  {t("deidentify.clinicalInput.uploadCardDetails.limitLabel", {
                    maxMb: MAX_UPLOAD_FILE_SIZE_MB,
                  })}
                </FileLimitHighlight>
              </FileMetaText>
            </FileMetaColumn>
            <FileTypeBadge state="error">{badgeKind}</FileTypeBadge>
            <DeleteFileButton onClick={handleResetUpload}>
              <DeleteOutlineIcon fontSize="small" />
            </DeleteFileButton>
          </FileCardHeader>

          <FileProgressWrapper>
            <FileStatusRow>
              <UploadFooterLabel>
                {t(
                  "deidentify.clinicalInput.uploadCardDetails.processingStatus",
                )}
              </UploadFooterLabel>
              <FileProgressPercent>{PROGRESS_ZERO}%</FileProgressPercent>
            </FileStatusRow>
            <FileProgressTrack>
              <FileProgressFill state="error" progress={PROGRESS_ZERO} />
            </FileProgressTrack>
          </FileProgressWrapper>

          <FileErrorBanner>
            <BannerErrorIcon />
            {fileError}
          </FileErrorBanner>
        </FileUploadCard>
      </UploadPanelBody>
    );
  };

  const renderActiveFileCard = (): React.ReactNode => {
    const cardState: FileUploadCardState = isProcessing
      ? "processing"
      : "success";
    const progressValue = isProcessing
      ? (uploadProgress ?? PROGRESS_ZERO)
      : PROGRESS_COMPLETE;
    const displayFileName = uploadedFileName || filePathLabel || "";
    const sizeBytes = uploadedFileSizeBytes ?? 0;
    const badgeKind = getFileBadgeKind(displayFileName);

    return (
      <UploadPanelBody>
        <FileUploadCard state={cardState}>
          <FileCardHeader>
            <FileIconBox state={cardState}>
              <DescriptionOutlinedIcon fontSize="medium" />
            </FileIconBox>
            <FileMetaColumn>
              <FileNameRow>
                <FileName>{displayFileName}</FileName>
              </FileNameRow>
              <FileMetaText>
                {formatFileSize(sizeBytes)}
                {" • "}
                <UploadStatusMessage state={cardState}>
                  {!isProcessing && <StatusCheckIcon />}
                  {isProcessing
                    ? t("deidentify.clinicalInput.uploadCard.processing")
                    : t(
                        "deidentify.clinicalInput.uploadCard.uploadedSuccessfully",
                      )}
                </UploadStatusMessage>
              </FileMetaText>
            </FileMetaColumn>
            <FileTypeBadge state={cardState}>{badgeKind}</FileTypeBadge>
            <DeleteFileButton onClick={handleResetUpload}>
              <DeleteOutlineIcon fontSize="small" />
            </DeleteFileButton>
          </FileCardHeader>

          <FileProgressWrapper>
            <FileStatusRow>
              <UploadFooterLabel>
                {t(
                  "deidentify.clinicalInput.uploadCardDetails.processingStatus",
                )}
              </UploadFooterLabel>
              <FileProgressPercent>{progressValue}%</FileProgressPercent>
            </FileStatusRow>
            <FileProgressTrack>
              <FileProgressFill state={cardState} progress={progressValue} />
            </FileProgressTrack>
          </FileProgressWrapper>
        </FileUploadCard>
      </UploadPanelBody>
    );
  };

  return (
    <ClinicalTextInputContainer>
      <ClinicalInputHeader>
        <ClinicalTextInputTitle component="h1">
          {t("deidentify.clinicalInput.title")}{" "}
          <ClinicalTextInputTitleHighlight>
            {t("deidentify.clinicalInput.titleHighlight")}
          </ClinicalTextInputTitleHighlight>
        </ClinicalTextInputTitle>
        <ClinicalTextInputSubtitle>
          {t("deidentify.clinicalInput.subtitle")}
        </ClinicalTextInputSubtitle>
      </ClinicalInputHeader>

      <ClinicalInputPanel>
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
            <ClinicalTextAreaWrapper>
              <ClinicalTextArea
                fullWidth
                multiline
                value={clinicalText}
                placeholder={t("deidentify.clinicalInput.textPlaceholder")}
                onChange={(event) =>
                  handleClinicalTextChange(event.target.value)
                }
                slotProps={{ input: textAreaProps }}
              />
              {isCharLimitExceeded && (
                <DataLimitAlertOverlay>
                  <DataLimitAlert>
                    <DataLimitAlertTitle>
                      {t("deidentify.clinicalInput.dataLimitAlert.title")}
                    </DataLimitAlertTitle>
                    <DataLimitAlertMessage>
                      {t("deidentify.clinicalInput.dataLimitAlert.message")}{" "}
                      <DataLimitAlertHighlight>
                        {t("deidentify.clinicalInput.dataLimitAlert.limit", {
                          max: MAX_CLINICAL_TEXT_CHARACTERS.toLocaleString(),
                        })}
                      </DataLimitAlertHighlight>{" "}
                      {t("deidentify.clinicalInput.dataLimitAlert.instruction")}
                    </DataLimitAlertMessage>
                  </DataLimitAlert>
                </DataLimitAlertOverlay>
              )}
            </ClinicalTextAreaWrapper>
          </ClinicalInputOverlayPanel>

          <ClinicalInputOverlayPanel
            active={activeTab === CLINICAL_INPUT_TAB.UPLOAD_DOCUMENT}
          >
            {renderUploadCard() ?? (
              <DropZone
                onClick={openFilePicker}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                role="button"
                tabIndex={0}
              >
                <DropZoneIconBox>
                  <UploadIcon />
                </DropZoneIconBox>
                <DropZonePrompt>
                  {t("deidentify.clinicalInput.dropzone.prompt")}
                </DropZonePrompt>

                <FileTypeChipsRow>
                  <FileTypeSquare>
                    <FileTypeSquareBadge>
                      {t("deidentify.clinicalInput.dropzone.fileTypes.pdf")}
                    </FileTypeSquareBadge>
                  </FileTypeSquare>
                  <FileTypeSquare>
                    <FileTypeSquareBadge>
                      {t("deidentify.clinicalInput.dropzone.fileTypes.text")}
                    </FileTypeSquareBadge>
                  </FileTypeSquare>
                </FileTypeChipsRow>

                <HiddenFileInput
                  ref={fileInputRef}
                  type="file"
                  accept={FILE_INPUT_ACCEPT}
                  onChange={handleInputChange}
                />
              </DropZone>
            )}
          </ClinicalInputOverlayPanel>
        </ClinicalInputPanelsContainer>

        <UploadFooter>
          <UploadFooterLabel>
            {t("deidentify.clinicalInput.dropzone.autoSaving")}
          </UploadFooterLabel>
          <UploadFooterLabel>
            {t(
              isUploadTab
                ? "deidentify.clinicalInput.dropzone.filesCount"
                : "deidentify.clinicalInput.dropzone.wordCount",
              { count: "" },
            )}
            <UploadFooterCount>
              {isUploadTab ? filesCount : wordCount}
            </UploadFooterCount>
          </UploadFooterLabel>
        </UploadFooter>
      </ClinicalInputPanel>
    </ClinicalTextInputContainer>
  );
};

export default ClinicalTextInput;
