import { styled } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";

export const HeroSection = styled("section")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  boxShadow: `0 ${theme.spacing(1)} ${theme.spacing(1)} 0 rgba(0, 0, 0, 0.25)`,
  backgroundColor: theme.palette.backgroundColor,
  minHeight: 484,
  padding: theme.spacing(8, 4),
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    minHeight: 584,
    padding: theme.spacing(15, 10),
  },

  [theme.breakpoints.up("lg")]: {
    minHeight: 737,
    padding: theme.spacing(20, 10),
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: 'url("/hero/hero-graphic.webp")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.2,
    zIndex: 0,
    pointerEvents: "none",
  },
}));

export const HeroContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(6),
  margin: "0 auto",
  position: "relative",
  zIndex: 1,
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(6),
  },
  [theme.breakpoints.up("lg")]: {
    paddingBottom: theme.spacing(0),
  },
}));

export const HeroText = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(4),
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(6),
  },
}));

export const BadgesList = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  flexWrap: "wrap",
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(4),
  },
}));

export const ComplianceBadge = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(3),
  backgroundColor: theme.palette.neutralColors[800],
  border: `1px solid ${theme.palette.strokeColors[150]}`,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(2, 4),
    gap: theme.spacing(2),
  },
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
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.primaryColors[200],
  textTransform: "uppercase",
}));

export const HeroTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: theme.spacing(2),
  color: theme.palette.secondary.main,
  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.secondFamily,
  gap: theme.spacing(2),
  fontSize: theme.typography.fontSize48,
  lineHeight: "40px",

  [theme.breakpoints.up("md")]: {
    gap: 0,
    fontSize: theme.typography.fontSize60,
    lineHeight: "76px",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.fontSize72,
    lineHeight: "92px",
  },
}));

export const HeroTitlePlain = styled("div")({
  color: "inherit",
});

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

  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.fontSize20,
  },
}));

export const GetStartedButton = styled(Button)(({ theme }) => ({
  margin: `${theme.spacing(4)} auto 0`,
  padding: theme.spacing(3, 5),
  backgroundImage: "none",
  fontSize: theme.typography.fontSize16,
  backgroundColor: theme.palette.primaryColors[700],

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3, 20),
    fontSize: theme.typography.fontSize20,
  },

  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(4, 10),
  },
}));
