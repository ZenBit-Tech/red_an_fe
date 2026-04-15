import React, { useMemo, useState } from "react";
import { Box, CircularProgress, MenuItem, TableBody } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { jsPDF } from "jspdf";
import { useTranslation } from "react-i18next";

import {
  COMPLIANCE_FRAMEWORK_ENTITY_TYPES,
  COMPLIANCE_FRAMEWORK,
} from "@/components/complianceSelect/constants";
import { useAppSelector } from "@/common/hooks/hooks";
import {
  AnalysisResultsContainer,
  AnalysisResultsTitle,
  AnalysisResultsSubtitle,
  PanelsContainer,
  ResultPanel,
  PanelHeader,
  PanelHeaderCopy,
  PanelLabel,
  PanelDescription,
  PanelSurface,
  TextContent,
  OutputLoadingContainer,
  HighlightedEntity,
  PanelActions,
  PanelActionButton,
  DownloadFormatSelect,
  TableSection,
  TableContainerHeader,
  TableContainerTitle,
  StyledTableContainer,
  StyledTable,
  StyledTableHead,
  StyledTableRow,
  StyledTableCell,
  IndexText,
  NumericText,
  ScoreBadge,
  EntityBadge,
  DecisionFactorBadge,
  ActionToggleButton,
} from "./styles";
import {
  DEFAULT_ENTITY_COLOR,
  ENTITY_TYPE_COLORS,
  DOWNLOAD_FORMAT,
  OUTPUT_EXPORT,
  PDF_EXPORT,
  type DownloadFormat,
  type Entity,
  type EntityType,
} from "./constants";
import { useAnalysisResults } from "./useAnalysisResults";

interface AnalysisResultsProps {
  inputText: string;
  entities: Entity[];
  jobId: string;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({
  inputText,
  entities,
  jobId,
}) => {
  const { t } = useTranslation();
  const [copiedOutput, setCopiedOutput] = useState<boolean>(false);
  const [downloadFormat, setDownloadFormat] = useState<DownloadFormat>(
    DOWNLOAD_FORMAT.TXT,
  );
  const selectedFramework = useAppSelector(
    (state) => state.complianceFramework.selectedFramework,
  );

  const frameworkEntities = useMemo(() => {
    const allowedEntityTypes =
      COMPLIANCE_FRAMEWORK_ENTITY_TYPES[selectedFramework] ??
      COMPLIANCE_FRAMEWORK_ENTITY_TYPES[COMPLIANCE_FRAMEWORK.HIPAA];

    return entities.filter((entity) =>
      allowedEntityTypes.includes(entity.type),
    );
  }, [entities, selectedFramework]);

  const {
    selectedEntityIds,
    inputWithHighlights,
    outputText,
    isPreviewLoading,
    toggleEntitySelection,
  } = useAnalysisResults({
    entities: frameworkEntities,
    inputText,
    jobId,
    framework: selectedFramework,
  });

  const handleCopyOutput = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(outputText);
      setCopiedOutput(true);
      setTimeout(() => setCopiedOutput(false), 2000);
    } catch {
      setCopiedOutput(false);
    }
  };

  const handleDownloadOutput = (): void => {
    try {
      const downloadAsText = (): void => {
        const textFileName = `${OUTPUT_EXPORT.FILE_NAME_BASE}${OUTPUT_EXPORT.TXT_EXTENSION}`;
        const textBlob = new Blob([outputText], {
          type: OUTPUT_EXPORT.TXT_MIME_TYPE,
        });

        const textUrl = URL.createObjectURL(textBlob);
        const textAnchor = document.createElement("a");
        textAnchor.href = textUrl;
        textAnchor.download = textFileName;
        document.body.appendChild(textAnchor);
        textAnchor.click();
        document.body.removeChild(textAnchor);
        URL.revokeObjectURL(textUrl);
      };

      const downloadAsPdf = (): void => {
        const pdfFileName = `${OUTPUT_EXPORT.FILE_NAME_BASE}${OUTPUT_EXPORT.PDF_EXTENSION}`;
        const pdfDocument = new jsPDF({
          unit: PDF_EXPORT.UNIT,
          format: PDF_EXPORT.FORMAT,
        });

        pdfDocument.setFontSize(PDF_EXPORT.FONT_SIZE);

        const pageWidth = pdfDocument.internal.pageSize.getWidth();
        const pageHeight = pdfDocument.internal.pageSize.getHeight();
        const maxLineWidth = pageWidth - PDF_EXPORT.PAGE_MARGIN * 2;
        const wrappedLines = pdfDocument.splitTextToSize(
          outputText,
          maxLineWidth,
        );

        let cursorY = PDF_EXPORT.PAGE_MARGIN;

        wrappedLines.forEach((line: string) => {
          if (cursorY > pageHeight - PDF_EXPORT.PAGE_MARGIN) {
            pdfDocument.addPage();
            cursorY = PDF_EXPORT.PAGE_MARGIN;
          }

          pdfDocument.text(line, PDF_EXPORT.PAGE_MARGIN, cursorY);
          cursorY += PDF_EXPORT.LINE_HEIGHT;
        });

        pdfDocument.save(pdfFileName);
      };

      if (downloadFormat === DOWNLOAD_FORMAT.PDF) {
        downloadAsPdf();
        return;
      }

      downloadAsText();
    } catch {
      return;
    }
  };

  const renderInputWithHighlights = (): React.ReactNode => {
    if (!inputText) {
      return inputText;
    }

    const segments: React.ReactNode[] = [];
    let lastIdx = 0;

    const sortedEntities = [...inputWithHighlights].sort(
      (a, b) => a.startIdx - b.startIdx,
    );

    for (const entity of sortedEntities) {
      if (lastIdx < entity.startIdx) {
        segments.push(inputText.substring(lastIdx, entity.startIdx));
      }

      const bgColor =
        ENTITY_TYPE_COLORS[entity.type as EntityType] ?? DEFAULT_ENTITY_COLOR;
      segments.push(
        <HighlightedEntity
          key={`${entity.id}-${entity.startIdx}`}
          highlightColor={bgColor}
          title={`${entity.type} (Score: ${entity.score})`}
        >
          {inputText.substring(entity.startIdx, entity.endIdx)}
        </HighlightedEntity>,
      );

      lastIdx = entity.endIdx;
    }

    if (lastIdx < inputText.length) {
      segments.push(inputText.substring(lastIdx));
    }

    return segments;
  };

  return (
    <AnalysisResultsContainer>
      {/* Header */}
      <Box>
        <AnalysisResultsTitle>
          {t("deidentify.analysisResults.title", "Analysis Results")}
        </AnalysisResultsTitle>
        <AnalysisResultsSubtitle>
          {t(
            "deidentify.analysisResults.subtitle",
            "Review detected entities and de-identified output",
          )}
        </AnalysisResultsSubtitle>
      </Box>

      {/* Input / Output Panels */}
      <PanelsContainer>
        {/* Input Panel */}
        <ResultPanel>
          <PanelHeader>
            <PanelHeaderCopy>
              <PanelLabel>
                {t("deidentify.analysisResults.input.label", "Input")}
              </PanelLabel>
              <PanelDescription>
                {t(
                  "deidentify.analysisResults.input.description",
                  "Original text with detected entities highlighted",
                )}
              </PanelDescription>
            </PanelHeaderCopy>
          </PanelHeader>
          <PanelSurface>
            <TextContent>{renderInputWithHighlights()}</TextContent>
          </PanelSurface>
        </ResultPanel>

        {/* Output Panel */}
        <ResultPanel>
          <PanelHeader>
            <PanelHeaderCopy>
              <PanelLabel>
                {t("deidentify.analysisResults.output.label", "Output")}
              </PanelLabel>
              <PanelDescription>
                {t(
                  "deidentify.analysisResults.output.description",
                  "De-identified text",
                )}
              </PanelDescription>
            </PanelHeaderCopy>
          </PanelHeader>
          <PanelSurface>
            {isPreviewLoading ? (
              <OutputLoadingContainer>
                <CircularProgress size={24} />
              </OutputLoadingContainer>
            ) : (
              <TextContent>{outputText || inputText}</TextContent>
            )}
          </PanelSurface>
          <PanelActions>
            <PanelActionButton
              size="small"
              startIcon={<ContentCopyIcon />}
              onClick={handleCopyOutput}
              variant="outlined"
            >
              {copiedOutput
                ? t(
                    "deidentify.analysisResults.output.actions.copied",
                    "Copied",
                  )
                : t("deidentify.analysisResults.output.actions.copy", "Copy")}
            </PanelActionButton>
            <PanelActionButton
              size="small"
              startIcon={<DownloadOutlinedIcon />}
              onClick={handleDownloadOutput}
              variant="outlined"
            >
              {t(
                "deidentify.analysisResults.output.actions.download",
                "Download",
              )}
            </PanelActionButton>
            <DownloadFormatSelect
              value={downloadFormat}
              onChange={(event) =>
                setDownloadFormat(event.target.value as DownloadFormat)
              }
              size="small"
            >
              <MenuItem value={DOWNLOAD_FORMAT.TXT}>
                {t(
                  "deidentify.analysisResults.output.actions.formatTxt",
                  "TXT",
                )}
              </MenuItem>
              <MenuItem value={DOWNLOAD_FORMAT.PDF}>
                {t(
                  "deidentify.analysisResults.output.actions.formatPdf",
                  "PDF",
                )}
              </MenuItem>
            </DownloadFormatSelect>
          </PanelActions>
        </ResultPanel>
      </PanelsContainer>

      {/* Entities Table */}
      <TableSection>
        <StyledTableContainer>
          <TableContainerHeader>
            <TableContainerTitle>
              {t(
                "deidentify.analysisResults.table.title",
                "Findings with decision factors",
              )}
            </TableContainerTitle>
          </TableContainerHeader>

          <StyledTable stickyHeader size="small">
            <StyledTableHead>
              <StyledTableRow active>
                <StyledTableCell width="5%">#</StyledTableCell>
                <StyledTableCell width="12%">
                  {t("deidentify.analysisResults.table.columns.text", "Text")}
                </StyledTableCell>
                <StyledTableCell width="8%" align="right">
                  {t("deidentify.analysisResults.table.columns.start", "Start")}
                </StyledTableCell>
                <StyledTableCell width="8%" align="right">
                  {t("deidentify.analysisResults.table.columns.end", "End")}
                </StyledTableCell>
                <StyledTableCell width="8%" align="right">
                  {t("deidentify.analysisResults.table.columns.score", "Score")}
                </StyledTableCell>
                <StyledTableCell width="12%">
                  {t(
                    "deidentify.analysisResults.table.columns.recognizer",
                    "Recognizer",
                  )}
                </StyledTableCell>
                <StyledTableCell width="12%">
                  {t(
                    "deidentify.analysisResults.table.columns.patternName",
                    "Pattern Name",
                  )}
                </StyledTableCell>
                <StyledTableCell width="15%">
                  {t(
                    "deidentify.analysisResults.table.columns.decisionFactor",
                    "Decision Factors",
                  )}
                </StyledTableCell>
                <StyledTableCell width="10%" align="right">
                  {t(
                    "deidentify.analysisResults.table.columns.originalScore",
                    "Original Score",
                  )}
                </StyledTableCell>
                <StyledTableCell width="10%">
                  {t(
                    "deidentify.analysisResults.table.columns.action",
                    "Action",
                  )}
                </StyledTableCell>
              </StyledTableRow>
            </StyledTableHead>

            <TableBody>
              {frameworkEntities.map((entity, index) => {
                const isActive = selectedEntityIds.has(entity.id);

                return (
                  <StyledTableRow key={entity.id} active={isActive}>
                    <StyledTableCell>
                      <IndexText inactive={!isActive}>{index}</IndexText>
                    </StyledTableCell>
                    <StyledTableCell>{entity.value}</StyledTableCell>
                    <StyledTableCell align="right">
                      <NumericText inactive={!isActive}>
                        {entity.startIdx}
                      </NumericText>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <NumericText inactive={!isActive}>
                        {entity.endIdx}
                      </NumericText>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <ScoreBadge inactive={!isActive}>
                        {entity.score.toFixed(2)}
                      </ScoreBadge>
                    </StyledTableCell>
                    <StyledTableCell>{entity.recognizer}</StyledTableCell>
                    <StyledTableCell>
                      <EntityBadge
                        badgeColor={
                          ENTITY_TYPE_COLORS[entity.type as EntityType] ??
                          DEFAULT_ENTITY_COLOR
                        }
                        inactive={!isActive}
                      >
                        {entity.patternName}
                      </EntityBadge>
                    </StyledTableCell>
                    <StyledTableCell>
                      <DecisionFactorBadge
                        level={entity.decisionFactor}
                        inactive={!isActive}
                      >
                        {entity.decisionFactor}
                      </DecisionFactorBadge>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <NumericText inactive={!isActive}>
                        {entity.originalScore.toFixed(2)}
                      </NumericText>
                    </StyledTableCell>
                    <StyledTableCell>
                      <ActionToggleButton
                        size="small"
                        active={isActive}
                        onClick={() => toggleEntitySelection(entity.id)}
                        endIcon={<ArrowDropDownIcon />}
                      >
                        {isActive
                          ? t(
                              "deidentify.analysisResults.table.actions.selected",
                              "Selected",
                            )
                          : t(
                              "deidentify.analysisResults.table.actions.deselected",
                              "Deselected",
                            )}
                      </ActionToggleButton>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      </TableSection>
    </AnalysisResultsContainer>
  );
};

export default AnalysisResults;
