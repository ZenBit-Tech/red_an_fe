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
  const columnLabelKeys: Record<string, string> = {
    PERSON: "syntheticGenerator.table.columns.person",
    DATE_TIME: "syntheticGenerator.table.columns.dateTime",
    PHONE: "syntheticGenerator.table.columns.phone",
    EMAIL: "syntheticGenerator.table.columns.email",
    MRN: "syntheticGenerator.table.columns.mrn",
    LOCATION: "syntheticGenerator.table.columns.location",
    IDENTIFIER: "syntheticGenerator.table.columns.identifier",
  };

  const getColumnLabel = (columnKey: string): string => {
    const suffixMatch = columnKey.match(/^(.*?)(?:_(\d+))?$/);
    const baseKey = suffixMatch?.[1] ?? columnKey;
    const suffix = suffixMatch?.[2];
    const translationKey =
      columnLabelKeys[baseKey] ?? "syntheticGenerator.table.columns.dynamic";

    const label =
      translationKey === "syntheticGenerator.table.columns.dynamic"
        ? t(translationKey, { type: baseKey })
        : t(translationKey);

    return suffix ? `${label} ${suffix}` : label;
  };

  const {
    recordsCount,
    outputFormat,
    isAccordionOpen,
    isGenerating,
    isRegenerating,
    isDownloading,
    tableState,
    generateErrorKey,
    outputText,
    hasSourceData,
    handleRecordsCountChange,
    handleOutputFormatChange,
    toggleAccordion,
    handleGenerate,
    handleRegenerate,
    handleDownload,
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

        {tableState && (
          <S.TableCard>
            <S.TableHeader>
              <S.TableTitle>{t("syntheticGenerator.table.title")}</S.TableTitle>
              <S.TableHeaderActions>
                <S.HeaderActionButton
                  onClick={() => {
                    void handleRegenerate();
                  }}
                  disabled={isRegenerating || isGenerating || isDownloading}
                >
                  {t("syntheticGenerator.actions.regenerate")}
                </S.HeaderActionButton>
                <S.HeaderActionButton
                  onClick={() => {
                    void handleDownload();
                  }}
                  disabled={isDownloading || isGenerating || isRegenerating}
                >
                  {t("syntheticGenerator.actions.download")}
                </S.HeaderActionButton>
              </S.TableHeaderActions>
            </S.TableHeader>

            <S.GeneratedTableContainer>
              <S.GeneratedTable stickyHeader>
                <S.GeneratedTableHead>
                  <S.GeneratedRow>
                    <S.GeneratedHeaderCell align="left">
                      {t("syntheticGenerator.table.columns.index")}
                    </S.GeneratedHeaderCell>
                    {tableState.columns.map((columnKey) => (
                      <S.GeneratedHeaderCell key={columnKey} align="left">
                        {getColumnLabel(columnKey)}
                      </S.GeneratedHeaderCell>
                    ))}
                  </S.GeneratedRow>
                </S.GeneratedTableHead>
                <S.GeneratedBody>
                  {tableState.rows.map((row) => (
                    <S.GeneratedRow key={row.variantNumber}>
                      <S.GeneratedCell align="left">
                        {row.variantNumber}
                      </S.GeneratedCell>
                      {tableState.columns.map((columnKey) => (
                        <S.GeneratedCell
                          key={`${row.variantNumber}-${columnKey}`}
                          align="left"
                        >
                          {row.entities[columnKey] ?? "-"}
                        </S.GeneratedCell>
                      ))}
                    </S.GeneratedRow>
                  ))}
                </S.GeneratedBody>
              </S.GeneratedTable>
            </S.GeneratedTableContainer>
          </S.TableCard>
        )}

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
