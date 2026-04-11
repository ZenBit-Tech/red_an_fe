import { styled } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";
import { GRADIENT_ANGLE } from "@/constants";

export const HeroSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const HeroContent = styled("div")(({ theme }) => ({
  maxWidth: 1250,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(27),
  padding: "62px 0 128px",
}));

export const HeroText = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(8),
  textAlign: "center",
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
  backgroundColor: theme.palette.dark[200],
  border: `1px solid ${theme.palette.dark[300]}`,
}));

export const BadgeIconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    width: theme.spacing(4),
    height: theme.spacing(4),
    fill: theme.palette.blue[50],
  },
}));

export const BadgeText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize10,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.blue[50],
  textTransform: "uppercase",
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.fontSize72,
  fontWeight: theme.typography.fontWeight800,
}));

export const GradientText = styled("span")(({ theme }) => ({
  background: `linear-gradient(${GRADIENT_ANGLE}, ${theme.palette.blue[50]} 0%, ${theme.palette.blue[700]} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.white[400],
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight300,
  maxWidth: 850,
}));

export const GetStartedButton = styled(Button)(({ theme }) => ({
  fontSize: theme.typography.fontSize18,
  marginBottom: theme.spacing(16),
  gap: theme.spacing(2),
  width: 208,
  height: 60,
  background: `linear-gradient(${GRADIENT_ANGLE}, ${theme.palette.blue[50]} 0%, ${theme.palette.blue[700]} 100%)`,
  // color: theme.palette.white[50],
}));
