import { useMemo, type ReactNode } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

import GeneratedSyntheticTable from "@/components/GeneratedSyntheticTable";
import { SYNTHETIC_COUNT_LIMITS } from "@/pages/SyntheticData/constants";
import { useSyntheticData } from "@/pages/SyntheticData/useSyntheticData";
import * as S from "@/pages/SyntheticData/styles";

const REPLACEMENT_TOKEN_PATTERN = /\[[^\]]+\]/g;
const renderOutputWithHighlights = (outputText: string): ReactNode => {
  if (!outputText) {
    return outputText;
  }

  const segments: ReactNode[] = [];
  let lastMatchEnd = 0;
  let matchResult: RegExpExecArray | null;

  REPLACEMENT_TOKEN_PATTERN.lastIndex = 0;

  while ((matchResult = REPLACEMENT_TOKEN_PATTERN.exec(outputText)) !== null) {
    if (lastMatchEnd < matchResult.index) {
      segments.push(outputText.slice(lastMatchEnd, matchResult.index));
    }

    segments.push(
      <S.PreviewToken key={`synthetic-preview-token-${matchResult.index}`}>
        {matchResult[0]}
      </S.PreviewToken>,
    );

    lastMatchEnd = matchResult.index + matchResult[0].length;
  }

  if (lastMatchEnd < outputText.length) {
    segments.push(outputText.slice(lastMatchEnd));
  }

  return segments;
};

const SyntheticDataPage = () => {
  const { t } = useTranslation();
  const {
    recordsCount,
    isCountAboveMax,
    isAccordionOpen,
    isGenerating,
    isRegenerating,
    isDownloading,
    tableState,
    generateErrorKey,
    outputText,
    hasSourceData,
    handleRecordsCountChange,
    toggleAccordion,
    handleGenerate,
    handleRegenerate,
    handleDownload,
  } = useSyntheticData();

  const formattedCharacterCount = new Intl.NumberFormat().format(
    outputText.length,
  );
  const highlightedOutput = useMemo(
    () => renderOutputWithHighlights(outputText),
    [outputText],
  );

  return (
    <S.SyntheticPageWrapper>
      <S.SyntheticPageContent>
        <S.HeaderGroup>
          <S.PageTitle>
            {t("syntheticGenerator.page.title")}{" "}
            <S.PageTitleHighlight>
              {t("syntheticGenerator.page.titleHighlight")}
            </S.PageTitleHighlight>
          </S.PageTitle>
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
            <S.InputLabel>
              {t("syntheticGenerator.settings.count")}
            </S.InputLabel>
            <S.NumberField
              type="text"
              value={recordsCount || ""}
              onChange={(event) => handleRecordsCountChange(event.target.value)}
              onBlur={(event) => {
                if (!event.target.value) {
                  handleRecordsCountChange(SYNTHETIC_COUNT_LIMITS.MIN);
                }
              }}
              slotProps={{
                htmlInput: {
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  min: SYNTHETIC_COUNT_LIMITS.MIN,
                  max: SYNTHETIC_COUNT_LIMITS.MAX,
                },
              }}
            />
            {isCountAboveMax && (
              <S.InputWarningLabel>
                {t("syntheticGenerator.settings.maxExceeded", {
                  max: SYNTHETIC_COUNT_LIMITS.MAX,
                })}
              </S.InputWarningLabel>
            )}
          </S.SettingsRow>

          <S.SourceDataSection>
            <S.SourceDataTitle>
              {t("syntheticGenerator.sourceData.title")}
            </S.SourceDataTitle>
            <S.SourceDataDescription>
              {t("syntheticGenerator.sourceData.description")}
            </S.SourceDataDescription>

            <S.CollapsibleCard isOpen={isAccordionOpen}>
              <S.CollapsibleHeader onClick={toggleAccordion}>
                <S.CollapsibleTitle>
                  {t("syntheticGenerator.previousData.title")}
                </S.CollapsibleTitle>
                {isAccordionOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </S.CollapsibleHeader>
              {isAccordionOpen && (
                <S.CollapsibleBody>
                  {hasSourceData ? (
                    <>
                      <S.PreviewSurface>
                        <S.PreviewText>{highlightedOutput}</S.PreviewText>
                      </S.PreviewSurface>
                      <S.CharacterCount>
                        {t("syntheticGenerator.previousData.characterCount", {
                          count: formattedCharacterCount,
                        })}
                      </S.CharacterCount>
                    </>
                  ) : (
                    <S.EmptyState>
                      {t("syntheticGenerator.previousData.emptyState")}
                    </S.EmptyState>
                  )}
                </S.CollapsibleBody>
              )}
            </S.CollapsibleCard>
          </S.SourceDataSection>

          {!!generateErrorKey && (
            <S.ErrorAlert severity="warning">
              {t(generateErrorKey)}
            </S.ErrorAlert>
          )}

          <S.GenerateButton
            onClick={() => {
              void handleGenerate();
            }}
            disabled={!hasSourceData || isGenerating}
          >
            {isGenerating ? (
              <S.GenerateButtonSpinner size={24} thickness={5} disableShrink />
            ) : (
              t("syntheticGenerator.actions.generate")
            )}
          </S.GenerateButton>
        </S.SettingsCard>

        {tableState && (
          <GeneratedSyntheticTable
            tableState={tableState}
            isGenerating={isGenerating}
            isRegenerating={isRegenerating}
            isDownloading={isDownloading}
            onRegenerate={handleRegenerate}
            onDownload={handleDownload}
          />
        )}
      </S.SyntheticPageContent>
    </S.SyntheticPageWrapper>
  );
};

export default SyntheticDataPage;
