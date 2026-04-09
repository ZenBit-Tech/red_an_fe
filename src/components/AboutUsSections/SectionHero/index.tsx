import { Container } from "@mui/material";
import { SectionWrapper } from "./styles";
import * as S from "./styles";

export const SectionHero = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <S.SectionTitle component="h2">Section Hero</S.SectionTitle>
      </Container>
    </SectionWrapper>
  );
};
