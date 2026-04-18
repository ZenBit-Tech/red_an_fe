import { styled } from "@mui/material/styles";

export const ImageSection = styled("section")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  marginBottom: theme.spacing(17.2),
}));

export const ImageWrapper = styled("div")({
  maxWidth: 635,
  margin: "0 auto",
  "& img": {
    width: "100%",
    borderRadius: "50%",
  },
});
