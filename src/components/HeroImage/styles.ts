import { styled } from "@mui/material/styles";

export const ImageSection = styled("section")({
  position: "relative",
  zIndex: 1,
});

export const ImageWrapper = styled("div")({
  maxWidth: 635,
  margin: "0 auto",
  "& img": {
    width: "100%",
    borderRadius: "50%",
  },
});
