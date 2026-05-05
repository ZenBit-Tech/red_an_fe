import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

import LazyImage from "@/components/LazyImage";

import {
  NOT_FOUND_DECORATIVE_FONT_SIZE_PX,
  NOT_FOUND_DECORATIVE_FONT_SIZE_TABLET_PX,
  NOT_FOUND_DECORATIVE_FONT_SIZE_MOBILE_PX,
} from "./constants";

export const PageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  minHeight: 844,
  [theme.breakpoints.down("md")]: {
    minHeight: 600,
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: 500,
  },
}));

export const BackgroundImage = styled(LazyImage)({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "bottom",
  pointerEvents: "none",
  zIndex: 0,
});

export const AstronautImage = styled(LazyImage)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: "calc(50% - 98px)",
  transform: "translate(-50%, -50%)",
  width: 856,
  maxWidth: "100%",
  height: "auto",
  pointerEvents: "none",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    width: 450,
    top: "calc(50% - 50px)",
  },
  [theme.breakpoints.down("sm")]: {
    width: 300,
    top: "calc(50% - 30px)",
  },
}));

export const DecorativeNumberLeft = styled("p")(({ theme }) => ({
  position: "absolute",
  top: 110,
  left: "calc(50% - 250px)",
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: `${NOT_FOUND_DECORATIVE_FONT_SIZE_PX}px`,
  lineHeight: "normal",
  background: `linear-gradient(99deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  userSelect: "none",
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    fontSize: `${NOT_FOUND_DECORATIVE_FONT_SIZE_TABLET_PX}px`,
    top: 140,
    left: "calc(50% - 135px)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: `${NOT_FOUND_DECORATIVE_FONT_SIZE_MOBILE_PX}px`,
    top: 140,
    left: "calc(50% - 90px)",
  },
}));

export const DecorativeNumberRight = styled("p")(({ theme }) => ({
  position: "absolute",
  top: 110,
  left: "calc(50% + 120px)",
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: `${NOT_FOUND_DECORATIVE_FONT_SIZE_PX}px`,
  lineHeight: "normal",
  background: `linear-gradient(99deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  userSelect: "none",
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    fontSize: `${NOT_FOUND_DECORATIVE_FONT_SIZE_TABLET_PX}px`,
    top: 140,
    left: "calc(50% + 63px)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: `${NOT_FOUND_DECORATIVE_FONT_SIZE_MOBILE_PX}px`,
    top: 140,
    left: "calc(50% + 42px)",
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "calc(50% + 5px)",
  top: "calc(50% + 155px)",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(6),
  zIndex: 3,
  width: "max-content",
  maxWidth: "440px",
  textAlign: "center",
  overflow: "visible",
  [theme.breakpoints.down("md")]: {
    top: "calc(50% + 120px)",
    gap: theme.spacing(4),
    maxWidth: "330px",
  },
  [theme.breakpoints.down("sm")]: {
    top: "calc(50% + 105px)",
    maxWidth: "250px",
  },
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize60,
  background: `linear-gradient(158deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  whiteSpace: "nowrap",
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize38,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize32,
  },
}));

export const PageSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight400,
  fontSize: theme.typography.fontSize24,
  color: theme.palette.secondaryColors[50],
  maxWidth: 700,
  whiteSpace: "pre-line",
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize18,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize16,
  },
}));

export const BackHomeButton = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight400,
  fontSize: theme.typography.fontSize18,
  backgroundColor: theme.palette.primaryColors[700],
  backgroundImage: "none",
  color: theme.palette.textColors[50],
  padding: theme.spacing(3, 5),
  borderRadius: theme.spacing(2),
  height: theme.spacing(17),
  textTransform: "none",
  "& .MuiButton-startIcon": {
    marginRight: theme.spacing(2),
    marginLeft: 0,
  },
  "&:hover": {
    backgroundImage: "none",
    backgroundColor: theme.palette.primaryColors[800],
  },
  "&:active": {
    backgroundImage: "none",
    backgroundColor: theme.palette.primaryColors[800],
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.secondaryColors[200],
    color: theme.palette.textColors[50],
  },
}));
