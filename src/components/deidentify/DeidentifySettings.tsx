import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Controller, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Box, MenuItem } from "@mui/material";
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
} from "./constants";
import type { DeidentifySettingsFormData } from "./constants";

interface DeidentifySettingsProps {
  onAnalyze: (settings: DeidentifySettingsFormData) => Promise<void>;
  initialValues?: Partial<DeidentifySettingsFormData>;
}

const DeidentifySettings: React.FC<DeidentifySettingsProps> = ({
  onAnalyze,
  initialValues,
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

      {/* Analyze Button */}
      <ControlsContainer>
        <AnalyzeButton
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
          startIcon={<PlayCircleOutlineIcon />}
        >
          {t("deidentify.settings.analyze")}
        </AnalyzeButton>
      </ControlsContainer>
    </DeidentifySettingsContainer>
  );
};

export default DeidentifySettings;
