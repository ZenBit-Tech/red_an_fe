import { Box, Button, IconButton, Tab, Tabs, TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";

import {
  FILE_CARD_STATE_TO_ICON_COLOR,
  FILE_CARD_STATE_TO_PROGRESS_COLOR,
  FILE_CARD_STATE_TO_STATUS_COLOR,
  FOOTER_LABEL_COLOR,
} from "@/components/ClinicalInput/constants";
import type { FileUploadCardState } from "@/components/ClinicalInput/constants";

export const ClinicalTextInputContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
}));

export const ClinicalInputHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  minHeight: theme.spacing(43),
  [theme.breakpoints.down("md")]: {
    minHeight: "auto",
  },
}));

export const ClinicalTextInputTitle = styled("h1")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize48,
  color: theme.palette.textColors[50],
  margin: 0,
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize26,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize24,
  },
}));

export const ClinicalTextInputTitleHighlight = styled("span")(({ theme }) => ({
  backgroundImage: `linear-gradient(161deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
}));

export const ClinicalTextInputSubtitle = styled("p")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.textColors[200],
  maxWidth: theme.spacing(180),
  margin: 0,
}));

export const ClinicalInputPanel = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  backgroundColor: theme.palette.neutralColors[900],
  border: `${theme.spacing(0.25)} solid ${alpha(theme.palette.strokeColors[400], 0.5)}`,
  borderRadius: theme.spacing(3),
  paddingTop: theme.spacing(2.25),
  paddingRight: theme.spacing(4),
  paddingBottom: theme.spacing(5),
  paddingLeft: theme.spacing(4),
  width: "100%",
  maxWidth: theme.spacing(211.5),
  minHeight: theme.spacing(112),
  marginInline: "auto",
  [theme.breakpoints.down("md")]: {
    minHeight: theme.spacing(112),
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

export const ClinicalInputTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 0,
  borderRadius: theme.spacing(1.5),
  backgroundColor: theme.palette.secondaryColors[900],
  padding: theme.spacing(1.5),
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

export const ClinicalInputTabButton = styled(Tab)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.spacing(99.75),
  height: theme.spacing(12),
  minHeight: theme.spacing(12),
  flex: 1,
  textTransform: "none",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight400,
  fontSize: theme.typography.fontSize14,
  textAlign: "center",
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  paddingLeft: theme.spacing(8),
  paddingRight: theme.spacing(8),
  borderRadius: theme.spacing(1.5),
  border: `${theme.spacing(0.25)} solid transparent`,
  color: theme.palette.textColors[200],
  transition: "all 200ms ease",
  "&.Mui-selected": {
    color: theme.palette.primaryColors[200],
    border: `${theme.spacing(0.25)} solid ${alpha(theme.palette.primaryColors[200], 0.24)}`,
    background: `linear-gradient(135deg, ${alpha(theme.palette.primaryColors[200], 0.2)} 0%, ${alpha(theme.palette.primaryColors[700], 0.2)} 100%)`,
  },
}));

export const ClinicalInputPanelsContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  flex: 1,
  minHeight: 0,
  [theme.breakpoints.down("md")]: {
    minHeight: theme.spacing(105),
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: theme.spacing(95),
  },
}));

export const ClinicalInputOverlayPanel = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
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
  transition: "opacity 0.2s ease, visibility 0.2s ease",
}));

export const ClinicalTextAreaWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: theme.spacing(203.5),
  height: theme.spacing(75.75),
  boxSizing: "border-box",
  borderRadius: theme.spacing(1),
  paddingTop: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(3),
  backgroundColor: theme.palette.secondaryColors[900],
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: theme.spacing(0.75),
    background: `linear-gradient(90deg, ${alpha(theme.palette.primaryColors[200], 0)} 0%, ${theme.palette.primaryColors[200]} 50%, ${alpha(theme.palette.primaryColors[200], 0)} 100%)`,
    opacity: 0.5,
    pointerEvents: "none",
  },
}));

export const ClinicalTextArea = styled(TextField)(({ theme }) => ({
  flex: 1,
  height: "100%",
  "& .MuiOutlinedInput-root": {
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    backgroundColor: "transparent",
    alignItems: "flex-start",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    scrollbarWidth: "thin",
    scrollbarColor: `${theme.palette.strokeColors[400]} transparent`,
    "&::-webkit-scrollbar": {
      width: theme.spacing(2),
      height: theme.spacing(2),
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
      margin: `${theme.spacing(1)} 0`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.strokeColors[400],
      borderRadius: theme.spacing(2),
      border: `${theme.spacing(0.5)} solid ${theme.palette.secondaryColors[900]}`,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: alpha(theme.palette.primaryColors[200], 0.35),
    },
    "&::-webkit-scrollbar-corner": {
      backgroundColor: "transparent",
    },
    "& fieldset": { border: "none" },
    "&:hover fieldset": { border: "none" },
    "&.Mui-focused fieldset": { border: "none" },
  },
  "& .MuiInputBase-input": {
    padding: "0 !important",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize16,
    color: theme.palette.textColors[50],
    "&::placeholder": {
      color: theme.palette.textColors[200],
      opacity: 1,
    },
  },
  "& textarea.MuiInputBase-inputMultiline": {
    boxSizing: "border-box",
    resize: "none",
  },
}));

export const CharacterCounter = styled("p")(({ theme }) => ({
  margin: 0,
  marginTop: theme.spacing(5.75),
  textAlign: "right",
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight600,
  textTransform: "uppercase",
  color: theme.palette.textColors[200],
}));

export const DataLimitAlertOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: `min(${theme.spacing(105)}, 80%)`,
  pointerEvents: "none",
  zIndex: 2,
}));

export const DataLimitAlert = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  borderRadius: theme.spacing(2),
  border: `${theme.spacing(0.25)} solid ${theme.palette.error.main}`,
  backgroundColor: alpha(theme.palette.secondaryColors[900], 0.85),
}));

export const FileLimitHighlight = styled("span")(({ theme }) => ({
  color: theme.palette.error.main,
  fontWeight: theme.typography.fontWeight600,
  marginLeft: theme.spacing(2),
}));

export const DataLimitAlertTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize18,
  color: theme.palette.primaryColors[200],
}));

export const DataLimitAlertMessage = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize16,
  color: theme.palette.textColors[50],
}));

export const DataLimitAlertHighlight = styled("span")(({ theme }) => ({
  color: theme.palette.error.main,
  fontWeight: theme.typography.fontWeight600,
}));

export const HelperErrorText = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  color: theme.palette.error.main,
  marginTop: theme.spacing(2),
}));

export const UploadedFilePath = styled("p", {
  shouldForwardProp: (prop) => prop !== "visible",
})<{ visible: boolean }>(({ theme, visible }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  minHeight: theme.spacing(5),
  color: theme.palette.textColors[200],
  border: `${theme.spacing(0.25)} solid ${theme.palette.strokeColors[400]}`,
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.secondaryColors[900],
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1.5),
  wordBreak: "break-all",
  visibility: visible ? "visible" : "hidden",
}));

export const UploadPanelBody = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: theme.spacing(75.75),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
  backgroundColor: theme.palette.secondaryColors[900],
}));

export const DropZone = styled(Box)(({ theme }) => ({
  position: "relative",
  boxSizing: "border-box",
  width: "100%",
  maxWidth: theme.spacing(203.5),
  height: theme.spacing(75.75),
  borderRadius: theme.spacing(1),
  border: "none",
  backgroundColor: theme.palette.secondaryColors[900],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: theme.spacing(6),
  color: theme.palette.textColors[200],
  cursor: "pointer",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: theme.spacing(0.75),
    background: `linear-gradient(90deg, ${alpha(theme.palette.primaryColors[200], 0)} 0%, ${theme.palette.primaryColors[200]} 50%, ${alpha(theme.palette.primaryColors[200], 0)} 100%)`,
    opacity: 0.5,
    pointerEvents: "none",
  },
}));

export const DropZoneIconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primaryColors[200],
  marginBottom: theme.spacing(2),
}));

export const DropZonePrompt = styled("p")(({ theme }) => ({
  margin: 0,
  fontSize: theme.typography.fontSize14,
  color: alpha(theme.palette.textColors[200], 0.6),
  whiteSpace: "pre-line",
}));

export const FileTypeChipsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

export const FileTypeSquare = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  width: theme.spacing(20),
  height: theme.spacing(15),
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1.5),
  backgroundColor: theme.palette.neutralColors[900],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const FileTypeSquareBadge = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  width: theme.spacing(11),
  height: theme.spacing(6.5),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
  borderRadius: theme.spacing(1.5),
  backgroundColor: alpha(theme.palette.primaryColors[500], 0.2),
  border: `${theme.spacing(0.25)} solid ${alpha(theme.palette.primaryColors[500], 0.1)}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight600,
  fontSize: theme.typography.fontSize10,
  color: theme.palette.primaryColors[500],
}));

export const UploadFooter = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(5.75),
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
}));

export const UploadFooterLabel = styled("span")(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight600,
  fontSize: theme.typography.fontSize12,
  textTransform: "uppercase",
  color: FOOTER_LABEL_COLOR,
}));

export const HiddenFileInput = styled("input")({
  display: "none",
});

export const BrowseButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize14,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

export const DropZoneTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize16,
  color: theme.palette.textColors[50],
}));

export const DropZoneSubtitle = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  color: theme.palette.textColors[200],
}));

export const FileUploadCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "state",
})<{ state: FileUploadCardState }>(({ theme, state }) => {
  const isError = state === "error";
  const borderColor = isError
    ? theme.palette.error.main
    : FILE_CARD_STATE_TO_STATUS_COLOR[state] || theme.palette.strokeColors[400];

  return {
    width: theme.spacing(127.25),
    maxWidth: "100%",
    height: isError ? theme.spacing(57.5) : theme.spacing(38),
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.neutralColors[900],
    border: `${theme.spacing(0.25)} solid ${borderColor}`,
    transition: "border-color 200ms ease, background-color 200ms ease",
  };
});

export const FileCardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(6),
}));

export const FileIconBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "state",
})<{ state: FileUploadCardState }>(({ theme, state }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  flexShrink: 0,
  borderRadius: theme.spacing(2.5),
  backgroundColor: theme.palette.primaryColors[900],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: FILE_CARD_STATE_TO_ICON_COLOR[state],
  transition: "color 200ms ease",
}));

export const FileMetaColumn = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

export const FileNameRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
}));

export const FileName = styled("span")(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight600,
  fontSize: theme.typography.fontSize16,
  color: theme.palette.textColors[50],
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: 1,
  minWidth: 0,
}));

export const FileMetaText = styled("span")(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize14,
  color: theme.palette.textColors[200],
}));

export const FileTypeBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "state",
})<{ state: FileUploadCardState }>(({ theme, state }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  paddingInline: theme.spacing(2),
  paddingBlock: theme.spacing(0.5),
  borderRadius: theme.spacing(1),
  backgroundColor: alpha(FILE_CARD_STATE_TO_STATUS_COLOR[state], 0.18),
  border: `${theme.spacing(0.25)} solid ${alpha(FILE_CARD_STATE_TO_STATUS_COLOR[state], 0.32)}`,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize10,
  textTransform: "uppercase",
  color: FILE_CARD_STATE_TO_STATUS_COLOR[state],
  flexShrink: 0,
}));

export const DeleteFileButton = styled(IconButton)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  color: theme.palette.textColors[200],
  transition: "color 200ms ease, background-color 200ms ease",
  "&:hover": {
    color: theme.palette.error.main,
    backgroundColor: alpha(theme.palette.error.main, 0.08),
  },
}));

export const FileProgressTrack = styled(Box)(({ theme }) => ({
  width: "100%",
  height: theme.spacing(1.5),
  borderRadius: theme.spacing(250),
  backgroundColor: theme.palette.neutralColors[800],
  overflow: "hidden",
}));

export const FileProgressFill = styled(Box, {
  shouldForwardProp: (prop) => prop !== "state" && prop !== "progress",
})<{ state: FileUploadCardState; progress: number }>(
  ({ theme, state, progress }) => ({
    height: "100%",
    width: `${Math.max(0, Math.min(100, progress))}%`,
    borderRadius: theme.spacing(250),
    backgroundColor: FILE_CARD_STATE_TO_PROGRESS_COLOR[state],
    transition: "width 240ms ease, background-color 200ms ease",
  }),
);

export const FileStatusRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
}));

export const FileStatusText = styled("span", {
  shouldForwardProp: (prop) => prop !== "state",
})<{ state: FileUploadCardState }>(({ theme, state }) => ({
  margin: 0,
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight600,
  fontSize: theme.typography.fontSize14,
  color: FILE_CARD_STATE_TO_STATUS_COLOR[state],
  "&::before": {
    content: '""',
    display: "inline-block",
    width: theme.spacing(2),
    height: theme.spacing(2),
    borderRadius: "50%",
    backgroundColor: FILE_CARD_STATE_TO_STATUS_COLOR[state],
  },
}));

export const FileProgressPercent = styled("span")(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight600,
  fontSize: theme.typography.fontSize14,
  color: theme.palette.textColors[200],
}));

export const FileErrorBanner = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  border: `${theme.spacing(0.25)} solid ${alpha(theme.palette.error.main, 0.2)}`,
  backgroundColor: alpha(theme.palette.error.main, 0.12),
  color: theme.palette.secondaryColors[50],
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight400,
  fontSize: theme.typography.fontSize14,
  width: theme.spacing(118.75),
  height: theme.spacing(13.5),
  maxWidth: "100%",
  boxSizing: "border-box",
}));

export const textAreaProps = {
  minRows: 14,
} as const;

export const FileProgressWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const LimitErrorIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  verticalAlign: "middle",
  marginRight: theme.spacing(0.5),
}));

export const BannerErrorIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: theme.typography.fontSize20,
}));

export const UploadStatusMessage = styled("span", {
  shouldForwardProp: (prop) => prop !== "state",
})<{ state: FileUploadCardState }>(({ theme, state }) => ({
  color: FILE_CARD_STATE_TO_STATUS_COLOR[state],
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
}));

export const StatusCheckIcon = styled(CheckCircleIcon)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
}));

export const UploadIcon = styled(UploadFileOutlinedIcon)(({ theme }) => ({
  fontSize: theme.typography.fontSize32,
}));
