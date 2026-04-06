import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const CapabilitiesSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  padding: "80px 0",
  width: "100%",
}));

export const TitleSectionBlock = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  margin: "0 auto 64px auto",
});

export const CardsList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  "& > *": {
    flex: "1 1 calc(50% - 10px)",
    minWidth: 0,
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
      flex: "1 1 100%",
    },
  },
}));

export const CardItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  border: "1px solid #d2d3d6",
  boxShadow: "none",
}));
