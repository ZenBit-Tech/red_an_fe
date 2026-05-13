import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(30, 0, 15),

  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.backgroundColor,

  "&::before": {
    content: '""',
    position: "absolute",
    zIndex: 0,

    width: "700px",
    height: "540px",
    left: "15%",
    top: "10%",
    backgroundColor: theme.palette.primaryColors[700],
    opacity: 0.3,
    filter: "blur(150px)",
    pointerEvents: "none",
  },

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    padding: theme.spacing(0, 4),
  },
}));

export const CustomContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: theme.spacing(0, 20),
  maxWidth: "1440px",
  width: "100%",
  margin: "0 auto",
  justifyContent: "space-between",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    padding: theme.spacing(0, 4),
  },
}));

export const SectionTitleFirstString = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,

  fontSize: theme.typography.fontSize60,
  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.secondFamily,
  [theme.breakpoints.down("sm")]: { fontSize: theme.typography.fontSize32 },
}));

export const SectionTitleSecondString = styled(SectionTitleFirstString)(
  ({ theme }) => ({
    background: `linear-gradient(110deg, ${theme.palette.primaryColors[200]} 0%, ${theme.palette.primaryColors[700]} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  }),
);

export const SectionContentText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  textAlign: "justify",
  fontSize: theme.typography.fontSize20,
  marginTop: theme.spacing(7),
  fontFamily: theme.typography.fontFamily,
}));

export const ItemsList = styled("ul")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  zIndex: 1,
  gap: theme.spacing(6),
  listStyle: "none",
  paddingLeft: theme.spacing(15),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const MissionItem = styled("li")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "252px",
  height: "208px",
  padding: theme.spacing(8),
  borderRadius: theme.spacing(6),
  border: `1px solid ${theme.palette.strokeColors[150]}`,
  background: theme.palette.neutralColors[800],
  boxSizing: "border-box",
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `0.80px solid ${theme.palette.primaryColors[200]}4D`,
  width: theme.spacing(10),
  height: theme.spacing(10),
  borderRadius: theme.spacing(3),
  marginBottom: "auto",
  padding: theme.spacing(0, 2),
  background: `linear-gradient(135deg, ${theme.palette.primaryColors[200]}33 0%, ${theme.palette.primaryColors[700]}33 100%)`,
  "& svg": {
    width: "20px",
    height: "20px",
    fill: theme.palette.primaryColors[200],
  },
}));

export const ItemTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryColors[50],
  fontFamily: theme.typography.secondFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize48,
}));

export const ItemDescription = styled(Typography)(({ theme }) => ({
  ccolor: theme.palette.textColors[100],
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
}));
