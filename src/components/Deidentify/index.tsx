import React from "react";
import { Controller, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MenuItem, Switch } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info"; // Додали іконку

import { useAppSelector } from "@/common/hooks/hooks";
import { useDeidentifySettings } from "@/components/Deidentify/useDeidentifySettings";
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
          {selectedFramework}
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
                MenuProps={{
                  PaperProps: {
                    sx: (theme) => ({
                      backgroundColor: "#060e20", // Фон самого списку
                      borderRadius: "4px", // Радіус країв списку
                      backgroundImage: "none", // На всякий випадок скидаємо дефолтний градієнт MUI
                      marginTop: "4px", // Невеличкий відступ від інпута до списку
                      border: "1px solid rgba(176, 198, 255, 0.08)", // Легка рамка, щоб список не зливався з фоном

                      "& .MuiList-root": {
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px", // Ті самі 12 пікселів між елементами
                        padding: "12px", // Відступ всередині списку, щоб елементи не прилипали до країв
                      },

                      "& .MuiMenuItem-root": {
                        color: "#d9e2ff", // Робимо текст світлим, щоб було видно на темному
                        borderRadius: "4px", // Злегка закруглюємо самі айтеми для красивого ховеру
                        padding: "8px 12px", // Комфортні відступи для кліку
                        fontSize: {
                          xs: `${theme.typography.fontSize12}px`,
                          sm: `${theme.typography.fontSize14}px`,
                          md: `${theme.typography.fontSize14}px`,
                        },
                        "&:hover": {
                          backgroundColor: "rgba(176, 198, 255, 0.08)", // Легкий підсвіт при наведенні
                        },
                        "&.Mui-selected": {
                          backgroundColor: "rgba(59, 130, 239, 0.25);", // Колір обраного елемента
                          "&:hover": {
                            backgroundColor: " rgba(176, 198, 255, 0.1)",
                          },
                        },
                      },
                    }),
                  },
                }}
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
              <Switch
                checked={value}
                onChange={(_, checked) => onChange(checked)}
              />
            )}
          />
        </S.PreserveStructureBox>

        {/* НОВИЙ БЛОК: Threshold */}
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
              <S.CustomSlider // <--- ОСЬ ТУТ ЗМІНИЛИ НА S.CustomSlider
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
            <InfoIcon sx={{ fontSize: 14 }} />
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
