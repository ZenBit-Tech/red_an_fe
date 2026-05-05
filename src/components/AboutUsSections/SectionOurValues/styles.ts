import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(20),
  display: "flex",
  flexDirection: "column",
}));

export const CustomContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(0, 28),
  maxWidth: "1440px",
  width: "100%",
  margin: "0 auto",
  gap: theme.spacing(6),

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    padding: theme.spacing(0, 4),
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
  [theme.breakpoints.down("sm")]: {},
}));

export const ValuesList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  listStyle: "none",
  padding: 0,
  margin: "0 auto",
  alignItems: "center",
  gap: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
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
}));

export const ItemTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize20,
  fontFamily: theme.typography.secondFamily,
  marginBottom: theme.spacing(4),
}));

export const ItemDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight400,
  fontFamily: theme.typography.fontFamily,
  textAlign: "center",
}));
