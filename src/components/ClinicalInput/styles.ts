import {
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Typography,
  styled,
} from "@mui/material";

export type FileUploadCardState = "processing" | "success" | "error";
export type FileBadgeKind = "PDF" | "DOC" | "TXT";

const clinicalInputStyles = {
  headerGap: 1.5,
  headerSectionGap: 5,
  headerMinHeight: 172,
  titleFontSizeDesktop: "48px",
  titleFontSizeTablet: "1.75rem",
  titleFontSizeMobile: "1.5rem",
  titleLineHeight: 1.15,
  subtitleFontSize: "20px",
  subtitleLineHeight: 1.6,
  subtitleMaxWidth: 720,
  panelPaddingDesktop: 3,
  panelPaddingMobile: 2,
  panelRadius: "16px",
  tabsHeight: 56,
  tabsHeightMobile: 48,
  tabsInnerPadding: 0.5,
  tabBorderRadius: "8px",
  textareaMinRows: 14,
  charCounterFontSize: "12px",
  alertRadius: "8px",
  contentHeight: 470,
  contentHeightTablet: 420,
  contentHeightMobile: 380,
  panelTransitionDuration: "0.2s",
  dropzoneRadius: 2,
  dropzonePadding: 4,
  dropzoneGap: 1,
  uploadButtonPaddingX: 3,
  uploadButtonPaddingY: 1,
  filePathMinHeight: 40,
} as const;

const COLOR = {
  TITLE: "#dae2fd",
  TITLE_HIGHLIGHT: "linear-gradient(161deg, #b0c6ff 0%, #0d47a1 100%)",
  SUBTITLE: "#c3c6d4",
  PANEL_BG: "#131b2e",
  PANEL_BORDER: "#222A3D",
  TABS_BG: "#0b1326",
  TAB_INACTIVE: "#c3c6d4",
  TAB_ACTIVE_TEXT: "#b0c6ff",
  TAB_ACTIVE_GRADIENT: "linear-gradient(180deg, #1a2746 0%, #0a1735 100%)",
  TAB_ACTIVE_BORDER: "rgba(176, 198, 255, 0.35)",
  TEXTAREA_BG: "#060e20",
  TEXTAREA_BORDER: "#222A3D",
  TEXTAREA_PLACEHOLDER: "#70778e",
  TEXTAREA_TEXT: "#dae2fd",
  COUNTER: "#70778e",
  ALERT_BORDER: "#ef4444",
  ALERT_TITLE: "#b0c6ff",
  ALERT_TEXT: "#ffffff",
  ALERT_LIMIT: "#ef4444",
  FILE_CARD_BG: "#060e20",
  FILE_CARD_BORDER: "#222A3D",
  FILE_CARD_BORDER_ERROR: "#ef4444",
  FILE_NAME: "#dae2fd",
  FILE_META: "#70778e",
  FILE_ICON_BG: "#0d1a36",
  FILE_ICON_PROCESSING: "#b0c6ff",
  FILE_ICON_SUCCESS: "#22c55e",
  FILE_ICON_ERROR: "#ef4444",
  FILE_BADGE_BG: "#0d1a36",
  FILE_BADGE_BORDER: "#222A3D",
  FILE_BADGE_PDF: "#ef4444",
  FILE_BADGE_DOC: "#3b82f6",
  FILE_BADGE_TXT: "#a3a8b8",
  FILE_PROGRESS_TRACK: "#1a2746",
  FILE_PROGRESS_FILL_PROCESSING: "#b0c6ff",
  FILE_PROGRESS_FILL_SUCCESS: "#22c55e",
  FILE_PROGRESS_FILL_ERROR: "#ef4444",
  FILE_STATUS_PROCESSING: "#b0c6ff",
  FILE_STATUS_SUCCESS: "#22c55e",
  FILE_STATUS_ERROR: "#ef4444",
  FILE_DELETE_ICON: "#70778e",
  FILE_DELETE_ICON_HOVER: "#ef4444",
  ERROR_BANNER_BG: "rgba(239, 68, 68, 0.08)",
  ERROR_BANNER_BORDER: "#ef4444",
  ERROR_BANNER_TEXT: "#ef4444",
} as const;

const FILE_CARD_STATE_TO_STATUS_COLOR: Record<FileUploadCardState, string> = {
  processing: COLOR.FILE_STATUS_PROCESSING,
  success: COLOR.FILE_STATUS_SUCCESS,
  error: COLOR.FILE_STATUS_ERROR,
};

const FILE_CARD_STATE_TO_PROGRESS_COLOR: Record<FileUploadCardState, string> = {
  processing: COLOR.FILE_PROGRESS_FILL_PROCESSING,
  success: COLOR.FILE_PROGRESS_FILL_SUCCESS,
  error: COLOR.FILE_PROGRESS_FILL_ERROR,
};

const FILE_CARD_STATE_TO_ICON_COLOR: Record<FileUploadCardState, string> = {
  processing: COLOR.FILE_ICON_PROCESSING,
  success: COLOR.FILE_ICON_SUCCESS,
  error: COLOR.FILE_ICON_ERROR,
};

const FILE_BADGE_KIND_TO_COLOR: Record<FileBadgeKind, string> = {
  PDF: COLOR.FILE_BADGE_PDF,
  DOC: COLOR.FILE_BADGE_DOC,
  TXT: COLOR.FILE_BADGE_TXT,
};

export const ClinicalTextInputContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(clinicalInputStyles.headerSectionGap),
}));

export const ClinicalInputHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(clinicalInputStyles.headerGap),
  minHeight: clinicalInputStyles.headerMinHeight,
  [theme.breakpoints.down("md")]: {
    minHeight: "auto",
  },
}));

export const ClinicalTextInputTitle = styled(Typography)(({ theme }) => ({
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 700,
  fontSize: clinicalInputStyles.titleFontSizeDesktop,
  lineHeight: clinicalInputStyles.titleLineHeight,
  color: COLOR.TITLE,
  margin: 0,
  [theme.breakpoints.down("md")]: {
    fontSize: clinicalInputStyles.titleFontSizeTablet,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: clinicalInputStyles.titleFontSizeMobile,
  },
})) as typeof Typography;

export const ClinicalTextInputTitleHighlight = styled("span")({
  backgroundImage: COLOR.TITLE_HIGHLIGHT,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
});

export const ClinicalTextInputSubtitle = styled(Typography)({
  fontFamily: `"Manrope", sans-serif`,
  fontSize: clinicalInputStyles.subtitleFontSize,
  lineHeight: clinicalInputStyles.subtitleLineHeight,
  fontWeight: 500,
  color: COLOR.SUBTITLE,
  maxWidth: clinicalInputStyles.subtitleMaxWidth,
  margin: 0,
});

export const ClinicalInputPanel = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  backgroundColor: COLOR.PANEL_BG,
  border: "1px solid rgba(67, 70, 82, 0.5)",
  borderRadius: "12px",
  padding: "9px 16px 20px 16px",
  width: "100%",
  maxWidth: "846px",
  minHeight: "448px",
  marginInline: "auto",
  [theme.breakpoints.down("md")]: {
    minHeight: "448px",
    padding: theme.spacing(clinicalInputStyles.panelPaddingDesktop),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(clinicalInputStyles.panelPaddingMobile),
  },
}));

export const ClinicalInputTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 0,
  borderRadius: "6px",
  backgroundColor: "#060e20",
  padding: "6px",
  border: "none",
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-list": {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: theme.spacing(0.5),
  },
}));

export const ClinicalInputTabButton = styled(Tab)({
  width: "100%",
  maxWidth: "399px",
  height: "48px",
  minHeight: "48px",
  flex: 1,
  textTransform: "none",
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "143%",
  textAlign: "center",
  padding: "10px 32px",
  borderRadius: "6px",
  border: "1px solid transparent",
  color: "#c3c6d4",
  transition: "all 200ms ease",
  "&.Mui-selected": {
    color: COLOR.TAB_ACTIVE_TEXT,
    border: "1px solid rgba(176, 198, 255, 0.24)",
    background:
      "linear-gradient(135deg, rgba(176, 198, 255, 0.2) 0%, rgba(164, 189, 248, 0.2) 7.14%, rgba(153, 180, 242, 0.2) 14.29%, rgba(141, 171, 235, 0.2) 21.43%, rgba(130, 161, 228, 0.2) 28.57%, rgba(119, 152, 222, 0.2) 35.71%, rgba(108, 143, 215, 0.2) 42.86%, rgba(96, 134, 208, 0.2) 50%, rgba(85, 125, 202, 0.2) 57.14%, rgba(74, 116, 195, 0.2) 64.29%, rgba(63, 107, 188, 0.2) 71.43%, rgba(52, 98, 181, 0.2) 78.57%, rgba(40, 89, 175, 0.2) 85.71%, rgba(28, 80, 168, 0.2) 92.86%, rgba(13, 71, 161, 0.2) 100%)",
  },
});

export const ClinicalInputPanelsContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  flex: 1,
  minHeight: 0,
  [theme.breakpoints.down("md")]: {
    minHeight: theme.spacing(clinicalInputStyles.contentHeightTablet / 8),
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: theme.spacing(clinicalInputStyles.contentHeightMobile / 8),
  },
}));

export const ClinicalInputOverlayPanel = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ active, theme }) => ({
  position: active ? "relative" : "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  boxSizing: "border-box",
  overflow: "hidden",
  gap: theme.spacing(2),
  opacity: active ? 1 : 0,
  visibility: active ? "visible" : "hidden",
  pointerEvents: active ? "auto" : "none",
  transition: `opacity ${clinicalInputStyles.panelTransitionDuration} ease, visibility ${clinicalInputStyles.panelTransitionDuration} ease`,
}));

export const ClinicalTextAreaWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  maxWidth: "814px",
  height: "303px",
  boxSizing: "border-box",
  borderRadius: "4px",
  padding: "8px 8px 8px 12px",
  backgroundColor: COLOR.TEXTAREA_BG,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "3px",
    background:
      "linear-gradient(90deg, rgba(176, 198, 255, 0) 0%, #b0c6ff 50%, rgba(176, 198, 255, 0) 100%)",
    opacity: 0.5,
    pointerEvents: "none",
  },
});

export const ClinicalTextArea = styled(TextField)({
  flex: 1,
  height: "100%", // Важливо: розтягуємо на всю висоту обгортки
  "& .MuiOutlinedInput-root": {
    height: "100%",
    overflowY: "auto", // FIX: Дозволяємо скролити саме контейнеру!
    overflowX: "hidden",
    backgroundColor: "transparent",
    alignItems: "flex-start",
    padding: "40px 24px", // FIX: Перенесли відступи на контейнер
    scrollbarWidth: "thin",
    scrollbarColor: `${COLOR.PANEL_BORDER} transparent`,
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
      margin: "4px 0",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: COLOR.PANEL_BORDER,
      borderRadius: "8px",
      border: `2px solid ${COLOR.TEXTAREA_BG}`,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: COLOR.TAB_ACTIVE_BORDER,
    },
    "&::-webkit-scrollbar-corner": {
      backgroundColor: "transparent",
    },
    "& fieldset": { border: "none" },
    "&:hover fieldset": { border: "none" },
    "&.Mui-focused fieldset": { border: "none" },
  },
  "& .MuiInputBase-input": {
    padding: "0px !important", // FIX: Прибираємо внутрішні відступи з <textarea>
    fontFamily: `"Manrope", sans-serif`,
    fontSize: "16px",
    lineHeight: 1.5,
    color: COLOR.TEXTAREA_TEXT,
    "&::placeholder": {
      color: COLOR.TEXTAREA_PLACEHOLDER,
      opacity: 1,
    },
  },
  "& textarea.MuiInputBase-inputMultiline": {
    boxSizing: "border-box",
    resize: "none",
    // Тут не треба писати overflowY, бо скролить контейнер вище
  },
});
export const CharacterCounter = styled(Typography)({
  marginTop: "23px",
  textAlign: "right",
  fontFamily: `"Manrope", sans-serif`,
  fontSize: clinicalInputStyles.charCounterFontSize,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: COLOR.COUNTER,
});

export const DataLimitAlertOverlay = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "min(420px, 80%)",
  pointerEvents: "none",
  zIndex: 2,
});

export const DataLimitAlert = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  padding: theme.spacing(2.5, 3),
  borderRadius: clinicalInputStyles.alertRadius,
  border: `1px solid ${COLOR.ALERT_BORDER}`,
  backgroundColor: "rgba(6, 14, 32, 0.85)",
}));

export const FileLimitHighlight = styled("span")({
  color: COLOR.ALERT_LIMIT,
  fontWeight: 600,
  marginLeft: "8px",
});

export const DataLimitAlertTitle = styled(Typography)({
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 700,
  fontSize: "18px",
  color: COLOR.ALERT_TITLE,
  margin: 0,
});

export const DataLimitAlertMessage = styled(Typography)({
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: 1.5,
  color: COLOR.ALERT_TEXT,
  margin: 0,
});

export const DataLimitAlertHighlight = styled("span")({
  color: COLOR.ALERT_LIMIT,
  fontWeight: 600,
});

export const HelperErrorText = styled(Typography)({
  fontFamily: `"Manrope", sans-serif`,
  fontSize: "14px",
  color: COLOR.ALERT_LIMIT,
  marginTop: 8,
});

export const UploadedFilePath = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "visible",
})<{ visible: boolean }>(({ theme, visible }) => ({
  fontFamily: `"Manrope", sans-serif`,
  fontSize: "14px",
  minHeight: theme.spacing(clinicalInputStyles.filePathMinHeight / 8),
  color: COLOR.SUBTITLE,
  border: `1px solid ${COLOR.PANEL_BORDER}`,
  borderRadius: "8px",
  backgroundColor: COLOR.TEXTAREA_BG,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1.5),
  wordBreak: "break-all",
  visibility: visible ? "visible" : "hidden",
}));

export const UploadPanelBody = styled(Box)({
  width: "100%",
  minHeight: "303px",
  display: "flex",
  flexDirection: "column", // FIX: Додано, щоб картка і помилка ставали один під одним
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
});

export const DropZone = styled(Box)({
  position: "relative",
  boxSizing: "border-box",
  width: "100%",
  maxWidth: "814px",
  height: "303px",
  borderRadius: "4px",
  border: "none",
  backgroundColor: COLOR.TEXTAREA_BG,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: "20px",
  padding: "24px",
  color: COLOR.SUBTITLE,
  cursor: "pointer",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "3px",
    background:
      "linear-gradient(90deg, rgba(176, 198, 255, 0) 0%, #b0c6ff 50%, rgba(176, 198, 255, 0) 100%)",
    opacity: 0.5,
    pointerEvents: "none",
  },
});

export const DropZoneIconBox = styled(Box)({
  width: "64px",
  height: "64px",
  borderRadius: "12px",
  backgroundColor: "rgba(13, 26, 54, 0.6)",
  border: "1px solid rgba(67, 70, 82, 0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#b0c6ff",
  marginBottom: "56px",
});

export const DropZonePrompt = styled(Typography)({
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 400,
  fontSize: "14px",
  color: "#c3c6d7",
});

export const FileTypeChipsRow = styled(Box)({
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  gap: "16px",
  width: "100%",
  maxWidth: "640px",
});

export const FileTypeChip = styled(Box)({
  flex: 1,
  width: "122px",
  height: "75px",
  boxSizing: "border-box",
  borderRadius: "8px",
  backgroundColor: "rgba(13, 26, 54, 0.5)",
  border: "1px solid rgba(67, 70, 82, 0.4)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  padding: "12px",
});

export const FileTypeChipIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== "tone",
})<{ tone: string }>(({ tone }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: tone,
}));

export const FileTypeChipLabel = styled(Typography)({
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 700,
  fontSize: "12px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#dae2fd",
});

export const UploadFooter = styled(Box)({
  width: "100%",
  marginTop: "23px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const UploadFooterLabel = styled(Typography)({
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 600,
  fontSize: "12px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#70778e",
});

export const UploadFooterCount = styled("span")({
  color: "#dae2fd",
  fontWeight: 700,
  marginLeft: "4px",
});

export const HiddenFileInput = styled("input")({
  display: "none",
});

export const BrowseButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 700,
  fontSize: "14px",
  padding: theme.spacing(
    clinicalInputStyles.uploadButtonPaddingY,
    clinicalInputStyles.uploadButtonPaddingX,
  ),
}));

export const DropZoneTitle = styled(Typography)({
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 700,
  fontSize: "16px",
  color: COLOR.TITLE,
});

export const DropZoneSubtitle = styled(Typography)({
  fontFamily: `"Manrope", sans-serif`,
  fontSize: "14px",
  color: COLOR.SUBTITLE,
});

export const FileUploadCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "state",
})<{ state: FileUploadCardState }>(({ theme, state }) => ({
  width: "100%",
  maxWidth: "814px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(2.5, 3),
  borderRadius: "12px",
  backgroundColor: COLOR.FILE_CARD_BG,
  border: `1px solid ${
    state === "error" ? COLOR.FILE_CARD_BORDER_ERROR : COLOR.FILE_CARD_BORDER
  }`,
  transition: "border-color 200ms ease",
}));

export const FileCardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const FileIconBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "state",
})<{ state: FileUploadCardState }>(({ state }) => ({
  width: 48,
  height: 48,
  flexShrink: 0,
  borderRadius: "10px",
  backgroundColor: COLOR.FILE_ICON_BG,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: FILE_CARD_STATE_TO_ICON_COLOR[state],
  transition: "color 200ms ease",
}));

export const FileMetaColumn = styled(Box)({
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

export const FileNameRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
}));

export const FileName = styled(Typography)({
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: 1.4,
  color: COLOR.FILE_NAME,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: 1,
  minWidth: 0,
});

export const FileMetaText = styled(Typography)({
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 500,
  fontSize: "13px",
  lineHeight: 1.4,
  color: COLOR.FILE_META,
});

export const FileTypeBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "kind",
})<{ kind: FileBadgeKind }>(({ kind }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  paddingInline: 8,
  paddingBlock: 2,
  borderRadius: "4px",
  backgroundColor: COLOR.FILE_BADGE_BG,
  border: `1px solid ${COLOR.FILE_BADGE_BORDER}`,
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 700,
  fontSize: "10px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: FILE_BADGE_KIND_TO_COLOR[kind],
  flexShrink: 0,
}));

export const DeleteFileButton = styled(IconButton)({
  width: 32,
  height: 32,
  color: COLOR.FILE_DELETE_ICON,
  transition: "color 200ms ease, background-color 200ms ease",
  "&:hover": {
    color: COLOR.FILE_DELETE_ICON_HOVER,
    backgroundColor: "rgba(239, 68, 68, 0.08)",
  },
});

export const FileProgressTrack = styled(Box)({
  width: "100%",
  height: 6,
  borderRadius: "999px",
  backgroundColor: COLOR.FILE_PROGRESS_TRACK,
  overflow: "hidden",
});

export const FileProgressFill = styled(Box, {
  shouldForwardProp: (prop) => prop !== "state" && prop !== "progress",
})<{ state: FileUploadCardState; progress: number }>(({ state, progress }) => ({
  height: "100%",
  width: `${Math.max(0, Math.min(100, progress))}%`,
  borderRadius: "999px",
  backgroundColor: FILE_CARD_STATE_TO_PROGRESS_COLOR[state],
  transition: "width 240ms ease, background-color 200ms ease",
}));

export const FileStatusRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 8,
});

export const FileStatusText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "state",
})<{ state: FileUploadCardState }>(({ state }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 600,
  fontSize: "13px",
  lineHeight: 1.4,
  color: FILE_CARD_STATE_TO_STATUS_COLOR[state],
  "&::before": {
    content: '""',
    display: "inline-block",
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: FILE_CARD_STATE_TO_STATUS_COLOR[state],
  },
}));

export const FileProgressPercent = styled(Typography)({
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 600,
  fontSize: "13px",
  lineHeight: 1.4,
  color: COLOR.FILE_META,
});

export const FileErrorBanner = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.25, 1.75),
  borderRadius: "8px",
  border: `1px solid ${COLOR.ERROR_BANNER_BORDER}`,
  backgroundColor: COLOR.ERROR_BANNER_BG,
  color: COLOR.ERROR_BANNER_TEXT,
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 500,
  fontSize: "13px",
  lineHeight: 1.4,
  width: "100%",
  maxWidth: "814px",
  boxSizing: "border-box",
}));

export const textAreaProps = {
  minRows: clinicalInputStyles.textareaMinRows,
} as const;
