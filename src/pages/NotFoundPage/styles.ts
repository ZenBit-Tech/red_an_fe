import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

import LazyImage from "@/components/LazyImage";

export const BACKGROUND_IMAGE_URL = "/notFound/bg.webp";
export const ASTRONAUT_IMAGE_URL = "/notFound/astronaut.webp";
export const ASTRONAUT_TABLET_IMAGE_URL = "/notFound/astronaut_tab.webp";
export const ASTRONAUT_MOBILE_IMAGE_URL = "/notFound/astronaut_mob.webp";

const NOT_FOUND_DECORATIVE_FONT_SIZE_PX = 300;
const NOT_FOUND_DECORATIVE_FONT_SIZE_TABLET_PX = 224;
const NOT_FOUND_DECORATIVE_FONT_SIZE_MOBILE_PX = 140;

const NOT_FOUND_TABLET_NUMBERS_TOP_PX = 175;
const NOT_FOUND_MOBILE_NUMBERS_TOP_PX = 318;

const NOT_FOUND_TEXT_OFFSET_FROM_NUMBERS_PX = 42;

const NOT_FOUND_TABLET_CONTENT_TOP_PX =
  NOT_FOUND_TABLET_NUMBERS_TOP_PX +
  NOT_FOUND_DECORATIVE_FONT_SIZE_TABLET_PX +
  NOT_FOUND_TEXT_OFFSET_FROM_NUMBERS_PX;

const NOT_FOUND_MOBILE_CONTENT_TOP_PX =
  NOT_FOUND_MOBILE_NUMBERS_TOP_PX +
  NOT_FOUND_DECORATIVE_FONT_SIZE_MOBILE_PX +
  NOT_FOUND_TEXT_OFFSET_FROM_NUMBERS_PX +
  16;

const TABLET_MEDIA_QUERY =
  "@media (min-width: 768px) and (max-width: 1023.95px)";

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

export const PageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  minHeight: 844,
  [TABLET_MEDIA_QUERY]: {
    minHeight: 952,
  },
  [theme.breakpoints.down("md")]: {
    minHeight: 902,
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
  [TABLET_MEDIA_QUERY]: {
    top: NOT_FOUND_TABLET_NUMBERS_TOP_PX,
    left: "calc(50% - 204px)",
    fontSize: `${NOT_FOUND_DECORATIVE_FONT_SIZE_TABLET_PX}px`,
  },
  [theme.breakpoints.down("md")]: {
    top: NOT_FOUND_MOBILE_NUMBERS_TOP_PX,
    left: "calc(50% - 157px)",
    fontSize: `${NOT_FOUND_DECORATIVE_FONT_SIZE_MOBILE_PX}px`,
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
  [TABLET_MEDIA_QUERY]: {
    top: NOT_FOUND_TABLET_NUMBERS_TOP_PX,
    left: "calc(50% + 108px)",
    fontSize: `${NOT_FOUND_DECORATIVE_FONT_SIZE_TABLET_PX}px`,
  },
  [theme.breakpoints.down("md")]: {
    top: NOT_FOUND_MOBILE_NUMBERS_TOP_PX,
    left: "calc(50% + 80px)",
    fontSize: `${NOT_FOUND_DECORATIVE_FONT_SIZE_MOBILE_PX}px`,
  },
}));

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
  [TABLET_MEDIA_QUERY]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const AstronautImageTablet = styled(LazyImage)({
  position: "absolute",
  left: "50%",
  top: 0,
  transform: "translateX(-50%)",
  width: 688,
  maxWidth: "100%",
  height: "auto",
  pointerEvents: "none",
  zIndex: 1,
  display: "none",
  [TABLET_MEDIA_QUERY]: {
    display: "block",
  },
});

export const AstronautImageMobile = styled(LazyImage)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: 0,
  transform: "translateX(-50%)",
  width: 343,
  maxWidth: "100%",
  height: "auto",
  pointerEvents: "none",
  zIndex: 1,
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    top: 0,
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: "calc(50% + 155px)",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(6),
  zIndex: 3,
  width: "max-content",
  maxWidth: 440,
  textAlign: "center",
  overflow: "visible",
  [TABLET_MEDIA_QUERY]: {
    top: NOT_FOUND_TABLET_CONTENT_TOP_PX,
    transform: "translate(-50%, 0)",
    gap: theme.spacing(6),
    maxWidth: 444,
  },
  [theme.breakpoints.down("md")]: {
    top: NOT_FOUND_MOBILE_CONTENT_TOP_PX,
    transform: "translate(-50%, 0)",
    maxWidth: 343,
  },
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize60,
  lineHeight: `${theme.spacing(17.5)}`,
  background: `linear-gradient(158deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  whiteSpace: "nowrap",
  [TABLET_MEDIA_QUERY]: {
    fontSize: theme.typography.fontSize48,
    lineHeight: `${theme.spacing(17.5)}`,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize32,
    lineHeight: `${theme.spacing(17.5)}`,
    whiteSpace: "nowrap",
  },
}));

export const PageSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight400,
  fontSize: theme.typography.fontSize24,
  color: theme.palette.secondaryColors[50],
  lineHeight: `${theme.spacing(8)}`,
  maxWidth: 700,
  whiteSpace: "pre-line",
  [TABLET_MEDIA_QUERY]: {
    fontSize: theme.typography.fontSize24,
    lineHeight: `${theme.spacing(8)}`,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize20,
    lineHeight: `${theme.spacing(8)}`,
    maxWidth: 343,
  },
}));

export const BackHomeButton = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize16,
  backgroundColor: theme.palette.primaryColors[700],
  backgroundImage: "none",
  color: theme.palette.textColors[50],
  minWidth: 216,
  padding: theme.spacing(3, 5),
  borderRadius: theme.spacing(2),
  height: theme.spacing(17),
  whiteSpace: "nowrap",
  textTransform: "none",
  "& .MuiButton-startIcon": {
    marginRight: theme.spacing(2),
    marginLeft: 0,
  },
  [theme.breakpoints.down("md")]: {
    width: 216,
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
