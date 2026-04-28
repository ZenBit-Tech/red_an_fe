import { Box, Select, Typography, Slider } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const deidentifySettingsStyles = {
  containerGapDesktop: 8,
  containerGapMobile: 2.5,
  containerPaddingDesktop: 3,
  containerPaddingTablet: 2.5,
  containerPaddingMobile: 2,
  containerBorderRadius: 3,
  subtitleMarginBottomDesktop: 0,
  subtitleMarginBottomMobile: 0,
  sectionGap: 1.5,
} as const;

export const DeidentifySettingsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
}));

export const DeidentifyPageHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: theme.spacing(4),
}));

export const DeidentifyPageTitleGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  minHeight: theme.spacing(43),
  [theme.breakpoints.down("md")]: {
    minHeight: "auto",
  },
}));

export const DeidentifyPageTitle = styled("h1")(({ theme }) => ({
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize48,
  color: "#dae2fd",
  margin: 0,
  marginBottom: "16px",
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize26,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize24,
  },
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
  width: "100%",
  maxWidth: "130px",
  height: "36px",
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(2),
  backgroundColor: alpha(theme.palette.primaryColors[900], 0.5),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight700,
  color: "#b0c6ff",
  whiteSpace: "nowrap",
  flexShrink: 0,
}));

export const FrameworkBadgeLabel = styled("span")(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontWeight: theme.typography.fontWeight400,
}));

export const DeidentifySettingsContainer = styled("form")(({ theme }) => ({
  width: "100%",
  maxWidth: "965px",
  margin: "0 auto",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(deidentifySettingsStyles.containerGapDesktop),
  padding: "24px 24px 32px 24px",
  border: `1px solid ${theme.palette.strokeColors[400]}`,
  borderRadius: theme.spacing(deidentifySettingsStyles.containerBorderRadius),
  backgroundColor: theme.palette.background.paper,
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
  fontSize: `${theme.typography.fontSize24}px`,
  color: "#b2c5ff",
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

export const DeidentifySettingsMethod = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize14}px`,
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("sm")]: {
    fontSize: `${theme.typography.fontSize12}px`,
  },
}));

export const MethodSelect = styled(Select)(() => ({
  backgroundColor: "#060e20",
  borderRadius: "4px",
  // Радіус рамки для MUI Select задається тут
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "4px",
  },
  "& .MuiSelect-select": {
    // Використовуємо окремі padding, щоб не затерти стандартний paddingRight від MUI (який потрібен для стрілочки)
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "16px",
    fontWeight: 400,
    fontSize: "14px",
    color: "#d9e2ff",
  },
  // Стилізуємо саму стрілочку
  "& .MuiSelect-icon": {
    color: "#b2c5ff",
  },
}));

/* --- НОВІ КОМПОНЕНТИ --- */

export const PreserveStructureBox = styled(Box)(({ theme }) => ({
  border: "1px solid rgba(176, 198, 255, 0.08)",
  borderRadius: "4px",
  padding: "12px 16px",
  width: "100%",
  maxWidth: "917px",
  height: "66px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    minHeight: "66px",
  },
}));

export const PreserveTextWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

export const ThresholdBox = styled(Box)(({ theme }) => ({
  border: "1px solid rgba(67, 70, 83, 0.3)",
  borderRadius: "4px",
  padding: "12px 16px",
  width: "100%",
  maxWidth: "917px",
  height: "102px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    minHeight: "102px",
  },
}));

export const ThresholdLabelRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
});

export const DeidentifyLabel = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize16}px`,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: `${theme.typography.fontSize14}px`,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: `${theme.typography.fontSize12}px`,
  },
}));

export const ThresholdValue = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize16}px`,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.text.primary, // Змінено на білий, судячи зі скріншоту
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
}));

export const ThresholdHintRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginTop: "4px",
  color: theme.palette.text.secondary,
}));
export const CustomSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primaryColors[500], // Синій колір для заповненої частини та повзунка
  height: 6, // Товщина смуги (підбери під макет, зазвичай 4-6px)
  "& .MuiSlider-track": {
    border: "none", // Прибираємо стандартний бордер
  },
  "& .MuiSlider-thumb": {
    width: 16,
    height: 16,
    backgroundColor: theme.palette.primaryColors[400], // Яскравий синій для самого кружечка
    "&::before": {
      boxShadow: "none", // Прибираємо тінь при наведенні (за бажанням)
    },
  },
  "& .MuiSlider-rail": {
    opacity: 1, // Обов'язково 1, бо MUI по дефолту робить його напівпрозорим
    backgroundColor: theme.palette.neutralColors[700], // Темно-сірий колір для НЕзаповненої частини
  },
}));
