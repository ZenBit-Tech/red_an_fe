import {
  useCallback,
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type UIEvent,
} from "react";
import { useTranslation } from "react-i18next";

import type { SyntheticTableResponse } from "@/common/api/deidentifyApiTypes";
import * as S from "@/components/GeneratedSyntheticTable/styles";

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

const COLUMN_LABEL_KEYS: Record<string, string> = {
  PERSON: "syntheticGenerator.table.columns.person",
  DATE_TIME: "syntheticGenerator.table.columns.dateTime",
  PHONE: "syntheticGenerator.table.columns.phone",
  EMAIL: "syntheticGenerator.table.columns.email",
  MRN: "syntheticGenerator.table.columns.mrn",
  LOCATION: "syntheticGenerator.table.columns.location",
  IDENTIFIER: "syntheticGenerator.table.columns.identifier",
};

type GeneratedTableData = {
  columns: string[];
  rows: SyntheticTableResponse["rows"];
};

type GeneratedSyntheticTableProps = {
  tableState: GeneratedTableData;
  isGenerating: boolean;
  isRegenerating: boolean;
  isDownloading: boolean;
  onRegenerate: () => Promise<void>;
  onDownload: () => Promise<void>;
};

type GeneratedTableGridProps = {
  tableState: GeneratedTableData;
  getColumnLabel: (columnKey: string) => string;
};

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

const GeneratedTableGrid = memo(
  ({ tableState, getColumnLabel }: GeneratedTableGridProps) => {
    const { t } = useTranslation();
    const generatedTableHeadRef = useRef<HTMLDivElement | null>(null);
    const generatedTableBodyRef = useRef<HTMLDivElement | null>(null);
    const [generatedBodyScrollbarWidth, setGeneratedBodyScrollbarWidth] =
      useState<number>(0);

    const columnWidthValues = useMemo(
      () => [
        GENERATED_TABLE_COLUMN_WIDTHS.INDEX,
        ...tableState.columns.map(getGeneratedColumnWidth),
      ],
      [tableState.columns],
    );

    const generatedTableWidth = useMemo(
      () =>
        columnWidthValues.reduce(
          (totalWidth, columnWidth) => totalWidth + columnWidth,
          0,
        ),
      [columnWidthValues],
    );

    const columnWidths = useMemo(
      () => columnWidthValues.map((columnWidth) => `${columnWidth}px`),
      [columnWidthValues],
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
        const scrollbarWidth =
          bodyElement.offsetWidth - bodyElement.clientWidth;
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
    );
  },
);

export const GeneratedSyntheticTable = ({
  tableState,
  isGenerating,
  isRegenerating,
  isDownloading,
  onRegenerate,
  onDownload,
}: GeneratedSyntheticTableProps) => {
  const { t } = useTranslation();

  const getColumnLabel = useCallback(
    (columnKey: string): string => {
      const suffixMatch = columnKey.match(COLUMN_KEY_PATTERN);
      const baseKey = getBaseColumnKey(columnKey);
      const suffix = suffixMatch?.[2];
      const translationKey =
        COLUMN_LABEL_KEYS[baseKey] ??
        "syntheticGenerator.table.columns.dynamic";

      const label =
        translationKey === "syntheticGenerator.table.columns.dynamic"
          ? t(translationKey, { type: baseKey })
          : t(translationKey);

      return suffix ? `${label} ${suffix}` : label;
    },
    [t],
  );

  return (
    <S.TableCard>
      <S.TableHeader>
        <S.TableTitle>{t("syntheticGenerator.table.title")}</S.TableTitle>
        <S.TableHeaderActions>
          <S.HeaderActionButton
            onClick={() => {
              void onRegenerate();
            }}
            disabled={isRegenerating || isGenerating || isDownloading}
            startIcon={<S.RegenerateActionIcon isHidden={isRegenerating} />}
          >
            <S.HeaderActionButtonContent>
              <S.HeaderActionButtonLabel isHidden={isRegenerating}>
                {t("syntheticGenerator.actions.regenerate")}
              </S.HeaderActionButtonLabel>
              {isRegenerating && (
                <S.HeaderActionButtonSpinner
                  size={24}
                  thickness={5}
                  disableShrink
                />
              )}
            </S.HeaderActionButtonContent>
          </S.HeaderActionButton>
          <S.HeaderActionButton
            onClick={() => {
              void onDownload();
            }}
            disabled={isDownloading || isGenerating || isRegenerating}
            startIcon={<S.DownloadActionIcon isHidden={isDownloading} />}
          >
            <S.HeaderActionButtonContent>
              <S.HeaderActionButtonLabel isHidden={isDownloading}>
                {t("syntheticGenerator.actions.download")}
              </S.HeaderActionButtonLabel>
              {isDownloading && (
                <S.HeaderActionButtonSpinner
                  size={24}
                  thickness={5}
                  disableShrink
                />
              )}
            </S.HeaderActionButtonContent>
          </S.HeaderActionButton>
        </S.TableHeaderActions>
      </S.TableHeader>

      <GeneratedTableGrid
        tableState={tableState}
        getColumnLabel={getColumnLabel}
      />
    </S.TableCard>
  );
};

export default memo(GeneratedSyntheticTable);
