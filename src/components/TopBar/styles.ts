import { theme } from "@/common/theme/theme";

export const topBar = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  px: { xs: theme.spacing(4), md: theme.spacing(23.25) },
  py: theme.spacing(3),
  bgcolor: theme.palette.backgroundColor,
  borderBottom: `0.80px solid ${theme.palette.neutralColors[900]}`,
  flexShrink: 0,
};

export const topBarCenter = {
  flex: 1,
};

export const topBarCenterTitle = {
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.primaryColors[200],
  fontSize: theme.typography.fontSize20,
};

export const topBarCenterSubtitle = {
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
};

export const topBarActions = {
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
};

export const iconButton = {
  color: theme.palette.textColors[200],
  p: theme.spacing(1.5),
  borderRadius: theme.spacing(2),
  "&:hover": {
    color: theme.palette.textColors[50],
    bgcolor: theme.palette.strokeColors[120],
  },
};

export const avatarEmail = {
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
  whiteSpace: "nowrap",
};

export const avatarButton = {
  width: theme.spacing(9),
  height: theme.spacing(9),
  borderRadius: theme.spacing(2.5),
  bgcolor: theme.palette.primaryColors[700],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

export const circleOutline = {
  fontSize: theme.typography.fontSize20,
  color: theme.palette.primaryColors[200],
};
