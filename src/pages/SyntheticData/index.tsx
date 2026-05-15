import type { ReactNode, UIEvent } from "react";
import { useEffect, useRef, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

import { SYNTHETIC_COUNT_LIMITS } from "@/pages/SyntheticData/constants";
import { useSyntheticData } from "@/pages/SyntheticData/useSyntheticData";
import * as S from "@/pages/SyntheticData/styles";

const REPLACEMENT_TOKEN_PATTERN = /\[[^\]]+\]/g;
const COLUMN_KEY_PATTERN = /^(.*?)(?:_(\d+))?$/;

const GENERATED_TABLE_COLUMN_WIDTHS = {
  INDEX: 56,
  DEFAULT: 160,
  PERSON: 170,
  DATE_TIME: 132,
  LOCATION: 220,
  PHONE: 168,
  EMAIL: 220,
  MRN: 180,
  IDENTIFIER: 196,
  OCCUPATION: 200,
} as const;

const getBaseColumnKey = (columnKey: string): string => {
  const suffixMatch = columnKey.match(COLUMN_KEY_PATTERN);

  return suffixMatch?.[1] ?? columnKey;
};

const getGeneratedColumnWidth = (columnKey: string): number => {
  const baseColumnKey = getBaseColumnKey(columnKey);
  const widthByKey: Record<string, number> = {
    PERSON: GENERATED_TABLE_COLUMN_WIDTHS.PERSON,
    DATE_TIME: GENERATED_TABLE_COLUMN_WIDTHS.DATE_TIME,
    LOCATION: GENERATED_TABLE_COLUMN_WIDTHS.LOCATION,
    PHONE: GENERATED_TABLE_COLUMN_WIDTHS.PHONE,
    EMAIL: GENERATED_TABLE_COLUMN_WIDTHS.EMAIL,
    MRN: GENERATED_TABLE_COLUMN_WIDTHS.MRN,
    IDENTIFIER: GENERATED_TABLE_COLUMN_WIDTHS.IDENTIFIER,
    OCCUPATION: GENERATED_TABLE_COLUMN_WIDTHS.OCCUPATION,
  };

  return widthByKey[baseColumnKey] ?? GENERATED_TABLE_COLUMN_WIDTHS.DEFAULT;
};

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
    const suffixMatch = columnKey.match(COLUMN_KEY_PATTERN);
    const baseKey = getBaseColumnKey(columnKey);
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

  const generatedTableHeadRef = useRef<HTMLDivElement | null>(null);
  const generatedTableBodyRef = useRef<HTMLDivElement | null>(null);
  const [generatedBodyScrollbarWidth, setGeneratedBodyScrollbarWidth] =
    useState<number>(0);

  const columnWidthValues: number[] = [
    GENERATED_TABLE_COLUMN_WIDTHS.INDEX,
    ...(tableState?.columns.map(getGeneratedColumnWidth) ?? []),
  ];
  const generatedTableWidth = columnWidthValues.reduce(
    (totalWidth, columnWidth) => totalWidth + columnWidth,
    0,
  );

  const columnWidths: string[] = columnWidthValues.map(
    (columnWidth) => `${columnWidth}px`,
  );

  const renderTableColGroup = (): ReactNode => (
    <colgroup>
      {columnWidths.map((width, index) => (
        <col key={`synthetic-generated-col-${index}`} style={{ width }} />
      ))}
    </colgroup>
  );

  const handleGeneratedTableHorizontalScroll = (
    event: UIEvent<HTMLDivElement>,
  ): void => {
    if (!generatedTableHeadRef.current) {
      return;
    }

    generatedTableHeadRef.current.scrollLeft = event.currentTarget.scrollLeft;
  };

  useEffect(() => {
    const bodyElement = generatedTableBodyRef.current;

    if (!bodyElement) {
      return;
    }

    const updateScrollbarWidth = (): void => {
      const scrollbarWidth = bodyElement.offsetWidth - bodyElement.clientWidth;
      setGeneratedBodyScrollbarWidth(scrollbarWidth);
    };

    updateScrollbarWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateScrollbarWidth();
    });

    resizeObserver.observe(bodyElement);

    const tableElement = bodyElement.querySelector("table");
    if (tableElement) {
      resizeObserver.observe(tableElement);
    }

    window.addEventListener("resize", updateScrollbarWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScrollbarWidth);
    };
  }, [tableState]);

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
                        <S.PreviewText>
                          {renderOutputWithHighlights(outputText)}
                        </S.PreviewText>
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
                  startIcon={<S.RegenerateActionIcon />}
                >
                  {t("syntheticGenerator.actions.regenerate")}
                </S.HeaderActionButton>
                <S.HeaderActionButton
                  onClick={() => {
                    void handleDownload();
                  }}
                  disabled={isDownloading || isGenerating || isRegenerating}
                  startIcon={<S.DownloadActionIcon />}
                >
                  {t("syntheticGenerator.actions.download")}
                </S.HeaderActionButton>
              </S.TableHeaderActions>
            </S.TableHeader>

            <S.GeneratedTableContainer>
              <S.GeneratedTableHeadContainer
                ref={generatedTableHeadRef}
                style={{ paddingRight: `${generatedBodyScrollbarWidth}px` }}
              >
                <S.GeneratedTable tableWidth={generatedTableWidth}>
                  {renderTableColGroup()}
                  <S.GeneratedTableHead>
                    <S.GeneratedRow>
                      <S.GeneratedHeaderCell align="center">
                        {t("syntheticGenerator.table.columns.index")}
                      </S.GeneratedHeaderCell>
                      {tableState.columns.map((columnKey) => (
                        <S.GeneratedHeaderCell key={columnKey} align="center">
                          {getColumnLabel(columnKey)}
                        </S.GeneratedHeaderCell>
                      ))}
                    </S.GeneratedRow>
                  </S.GeneratedTableHead>
                </S.GeneratedTable>
              </S.GeneratedTableHeadContainer>

              <S.GeneratedTableBodyContainer
                ref={generatedTableBodyRef}
                onScroll={handleGeneratedTableHorizontalScroll}
              >
                <S.GeneratedTable tableWidth={generatedTableWidth}>
                  {renderTableColGroup()}
                  <S.GeneratedBody>
                    {tableState.rows.map((row) => (
                      <S.GeneratedRow key={row.variantNumber}>
                        <S.GeneratedCell align="center">
                          {row.variantNumber}
                        </S.GeneratedCell>
                        {tableState.columns.map((columnKey) => (
                          <S.GeneratedCell
                            key={`${row.variantNumber}-${columnKey}`}
                            align="center"
                          >
                            {row.entities[columnKey] ?? "-"}
                          </S.GeneratedCell>
                        ))}
                      </S.GeneratedRow>
                    ))}
                  </S.GeneratedBody>
                </S.GeneratedTable>
              </S.GeneratedTableBodyContainer>
            </S.GeneratedTableContainer>
          </S.TableCard>
        )}
      </S.SyntheticPageContent>
    </S.SyntheticPageWrapper>
  );
};

export default SyntheticDataPage;
