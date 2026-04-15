import * as S from "./styles";

export const SectionLeadershipTeam = () => {
  return (
    <S.SectionWrapper>
      <S.CustomContainer>
        <S.SectionTitle>Leadership Team</S.SectionTitle>
        <S.SectionDescription>
          Our team brings together decades of expertise in clinical trials,
          healthcare cybersecurity, and large-scale data engineering.
        </S.SectionDescription>
        <S.ValuesList>
          {/* Ітем 1 */}
          <S.ValuesListItem>
            <S.IconWrapper>{/* <IconMission1 /> */}</S.IconWrapper>
            <S.ItemTitle>Dr. Sarah Chen</S.ItemTitle>
            <S.ItemDescription>CEO & Founder</S.ItemDescription>
          </S.ValuesListItem>

          {/* Ітем 2 */}
          <S.ValuesListItem>
            <S.IconWrapper>{/* <IconMission2 /> */}</S.IconWrapper>
            <S.ItemTitle>Marcus Thorne</S.ItemTitle>
            <S.ItemDescription>Chief Security Officer</S.ItemDescription>
          </S.ValuesListItem>

          {/* Ітем 3 */}
          <S.ValuesListItem>
            <S.IconWrapper>{/* <IconMission3 /> */}</S.IconWrapper>
            <S.ItemTitle>Sarah Jenkins</S.ItemTitle>
            <S.ItemDescription>Lead System s Architect</S.ItemDescription>
          </S.ValuesListItem>
        </S.ValuesList>
      </S.CustomContainer>
    </S.SectionWrapper>
  );
};
