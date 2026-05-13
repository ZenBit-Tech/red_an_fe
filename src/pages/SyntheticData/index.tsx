import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

import { DeidentifiedOutputPanel } from "@/components/DeidentifiedOutputPanel";
import {
  SYNTHETIC_COUNT_LIMITS,
  SYNTHETIC_OUTPUT_FORMAT,
  type SyntheticOutputFormat,
} from "@/pages/SyntheticData/constants";
import { useSyntheticData } from "@/pages/SyntheticData/useSyntheticData";
import * as S from "@/pages/SyntheticData/styles";

const SyntheticDataPage = () => {
  const { t } = useTranslation();
  const {
    recordsCount,
    outputFormat,
    isAccordionOpen,
    isGenerating,
    isGenerated,
    generateErrorKey,
    successMessageKey,
    outputText,
    hasSourceData,
    handleRecordsCountChange,
    handleOutputFormatChange,
    toggleAccordion,
    handleGenerate,
  } = useSyntheticData();

  return (
    <S.SyntheticPageWrapper>
      <S.SyntheticPageContent>
        <S.HeaderGroup>
          <S.PageTitle>{t("syntheticGenerator.page.title")}</S.PageTitle>
          <S.PageSubtitle>
            {t("syntheticGenerator.page.subtitle")}
          </S.PageSubtitle>
        </S.HeaderGroup>

        <S.SettingsCard>
          <S.SettingsHeader>
            <S.SettingsTitle>
              {t("syntheticGenerator.settings.title")}
            </S.SettingsTitle>
            <S.SettingsDescription>
              {t("syntheticGenerator.settings.description")}
            </S.SettingsDescription>
          </S.SettingsHeader>

          <S.SettingsRow>
            <div>
              <S.InputLabel>
                {t("syntheticGenerator.settings.count")}
              </S.InputLabel>
              <S.NumberField
                fullWidth
                type="number"
                value={recordsCount}
                onChange={(event) =>
                  handleRecordsCountChange(Number(event.target.value))
                }
                inputProps={{
                  min: SYNTHETIC_COUNT_LIMITS.MIN,
                  max: SYNTHETIC_COUNT_LIMITS.MAX,
                }}
              />
            </div>
            <div>
              <S.InputLabel>
                {t("syntheticGenerator.settings.outputFormat")}
              </S.InputLabel>
              <S.FormatSelect
                fullWidth
                value={outputFormat}
                onChange={(event) =>
                  handleOutputFormatChange(
                    event.target.value as SyntheticOutputFormat,
                  )
                }
              >
                <S.OutputFormatOption value={SYNTHETIC_OUTPUT_FORMAT.TXT}>
                  {t("syntheticGenerator.settings.formats.txt")}
                </S.OutputFormatOption>
                <S.OutputFormatOption value={SYNTHETIC_OUTPUT_FORMAT.PDF}>
                  {t("syntheticGenerator.settings.formats.pdf")}
                </S.OutputFormatOption>
              </S.FormatSelect>
            </div>
          </S.SettingsRow>

          {!!generateErrorKey && (
            <S.ErrorAlert severity="warning">
              {t(generateErrorKey)}
            </S.ErrorAlert>
          )}

          {!!successMessageKey && isGenerated && (
            <S.ErrorAlert severity="success">
              {t(successMessageKey)}
            </S.ErrorAlert>
          )}

          <S.GenerateButton
            onClick={() => {
              void handleGenerate();
            }}
            disabled={!hasSourceData || isGenerating}
          >
            {isGenerating
              ? t("syntheticGenerator.actions.generating")
              : t("syntheticGenerator.actions.generate")}
          </S.GenerateButton>
        </S.SettingsCard>

        <S.CollapsibleCard>
          <S.CollapsibleHeader onClick={toggleAccordion}>
            <S.CollapsibleTitle>
              {t("syntheticGenerator.previousData.title")}
            </S.CollapsibleTitle>
            {isAccordionOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </S.CollapsibleHeader>
          {isAccordionOpen && (
            <S.CollapsibleBody>
              {hasSourceData ? (
                <DeidentifiedOutputPanel outputText={outputText} />
              ) : (
                <S.EmptyState>
                  {t("syntheticGenerator.previousData.emptyState")}
                </S.EmptyState>
              )}
            </S.CollapsibleBody>
          )}
        </S.CollapsibleCard>
      </S.SyntheticPageContent>
    </S.SyntheticPageWrapper>
  );
};

export default SyntheticDataPage;
