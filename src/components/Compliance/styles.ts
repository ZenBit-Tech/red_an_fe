import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ComplianceSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(10, 4),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(22.5, 6),
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(22.5, 8),
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(10),
}));

export const TitleBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
}));

export const SectionTitle = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize32,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize48,
  },
}));

export const TitleDivider = styled(Box)(({ theme }) => ({
  width: 80,
  height: 3,
  borderRadius: 2,
  backgroundImage: `linear-gradient(90deg, ${theme.palette.primaryColors[200]}, ${theme.palette.primaryColors[700]})`,
}));

export const CardsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(6),

  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

export const ComplianceCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutralColors[800],
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.strokeColors[150]}`,
  padding: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8, 40),
  },

  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(8),
  },
}));

export const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const CardTitle = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize26,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize32,
  },
}));

export const CardRegion = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
}));

export const CardDivider = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 0,
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
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
}));

export const RowValue = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.textColors[50],
}));

export const CardFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),
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
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
}));

export const CustomProfilesBanner = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  backgroundColor: theme.palette.neutralColors[800],
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.strokeColors[150]}`,

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 152,
  },
}));

export const BannerTextBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  position: "relative",
  zIndex: 1,
  flexDiraction: "column",
  padding: theme.spacing(20),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    flex: "0 0 60%",
    flexShrink: 0,
  },
}));

export const BannerTitle = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize26,
  },
}));

export const BannerDescription = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
  lineHeight: 1.6,
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize16,
  },
}));

export const BannerTexture = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  width: "40%",
  backgroundImage: `url("/compliance/banner-texture.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center left",
  pointerEvents: "none",
  opacity: 0.6,

  display: "none",
  [theme.breakpoints.up("lg")]: {
    display: "block",
  },
}));
