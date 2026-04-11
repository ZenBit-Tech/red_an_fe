import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const CapabilitiesSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  padding: theme.spacing(20, 0),
}));

export const TitleSectionBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  margin: theme.spacing(0, "auto", 16, "auto"),
}));

export const CardsList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(5),
  "& > *": {
    flex: "1 1 calc(50% - 10px)",
    minWidth: 0,
    [theme.breakpoints.down("md")]: {
      flex: "1 1 100%",
    },
  },
}));

export const CardItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(6),
  padding: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  border: `1px solid ${theme.palette.grey[200]}`,
}));
