import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

interface CollapsibleCardProps {
  isOpen: boolean;
}

const TABLET_MEDIA_QUERY =
  "@media (min-width: 768px) and (max-width: 1023.95px)";

export const SyntheticPageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  boxSizing: "border-box",
  padding: theme.spacing(9, 10),
  [TABLET_MEDIA_QUERY]: {
    padding: theme.spacing(10),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

export const SyntheticPageContent = styled(Box)(({ theme }) => ({
  maxWidth: theme.spacing(262.5),
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(10),
  [TABLET_MEDIA_QUERY]: {
    maxWidth: theme.spacing(172),
    gap: theme.spacing(8),
  },
}));

export const HeaderGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  width: "100%",
  [TABLET_MEDIA_QUERY]: {
    gap: theme.spacing(2),
  },
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  color: theme.palette.primaryColors[50],
  fontSize: theme.typography.fontSize48,
  fontWeight: theme.typography.fontWeight700,
  lineHeight: theme.spacing(15),
  whiteSpace: "nowrap",
  [TABLET_MEDIA_QUERY]: {
    fontSize: theme.typography.fontSize48,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize38,
    whiteSpace: "normal",
  },
}));

export const PageTitleHighlight = styled("span")(({ theme }) => ({
  backgroundImage: `linear-gradient(161deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
}));

export const PageSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight400,
  maxWidth: theme.spacing(181.75),
  lineHeight: theme.spacing(8),
  [TABLET_MEDIA_QUERY]: {
    maxWidth: theme.spacing(117.5),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize16,
    lineHeight: theme.spacing(6),
    maxWidth: "100%",
  },
}));

export const SettingsCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutralColors[900],
  border: `1px solid ${theme.palette.strokeColors[400]}`,
  borderRadius: theme.spacing(4),
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(10),
  [TABLET_MEDIA_QUERY]: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(6, 6, 10),
    gap: theme.spacing(8),
  },
}));

export const SettingsHeader = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 0,
}));

export const SettingsTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[100],
  fontSize: theme.typography.fontSize24,
  fontWeight: theme.typography.fontWeight400,
}));

export const SettingsDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
}));

export const SettingsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  gap: theme.spacing(4),
  minHeight: theme.spacing(12.5),
  [TABLET_MEDIA_QUERY]: {
    minHeight: theme.spacing(14),
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const InputLabel = styled(Typography)(({ theme }) => ({
  width: theme.spacing(42.75),
  color: theme.palette.primaryColors[50],
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
  lineHeight: theme.spacing(7),
  margin: 0,
  [TABLET_MEDIA_QUERY]: {
    width: theme.spacing(47.5),
    fontSize: theme.typography.fontSize20,
  },
}));

export const InputWarningLabel = styled(InputLabel)(() => ({
  width: "auto",
}));

export const NumberField = styled(TextField)(({ theme }) => ({
  width: theme.spacing(30),
  [TABLET_MEDIA_QUERY]: {
    width: theme.spacing(30),
  },
  "& .MuiInputBase-root": {
    height: theme.spacing(12.5),
    backgroundColor: theme.palette.backgroundColor,
    borderRadius: theme.spacing(1),
    color: theme.palette.textColors[50],
    transition: "box-shadow 120ms ease, border-color 120ms ease",
  },
  "& .MuiInputBase-input": {
    textAlign: "center",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize16,
    fontWeight: theme.typography.fontWeight400,
    lineHeight: theme.spacing(6),
    color: theme.palette.primaryColors[50],
    padding: 0,
    MozAppearance: "textfield",
    "&::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "&::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: alpha(theme.palette.strokeColors[400], 0.8),
  },
  "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: alpha(theme.palette.primaryColors[200], 0.8),
  },
  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primaryColors[200],
    borderWidth: theme.spacing(0.25),
  },
  "& .MuiInputBase-root.Mui-focused": {
    boxShadow: `0 0 0 ${theme.spacing(0.5)} ${alpha(theme.palette.primaryColors[200], 0.15)}`,
  },
}));

export const SourceDataSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  marginTop: theme.spacing(2),
  [TABLET_MEDIA_QUERY]: {
    gap: theme.spacing(4),
  },
}));

export const SourceDataTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[100],
  fontSize: theme.typography.fontSize24,
  fontWeight: theme.typography.fontWeight400,
  [TABLET_MEDIA_QUERY]: {
    fontSize: theme.typography.fontSize20,
    lineHeight: theme.spacing(7),
  },
}));

export const SourceDataDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
  lineHeight: theme.spacing(6),
}));

export const GenerateButton = styled(Button)(({ theme }) => ({
  alignSelf: "flex-end",
  width: theme.spacing(75),
  height: theme.spacing(14),
  borderRadius: theme.spacing(2),
  textTransform: "none",
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize20,
  lineHeight: theme.spacing(7),
  whiteSpace: "nowrap",
  color: theme.palette.textColors[50],
  backgroundImage: `linear-gradient(141deg, ${theme.palette.primaryColors[700]} 0%, ${theme.palette.primaryColors[900]} 100%)`,
  marginTop: theme.spacing(2),
  [TABLET_MEDIA_QUERY]: {
    width: theme.spacing(62.5),
  },
  "&.Mui-disabled .MuiCircularProgress-root": {
    color: theme.palette.primaryColors[50],
    opacity: 1,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minWidth: "100%",
  },
}));

export const GenerateButtonSpinner = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  opacity: 1,
  "& .MuiCircularProgress-circle": {
    strokeLinecap: "round",
  },
}));

export const ErrorAlert = styled(Alert)(({ theme }) => ({
  borderRadius: theme.spacing(2),
}));

export const CollapsibleCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<CollapsibleCardProps>(({ theme, isOpen }) => ({
  minHeight: isOpen ? theme.spacing(103.25) : theme.spacing(21),
  borderRadius: theme.spacing(2),
  border: `1px solid ${alpha(theme.palette.strokeColors[400], 0.5)}`,
  backgroundColor: alpha(theme.palette.neutralColors[900], 0.8),
  overflow: "hidden",
}));

export const CollapsibleHeader = styled(Button)(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  textTransform: "none",
  color: theme.palette.primaryColors[50],
  minHeight: theme.spacing(21),
  padding: theme.spacing(6.25),
  backgroundImage: "none !important",
  backgroundColor: `${theme.palette.neutralColors[900]} !important`,
  boxShadow: "none !important",
  border: "none",
  borderRadius: 0,
  "&:hover": {
    backgroundImage: "none !important",
    backgroundColor: `${theme.palette.neutralColors[900]} !important`,
    boxShadow: "none !important",
  },
  "&.Mui-disabled": {
    backgroundImage: "none !important",
    backgroundColor: `${theme.palette.neutralColors[900]} !important`,
  },
  "& .MuiSvgIcon-root": {
    fontSize: theme.spacing(6),
    color: theme.palette.primaryColors[100],
  },
}));

export const CollapsibleTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeight700,
  lineHeight: theme.spacing(7),
}));

export const CollapsibleBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 6.25, 6.25),
}));

export const PreviewSurface = styled(Box)(({ theme }) => ({
  minHeight: theme.spacing(70.25),
  maxHeight: theme.spacing(70.25),
  overflowY: "auto",
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.backgroundColor,
  border: `1px solid ${alpha(theme.palette.strokeColors[400], 0.7)}`,
  padding: theme.spacing(4),
  [TABLET_MEDIA_QUERY]: {
    minHeight: theme.spacing(90),
    maxHeight: theme.spacing(90),
  },
  scrollbarWidth: "thin",
  scrollbarColor: `${alpha(theme.palette.neutralColors[500], 0.85)} ${alpha(theme.palette.neutralColors[900], 0.35)}`,
  "&::-webkit-scrollbar": {
    width: theme.spacing(3),
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: alpha(theme.palette.neutralColors[900], 0.35),
    borderRadius: theme.spacing(999),
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: alpha(theme.palette.neutralColors[500], 0.85),
    borderRadius: theme.spacing(999),
    border: `${theme.spacing(0.5)} solid ${alpha(theme.palette.neutralColors[900], 0.65)}`,
    minHeight: theme.spacing(8),
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: alpha(theme.palette.neutralColors[400], 0.95),
  },
}));

export const PreviewText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
  lineHeight: 1.6,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  paddingRight: theme.spacing(2),
}));

export const PreviewToken = styled("span")(({ theme }) => ({
  display: "inline-block",
  padding: theme.spacing(0.125, 0.75),
  borderRadius: theme.spacing(0.5),
  backgroundColor: alpha(theme.palette.primaryColors[700], 0.25),
  color: theme.palette.primaryColors[100],
}));

export const CharacterCount = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4),
  color: alpha(theme.palette.textColors[200], 0.6),
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight500,
  lineHeight: theme.spacing(4),
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  textAlign: "right",
  [TABLET_MEDIA_QUERY]: {
    lineHeight: theme.spacing(4),
  },
}));

export const EmptyState = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: `1px dashed ${alpha(theme.palette.strokeColors[400], 0.9)}`,
  padding: theme.spacing(6),
  color: theme.palette.textColors[200],
  textAlign: "center",
}));
