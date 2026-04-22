import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const complianceStyles = {
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
  cardCategoryFontSize: "0.7rem",
  cardTitleFontSizeDesktop: "24px",
  cardTitleFontSizeMobile: "1.2rem",
  cardDescriptionFontSize: "16px",
  cardDescriptionLineHeight: 1.6,
  cardFooterFontSize: "0.72rem",
  cardContentGap: 1.25,
  cardFooterGap: 2.5,
  dividerOpacity: 0.18,
} as const;

const COLOR = {
  CARD_BG: "#060e20", // Неактивний фон за новим дизайном
  CARD_BG_ACTIVE: "#131b2e", // Активний фон за новим дизайном
  CARD_BG_HOVER: "#131b2e",
  CARD_BORDER: "#2d3449",
  CARD_BORDER_HOVER: "#3a4766",
  CARD_BORDER_ACTIVE: "#b0c6ff",
  CATEGORY_BG: "rgba(176, 198, 255, 0.08)",
  CATEGORY_BG_ACTIVE: "rgba(176, 198, 255, 0.18)",
  CATEGORY_TEXT: "#b0c6ff",
  TITLE: "#dae2fd",
  TITLE_HIGHLIGHT: "linear-gradient(161deg, #b0c6ff 0%, #0d47a1 100%)",
  DESCRIPTION: "#c4c6d4",
  SUBTITLE: "#c3c6d4",
  DIVIDER: "rgba(67, 70, 82, 0.5)",
  FOOTER_ACTIVE: "#b0c6ff",
  FOOTER_INACTIVE: "#70778e",
  ACTIVE_SHADOW: "linear-gradient(90deg, #0D47A1 0%, #002D6F 100%)",
  TOP_GRADIENT:
    "linear-gradient(90deg, rgba(178, 197, 255, 0) 0%, rgba(178, 197, 255, 0.8) 50%, rgba(178, 197, 255, 0) 100%)",
  CHECK_BG: "rgba(176, 198, 255, 0.18)",
  ACTIVE_LINE: "#0D47A1",
  DEV_CATEGORY_BG: "rgba(239, 68, 68, 0.1)", // Новий
  DEV_CATEGORY_TEXT: "#ef4444", // Новий
} as const;

export const SelectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(complianceStyles.headerSectionGap),
}));

export const SelectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(complianceStyles.headerGap),
  minHeight: complianceStyles.headerMinHeight,
  [theme.breakpoints.down("md")]: {
    minHeight: "auto",
  },
}));

export const SelectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 700,
  fontSize: complianceStyles.titleFontSizeDesktop,
  lineHeight: complianceStyles.titleLineHeight,
  color: COLOR.TITLE,
  margin: 0,
  [theme.breakpoints.down("md")]: {
    fontSize: complianceStyles.titleFontSizeTablet,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: complianceStyles.titleFontSizeMobile,
  },
})) as typeof Typography;

export const SelectionTitleHighlight = styled("span")({
  backgroundImage: COLOR.TITLE_HIGHLIGHT,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
});

export const SelectionSubtitle = styled(Typography)({
  fontFamily: `"Manrope", sans-serif`,
  fontSize: complianceStyles.subtitleFontSize,
  lineHeight: complianceStyles.subtitleLineHeight,
  fontWeight: 500,
  color: COLOR.SUBTITLE,
  maxWidth: complianceStyles.subtitleMaxWidth,
});

export const CardsWrapper = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "24px",
});

export const SelectionCard = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>(({ theme, selected }) => ({
  boxSizing: "border-box",
  width: "334px",
  height: "337px",
  padding: "32px 24px",
  borderRadius: "8px",
  cursor: "pointer",
  border: selected ? "2px solid transparent" : `1px solid ${COLOR.CARD_BORDER}`,
  backgroundColor: selected ? COLOR.CARD_BG_ACTIVE : COLOR.CARD_BG,
  backgroundImage: selected
    ? `linear-gradient(${COLOR.CARD_BG_ACTIVE}, ${COLOR.CARD_BG_ACTIVE}), ${COLOR.ACTIVE_SHADOW}`
    : "none",
  backgroundOrigin: "border-box",
  backgroundClip: selected ? "padding-box, border-box" : "border-box",
  boxShadow: "none",
  transition: "border-color 220ms ease, background-color 220ms ease",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(complianceStyles.cardContentGap),
  outline: "none",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: COLOR.TOP_GRADIENT,
    zIndex: 1,
    opacity: selected ? 1 : 0,
    transition: "opacity 220ms ease",
  },
  "&:hover": {
    borderColor: selected ? "transparent" : COLOR.CARD_BG_ACTIVE,
    backgroundColor: COLOR.CARD_BG_ACTIVE,
  },
  "&:hover::before": {
    opacity: 1,
  },
  "&:focus-visible": {
    borderColor: selected ? "transparent" : COLOR.CARD_BORDER_ACTIVE,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
    minHeight: "337px",
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
      ? COLOR.DEV_CATEGORY_BG
      : selected
        ? COLOR.CATEGORY_BG_ACTIVE
        : COLOR.CATEGORY_BG,
    color: isDeveloper ? COLOR.DEV_CATEGORY_TEXT : COLOR.CATEGORY_TEXT,
    fontFamily: `"Manrope", sans-serif`,
    fontSize: complianceStyles.cardCategoryFontSize,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    lineHeight: 1,
  }),
);

export const FrameworkTitle = styled(Typography)(({ theme }) => ({
  fontFamily: `"Manrope", sans-serif`,
  fontWeight: 700,
  fontSize: complianceStyles.cardTitleFontSizeDesktop,
  color: COLOR.TITLE,
  margin: 0,
  marginTop: theme.spacing(0.5),
  [theme.breakpoints.down("sm")]: {
    fontSize: complianceStyles.cardTitleFontSizeMobile,
  },
}));

export const FrameworkDescription = styled(Typography)({
  fontFamily: `"Manrope", sans-serif`,
  fontSize: complianceStyles.cardDescriptionFontSize,
  lineHeight: complianceStyles.cardDescriptionLineHeight,
  fontWeight: 500,
  color: COLOR.DESCRIPTION,
  margin: 0,
  flexGrow: 1,
});

export const CardDivider = styled(Box)({
  height: 1,
  width: "100%",
  backgroundColor: COLOR.DIVIDER,
});

export const CardFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  marginTop: theme.spacing(0.5),
}));

export const CardFooterLabel = styled(Box, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>(({ selected }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: selected ? "flex-start" : "space-between",
  gap: 8,
  fontFamily: `"Manrope", sans-serif`,
  fontSize: complianceStyles.cardFooterFontSize,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: selected ? COLOR.FOOTER_ACTIVE : COLOR.FOOTER_INACTIVE,
}));

export const ActiveCheckBadge = styled(Box)({
  width: 22,
  height: 22,
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: COLOR.CHECK_BG,
  color: COLOR.FOOTER_ACTIVE,
  flexShrink: 0,
});
export const SelectedLine = styled(Box)({
  flex: 1,
  height: "3px",
  borderRadius: "2px",
  backgroundColor: COLOR.ACTIVE_LINE,
  marginLeft: "8px",
});
