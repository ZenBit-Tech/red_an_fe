import { Box, Button, Select, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

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

export const DeidentifySettingsTitle = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize20}px`,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: `${theme.typography.fontSize18}px`,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: `${theme.typography.fontSize16}px`,
  },
}));

export const DeidentifySettingsSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize14}px`,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(
    deidentifySettingsStyles.subtitleMarginBottomDesktop,
  ),
  [theme.breakpoints.down("sm")]: {
    fontSize: `${theme.typography.fontSize12}px`,
    marginBottom: theme.spacing(
      deidentifySettingsStyles.subtitleMarginBottomMobile,
    ),
  },
}));

export const DeidentifyLabel = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize16}px`,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    fontSize: `${theme.typography.fontSize14}px`,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: `${theme.typography.fontSize12}px`,
  },
}));

export const DeidentifyMethodDescription = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize12}px`,
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    fontSize: `${theme.typography.fontSize12}px`,
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
    fontSize: `${theme.typography.fontSize14}px`,
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiSelect-select, & .MuiOutlinedInput-input": {
      fontSize: `${theme.typography.fontSize14}px`,
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiSelect-select, & .MuiOutlinedInput-input": {
      fontSize: `${theme.typography.fontSize12}px`,
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
  fontWeight: theme.typography.fontWeight600,
  letterSpacing: 0,
  justifyContent: "space-between",
  fontSize: `${theme.typography.fontSize14}px`,
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minHeight: theme.spacing(deidentifySettingsStyles.buttonMinHeightMobile),
    paddingInline: theme.spacing(
      deidentifySettingsStyles.buttonPaddingInlineMobile,
    ),
    fontSize: `${theme.typography.fontSize12}px`,
    justifyContent: "center",
  },
  "& .MuiButton-startIcon": {
    marginLeft: 0,
    marginRight: theme.spacing(1),
  },
  "& .MuiButton-startIcon > *:nth-of-type(1)": {
    fontSize: `${theme.typography.fontSize18}px`,
  },
}));
