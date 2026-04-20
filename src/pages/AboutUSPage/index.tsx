import { SectionHero } from "@/components/AboutUsSections/SectionHero";
import { SectionOurMission } from "@/components/AboutUsSections/SectionOurMission";
import { SectionOurValues } from "@/components/AboutUsSections/SectionOurValues";
import { SectionLeadershipTeam } from "@/components/AboutUsSections/SectionLeadershipTeam";
import * as S from "./styles";

export const AboutUsPage = () => {
  return (
    <S.AboutPageWrapper component="main">
      <SectionHero />
      <SectionOurMission />
      <SectionOurValues />
      <SectionLeadershipTeam />
    </S.AboutPageWrapper>
  );
};
