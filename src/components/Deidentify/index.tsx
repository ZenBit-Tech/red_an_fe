import React from "react";
import { Controller, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MenuItem } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useAppSelector } from "@/common/hooks/hooks";
import { useDeidentifySettings } from "@/components/Deidentify/useDeidentifySettings";
import { COMPLIANCE_FRAMEWORK_OPTIONS } from "@/components/ComplianceSelect/constants";
import {
  DEIDENTIFICATION_METHODS_OPTIONS,
  type DeidentificationMethod,
  THRESHOLD_MIN,
  THRESHOLD_MAX,
  THRESHOLD_STEP,
} from "@/components/Deidentify/constants";
import type { DeidentifySettingsFormData } from "@/components/Deidentify/constants";
import * as S from "@/components/Deidentify/styles";

interface DeidentifySettingsProps {
  onAnalyze: (settings: DeidentifySettingsFormData) => Promise<void>;
  initialValues?: Partial<DeidentifySettingsFormData>;
}

const DeidentifySettings: React.FC<DeidentifySettingsProps> = ({
  onAnalyze,
  initialValues,
}) => {
  const { t } = useTranslation();
  const { control, handleSubmit, onSubmit } = useDeidentifySettings({
    onAnalyze,
    initialValues,
  });

  const selectedFramework = useAppSelector(
    (state) => state.complianceFramework.selectedFramework,
  );

  const thresholdValue = useWatch({
    control,
    name: "threshold",
  });

  const getMethodLabel = (method: DeidentificationMethod): string => {
    const methodKey = `deidentify.methods.${method.toLowerCase()}`;
    return t(methodKey, method);
  };

  return (
    <S.DeidentifySettingsWrapper>
      <S.DeidentifyPageHeader>
        <S.DeidentifyPageTitleGroup>
          <S.DeidentifyPageTitle>
            {t("deidentify.transformation.title")}
          </S.DeidentifyPageTitle>
          <S.DeidentifyPageSubtitle>
            {t("deidentify.transformation.subtitle")}
          </S.DeidentifyPageSubtitle>
        </S.DeidentifyPageTitleGroup>
        <S.FrameworkBadge>
          <S.FrameworkBadgeLabel>
            {t("deidentify.transformation.frameworkLabel")}
          </S.FrameworkBadgeLabel>{" "}
          {t(
            COMPLIANCE_FRAMEWORK_OPTIONS.find((o) => o.id === selectedFramework)
              ?.labelKey ?? selectedFramework,
          )}
        </S.FrameworkBadge>
      </S.DeidentifyPageHeader>

      <S.DeidentifySettingsContainer
        id="deidentify-settings-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <S.DeidentifySettingsSection>
          <S.DeidentifySettingsTitle>
            {t("deidentify.settings.title")}
          </S.DeidentifySettingsTitle>
          <S.DeidentifySettingsSubtitle>
            {t("deidentify.settings.subtitle")}
          </S.DeidentifySettingsSubtitle>
        </S.DeidentifySettingsSection>

        <S.DeidentifySettingsSection>
          <S.DeidentifySettingsMethod>
            {t("deidentify.settings.method")}
          </S.DeidentifySettingsMethod>
          <Controller
            name="deidentificationMethod"
            control={control}
            render={({ field }) => (
              <S.MethodSelect
                {...field}
                fullWidth
                size="medium"
                IconComponent={KeyboardArrowDownIcon}
                MenuProps={S.DropDownMenuProps}
              >
                {DEIDENTIFICATION_METHODS_OPTIONS.map((method) => (
                  <MenuItem key={method} value={method}>
                    {getMethodLabel(method)}
                  </MenuItem>
                ))}
              </S.MethodSelect>
            )}
          />
        </S.DeidentifySettingsSection>
        <S.PreserveStructureBox>
          <S.PreserveTextWrapper>
            <S.DeidentifyLabel>
              {t("deidentify.settings.preserveStructure")}
            </S.DeidentifyLabel>
            <S.DeidentifyMethodDescription>
              {t("deidentify.settings.preserveStructureHint")}
            </S.DeidentifyMethodDescription>
          </S.PreserveTextWrapper>

          <Controller
            name="preserveStructure"
            control={control}
            render={({ field: { value, onChange } }) => (
              <S.PreserveSwitch
                checked={value}
                onChange={(_, checked) => onChange(checked)}
              />
            )}
          />
        </S.PreserveStructureBox>
        <S.ThresholdBox>
          <S.ThresholdLabelRow>
            <S.DeidentifyLabel>
              {t("deidentify.settings.threshold")}
            </S.DeidentifyLabel>
            <S.ThresholdValue>
              {Math.round(thresholdValue * 100)}%
            </S.ThresholdValue>
          </S.ThresholdLabelRow>

          <Controller
            name="threshold"
            control={control}
            render={({ field: { value, onChange } }) => (
              <S.CustomSlider
                value={value}
                onChange={(_, newValue) => onChange(newValue)}
                min={THRESHOLD_MIN}
                max={THRESHOLD_MAX}
                step={THRESHOLD_STEP}
                valueLabelDisplay="off"
              />
            )}
          />

          <S.ThresholdHintRow>
            <InfoIcon
              sx={(theme) => ({ fontSize: theme.typography.fontSize14 })}
            />
            <S.DeidentifyMethodDescription>
              {t("deidentify.settings.thresholdHint")}
            </S.DeidentifyMethodDescription>
          </S.ThresholdHintRow>
        </S.ThresholdBox>
      </S.DeidentifySettingsContainer>
    </S.DeidentifySettingsWrapper>
  );
};

export default DeidentifySettings;
