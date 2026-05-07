import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TopBarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2, 6),
  backgroundColor: theme.palette.backgroundColor,
  borderBottom: `${theme.spacing(0.2)} solid ${theme.palette.neutralColors[900]}`,
  flexShrink: 0,
}));

export const TopBarCenter = styled(Box)({
  flex: 1,
});

export const TopBarCenterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.primaryColors[200],
  fontSize: theme.typography.fontSize20,
}));

export const TopBarCenterSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
}));

export const TopBarActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.textColors[200],
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(2),
  "&:hover": {
    color: theme.palette.textColors[50],
    backgroundColor: theme.palette.strokeColors[120],
  },
}));

export const AvatarEmail = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
  whiteSpace: "nowrap",
}));

export const AvatarButton = styled(Box)(({ theme }) => ({
  width: theme.spacing(9),
  height: theme.spacing(9),
  borderRadius: theme.spacing(2.5),
  backgroundColor: theme.palette.primaryColors[700],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  "& svg": {
    fontSize: theme.typography.fontSize20,
    color: theme.palette.primaryColors[200],
  },
}));
