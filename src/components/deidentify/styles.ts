import { Box, Button, Select, styled } from "@mui/material";

const deidentifySettingsStyles = {
  containerGapDesktop: 3,
  containerGapMobile: 2.5,
  containerPaddingDesktop: 3,
  containerPaddingTablet: 2.5,
  containerPaddingMobile: 2,
  containerBorderRadius: 3,
  subtitleMarginBottomDesktop: 2,
  subtitleMarginBottomMobile: 1.5,
  sectionGap: 1.5,
  controlsGapDesktop: 1.5,
  controlsGapMobile: 1,
  controlsMarginTopDesktop: 2,
  controlsMarginTopMobile: 1.5,
  buttonMinWidthDesktop: "150px",
  buttonMinHeightDesktop: 6,
  buttonMinHeightMobile: 5.5,
  buttonPaddingInlineDesktop: 3,
  buttonPaddingInlineMobile: 2,
} as const;

export const DeidentifySettingsContainer = styled("form")(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(deidentifySettingsStyles.containerGapDesktop),
  padding: theme.spacing(deidentifySettingsStyles.containerPaddingDesktop),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(deidentifySettingsStyles.containerBorderRadius),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(deidentifySettingsStyles.containerPaddingTablet),
  },
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(deidentifySettingsStyles.containerGapMobile),
    padding: theme.spacing(deidentifySettingsStyles.containerPaddingMobile),
  },
}));

export const DeidentifySettingsSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(deidentifySettingsStyles.sectionGap),
}));

export const DeidentifySettingsTitle = styled(Box)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.05rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
  },
}));

export const DeidentifySettingsSubtitle = styled(Box)(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(
    deidentifySettingsStyles.subtitleMarginBottomDesktop,
  ),
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
    marginBottom: theme.spacing(
      deidentifySettingsStyles.subtitleMarginBottomMobile,
    ),
  },
}));

export const DeidentifyLabel = styled(Box)(({ theme }) => ({
  fontSize: "0.95rem",
  fontWeight: 500,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.82rem",
  },
}));

export const DeidentifyMethodDescription = styled(Box)(({ theme }) => ({
  fontSize: "0.8rem",
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    fontSize: "0.76rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.72rem",
  },
}));

export const ControlsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(deidentifySettingsStyles.controlsGapDesktop),
  marginTop: theme.spacing(deidentifySettingsStyles.controlsMarginTopDesktop),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    gap: theme.spacing(deidentifySettingsStyles.controlsGapMobile),
    marginTop: theme.spacing(deidentifySettingsStyles.controlsMarginTopMobile),
  },
}));

export const MethodSelect = styled(Select)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  "& .MuiSelect-select": {
    fontSize: "0.92rem",
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiSelect-select, & .MuiOutlinedInput-input": {
      fontSize: "0.85rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiSelect-select, & .MuiOutlinedInput-input": {
      fontSize: "0.8rem",
    },
  },
}));

export const AnalyzeButton = styled(Button)(({ theme }) => ({
  minWidth: deidentifySettingsStyles.buttonMinWidthDesktop,
  minHeight: theme.spacing(deidentifySettingsStyles.buttonMinHeightDesktop),
  paddingInline: theme.spacing(
    deidentifySettingsStyles.buttonPaddingInlineDesktop,
  ),
  borderRadius: theme.spacing(1.5),
  fontWeight: 600,
  letterSpacing: 0,
  justifyContent: "space-between",
  fontSize: "0.92rem",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minHeight: theme.spacing(deidentifySettingsStyles.buttonMinHeightMobile),
    paddingInline: theme.spacing(
      deidentifySettingsStyles.buttonPaddingInlineMobile,
    ),
    fontSize: "0.85rem",
    justifyContent: "center",
  },
  "& .MuiButton-startIcon": {
    marginLeft: 0,
    marginRight: theme.spacing(1),
  },
  "& .MuiButton-startIcon > *:nth-of-type(1)": {
    fontSize: "1.15rem",
  },
}));
