import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

type Variant = { variant: "success" | "error" };

export const Overlay = styled(Box)(({ theme }) => ({
  position: "fixed",
  inset: 0,
  zIndex: theme.zIndex.modal,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  padding: theme.spacing(4),
}));

export const ModalBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})<Variant>(({ theme, variant }) => ({
  position: "relative",
  width: "100%",
  maxWidth: 460,
  padding: theme.spacing(10),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${
    variant === "success"
      ? theme.palette.primaryColors[200]
      : theme.palette.error.main
  }`,
}));

export const IconCircle = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})<Variant>(({ theme, variant }) => ({
  width: 56,
  height: 56,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:
    variant === "success"
      ? theme.palette.primaryColors[700]
      : theme.palette.error.main,
  "& svg": {
    fontSize: 32,
    color: theme.palette.textColors[50],
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize24,
  color: theme.palette.secondary.main,
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.neutralColors[300],
  lineHeight: 1.5,
}));

export const ButtonsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  marginTop: theme.spacing(2),
  width: "100%",
  justifyContent: "center",
  flexWrap: "wrap",
}));

export const ContinueButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(3, 8),
  fontSize: theme.typography.fontSize16,
  backgroundImage: "none",
  backgroundColor: theme.palette.primaryColors[700],
  color: theme.palette.textColors[50],
  "&:hover": {
    backgroundImage: "none",
    backgroundColor: theme.palette.primaryColors[500],
  },
}));

export const TryAgainButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(3, 8),
  fontSize: theme.typography.fontSize16,
  backgroundImage: "none",
  backgroundColor: theme.palette.neutralColors[700],
  color: theme.palette.textColors[50],
  "&:hover": {
    backgroundImage: "none",
    backgroundColor: theme.palette.neutralColors[600],
  },
}));
