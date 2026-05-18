import { SectionHeroMission } from "@/components/AboutUsSections/SectionHeroMission";
import { SectionOurValues } from "@/components/AboutUsSections/SectionOurValues";
import { SectionLeadershipTeam } from "@/components/AboutUsSections/SectionLeadershipTeam";
import * as S from "./styles";

export const AboutUsPage = () => {
  return (
    <S.AboutPageWrapper component="main">
      <SectionHeroMission />
      <SectionOurValues />
      <SectionLeadershipTeam />
    </S.AboutPageWrapper>
  );
};
