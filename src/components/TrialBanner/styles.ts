import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const COLORS = {
  BADGE_BG: "rgba(255, 255, 255, 0.2)",
};

export const BannerWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2, 10),
  backgroundColor: theme.palette.primaryColors[500],
  gap: theme.spacing(4),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(2, 4),
  },
}));

export const BannerLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
  flex: 1,
}));

export const FreePlanBadge = styled(Box)(({ theme }) => ({
  backgroundColor: COLORS.BADGE_BG,
  borderRadius: theme.spacing(5),
  padding: theme.spacing(1, 3),
  whiteSpace: "nowrap",
}));

export const BadgeText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.fontFamily,
}));

export const BannerText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
}));

export const BannerActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  flexShrink: 0,
}));

export const UpgradeButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.textColors[50],
  color: theme.palette.primaryColors[700],
  border: "none",
  borderRadius: theme.spacing(2.5),
  padding: theme.spacing(2, 3.75),
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.fontFamily,
  textAlign: "center",
  cursor: "pointer",
  whiteSpace: "nowrap",
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: theme.palette.primaryColors[50],
  },
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  padding: theme.spacing(1),
  "&:hover": {
    color: theme.palette.primaryColors[200],
    backgroundColor: "transparent",
  },
}));
