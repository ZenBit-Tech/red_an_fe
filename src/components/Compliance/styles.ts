import { alpha, styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ComplianceSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "80px 0",
  width: "100%",
}));

export const HeaderBlock = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginBottom: "48px",
});

export const CardsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "24px",
  marginBottom: "48px",

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const CardItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  borderRadius: theme.shape.borderRadius,
  padding: "32px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  border: `1px solid ${theme.palette.grey[200]}`,
  cursor: "pointer",
  transition: "border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",

  "&:hover": {
    borderColor: theme.palette.primary.main,
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  },
}));

export const Badge = styled(Box, {
  shouldForwardProp: (prop) => prop !== "badgeColor",
})<{ badgeColor: string }>(({ badgeColor }) => ({
  backgroundColor: alpha(badgeColor, 0.1),
  color: badgeColor,
  padding: "4px 12px",
  borderRadius: "8px",
  fontWeight: 700,
  fontSize: "12px",
  lineHeight: "1.33",
  fontFamily: "'Inter', sans-serif",
  marginBottom: "24px",
}));

export const BannerWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.shape.borderRadius,
  padding: "32px",
  display: "flex",
  alignItems: "flex-start",
  gap: "24px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "16px",
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
  color: "#fff",

  "& svg": {
    width: "24px",
    height: "24px",
  },
}));

export const BannerTextContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
});
