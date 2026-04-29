import React from "react";
import { Controller, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Box, FormControlLabel, MenuItem, Slider, Switch } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
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
  submitButtonLabel?: string;
}

const DeidentifySettings: React.FC<DeidentifySettingsProps> = ({
  onAnalyze,
  initialValues,
  submitButtonLabel,
}) => {
  const { t } = useTranslation();
  const { control, handleSubmit, isLoading, onSubmit } = useDeidentifySettings({
    onAnalyze,
    initialValues,
  });

  const selectedMethod = useWatch({
    control,
    name: "deidentificationMethod",
  });

  const thresholdValue = useWatch({
    control,
    name: "threshold",
  });

  const getMethodLabel = (method: DeidentificationMethod): string => {
    const methodKey = `deidentify.methods.${method.toLowerCase()}`;
    return t(methodKey, method);
  };

  const selectedMethodDescription = t(
    `deidentify.methodDescriptions.${selectedMethod.toLowerCase()}`,
  );

  return (
    <S.DeidentifySettingsContainer onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <S.DeidentifySettingsTitle>
          {t("deidentify.settings.title")}
        </S.DeidentifySettingsTitle>
        <S.DeidentifySettingsSubtitle>
          {t("deidentify.settings.subtitle")}
        </S.DeidentifySettingsSubtitle>
      </Box>

      <S.DeidentifySettingsSection>
        <S.DeidentifyLabel>{t("deidentify.settings.method")}</S.DeidentifyLabel>
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
                    "& .MuiMenuItem-root": {
                      fontSize: {
                        xs: `${theme.typography.fontSize12}px`,
                        sm: `${theme.typography.fontSize14}px`,
                        md: `${theme.typography.fontSize14}px`,
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
        <S.DeidentifyMethodDescription>
          {selectedMethodDescription}
        </S.DeidentifyMethodDescription>
      </S.DeidentifySettingsSection>

      <S.DeidentifySettingsSection>
        <S.DeidentifyLabel>
          {t("deidentify.settings.threshold")} —{" "}
          {Math.round(thresholdValue * 100)}%
        </S.DeidentifyLabel>
        <Controller
          name="threshold"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Slider
              value={value}
              onChange={(_, newValue) => onChange(newValue)}
              min={THRESHOLD_MIN}
              max={THRESHOLD_MAX}
              step={THRESHOLD_STEP}
              valueLabelDisplay="auto"
              valueLabelFormat={(v) => `${Math.round(v * 100)}%`}
            />
          )}
        />
        <S.DeidentifyMethodDescription>
          {t("deidentify.settings.thresholdHint")}
        </S.DeidentifyMethodDescription>
      </S.DeidentifySettingsSection>

      <S.DeidentifySettingsSection>
        <Controller
          name="preserveStructure"
          control={control}
          render={({ field: { value, onChange } }) => (
            <FormControlLabel
              control={
                <Switch
                  checked={value}
                  onChange={(_, checked) => onChange(checked)}
                />
              }
              label={t("deidentify.settings.preserveStructure")}
            />
          )}
        />
        <S.DeidentifyMethodDescription>
          {t("deidentify.settings.preserveStructureHint")}
        </S.DeidentifyMethodDescription>
      </S.DeidentifySettingsSection>

      <S.ControlsContainer>
        <S.AnalyzeButton
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
          startIcon={<PlayCircleOutlineIcon />}
        >
          {submitButtonLabel ?? t("deidentify.settings.analyze")}
        </S.AnalyzeButton>
      </S.ControlsContainer>
    </S.DeidentifySettingsContainer>
  );
};

export default DeidentifySettings;
