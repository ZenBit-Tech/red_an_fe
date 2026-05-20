import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { APP_ROUTES } from "@/constants/index";
import * as S from "@/pages/SessionExpiredPage/styles";

const SESSION_EXPIRED_SVG_URL = "/sessionExpired/timeout.svg";
const SESSION_EXPIRED_BG_URL = "/sessionExpired/bgBlur.webp";

export const SessionExpiredPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGetStarted = (): void => {
    navigate(APP_ROUTES.SIGN_IN);
  };

  return (
    <S.PageWrapper>
      <S.BgBlur src={SESSION_EXPIRED_BG_URL} alt="" />

      <S.SvgImage src={SESSION_EXPIRED_SVG_URL} alt="" />

      <S.ContentBox>
        <S.PageTitle>
          {t("sessionExpired.titleFirst")} {t("sessionExpired.titleSecond")}
        </S.PageTitle>

        <S.PageSubtitle>
          {t("sessionExpired.subtitleLine1")}
          <br />
          {t("sessionExpired.subtitleLine2")}
        </S.PageSubtitle>

        <S.GetStartedButton
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={handleGetStarted}
        >
          {t("sessionExpired.cta")}
        </S.GetStartedButton>
      </S.ContentBox>
    </S.PageWrapper>
  );
};

export default SessionExpiredPage;
