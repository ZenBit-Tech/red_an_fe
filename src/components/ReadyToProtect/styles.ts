import { styled } from "@mui/material/styles";
import { Box, Button, Container, type ButtonProps } from "@mui/material";
type ButtonLinkProps = ButtonProps & {
  to?: string;
  component?: React.ElementType;
};

export const ReadyToProtectSection = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.strokeColors[700],
  paddingBlock: theme.spacing(8),

  [theme.breakpoints.up("md")]: {
    paddingBlock: theme.spacing(15),
  },
  [theme.breakpoints.up("lg")]: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(24),
  },
}));

export const ContentWrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
  maxWidth: 343,

  [theme.breakpoints.up("md")]: {
    maxWidth: 606,
  },
  [theme.breakpoints.up("lg")]: {
    gap: theme.spacing(6),
    maxWidth: 1280,
  },
}));

export const Title = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "stretch",

  fontSize: theme.typography.fontSize32,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.primaryColors[50],
  lineHeight: "44px",

  [theme.breakpoints.up("md")]: {
    fontFamily: theme.typography.secondFamily,
    fontSize: theme.typography.fontSize48,
    lineHeight: "60px",
    maxWidth: 606,
    alignSelf: "center",
  },
}));

export const Description = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "stretch",

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize20,
    maxWidth: 514,
    alignSelf: "center",
  },
  [theme.breakpoints.up("lg")]: {
    fontWeight: theme.typography.fontWeight500,
    maxWidth: 780,
  },
}));

export const ButtonsGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "stretch",
  alignItems: "stretch",

  gap: theme.spacing(4),

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    gap: theme.spacing(6),
  },

  [theme.breakpoints.up("lg")]: {
    paddingTop: theme.spacing(6),
  },
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[50],
  height: 52,
  width: "100%",

  [theme.breakpoints.up("md")]: {
    width: 208,
    height: 68,
  },
}));

export const SecondaryButton = styled(Button)<ButtonLinkProps>(({ theme }) => ({
  backgroundImage: "none",
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeight400,
  backgroundColor: theme.palette.neutralColors[700],
  color: theme.palette.primaryColors[50],
  border: `1px solid ${theme.palette.strokeColors[150]}`,
  height: 52,
  width: "100%",

  "&:hover": {
    backgroundImage: "none",
    backgroundColor: theme.palette.neutralColors[600],
    border: `1px solid ${theme.palette.strokeColors[150]}`,
  },

  "&.MuiButtonBase-root:active": {
    backgroundImage: "none",
    backgroundColor: theme.palette.neutralColors[900],
  },

  "&.Mui-disabled": {
    backgroundImage: "none",
    backgroundColor: theme.palette.secondaryColors[200],
    border: `1px solid ${theme.palette.strokeColors[150]}`,
    color: theme.palette.neutralColors[100],
    opacity: 0.6,
  },

  [theme.breakpoints.up("md")]: {
    width: 206,
    height: 68,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.fontSize16,
  },
}));
