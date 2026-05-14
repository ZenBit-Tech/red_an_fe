import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(20, 0),
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(8, 0),
  },
}));

export const CustomContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(0, 20),
  maxWidth: "1440px",
  width: "100%",
  margin: "0 auto",

  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(0, 10),
    maxWidth: "768px",
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 4),
    maxWidth: "375px",
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(16),
  fontSize: theme.typography.fontSize32,

  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.secondFamily,
  textAlign: "center",
  position: "relative",
  paddingBottom: theme.spacing(4),
  "&::after": {
    content: '""',
    position: "absolute",
    left: "calc(50% - 56px)",
    bottom: 0,
    width: "112px",
    height: "4px",
    borderRadius: "12px",
    background: `linear-gradient(161deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
  },
  [theme.breakpoints.down("lg")]: { marginBottom: theme.spacing(6) },
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(4),
  },
}));

export const ValuesList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  listStyle: "none",
  padding: 0,
  margin: "0 auto",
  alignItems: "center",
  gap: theme.spacing(6),

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    width: "100%",
  },

  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(4),
  },
}));

export const ValuesListItem = styled("li")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "center",
  height: "284px",
  padding: theme.spacing(10, 8),
  width: "calc((100% - 48px) / 3)",
  borderRadius: "32px",
  border: `1px solid ${theme.palette.strokeColors[500]}`,
  background: theme.palette.neutralColors[900],
  opacity: 1,
  boxSizing: "border-box",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(6, 4),
    height: theme.spacing(63),
  },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(14),
  height: theme.spacing(14),
  borderRadius: theme.spacing(3),
  border: `1px solid ${theme.palette.primaryColors[200]}`,

  "& svg": {
    width: "28px",
    height: "28px",
    fill: theme.palette.primaryColors[200],
  },

  [theme.breakpoints.down("md")]: {},
}));

export const ItemTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize20,
  fontFamily: theme.typography.fontFamily,
  marginBottom: theme.spacing(4),
}));

export const ItemDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
  fontFamily: theme.typography.fontFamily,
  textAlign: "center",
  [theme.breakpoints.down("lg")]: {
    width: "492px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize14,
    width: "308px",
  },
}));
