import {
  Box,
  Button,
  Tab,
  Tabs,
  TextField,
  Typography,
  styled,
} from "@mui/material";

const clinicalTextInputStyles = {
  containerGap: 2,
  containerPadding: 3,
  containerPaddingTablet: 2.5,
  containerPaddingMobile: 2,
  borderRadius: 3,
  tabsHeight: 52,
  tabsHeightTablet: 48,
  tabsHeightMobile: 44,
  tabsInnerPadding: 0.5,
  tabsInnerPaddingMobile: 0.35,
  tabBorderRadius: 2,
  tabBorderWidth: 1,
  tabPanelPaddingTop: 2,
  tabPanelPaddingTopMobile: 1.5,
  tabPanelGap: 2,
  tabPanelGapMobile: 1.5,
  contentHeight: 470,
  contentHeightTablet: 420,
  contentHeightMobile: 380,
  textareaMinRows: 16,
  dropzoneBorderRadius: 2,
  dropzonePadding: 4,
  dropzonePaddingTablet: 3,
  dropzonePaddingMobile: 2,
  dropzoneGap: 1,
  uploadButtonPaddingX: 3,
  uploadButtonPaddingY: 1,
  filePathMarginBottom: 1.5,
  filePathPadding: 1,
  filePathMinHeight: 40,
  subtitleMarginBottom: 2,
  panelTransitionDuration: "0.2s",
} as const;

export const ClinicalTextInputContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(clinicalTextInputStyles.containerGap),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(clinicalTextInputStyles.borderRadius),
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(clinicalTextInputStyles.containerPadding),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(clinicalTextInputStyles.containerPaddingTablet),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(clinicalTextInputStyles.containerPaddingMobile),
  },
}));

export const ClinicalTextInputTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  fontWeight: 600,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: "0.98rem",
    fontWeight: 600,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.92rem",
    fontWeight: 600,
  },
}));

export const ClinicalTextInputSubtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: 500,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(clinicalTextInputStyles.subtitleMarginBottom),
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
    fontWeight: 500,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.78rem",
    marginBottom: theme.spacing(1.5),
  },
}));

export const ClinicalInputTabs = styled(Tabs)(({ theme }) => ({
  minHeight: theme.spacing(clinicalTextInputStyles.tabsHeight / 8),
  borderRadius: theme.spacing(clinicalTextInputStyles.tabBorderRadius),
  backgroundColor: theme.palette.action.hover,
  padding: theme.spacing(clinicalTextInputStyles.tabsInnerPadding),
  [theme.breakpoints.down("md")]: {
    minHeight: theme.spacing(clinicalTextInputStyles.tabsHeightTablet / 8),
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: theme.spacing(clinicalTextInputStyles.tabsHeightMobile / 8),
    padding: theme.spacing(clinicalTextInputStyles.tabsInnerPaddingMobile),
  },
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
  maxWidth: "none",
  flex: 1,
  textTransform: "none",
  fontWeight: 600,
  minHeight: theme.spacing(5),
  paddingInline: theme.spacing(2),
  border: `${clinicalTextInputStyles.tabBorderWidth}px solid transparent`,
  borderRadius: theme.spacing(clinicalTextInputStyles.tabBorderRadius - 0.25),
  color: theme.palette.text.secondary,
  "&.Mui-selected": {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.neutralColors[500],
    boxShadow: "0 1px 2px rgba(15, 23, 42, 0.18)",
  },
  [theme.breakpoints.down("md")]: {
    minHeight: theme.spacing(4.75),
    paddingInline: theme.spacing(1.5),
    fontSize: "0.83rem",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: theme.spacing(4.5),
    fontSize: "0.78rem",
    paddingInline: theme.spacing(1),
  },
}));

export const ClinicalInputTabPanel = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(clinicalTextInputStyles.tabPanelGap),
  paddingTop: theme.spacing(clinicalTextInputStyles.tabPanelPaddingTop),
}));

export const ClinicalInputPanelsContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: theme.spacing(clinicalTextInputStyles.contentHeight / 8),
  [theme.breakpoints.down("md")]: {
    height: theme.spacing(clinicalTextInputStyles.contentHeightTablet / 8),
  },
  [theme.breakpoints.down("sm")]: {
    height: theme.spacing(clinicalTextInputStyles.contentHeightMobile / 8),
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
  gap: theme.spacing(clinicalTextInputStyles.tabPanelGap),
  paddingTop: theme.spacing(clinicalTextInputStyles.tabPanelPaddingTop),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(clinicalTextInputStyles.tabPanelGapMobile),
    paddingTop: theme.spacing(clinicalTextInputStyles.tabPanelPaddingTopMobile),
  },
  opacity: active ? 1 : 0,
  visibility: active ? "visible" : "hidden",
  pointerEvents: active ? "auto" : "none",
  transition: `opacity ${clinicalTextInputStyles.panelTransitionDuration} ease, visibility ${clinicalTextInputStyles.panelTransitionDuration} ease`,
}));

export const ClinicalTextArea = styled(TextField)(({ theme }) => ({
  flex: 1,
  "& .MuiInputBase-input": {
    fontSize: "0.92rem",
    lineHeight: 1.5,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.85rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  "& .MuiOutlinedInput-root": {
    height: "100%",
    overflow: "hidden",
    backgroundColor: theme.palette.action.hover,
    alignItems: "flex-start",
    borderRadius: theme.spacing(2),
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  "& .MuiOutlinedInput-inputMultiline": {
    height: "100% !important",
    boxSizing: "border-box",
    resize: "none",
  },
  "& textarea.MuiInputBase-inputMultiline": {
    overflowY: "auto",
    overflowX: "hidden",
  },
  "& .MuiOutlinedInput-input": {
    position: "relative",
    zIndex: 1,
  },
}));

export const UploadedFilePath = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "visible",
})<{ visible: boolean }>(({ theme, visible }) => ({
  ...theme.typography.body2,
  minHeight: theme.spacing(clinicalTextInputStyles.filePathMinHeight / 8),
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(clinicalTextInputStyles.filePathPadding),
  marginBottom: theme.spacing(clinicalTextInputStyles.filePathMarginBottom),
  wordBreak: "break-all",
  visibility: visible ? "visible" : "hidden",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));

export const DropZone = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: 0,
  borderRadius: theme.spacing(clinicalTextInputStyles.dropzoneBorderRadius),
  border: `1px dashed ${theme.palette.divider}`,
  backgroundColor: theme.palette.action.hover,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: theme.spacing(clinicalTextInputStyles.dropzoneGap),
  padding: theme.spacing(clinicalTextInputStyles.dropzonePadding),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(clinicalTextInputStyles.dropzonePaddingTablet),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(clinicalTextInputStyles.dropzonePaddingMobile),
  },
}));

export const HiddenFileInput = styled("input")({
  display: "none",
});

export const BrowseButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 600,
  fontSize: "0.9rem",
  padding: theme.spacing(
    clinicalTextInputStyles.uploadButtonPaddingY,
    clinicalTextInputStyles.uploadButtonPaddingX,
  ),
  [theme.breakpoints.down("md")]: {
    fontSize: "0.84rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: "0.78rem",
  },
}));

export const DropZoneTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: 600,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: "0.95rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.85rem",
    fontWeight: 600,
  },
}));

export const DropZoneSubtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("md")]: {
    fontSize: "0.78rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.72rem",
  },
}));

export const HelperErrorText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.error.main,
  marginTop: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    fontSize: "0.78rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.72rem",
  },
}));

export const textAreaProps = {
  minRows: clinicalTextInputStyles.textareaMinRows,
} as const;
