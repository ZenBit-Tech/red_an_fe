import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

export const ComplianceSection = styled("section")(({ theme }) => ({
  paddingBlock: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingBlock: theme.spacing(15),
  },
  [theme.breakpoints.up("lg")]: {
    paddingBlock: theme.spacing(20),
  },
}));

export const ContentWrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(6),
  },
  [theme.breakpoints.up("lg")]: {
    gap: theme.spacing(8),
  },
}));

export const TitleBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(4),
  },
}));

export const SectionTitle = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontSize: theme.typography.fontSize32,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.secondary.main,
  lineHeight: "40px",

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize48,
    lineHeight: "60px",
  },
}));

export const TitleDivider = styled(Box)(({ theme }) => ({
  width: 120,
  height: 4,
  borderRadius: theme.spacing(3),
  backgroundImage: `linear-gradient(90deg, ${theme.palette.primaryColors[200]}, ${theme.palette.primaryColors[700]})`,

  [theme.breakpoints.up("md")]: {
    width: 172,
  },
}));

export const CardsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(5),

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(6),
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

export const ComplianceCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutralColors[900],
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.strokeColors[150]}`,
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  textAlign: "start",

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(8),
  },
}));

export const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  paddingBottom: theme.spacing(4),

  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(6),
  },
}));

export const CardTitle = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.secondary.main,

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize24,
  },
}));

export const CardCountry = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.primaryColors[200],
}));

export const CardDivider = styled(Box)(({ theme }) => ({
  borderTop: `1px dashed ${theme.palette.strokeColors[150]}`,
}));

export const CardRows = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

export const CardRow = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const RowLabel = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
}));

export const RowValue = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.secondary.main,
  textAlign: "right",
}));

export const CardFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),

  paddingTop: theme.spacing(6),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(8),
  },
  [theme.breakpoints.up("lg")]: {
    paddingTop: theme.spacing(14),
  },
}));

export const FooterIconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,

  "& svg": {
    width: 18,
    height: 18,
    fill: theme.palette.primaryColors[200],
  },
}));

export const FooterText = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.secondary.main,
}));

export const CustomProfilesBanner = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.neutralColors[800],
  borderRadius: theme.spacing(6),
  border: `1px solid ${theme.palette.strokeColors[150]}`,

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 236,
  },
  [theme.breakpoints.up("lg")]: {
    minHeight: 304,
  },
}));

export const BannerTextBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  position: "relative",
  zIndex: 1,
  padding: theme.spacing(6),

  [theme.breakpoints.up("md")]: {
    flex: "0 0 65%",
    flexShrink: 0,
    padding: theme.spacing(10),
    maxWidth: 580,
  },
  [theme.breakpoints.up("lg")]: {
    flex: "0 0 60%",
    padding: theme.spacing(20),
    gap: theme.spacing(6),
    maxWidth: 713,
  },
}));

export const BannerTitle = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize24,
    whiteSpace: "nowrap",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.fontSize32,
  },
}));

export const BannerDescription = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
  lineHeight: "24px",

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize20,
    lineHeight: "27px",
  },
  [theme.breakpoints.up("lg")]: {
    lineHeight: "28px",
  },
}));

export const BannerTexture = styled(Box)(({ theme }) => ({
  backgroundImage: `url("/compliance/banner-texture.webp")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  pointerEvents: "none",
  opacity: 0.6,

  borderRadius: "0 0 24px 0",
  height: 134,
  alignSelf: "stretch",

  [theme.breakpoints.up("md")]: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: "auto",
    height: "100%",
    width: "35%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "45%",
  },
}));
