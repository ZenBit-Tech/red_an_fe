import { Box, Paper } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const SelectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
  [theme.breakpoints.down("lg")]: {
    gap: theme.spacing(8),
  },
}));

export const SelectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  minHeight: theme.spacing(43),
  [theme.breakpoints.down("lg")]: {
    minHeight: "auto",
    gap: theme.spacing(2),
  },
}));

export const SelectionTitle = styled("h1")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize48,
  color: theme.palette.textColors[50],
  margin: 0,
}));

export const SelectionTitleHighlight = styled("span")(({ theme }) => ({
  backgroundImage: `linear-gradient(161deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
}));

export const SelectionSubtitle = styled("p")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.textColors[200],
  maxWidth: theme.spacing(180),
  margin: 0,
}));

export const CardsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(6),
}));

export const SelectionCard = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>(({ theme, selected }) => ({
  boxSizing: "border-box",
  width: theme.spacing(83.5),
  height: theme.spacing(84.25),
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  borderRadius: theme.spacing(2),
  cursor: "pointer",
  border: selected
    ? `${theme.spacing(0.5)} solid transparent`
    : `${theme.spacing(0.25)} solid ${theme.palette.strokeColors[400]}`,
  backgroundColor: selected
    ? theme.palette.neutralColors[900]
    : theme.palette.secondaryColors[900],
  backgroundImage: selected
    ? `linear-gradient(${theme.palette.neutralColors[900]}, ${theme.palette.neutralColors[900]}), linear-gradient(90deg, ${theme.palette.primaryColors[700]} 0%, ${theme.palette.primaryColors[900]} 100%)`
    : "none",
  backgroundOrigin: "border-box",
  backgroundClip: selected ? "padding-box, border-box" : "border-box",
  boxShadow: "none",
  transition: "border-color 220ms ease, background-color 220ms ease",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.25),
  outline: "none",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: theme.spacing(0.5),
    background: `linear-gradient(90deg, ${alpha(theme.palette.primaryColors[200], 0)} 0%, ${alpha(theme.palette.primaryColors[200], 0.8)} 50%, ${alpha(theme.palette.primaryColors[200], 0)} 100%)`,
    zIndex: 1,
    opacity: selected ? 1 : 0,
    transition: "opacity 220ms ease",
  },
  "&:hover": {
    borderColor: selected ? "transparent" : theme.palette.secondaryColors[900],
    backgroundColor: theme.palette.secondaryColors[900],
  },
  "&:hover::before": {
    opacity: 1,
  },
  "&:focus-visible": {
    borderColor: selected ? "transparent" : theme.palette.primaryColors[200],
  },
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    height: theme.spacing(69.75),
  },
}));

export const FrameworkCategory = styled(Box, {
  shouldForwardProp: (prop) => prop !== "selected" && prop !== "isDeveloper",
})<{ selected: boolean; isDeveloper?: boolean }>(
  ({ theme, selected, isDeveloper }) => ({
    alignSelf: "flex-start",
    display: "inline-flex",
    alignItems: "center",
    paddingBlock: theme.spacing(1),
    paddingInline: theme.spacing(2),
    borderRadius: 999,
    backgroundColor: isDeveloper
      ? alpha(theme.palette.error.main, 0.1)
      : selected
        ? alpha(theme.palette.primaryColors[200], 0.18)
        : alpha(theme.palette.primaryColors[200], 0.08),
    color: isDeveloper
      ? theme.palette.error.main
      : theme.palette.primaryColors[200],
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize12,
    fontWeight: theme.typography.fontWeight700,
    textTransform: "uppercase",
  }),
);

export const FrameworkTitle = styled("h2")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize24,
  color: theme.palette.textColors[50],
  margin: 0,
  marginTop: theme.spacing(0.5),
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize18,
  },
}));

export const FrameworkDescription = styled("p")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.textColors[200],
  margin: 0,
  flexGrow: 1,
  [theme.breakpoints.down("lg")]: {
    whiteSpace: "pre-line",
  },
}));

export const CardDivider = styled(Box)(({ theme }) => ({
  height: theme.spacing(0.25),
  width: "100%",
  backgroundColor: alpha(theme.palette.strokeColors[400], 0.5),
}));

export const CardFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  marginTop: theme.spacing(0.5),
}));

export const CardFooterLabel = styled(Box, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>(({ theme, selected }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: selected ? "flex-start" : "space-between",
  gap: theme.spacing(2),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight700,
  textTransform: "uppercase",
  color: selected
    ? theme.palette.primaryColors[200]
    : theme.palette.textColors[200],
  "& svg": {
    fontSize: selected
      ? theme.typography.fontSize18
      : theme.typography.fontSize16,
  },
}));

export const ActiveCheckBadge = styled(Box)(({ theme }) => ({
  width: theme.spacing(5.5),
  height: theme.spacing(5.5),
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: alpha(theme.palette.primaryColors[200], 0.18),
  color: theme.palette.primaryColors[200],
  flexShrink: 0,
}));

export const SelectedLine = styled(Box)(({ theme }) => ({
  flex: 1,
  height: theme.spacing(0.75),
  borderRadius: theme.spacing(0.5),
  backgroundColor: theme.palette.primaryColors[700],
  marginLeft: theme.spacing(2),
  [theme.breakpoints.down("lg")]: {
    flex: "none",
    width: theme.spacing(24),
  },
}));
