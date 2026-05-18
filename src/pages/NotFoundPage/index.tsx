import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { APP_ROUTES } from "@/constants/index";

import * as S from "./styles";
import {
  BACKGROUND_IMAGE_URL,
  ASTRONAUT_IMAGE_URL,
  ASTRONAUT_TABLET_IMAGE_URL,
  ASTRONAUT_MOBILE_IMAGE_URL,
} from "./styles";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGoHome = (): void => {
    navigate(APP_ROUTES.HOME);
  };

  return (
    <S.PageWrapper>
      <S.BackgroundImage src={BACKGROUND_IMAGE_URL} alt="" />
      <S.DecorativeNumberLeft aria-hidden="true">4</S.DecorativeNumberLeft>
      <S.DecorativeNumberRight aria-hidden="true">4</S.DecorativeNumberRight>
      <S.AstronautImage src={ASTRONAUT_IMAGE_URL} alt="" />
      <S.AstronautImageTablet src={ASTRONAUT_TABLET_IMAGE_URL} alt="" />
      <S.AstronautImageMobile src={ASTRONAUT_MOBILE_IMAGE_URL} alt="" />

      <S.ContentBox>
        <S.PageTitle>{t("notFound.title")}</S.PageTitle>
        <S.PageSubtitle>{t("notFound.subtitle")}</S.PageSubtitle>
        <S.BackHomeButton startIcon={<ArrowBackIcon />} onClick={handleGoHome}>
          {t("notFound.cta")}
        </S.BackHomeButton>
      </S.ContentBox>
    </S.PageWrapper>
  );
};

export default NotFoundPage;
