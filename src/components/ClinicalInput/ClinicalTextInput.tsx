import React, { useRef } from "react";
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
import { useClinicalTextInput } from "@/components/ClinicalInput/useClinicalTextInput";
import * as S from "@/components/ClinicalInput/styles";

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
      <S.UploadPanelBody>
        <S.FileUploadCard state="error">
          <S.FileCardHeader>
            <S.FileIconBox state="error">
              <DescriptionOutlinedIcon fontSize="medium" />
            </S.FileIconBox>
            <S.FileMetaColumn>
              <S.FileNameRow>
                <S.FileName>{rejectedFile.name}</S.FileName>
              </S.FileNameRow>
              <S.FileMetaText>
                {t("deidentify.clinicalInput.uploadCardDetails.sizeMegabytes", {
                  value: formatFileSizeMb(rejectedFile.sizeBytes),
                })}
                <S.FileLimitHighlight>
                  <S.LimitErrorIcon />
                  {t("deidentify.clinicalInput.uploadCardDetails.limitLabel", {
                    maxMb: MAX_UPLOAD_FILE_SIZE_MB,
                  })}
                </S.FileLimitHighlight>
              </S.FileMetaText>
            </S.FileMetaColumn>
            <S.FileTypeBadge state="error">{badgeKind}</S.FileTypeBadge>
            <S.DeleteFileButton onClick={handleResetUpload}>
              <DeleteOutlineIcon fontSize="small" />
            </S.DeleteFileButton>
          </S.FileCardHeader>

          <S.FileProgressWrapper>
            <S.FileStatusRow>
              <S.UploadFooterLabel>
                {t(
                  "deidentify.clinicalInput.uploadCardDetails.processingStatus",
                )}
              </S.UploadFooterLabel>
              <S.FileProgressPercent>{PROGRESS_ZERO}%</S.FileProgressPercent>
            </S.FileStatusRow>
            <S.FileProgressTrack>
              <S.FileProgressFill state="error" progress={PROGRESS_ZERO} />
            </S.FileProgressTrack>
          </S.FileProgressWrapper>

          <S.FileErrorBanner>
            <S.BannerErrorIcon />
            {fileError}
          </S.FileErrorBanner>
        </S.FileUploadCard>
      </S.UploadPanelBody>
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
      <S.UploadPanelBody>
        <S.FileUploadCard state={cardState}>
          <S.FileCardHeader>
            <S.FileIconBox state={cardState}>
              <DescriptionOutlinedIcon fontSize="medium" />
            </S.FileIconBox>
            <S.FileMetaColumn>
              <S.FileNameRow>
                <S.FileName>{displayFileName}</S.FileName>
              </S.FileNameRow>
              <S.FileMetaText>
                {formatFileSize(sizeBytes)}
                {" • "}
                <S.UploadStatusMessage state={cardState}>
                  {!isProcessing && <S.StatusCheckIcon />}
                  {isProcessing
                    ? t("deidentify.clinicalInput.uploadCard.processing")
                    : t(
                        "deidentify.clinicalInput.uploadCard.uploadedSuccessfully",
                      )}
                </S.UploadStatusMessage>
              </S.FileMetaText>
            </S.FileMetaColumn>
            <S.FileTypeBadge state={cardState}>{badgeKind}</S.FileTypeBadge>
            <S.DeleteFileButton onClick={handleResetUpload}>
              <DeleteOutlineIcon fontSize="small" />
            </S.DeleteFileButton>
          </S.FileCardHeader>

          <S.FileProgressWrapper>
            <S.FileStatusRow>
              <S.UploadFooterLabel>
                {t(
                  "deidentify.clinicalInput.uploadCardDetails.processingStatus",
                )}
              </S.UploadFooterLabel>
              <S.FileProgressPercent>{progressValue}%</S.FileProgressPercent>
            </S.FileStatusRow>
            <S.FileProgressTrack>
              <S.FileProgressFill state={cardState} progress={progressValue} />
            </S.FileProgressTrack>
          </S.FileProgressWrapper>
        </S.FileUploadCard>
      </S.UploadPanelBody>
    );
  };

  return (
    <S.ClinicalTextInputContainer>
      <S.ClinicalInputHeader>
        <S.ClinicalTextInputTitle>
          {t("deidentify.clinicalInput.title")}{" "}
          <S.ClinicalTextInputTitleHighlight>
            {t("deidentify.clinicalInput.titleHighlight")}
          </S.ClinicalTextInputTitleHighlight>
        </S.ClinicalTextInputTitle>
        <S.ClinicalTextInputSubtitle>
          {t("deidentify.clinicalInput.subtitle")}
        </S.ClinicalTextInputSubtitle>
      </S.ClinicalInputHeader>

      <S.ClinicalInputPanel>
        <S.ClinicalInputTabs value={activeTab} onChange={handleTabChange}>
          <S.ClinicalInputTabButton
            value={CLINICAL_INPUT_TAB.ENTER_TEXT}
            label={t("deidentify.clinicalInput.tabs.enterText")}
          />
          <S.ClinicalInputTabButton
            value={CLINICAL_INPUT_TAB.UPLOAD_DOCUMENT}
            label={t("deidentify.clinicalInput.tabs.uploadDocument")}
          />
        </S.ClinicalInputTabs>

        <S.ClinicalInputPanelsContainer>
          <S.ClinicalInputOverlayPanel
            active={activeTab === CLINICAL_INPUT_TAB.ENTER_TEXT}
          >
            <S.ClinicalTextAreaWrapper>
              <S.ClinicalTextArea
                fullWidth
                multiline
                value={clinicalText}
                placeholder={t("deidentify.clinicalInput.textPlaceholder")}
                onChange={(event) =>
                  handleClinicalTextChange(event.target.value)
                }
                slotProps={{ input: S.textAreaProps }}
              />
              {isCharLimitExceeded && (
                <S.DataLimitAlertOverlay>
                  <S.DataLimitAlert>
                    <S.DataLimitAlertTitle>
                      {t("deidentify.clinicalInput.dataLimitAlert.title")}
                    </S.DataLimitAlertTitle>
                    <S.DataLimitAlertMessage>
                      {t("deidentify.clinicalInput.dataLimitAlert.message")}{" "}
                      <S.DataLimitAlertHighlight>
                        {t("deidentify.clinicalInput.dataLimitAlert.limit", {
                          max: MAX_CLINICAL_TEXT_CHARACTERS.toLocaleString(),
                        })}
                      </S.DataLimitAlertHighlight>{" "}
                      {t("deidentify.clinicalInput.dataLimitAlert.instruction")}
                    </S.DataLimitAlertMessage>
                  </S.DataLimitAlert>
                </S.DataLimitAlertOverlay>
              )}
            </S.ClinicalTextAreaWrapper>
          </S.ClinicalInputOverlayPanel>

          <S.ClinicalInputOverlayPanel
            active={activeTab === CLINICAL_INPUT_TAB.UPLOAD_DOCUMENT}
          >
            {renderUploadCard() ?? (
              <S.DropZone
                onClick={openFilePicker}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                role="button"
                tabIndex={0}
              >
                <S.DropZoneIconBox>
                  <S.UploadIcon />
                </S.DropZoneIconBox>
                <S.DropZonePrompt>
                  {t("deidentify.clinicalInput.dropzone.prompt")}
                </S.DropZonePrompt>

                <S.FileTypeChipsRow>
                  <S.FileTypeSquare>
                    <S.FileTypeSquareBadge>
                      {t("deidentify.clinicalInput.dropzone.fileTypes.pdf")}
                    </S.FileTypeSquareBadge>
                  </S.FileTypeSquare>
                  <S.FileTypeSquare>
                    <S.FileTypeSquareBadge>
                      {t("deidentify.clinicalInput.dropzone.fileTypes.text")}
                    </S.FileTypeSquareBadge>
                  </S.FileTypeSquare>
                </S.FileTypeChipsRow>

                <S.HiddenFileInput
                  ref={fileInputRef}
                  type="file"
                  accept={FILE_INPUT_ACCEPT}
                  onChange={handleInputChange}
                />
              </S.DropZone>
            )}
          </S.ClinicalInputOverlayPanel>
        </S.ClinicalInputPanelsContainer>

        <S.UploadFooter>
          <S.UploadFooterLabel>
            {activeTab === CLINICAL_INPUT_TAB.UPLOAD_DOCUMENT
              ? t("deidentify.clinicalInput.fileSizeLimit", {
                  maxMb: MAX_UPLOAD_FILE_SIZE_MB,
                })
              : t("deidentify.clinicalInput.characterCount", {
                  current: clinicalText.length.toLocaleString(),
                  max: MAX_CLINICAL_TEXT_CHARACTERS.toLocaleString(),
                })}
          </S.UploadFooterLabel>
        </S.UploadFooter>
      </S.ClinicalInputPanel>
    </S.ClinicalTextInputContainer>
  );
};

export default ClinicalTextInput;
