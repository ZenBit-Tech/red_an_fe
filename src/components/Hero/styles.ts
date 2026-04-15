import { styled } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";

export const HeroSection = styled("section")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
  backgroundColor: theme.palette.backgroundColor,
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(4.2),

  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(30),
  },
}));

export const HeroGlow = styled("div")({
  width: 717,
  height: 635,
  position: "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "rgba(13, 71, 161, 0.8)",
  opacity: 0.2,
  filter: "blur(120px)",
  borderRadius: 7,
  zIndex: 0,
  pointerEvents: "none",
});

export const HeroContent = styled("div")(({ theme }) => ({
  maxWidth: 1360,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
  padding: theme.spacing(0, 4),
  margin: "0 auto",
  position: "relative",
  zIndex: 1,
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(8),
    padding: theme.spacing(0, 6),
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(0, 8),
  },
}));

export const HeroText = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(6),
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(8),
  },
}));

export const BadgesList = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
  flexWrap: "wrap",
}));

export const ComplianceBadge = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2, 4),
  borderRadius: theme.spacing(3),
  backgroundColor: theme.palette.neutralColors[800],
  border: `1px solid ${theme.palette.strokeColors[150]}`,
}));

export const BadgeIconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    width: theme.spacing(4),
    height: theme.spacing(4),
    fill: theme.palette.primaryColors[200],
  },
}));

export const BadgeText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize10,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.primaryColors[200],
  textTransform: "uppercase",
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.fontSize36,
  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.secondFamily,
  paddingTop: theme.spacing(2),
  width: "100%",
  maxWidth: 1024,
  lineHeight: "106%",
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize72,
  },
}));

export const GradientText = styled("span")(({ theme }) => ({
  background: `linear-gradient(161deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight500,
  maxWidth: 680,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize20,
  },
}));

export const GetStartedButton = styled(Button)(({ theme }) => ({
  margin: `${theme.spacing(4)} auto 0`,
  padding: theme.spacing(3, 8),
  fontSize: theme.typography.fontSize16,

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4, 10),
    fontSize: theme.typography.fontSize18,
  },
}));
