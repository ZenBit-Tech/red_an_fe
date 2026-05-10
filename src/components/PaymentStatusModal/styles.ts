import { styled, alpha } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

type Status = { status: "success" | "error" };

export const Overlay = styled(Box)(({ theme }) => ({
  position: "fixed",
  inset: 0,
  zIndex: theme.zIndex.modal,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.strokeColors[750],
  padding: theme.spacing(4),
}));

export const ModalBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})<Status>(({ theme, status }) => ({
  position: "relative",
  width: "100%",
  maxWidth: 630,
  paddingBlock: theme.spacing(6, 8),
  paddingInline: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.neutralColors[900],
  border: `1px solid ${
    status === "success"
      ? theme.palette.tertiaryColors[400]
      : theme.palette.error.main
  }`,
}));

export const IconCircle = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})<Status>(({ theme, status }) => ({
  width: 60,
  height: 60,
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${
    status === "success"
      ? theme.palette.tertiaryColors[400]
      : theme.palette.primaryColors[500]
  }`,
  backgroundColor:
    status === "success"
      ? theme.palette.strokeColors[720]
      : theme.palette.strokeColors[620],
  "& svg": {
    fontSize: 24,
    color:
      status === "success"
        ? theme.palette.tertiaryColors[400]
        : theme.palette.textColors[50],
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize20,
  color: theme.palette.secondary.main,
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.fontSize22,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize24,
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeight400,
  fontSize: theme.typography.fontSize14,
  color: theme.palette.textColors[200],
}));

export const ButtonsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  marginTop: theme.spacing(2),
  width: "100%",
  justifyContent: "center",
}));

export const ContinueButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "variant",
})<Status>(({ theme, status }) => ({
  width: 166,
  height: 48,
  marginTop: theme.spacing(2),
  padding: theme.spacing(3, 8),
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize16,
  border: `1px solid ${
    status === "success"
      ? theme.palette.tertiaryColors[400]
      : theme.palette.primaryColors[500]
  }`,
  backgroundImage: "none",
  backgroundColor:
    status === "success"
      ? theme.palette.strokeColors[720]
      : alpha(theme.palette.primaryColors[500], 0.2),
  color: theme.palette.textColors[50],
  "&:hover": {
    backgroundImage: "none",
    backgroundColor:
      status === "success"
        ? alpha(theme.palette.tertiaryColors[400], 0.3)
        : alpha(theme.palette.primaryColors[500], 0.3),
  },
}));

export const TryAgainButton = styled(Button)(({ theme }) => ({
  width: 166,
  height: 48,
  marginTop: theme.spacing(2),
  padding: theme.spacing(3, 8),
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize16,
  backgroundImage: "none",
  backgroundColor: theme.palette.neutralColors[700],
  color: theme.palette.textColors[50],
  "&:hover": {
    backgroundImage: "none",
    backgroundColor: theme.palette.neutralColors[600],
  },
}));
