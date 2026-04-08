import { styled } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";

export const HeroSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(20, 0, 16),
  backgroundColor: theme.palette.background.default,
}));

export const HeroContent = styled("div")({
  maxWidth: "1250px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const BadgeWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
  marginBottom: theme.spacing(8),
}));

export const BadgeTextWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const HeroTitle = styled(Typography)(({ theme }) => ({
  "&&": {
    fontWeight: 600,
    marginBottom: theme.spacing(6),
    letterSpacing: "-0.02em",
    color: theme.palette.text.primary,
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  "&&": {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(10),
    fontSize: "20px",
  },
}));

export const GetStartedButton = styled(Button)(({ theme }) => ({
  "&&": {
    padding: theme.spacing(3, 6),
    fontSize: "16px",
    borderRadius: theme.spacing(3),
    marginBottom: theme.spacing(16),
    display: "flex",
    gap: theme.spacing(2),
  },
}));

export const BoxArrowUpRight = styled(Box)(({ theme }) => ({
  "&&": {
    fontSize: "24px",
    color: theme.palette.secondary.main,
    transition: "transform 0.2s",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",

    "&:hover": {
      transform: "rotate(45deg)",
    },
  },
}));

export const StatsList = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(16),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: theme.spacing(8),
  },
}));

export const StatItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));
