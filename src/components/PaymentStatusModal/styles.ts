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
  maxWidth: 276,
  padding: theme.spacing(4, 4, 6),
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
  textAlign: "center",
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.neutralColors[900],
  border: `1px solid ${
    status === "success"
      ? theme.palette.tertiaryColors[400]
      : theme.palette.textColors[400]
  }`,

  [theme.breakpoints.up("md")]: {
    maxWidth: 440,
    padding: theme.spacing(6, 6, 8),
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 630,
    minHeight: 320,
  },
}));

export const IconCircle = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})<Status>(({ theme, status }) => ({
  width: 60,
  height: 60,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${
    status === "success"
      ? alpha(theme.palette.tertiaryColors[400], 0.3)
      : theme.palette.primaryColors[700]
  }`,
  backgroundColor:
    status === "success"
      ? theme.palette.strokeColors[720]
      : theme.palette.strokeColors[620],
  "& svg": {
    width: 24,
    height: 24,
    fill:
      status === "success"
        ? theme.palette.tertiaryColors[400]
        : theme.palette.textColors[50],

    color:
      status === "success"
        ? theme.palette.tertiaryColors[400]
        : theme.palette.textColors[50],
  },
  [theme.breakpoints.down("lg")]: {
    "& svg": {
      width: 40,
      height: 40,
    },
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize20,
  color: theme.palette.textColors[50],

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize24,
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeight400,
  fontSize: theme.typography.fontSize14,
  color: theme.palette.textColors[200],
  maxWidth: 242,
}));

export const ButtonsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "stretch",
  flexDirection: "column",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    gap: theme.spacing(4),
    alignSelf: "center",
  },
}));

export const ContinueButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "variant",
})<Status>(({ theme, status }) => ({
  width: 242,
  height: 48,
  padding: theme.spacing(3, 6),
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
      : theme.palette.strokeColors[620],
  color: theme.palette.textColors[50],
  "&:hover": {
    backgroundImage: "none",
    backgroundColor:
      status === "success"
        ? alpha(theme.palette.tertiaryColors[400], 0.3)
        : alpha(theme.palette.primaryColors[500], 0.3),
  },
  [theme.breakpoints.up("md")]: {
    width: 166,
  },
}));

export const TryAgainButton = styled(Button)(({ theme }) => ({
  width: 242,
  height: 48,
  padding: theme.spacing(3, 4),
  fontWeight: theme.typography.fontWeight500,
  fontSize: theme.typography.fontSize16,
  backgroundImage: "none",
  backgroundColor: theme.palette.neutralColors[600],
  color: theme.palette.textColors[50],
  border: "0.8px solid rgba(138, 144, 168, 0.3)",
  "&:hover": {
    backgroundImage: "none",
    backgroundColor: theme.palette.neutralColors[500],
  },
  [theme.breakpoints.up("md")]: {
    width: 166,
  },
}));
