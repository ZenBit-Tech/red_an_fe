import { alpha, styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ComplianceSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(20, 0),
}));

export const HeaderBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: theme.spacing(12),
}));

export const CardsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: theme.spacing(6),
  marginBottom: theme.spacing(12),

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const CardItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  borderRadius: theme.spacing(6),
  padding: theme.spacing(8, 6),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  border: `1px solid ${theme.palette.grey[200]}`,
  cursor: "pointer",
  transition: "border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",

  "&:hover": {
    borderColor: theme.palette.primary.main,
    boxShadow: `0px 4px 20px ${alpha(theme.palette.grey[900], 0.05)}`,
  },
}));

export const Badge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "badgeColor",
})<{ badgeColor: string }>(({ badgeColor, theme }) => ({
  backgroundColor: alpha(badgeColor, 0.1),
  color: badgeColor,
  padding: theme.spacing(1, 3),
  borderRadius: theme.spacing(2),
  fontWeight: 700,
  fontSize: "12px",
  marginBottom: theme.spacing(6),
}));

export const BannerWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(8),
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(6),

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(4),
  },
}));

export const BannerIconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  color: theme.palette.background.default,

  "& svg": {
    width: "24px",
    height: "24px",
  },
}));

export const BannerTextContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
});
