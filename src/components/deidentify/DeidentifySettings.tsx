import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Controller, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Box, FormControlLabel, MenuItem, Slider, Switch } from "@mui/material";
import {
  AnalyzeButton,
  ControlsContainer,
  DeidentifyLabel,
  DeidentifyMethodDescription,
  DeidentifySettingsContainer,
  DeidentifySettingsSection,
  DeidentifySettingsSubtitle,
  DeidentifySettingsTitle,
  MethodSelect,
} from "./styles";
import { useDeidentifySettings } from "./useDeidentifySettings";
import {
  DEIDENTIFICATION_METHODS_OPTIONS,
  type DeidentificationMethod,
  THRESHOLD_MIN,
  THRESHOLD_MAX,
  THRESHOLD_STEP,
} from "./constants";
import type { DeidentifySettingsFormData } from "./constants";

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

  const getMethodLabel = (method: DeidentificationMethod): string => {
    const methodKey = `deidentify.methods.${method.toLowerCase()}`;
    return t(methodKey, method);
  };

  const selectedMethodDescription = t(
    `deidentify.methodDescriptions.${selectedMethod.toLowerCase()}`,
  );

  return (
    <DeidentifySettingsContainer onSubmit={handleSubmit(onSubmit)}>
      {/* Header */}
      <Box>
        <DeidentifySettingsTitle>
          {t("deidentify.settings.title")}
        </DeidentifySettingsTitle>
        <DeidentifySettingsSubtitle>
          {t("deidentify.settings.subtitle")}
        </DeidentifySettingsSubtitle>
      </Box>

      {/* De-Identification Method */}
      <DeidentifySettingsSection>
        <DeidentifyLabel>{t("deidentify.settings.method")}</DeidentifyLabel>
        <Controller
          name="deidentificationMethod"
          control={control}
          render={({ field }) => (
            <MethodSelect
              {...field}
              fullWidth
              size="medium"
              MenuProps={{
                PaperProps: {
                  sx: {
                    "& .MuiMenuItem-root": {
                      fontSize: {
                        xs: "0.8rem",
                        sm: "0.85rem",
                        md: "0.92rem",
                      },
                    },
                  },
                },
              }}
            >
              {DEIDENTIFICATION_METHODS_OPTIONS.map((method) => (
                <MenuItem key={method} value={method}>
                  {getMethodLabel(method)}
                </MenuItem>
              ))}
            </MethodSelect>
          )}
        />
        <DeidentifyMethodDescription>
          {selectedMethodDescription}
        </DeidentifyMethodDescription>
      </DeidentifySettingsSection>

      {/* Detection Threshold */}
      <DeidentifySettingsSection>
        <DeidentifyLabel>
          {t("deidentify.settings.threshold")} —{" "}
          {Math.round(useWatch({ control, name: "threshold" }) * 100)}%
        </DeidentifyLabel>
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
        <DeidentifyMethodDescription>
          {t("deidentify.settings.thresholdHint")}
        </DeidentifyMethodDescription>
      </DeidentifySettingsSection>

      {/* Preserve Structure */}
      <DeidentifySettingsSection>
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
        <DeidentifyMethodDescription>
          {t("deidentify.settings.preserveStructureHint")}
        </DeidentifyMethodDescription>
      </DeidentifySettingsSection>

      {/* Analyze Button */}
      <ControlsContainer>
        <AnalyzeButton
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
          startIcon={<PlayCircleOutlineIcon />}
        >
          {submitButtonLabel ?? t("deidentify.settings.analyze")}
        </AnalyzeButton>
      </ControlsContainer>
    </DeidentifySettingsContainer>
  );
};

export default DeidentifySettings;
