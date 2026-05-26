import { useTranslation } from "react-i18next";
import * as S from "@/components/FreeLimitReachedModal/styles";

const failureCircularIconHref = "/subscription/icons.svg#icon-failure-circular";

type FreeLimitReachedModalProps = {
  open: boolean;
  used: number;
  limit: number;
  onUpgrade: () => void;
  onClose: () => void;
};

const FreeLimitReachedModal = ({
  open,
  used,
  limit,
  onUpgrade,
  onClose,
}: FreeLimitReachedModalProps) => {
  const { t } = useTranslation();

  return (
    <S.ModalDialog open={open} onClose={onClose} maxWidth={false}>
      <S.IconOuter>
        <S.IconInner>
          <S.IconSvg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <use href={failureCircularIconHref} />
          </S.IconSvg>
        </S.IconInner>
      </S.IconOuter>

      <S.Title>{t("deidentify.freeLimitModal.title")}</S.Title>

      <S.Description>
        {t("deidentify.freeLimitModal.messagePrefix")}{" "}
        <S.HighlightText>
          {t("deidentify.freeLimitModal.messageHighlight", { used, limit })}
        </S.HighlightText>{" "}
        {t("deidentify.freeLimitModal.messageSuffix")}
        <br />
        {t("deidentify.freeLimitModal.messageLine2")}
      </S.Description>

      <S.ActionsRow>
        <S.UpgradeButton onClick={onUpgrade}>
          {t("deidentify.freeLimitModal.upgradeButton")}
        </S.UpgradeButton>
        <S.CloseButton onClick={onClose}>
          {t("deidentify.freeLimitModal.closeButton")}
        </S.CloseButton>
      </S.ActionsRow>
    </S.ModalDialog>
  );
};

export default FreeLimitReachedModal;
