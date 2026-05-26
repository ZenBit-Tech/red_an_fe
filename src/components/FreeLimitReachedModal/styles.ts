import { Box, Button, Dialog, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const ModalDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiBackdrop-root": {
    backgroundColor: alpha(theme.palette.backgroundColor, 0.74),
    backdropFilter: "blur(4px)",
  },
  "& .MuiDialog-paper": {
    width: "100%",
    maxWidth: theme.spacing(157.5),
    margin: theme.spacing(4),
    borderRadius: theme.spacing(2),
    border: `${theme.spacing(0.25)} solid ${theme.palette.primaryColors[100]}`,
    background: theme.palette.secondaryColors[900],
    padding: theme.spacing(6.25, 6.25, 8.25),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(4),
  },
}));

export const IconOuter = styled(Box)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  borderRadius: "50%",
  border: `${theme.spacing(0.25)} solid ${theme.palette.primaryColors[100]}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage:
    "linear-gradient(135deg, rgba(176, 198, 255, 0.2) 0%, rgba(164, 189, 248, 0.2) 7.1429%, rgba(153, 180, 242, 0.2) 14.286%, rgba(141, 171, 235, 0.2) 21.429%, rgba(130, 161, 228, 0.2) 28.571%, rgba(119, 152, 222, 0.2) 35.714%, rgba(108, 143, 215, 0.2) 42.857%, rgba(96, 134, 208, 0.2) 50%, rgba(85, 125, 202, 0.2) 57.143%, rgba(74, 116, 195, 0.2) 64.286%, rgba(63, 107, 188, 0.2) 71.429%, rgba(52, 98, 181, 0.2) 78.571%, rgba(40, 89, 175, 0.2) 85.714%, rgba(28, 80, 168, 0.2) 92.857%, rgba(13, 71, 161, 0.2) 100%), linear-gradient(90deg, rgba(176, 198, 255, 0.2) 0%, rgba(176, 198, 255, 0.2) 100%)",
}));

export const IconInner = styled(Box)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  color: theme.palette.primaryColors[200],
}));

export const IconSvg = styled("svg")(() => ({
  width: "100%",
  height: "100%",
  display: "block",
  maxWidth: "none",
  fill: "currentColor",
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize24,
  lineHeight: `${theme.spacing(8)}`,
  fontWeight: theme.typography.fontWeight700,
  textAlign: "center",
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
  lineHeight: `${theme.spacing(5)}`,
  fontWeight: theme.typography.fontWeight400,
  textAlign: "center",
}));

export const HighlightText = styled("span")(({ theme }) => ({
  color: theme.palette.primaryColors[100],
  fontWeight: theme.typography.fontWeight700,
}));

export const ActionsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const UpgradeButton = styled(Button)(({ theme }) => ({
  minWidth: theme.spacing(47),
  height: theme.spacing(12),
  borderRadius: theme.spacing(2),
  color: theme.palette.neutralColors[700],
  backgroundColor: theme.palette.primaryColors[100],
  backgroundImage: "none",
  border: `${theme.spacing(0.25)} solid ${alpha(theme.palette.strokeColors[500], 0.3)}`,
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight500,
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.primaryColors[200],
    backgroundImage: "none",
  },
}));

export const CloseButton = styled(Button)(({ theme }) => ({
  minWidth: theme.spacing(46.5),
  height: theme.spacing(12),
  borderRadius: theme.spacing(2),
  color: theme.palette.textColors[50],
  backgroundColor: theme.palette.neutralColors[700],
  backgroundImage: "none",
  border: `${theme.spacing(0.2)} solid ${alpha(theme.palette.textColors[200], 0.3)}`,
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight500,
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.neutralColors[600],
    backgroundImage: "none",
  },
}));
