import { useTranslation } from "react-i18next";
import { type SubscriptionPlan, ICON_MAP } from "@/constants/subscriptionPlans";
import * as S from "./styles";

type PlanCardProps = {
  plan: SubscriptionPlan;
  isLoading: boolean;
  onSelect: () => void;
  actionLabel?: string;
  actionDisabled?: boolean;
  statusNote?: string;
};

const PlanCard = ({
  plan,
  isLoading,
  onSelect,
  actionLabel,
  actionDisabled = false,
  statusNote,
}: PlanCardProps) => {
  const { t } = useTranslation();
  const base = `subscriptionPlan.plans.${plan.i18nKey}`;

  const Card = plan.isPopular ? S.CardPopular : S.Card;
  const Chip = plan.isPopular ? S.TierChipPopular : S.TierChip;
  const Action = plan.isPopular ? S.ActionButtonPopular : S.ActionButton;
  const HeaderRight = plan.isPopular ? S.HeaderRightPopular : S.HeaderRight;
  const FeaturesList = plan.isPopular ? S.FeaturesListPopular : S.FeaturesList;

  const fallbackBillingNote = t(`${base}.billingNote`, { defaultValue: "" });
  const billingNote = statusNote ?? fallbackBillingNote;

  const headerLeft = (
    <S.HeaderLeft>
      <Chip>{t(`${base}.tier`)}</Chip>
      <S.PlanName>{t(`${base}.name`)}</S.PlanName>
    </S.HeaderLeft>
  );

  const priceBlock = (
    <HeaderRight>
      <S.Price>
        ${plan.price}
        <S.PricePeriod>/{plan.period}</S.PricePeriod>
      </S.Price>
      {billingNote && <S.BillingNote>{billingNote}</S.BillingNote>}
    </HeaderRight>
  );

  return (
    <Card>
      {plan.isPopular && <S.PopularRibbon>Popular</S.PopularRibbon>}

      {plan.isPopular ? (
        <S.CardHeader>
          {headerLeft}
          {priceBlock}
        </S.CardHeader>
      ) : (
        <>
          {headerLeft}
          {priceBlock}
        </>
      )}

      <FeaturesList>
        {plan.features.map((feature) => (
          <S.FeatureItem key={feature.i18nKey}>
            <S.FeatureIconBox>
              <svg width={20} height={20} fill="currentColor">
                <use href={ICON_MAP[feature.icon]} />
              </svg>
            </S.FeatureIconBox>
            <S.FeatureText>
              <S.FeatureTitle>
                {t(`${base}.features.${feature.i18nKey}.title`, {
                  defaultValue: t(`${base}.features.${feature.i18nKey}`),
                })}
              </S.FeatureTitle>
              <S.FeatureSubtitle>
                {t(`${base}.features.${feature.i18nKey}.subtitle`, {
                  defaultValue: "",
                })}
              </S.FeatureSubtitle>
            </S.FeatureText>
          </S.FeatureItem>
        ))}
      </FeaturesList>

      <Action onClick={onSelect} disabled={isLoading || actionDisabled}>
        {isLoading
          ? t("subscriptionPlan.actions.redirecting")
          : (actionLabel ?? t(`${base}.ctaLabel`))}
      </Action>
    </Card>
  );
};

export default PlanCard;
