import React, { useMemo, useRef } from "react";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import { useTranslation } from "react-i18next";

import {
  CLINICAL_INPUT_TAB,
  FILE_INPUT_ACCEPT,
  MAX_CLINICAL_TEXT_CHARACTERS,
  MAX_UPLOAD_FILE_SIZE_MB,
  SUPPORTED_FILE_EXTENSIONS,
  type ClinicalInputTab,
} from "@/components/ClinicalInput/constants";
import {
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
  DropZone,
  DropZoneIconBox,
  DropZonePrompt,
  FileTypeChip,
  FileTypeChipIcon,
  FileTypeChipLabel,
  FileTypeChipsRow,
  FileUploadCard,
  FileCardHeader,
  FileIconBox,
  FileMetaColumn,
  FileMetaText,
  FileNameRow,
  FileName,
  FileLimitHighlight,
  FileTypeBadge,
  FileProgressTrack,
  FileProgressFill,
  FileProgressPercent,
  FileStatusRow,
  DeleteFileButton,
  HiddenFileInput,
  UploadFooter,
  UploadFooterCount,
  UploadFooterLabel,
  UploadPanelBody,
  textAreaProps,
  type FileBadgeKind,
} from "@/components/ClinicalInput/styles";
import { useClinicalTextInput } from "@/components/ClinicalInput/useClinicalTextInput";

const BYTES_PER_MB = 1024 * 1024;
const PROGRESS_ZERO = 0;

const formatFileSizeMb = (bytes: number): string => {
  const mb = bytes / BYTES_PER_MB;
  return mb.toFixed(1);
};

const getFileBadgeKind = (fileName: string): FileBadgeKind => {
  const lower = fileName.toLowerCase();

  if (lower.endsWith(SUPPORTED_FILE_EXTENSIONS.PDF)) {
    return "PDF";
  }

  if (
    lower.endsWith(SUPPORTED_FILE_EXTENSIONS.DOC) ||
    lower.endsWith(SUPPORTED_FILE_EXTENSIONS.DOCX)
  ) {
    return "DOC";
  }

  return "TXT";
};

const ClinicalTextInput: React.FC = () => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const {
    activeTab,
    clinicalText,
    filePathLabel,
    fileError,
    rejectedFile,
    isCharLimitExceeded,
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

    if (filePathLabel) {
      return renderUploadedFileCard();
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
                  {t("deidentify.clinicalInput.uploadCardDetails.limitLabel", {
                    maxMb: MAX_UPLOAD_FILE_SIZE_MB,
                  })}
                </FileLimitHighlight>
              </FileMetaText>
            </FileMetaColumn>
            <FileTypeBadge kind={badgeKind}>{badgeKind}</FileTypeBadge>
            <DeleteFileButton onClick={handleResetUpload}>
              <DeleteOutlineIcon fontSize="small" />
            </DeleteFileButton>
          </FileCardHeader>
          <FileStatusRow>
            <UploadFooterLabel>
              {t("deidentify.clinicalInput.uploadCardDetails.processingStatus")}
            </UploadFooterLabel>
            <FileProgressPercent>{PROGRESS_ZERO}%</FileProgressPercent>
          </FileStatusRow>
          <FileProgressTrack>
            <FileProgressFill state="error" progress={PROGRESS_ZERO} />
          </FileProgressTrack>
        </FileUploadCard>
      </UploadPanelBody>
    );
  };

  const renderUploadedFileCard = (): React.ReactNode => {
    if (!filePathLabel || fileError) {
      return null;
    }

    return (
      <UploadPanelBody>
        <FileUploadCard state="success">
          <FileCardHeader>
            <FileIconBox state="success">
              <DescriptionOutlinedIcon fontSize="medium" />
            </FileIconBox>
            <FileMetaColumn>
              <FileNameRow>
                <FileName>{filePathLabel}</FileName>
              </FileNameRow>
            </FileMetaColumn>
            <DeleteFileButton onClick={handleResetUpload}>
              <CloseIcon fontSize="small" />
            </DeleteFileButton>
          </FileCardHeader>
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
                  <UploadFileOutlinedIcon sx={{ fontSize: 32 }} />
                </DropZoneIconBox>
                <DropZonePrompt>
                  {t("deidentify.clinicalInput.dropzone.prompt")}
                </DropZonePrompt>
                <FileTypeChipsRow>
                  <FileTypeChip>
                    <FileTypeChipIcon tone="#f43f5e">
                      <PictureAsPdfOutlinedIcon sx={{ fontSize: 28 }} />
                    </FileTypeChipIcon>
                    <FileTypeChipLabel>
                      {t("deidentify.clinicalInput.dropzone.fileTypes.pdf")}
                    </FileTypeChipLabel>
                  </FileTypeChip>
                  <FileTypeChip>
                    <FileTypeChipIcon tone="#60a5fa">
                      <ArticleOutlinedIcon sx={{ fontSize: 28 }} />
                    </FileTypeChipIcon>
                    <FileTypeChipLabel>
                      {t("deidentify.clinicalInput.dropzone.fileTypes.txt")}
                    </FileTypeChipLabel>
                  </FileTypeChip>
                  <FileTypeChip>
                    <FileTypeChipIcon tone="#fb923c">
                      <MedicalServicesOutlinedIcon sx={{ fontSize: 28 }} />
                    </FileTypeChipIcon>
                    <FileTypeChipLabel>
                      {t("deidentify.clinicalInput.dropzone.fileTypes.dicom")}
                    </FileTypeChipLabel>
                  </FileTypeChip>
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
