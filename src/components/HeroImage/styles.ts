import { styled } from "@mui/material/styles";

export const ImageSection = styled("section")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 1,
  marginTop: theme.spacing(16),
  marginBottom: theme.spacing(16),
  border: `1px solid ${theme.palette.strokeColors[150]}`,
  backgroundColor: theme.palette.secondaryColors[950],
}));

export const ImageWrapper = styled("div")({
  "& img": {
    width: "100%",
  },
});
