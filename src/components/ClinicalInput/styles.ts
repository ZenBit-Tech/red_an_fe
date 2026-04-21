import { Box, Button, Tab, Tabs, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const clinicalTextInputStyles = {
  panelMaxWidth: 846,
  panelMinHeight: 448,
  contentMaxWidth: 814,
  contentHeight: 303,
  containerGap: 2,
  containerPadding: 3,
  containerPaddingTablet: 2.5,
  containerPaddingMobile: 2,
  borderRadius: 3,
  tabsInnerPadding: 0.5,
  tabBorderRadiusPx: 6,
  tabSelectedHeight: 40,
  textareaMinRows: 10,
  dropzoneBorderRadius: 2,
  dropzoneIconBoxSize: 52,
  dropzoneGap: 1.5,
  chipGap: 1,
  browseButtonPaddingX: 3,
  browseButtonPaddingY: 1,
  subtitleMarginBottom: 2,
  footerPaddingY: 1.5,
} as const;

export const ClinicalTextInputContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: clinicalTextInputStyles.panelMaxWidth,
  marginInline: "auto",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(clinicalTextInputStyles.containerGap),
  border: `1px solid ${theme.palette.neutralColors[800]}`,
  borderRadius: theme.spacing(clinicalTextInputStyles.borderRadius),
  backgroundColor: theme.palette.secondaryColors[900],
  padding: theme.spacing(clinicalTextInputStyles.containerPadding),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(clinicalTextInputStyles.containerPaddingTablet),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(clinicalTextInputStyles.containerPaddingMobile),
  },
}));

export const ClinicalTextInputTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize18,
  },
}));

export const ClinicalTextInputSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.neutralColors[300],
  marginBottom: theme.spacing(clinicalTextInputStyles.subtitleMarginBottom),
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize12,
  },
}));

export const ClinicalInputTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 44,
  borderRadius: `${clinicalTextInputStyles.tabBorderRadiusPx}px`,
  backgroundColor: theme.palette.neutralColors[900],
  padding: theme.spacing(clinicalTextInputStyles.tabsInnerPadding),
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-list, & .MuiTabs-flexContainer": {
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
  fontWeight: theme.typography.fontWeight600,
  fontSize: theme.typography.fontSize14,
  minHeight: clinicalTextInputStyles.tabSelectedHeight,
  paddingInline: theme.spacing(2),
  borderRadius: `${clinicalTextInputStyles.tabBorderRadiusPx}px`,
  color: theme.palette.neutralColors[300],
  "&.Mui-selected": {
    color: theme.palette.textColors[50],
    backgroundImage: `linear-gradient(90deg, ${theme.palette.primaryColors[500]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  },
}));

export const ClinicalInputPanelsContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: clinicalTextInputStyles.contentMaxWidth,
  marginInline: "auto",
  minHeight: clinicalTextInputStyles.contentHeight,
  [theme.breakpoints.down("sm")]: {
    minHeight: 240,
  },
}));

export const ClinicalInputOverlayPanel = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ active, theme }) => ({
  position: active ? "relative" : "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  boxSizing: "border-box",
  gap: theme.spacing(1.5),
  opacity: active ? 1 : 0,
  visibility: active ? "visible" : "hidden",
  pointerEvents: active ? "auto" : "none",
  transition: "opacity 0.2s ease, visibility 0.2s ease",
}));

export const ClinicalTextArea = styled(TextField)(({ theme }) => ({
  flex: 1,
  "& .MuiInputBase-root": {
    height: "100%",
    padding: 0,
    backgroundColor: "transparent",
    alignItems: "flex-start",
    borderRadius: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    fontSize: theme.typography.fontSize14,
    lineHeight: 1.55,
    color: theme.palette.textColors[50],
    "&::placeholder": {
      color: theme.palette.neutralColors[400],
      opacity: 1,
    },
  },
  "& .MuiOutlinedInput-root": {
    height: "100%",
    overflow: "hidden",
    backgroundColor: theme.palette.neutralColors[900],
    alignItems: "flex-start",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    minHeight: clinicalTextInputStyles.contentHeight,
    "& fieldset": {
      border: `1px solid ${theme.palette.neutralColors[800]}`,
    },
    "&:hover fieldset": {
      border: `1px solid ${theme.palette.primaryColors[400]}`,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${theme.palette.primaryColors[400]}`,
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
}));

export const UploadedFilePath = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "visible",
})<{ visible: boolean }>(({ theme, visible }) => ({
  fontSize: theme.typography.fontSize12,
  minHeight: 36,
  color: theme.palette.neutralColors[300],
  border: `1px solid ${theme.palette.neutralColors[800]}`,
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.neutralColors[900],
  padding: theme.spacing(1, 1.5),
  wordBreak: "break-all",
  visibility: visible ? "visible" : "hidden",
}));

export const DropZone = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: clinicalTextInputStyles.contentHeight,
  borderRadius: theme.spacing(clinicalTextInputStyles.dropzoneBorderRadius),
  border: `1px dashed ${theme.palette.neutralColors[700]}`,
  backgroundColor: theme.palette.neutralColors[900],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: theme.spacing(clinicalTextInputStyles.dropzoneGap),
  padding: theme.spacing(4),
  transition: "border-color 0.2s ease, background-color 0.2s ease",
  "&:hover": {
    borderColor: theme.palette.primaryColors[400],
    backgroundColor: theme.palette.neutralColors[800],
  },
}));

export const DropZoneIconBox = styled(Box)(({ theme }) => ({
  width: clinicalTextInputStyles.dropzoneIconBoxSize,
  height: clinicalTextInputStyles.dropzoneIconBoxSize,
  borderRadius: theme.spacing(1.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.textColors[50],
  backgroundImage: `linear-gradient(135deg, ${theme.palette.primaryColors[400]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
}));

export const DropZoneChips = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(clinicalTextInputStyles.chipGap),
  flexWrap: "wrap",
  justifyContent: "center",
}));

export const DropZoneChip = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5, 1.25),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.neutralColors[800],
  color: theme.palette.neutralColors[100],
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight600,
  lineHeight: 1.4,
}));

export const HiddenFileInput = styled("input")({
  display: "none",
});

export const BrowseButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeight600,
  fontSize: theme.typography.fontSize14,
  padding: theme.spacing(
    clinicalTextInputStyles.browseButtonPaddingY,
    clinicalTextInputStyles.browseButtonPaddingX,
  ),
  borderRadius: theme.spacing(1.5),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: theme.typography.fontSize12,
  },
}));

export const DropZoneTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.textColors[50],
}));

export const DropZoneSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.neutralColors[300],
}));

export const HelperErrorText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.error.main,
  marginTop: theme.spacing(0.5),
}));

export const PanelFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: theme.spacing(clinicalTextInputStyles.footerPaddingY),
  borderTop: `1px solid ${theme.palette.neutralColors[800]}`,
  color: theme.palette.neutralColors[300],
  fontSize: theme.typography.fontSize12,
}));

export const PanelFooterItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.75),
  fontWeight: theme.typography.fontWeight500,
}));

export const PanelFooterDot = styled(Box)(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: theme.palette.tertiaryColors[400],
}));

export const textAreaProps = {
  minRows: clinicalTextInputStyles.textareaMinRows,
} as const;
