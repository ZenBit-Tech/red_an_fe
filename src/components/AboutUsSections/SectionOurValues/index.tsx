import * as S from "./styles";

export const SectionOurValues = () => {
  return (
    <S.SectionWrapper>
      <S.CustomContainer>
        <S.SectionTitle>Our Values</S.SectionTitle>

        <S.ValuesList>
          {/* Ітем 1 */}
          <S.ValuesListItem>
            <S.IconWrapper>{/* <IconMission1 /> */}</S.IconWrapper>
            <S.ItemTitle>Privacy First</S.ItemTitle>
            <S.ItemDescription>
              Patient privacy and data protection are at the core of everything
              we build and every decision we make.
            </S.ItemDescription>
          </S.ValuesListItem>

          {/* Ітем 2 */}
          <S.ValuesListItem>
            <S.IconWrapper>{/* <IconMission2 /> */}</S.IconWrapper>
            <S.ItemTitle>Innovation</S.ItemTitle>
            <S.ItemDescription>
              We continuously push the boundaries of what's possible in data
              de-identification and synthetic data generation.
            </S.ItemDescription>
          </S.ValuesListItem>

          {/* Ітем 3 */}
          <S.ValuesListItem>
            <S.IconWrapper>{/* <IconMission3 /> */}</S.IconWrapper>
            <S.ItemTitle>Excellence</S.ItemTitle>
            <S.ItemDescription>
              We maintain the highest standards of quality accuracy, and
              reliability in our platform and services
            </S.ItemDescription>
          </S.ValuesListItem>
        </S.ValuesList>
      </S.CustomContainer>
    </S.SectionWrapper>
  );
};
