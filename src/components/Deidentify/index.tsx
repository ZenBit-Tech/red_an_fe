import React from "react";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useAppSelector } from "@/common/hooks/hooks";
import { useDeidentifySettings } from "@/components/Deidentify/useDeidentifySettings";
import { COMPLIANCE_FRAMEWORK_OPTIONS } from "@/components/ComplianceSelect/constants";
import {
  DEIDENTIFICATION_METHODS_OPTIONS,
  type DeidentificationMethod,
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

  const getMethodLabel = (method: DeidentificationMethod): string => {
    const methodKey = `deidentify.methods.${method.toLowerCase()}`;
    return t(methodKey, method);
  };

  return (
    <S.DeidentifySettingsWrapper>
      <S.DeidentifyPageHeader>
        <S.DeidentifyPageTitleRow>
          <S.DeidentifyPageTitle>
            {t("deidentify.transformation.title")}
          </S.DeidentifyPageTitle>
          <S.FrameworkBadge>
            <S.FrameworkBadgeLabel>
              {t("deidentify.transformation.frameworkLabel")}
            </S.FrameworkBadgeLabel>{" "}
            {t(
              COMPLIANCE_FRAMEWORK_OPTIONS.find(
                (o) => o.id === selectedFramework,
              )?.labelKey ?? selectedFramework,
            )}
          </S.FrameworkBadge>
        </S.DeidentifyPageTitleRow>
        <S.DeidentifyPageSubtitle>
          {t("deidentify.transformation.subtitle")}
        </S.DeidentifyPageSubtitle>
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
      </S.DeidentifySettingsContainer>
    </S.DeidentifySettingsWrapper>
  );
};

export default DeidentifySettings;
