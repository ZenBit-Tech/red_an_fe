import { Box, Select, Switch, Typography, Slider } from "@mui/material";
import { alpha, styled, type Theme } from "@mui/material/styles";
import { DROPDOWN_MENU_COLORS } from "./constants";

const deidentifySettingsStyles = {
  containerGapDesktop: 8,
  containerBorderRadius: 2,
  subtitleMarginBottomDesktop: 0,
  subtitleMarginBottomMobile: 0,
  sectionGap: 3,
} as const;

export const DeidentifySettingsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(10),
}));

export const DeidentifyPageHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: theme.spacing(8),
}));

export const DeidentifyPageTitleGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  minHeight: theme.spacing(43),
}));

export const DeidentifyPageTitle = styled("h1")(({ theme }) => ({
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize48,
  color: theme.palette.textColors[50],
  margin: 0,
  marginBottom: theme.spacing(4),
}));

export const DeidentifyPageTitleHighlight = styled("span")(({ theme }) => ({
  backgroundImage: `linear-gradient(161deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
}));

export const DeidentifyPageSubtitle = styled("p")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.textColors[200],
  maxWidth: theme.spacing(180),
  margin: 0,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize14,
  },
}));

export const FrameworkBadge = styled(Box)(({ theme }) => ({
  width: "auto",
  height: theme.spacing(9),
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(2),
  backgroundColor: alpha(theme.palette.primaryColors[900], 0.5),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.primaryColors[200],
  whiteSpace: "nowrap",
  flexShrink: 0,
}));

export const FrameworkBadgeLabel = styled("span")(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontWeight: theme.typography.fontWeight400,
}));

export const DeidentifySettingsContainer = styled("form")(({ theme }) => ({
  width: "100%",
  maxWidth: theme.spacing(241, 25),
  margin: "0 auto",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(deidentifySettingsStyles.containerGapDesktop),
  padding: theme.spacing(6, 6, 8, 6),
  border: `1px solid ${theme.palette.strokeColors[400]}`,
  borderRadius: theme.spacing(deidentifySettingsStyles.containerBorderRadius),
  backgroundColor: theme.palette.neutralColors[900],
}));

export const DeidentifySettingsSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(deidentifySettingsStyles.sectionGap),
}));

export const DeidentifySettingsTitle = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize24}px`,
  color: theme.palette.primaryColors[100],
}));

export const DeidentifySettingsSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize14}px`,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(
    deidentifySettingsStyles.subtitleMarginBottomDesktop,
  ),
}));

export const DeidentifySettingsMethod = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize14}px`,
  color: theme.palette.text.secondary,
}));

export const MethodSelect = styled(Select)(({ theme }) => ({
  backgroundColor: DROPDOWN_MENU_COLORS.background,
  borderRadius: theme.spacing(1),
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: theme.spacing(1),
  },
  "& .MuiSelect-select": {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    fontWeight: theme.typography.fontWeight400,
    fontSize: `${theme.typography.fontSize14}px`,
    color: DROPDOWN_MENU_COLORS.text,
  },
  "& .MuiSelect-icon": {
    color: theme.palette.primaryColors[100],
  },
  "& .MuiSelect-iconOpen": {
    color: theme.palette.primaryColors[500],
  },
}));

export const PreserveSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase": {
    "&:not(.Mui-checked)": {
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primaryColors[200],
        opacity: 0.5,
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.textColors[50],
      },
    },
  },
}));

export const PreserveStructureBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${DROPDOWN_MENU_COLORS.border}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(3, 4),
  width: "100%",
  maxWidth: theme.spacing(229.25),
  height: theme.spacing(16.5),
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const PreserveTextWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

export const ThresholdBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${alpha(theme.palette.strokeColors[400], 0.3)}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(3, 4),
  width: "100%",
  maxWidth: theme.spacing(229.25),
  height: theme.spacing(25.5),
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const ThresholdLabelRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

export const DeidentifyLabel = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize16}px`,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.text.primary,
}));

export const ThresholdValue = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize16}px`,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.text.primary,
}));

export const DeidentifyMethodDescription = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize12}px`,
  color: theme.palette.text.secondary,
}));

export const ThresholdHintRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export const CustomSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primaryColors[500],
  height: theme.spacing(1.5),
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: theme.palette.primaryColors[400],
    "&::before": {
      boxShadow: "none",
    },
  },
  "& .MuiSlider-rail": {
    opacity: 1,
    backgroundColor: theme.palette.neutralColors[700],
  },
}));

export const DropDownMenuProps = {
  PaperProps: {
    sx: (theme: Theme) => ({
      backgroundColor: DROPDOWN_MENU_COLORS.background,
      borderRadius: theme.spacing(1),
      backgroundImage: "none",
      marginTop: theme.spacing(1),
      border: `1px solid ${DROPDOWN_MENU_COLORS.border}`,

      "& .MuiList-root": {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(3),
        padding: theme.spacing(3),
      },

      "& .MuiMenuItem-root": {
        color: DROPDOWN_MENU_COLORS.text,
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2, 3),
        fontSize: {
          xs: `${theme.typography.fontSize12}px`,
          sm: `${theme.typography.fontSize14}px`,
          md: `${theme.typography.fontSize14}px`,
        },
        "&:hover": {
          backgroundColor: DROPDOWN_MENU_COLORS.hoverBg,
        },
        "&.Mui-selected": {
          backgroundColor: DROPDOWN_MENU_COLORS.selectedBg,
          "&:hover": {
            backgroundColor: DROPDOWN_MENU_COLORS.selectedHoverBg,
          },
        },
      },
    }),
  },
};
