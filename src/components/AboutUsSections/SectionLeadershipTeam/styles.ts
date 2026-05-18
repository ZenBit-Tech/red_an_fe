import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(28, 0),

  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.neutralColors[900],
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(15, 0),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(10, 0, 8),
  },
}));

export const CustomContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(0, 20),
  maxWidth: "1440px",
  width: "100%",
  margin: "0 auto",

  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(0, 10),
    maxWidth: "768px",
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 4),
    maxWidth: "375px",
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  marginBottom: theme.spacing(4),
  fontSize: theme.typography.fontSize48,
  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.secondFamily,
  textAlign: "left",
  [theme.breakpoints.down("md")]: { fontSize: theme.typography.fontSize32 },
}));

export const SectionDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  maxWidth: "560px",
  fontSize: theme.typography.fontSize18,
  fontFamily: theme.typography.fontFamily,
  marginBottom: theme.spacing(14),
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize16,
    fontWeight: theme.typography.fontWeight300,
    marginBottom: theme.spacing(6),
    maxWidth: "320px",
  },
}));

export const TeamList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  listStyle: "none",
  padding: 0,
  margin: "0 auto",
  width: "100%",
  justifyContent: "space-between",
  gap: theme.spacing(6),
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const TeamListItem = styled("li")(({ theme }) => ({
  width: "calc((100% - 48px) / 3)",
  borderRadius: theme.spacing(8),
  boxSizing: "border-box",
  overflow: "hidden",
  position: "relative",
  boxShadow: "0 4px 24px 0 rgba(0, 0, 0, 0.4), 0 4px 24px 0 rgba(0, 0, 0, 0.4)",
  [theme.breakpoints.down("lg")]: {
    width: "608px",
    height: "460px",
    borderRadius: theme.spacing(6),
  },
  [theme.breakpoints.down("md")]: {
    width: "343px",
    height: "auto",
    borderRadius: theme.spacing(6),
  },
}));

export const TeamImage = styled("img")(({ theme }) => ({
  width: "100%",

  display: "block",
  zIndex: "1",
  [theme.breakpoints.down("lg")]: { transform: "translateY(-12%)" },
  [theme.breakpoints.down("md")]: { transform: "translateY(0%)" },
}));

export const ContentOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  paddingLeft: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  boxSizing: "border-box",
  zIndex: 2,
  background: `linear-gradient(252deg, rgba(255, 255, 255, 0) 0%, ${theme.palette.neutralColors[900]} 74.52%)`,
}));

export const ItemTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  fontWeight: theme.typography.fontWeight400,
  fontSize: theme.typography.fontSize24,
  fontFamily: theme.typography.secondFamily,
  marginBottom: theme.spacing(1),
}));

export const ItemDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[200],
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  fontFamily: theme.typography.fontFamily,
}));

export const TeamPromotionTextBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(14, 0),
  textAlign: "center",
  marginTop: theme.spacing(14),
  background: `linear-gradient(90deg, ${theme.palette.neutralColors[900]} 0%, rgba(87, 126, 216, 0.1) 50%, ${theme.palette.neutralColors[900]} 100%)`,
  [theme.breakpoints.down("md")]: { padding: theme.spacing(8, 0) },
}));

export const TeamPromotionText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize24,
  fontWeight: theme.typography.fontWeight400,
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.textColors[400],
  [theme.breakpoints.down("lg")]: { padding: theme.spacing(0, 1) },
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize20,
    padding: theme.spacing(0),
  },
}));
