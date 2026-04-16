import { Container } from "@mui/material";
import { ImageSection, ImageWrapper } from "./styles";

export const HeroImage = () => {
  return (
    <ImageSection>
      <Container>
        <ImageWrapper>
          <img
            src="/hero/hero-graphic.png"
            alt="Clinical Data Studio Graphic"
          />
        </ImageWrapper>
      </Container>
    </ImageSection>
  );
};
