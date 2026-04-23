import { styled } from "@mui/material/styles";
import { Box, Button, Container, type ButtonProps } from "@mui/material";
type ButtonLinkProps = ButtonProps & {
  to?: string;
  component?: React.ElementType;
};

export const ReadyToProtectSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.strokeColors[700],
}));

export const ContentWrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  gap: theme.spacing(6),
  margin: "0 auto",
  maxWidth: 896,
  paddingInline: theme.spacing(8),
  paddingBottom: theme.spacing(10),
}));

export const Title = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize32,
  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.secondFamily,
  color: theme.palette.primaryColors[50],
  lineHeight: 1.25,
  maxWidth: 606,
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize48,
  },
}));

export const Description = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.textColors[200],
  maxWidth: 780,
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize20,
  },
}));

export const ButtonsGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
  minWidth: 180,
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "center",
    gap: theme.spacing(6),
  },
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  minWidth: 180,
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.primaryColors[50],

  [theme.breakpoints.up("md")]: {
    minWidth: 206,
    fontSize: theme.typography.fontSize18,
  },
}));

export const SecondaryButton = styled(Button)<ButtonLinkProps>(({ theme }) => ({
  minWidth: 180,
  backgroundImage: "none",
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
  backgroundColor: theme.palette.neutralColors[700],
  color: theme.palette.primaryColors[50],
  border: `1px solid ${theme.palette.strokeColors[150]}`,
  "&:hover": {
    backgroundImage: "none",
    backgroundColor: theme.palette.neutralColors[600],
    border: `1px solid ${theme.palette.strokeColors[150]}`,
  },
  "&:active": {
    backgroundImage: "none",
    backgroundColor: theme.palette.neutralColors[900],
    border: `1px solid ${theme.palette.strokeColors[150]}`,
  },

  "&.Mui-disabled": {
    backgroundColor: theme.palette.secondaryColors[200],
    border: `1px solid ${theme.palette.strokeColors[150]}`,
    color: theme.palette.neutralColors[100],
    opacity: 0.6,
  },
  [theme.breakpoints.up("md")]: {
    minWidth: 206,
    fontSize: theme.typography.fontSize18,
  },
}));
