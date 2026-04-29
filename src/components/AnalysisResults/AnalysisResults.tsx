import React, { useMemo, useState } from "react";
import { CircularProgress, TableBody } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";

import {
  COMPLIANCE_FRAMEWORK_ENTITY_TYPES,
  COMPLIANCE_FRAMEWORK,
} from "@/components/ComplianceSelect/constants";
import { useAppSelector } from "@/common/hooks/hooks";
import {
  AnalysisResultsWrapper,
  AnalysisPageTitleGroup,
  AnalysisPageTitle,
  AnalysisPageTitleHighlight,
  AnalysisPageSubtitle,
  AnalysisResultsContainer,
  PanelsContainer,
  ResultPanel,
  PanelTitleRow,
  PanelTitle,
  RestrictedBadge,
  AnonymizedBadge,
  PanelSurface,
  TextContent,
  OutputLoadingContainer,
  HighlightedEntity,
  OutputHighlightedToken,
  PanelActions,
  PanelActionButton,
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
  DecisionFactorBadge,
  ActionToggleButton,
  RecognizerChip,
  ResultCtaSection,
  ResultCtaTextGroup,
  ResultCtaTitle,
  ResultCtaSubtitle,
  ResultCtaButton,
} from "./styles";
import {
  DEFAULT_ENTITY_CHIP_COLOR,
  ENTITY_TYPE_CHIP_COLORS,
  OUTPUT_EXPORT,
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
    } catch {
      return;
    }
  };

  const REPLACEMENT_TOKEN_PATTERN = /\[[^\]]+\]/g;

  const renderOutputWithHighlights = (): React.ReactNode => {
    if (!outputText) {
      return inputText;
    }

    const segments: React.ReactNode[] = [];
    let lastIdx = 0;
    let match: RegExpExecArray | null;

    REPLACEMENT_TOKEN_PATTERN.lastIndex = 0;

    while ((match = REPLACEMENT_TOKEN_PATTERN.exec(outputText)) !== null) {
      if (lastIdx < match.index) {
        segments.push(outputText.substring(lastIdx, match.index));
      }

      segments.push(
        <OutputHighlightedToken key={`token-${match.index}`}>
          {match[0]}
        </OutputHighlightedToken>,
      );

      lastIdx = match.index + match[0].length;
    }

    if (lastIdx < outputText.length) {
      segments.push(outputText.substring(lastIdx));
    }

    return segments;
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

      segments.push(
        <HighlightedEntity
          key={`${entity.id}-${entity.startIdx}`}
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
    <AnalysisResultsWrapper>
      <AnalysisPageTitleGroup>
        <AnalysisPageTitle>
          {t("deidentify.analysisResults.titlePart1")}{" "}
          <AnalysisPageTitleHighlight>
            {t("deidentify.analysisResults.titleHighlight")}
          </AnalysisPageTitleHighlight>
        </AnalysisPageTitle>
        <AnalysisPageSubtitle>
          {t("deidentify.analysisResults.subtitle1")}
        </AnalysisPageSubtitle>
        <AnalysisPageSubtitle>
          {t("deidentify.analysisResults.subtitle2")}
        </AnalysisPageSubtitle>
      </AnalysisPageTitleGroup>

      <AnalysisResultsContainer>
        <PanelsContainer>
          {/* Input Panel */}
          <ResultPanel>
            <PanelTitleRow>
              <PanelTitle>
                {t("deidentify.analysisResults.panelTitle")}
              </PanelTitle>
              <RestrictedBadge>
                {t("deidentify.analysisResults.restrictedBadge")}
              </RestrictedBadge>
            </PanelTitleRow>
            <PanelSurface>
              <TextContent>{renderInputWithHighlights()}</TextContent>
            </PanelSurface>
          </ResultPanel>

          {/* Output Panel */}
          <ResultPanel>
            <PanelTitleRow>
              <PanelTitle>
                {t("deidentify.analysisResults.panelTitle")}
              </PanelTitle>
              <AnonymizedBadge>
                {t("deidentify.analysisResults.anonymizedBadge")}
              </AnonymizedBadge>
            </PanelTitleRow>
            <PanelSurface>
              {isPreviewLoading ? (
                <OutputLoadingContainer>
                  <CircularProgress size={24} />
                </OutputLoadingContainer>
              ) : (
                <TextContent>{renderOutputWithHighlights()}</TextContent>
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
                  ? t("deidentify.analysisResults.output.actions.copied")
                  : t("deidentify.analysisResults.output.actions.copy")}
              </PanelActionButton>
              <PanelActionButton
                size="small"
                startIcon={<DownloadOutlinedIcon />}
                onClick={handleDownloadOutput}
                variant="outlined"
              >
                {t("deidentify.analysisResults.output.actions.download")}
              </PanelActionButton>
            </PanelActions>
          </ResultPanel>
        </PanelsContainer>

        {/* Entities Table */}
        <TableSection>
          <StyledTableContainer>
            <TableContainerHeader>
              <TableContainerTitle>
                {t("deidentify.analysisResults.table.title")}
              </TableContainerTitle>
            </TableContainerHeader>

            <StyledTable stickyHeader size="small">
              <StyledTableHead>
                <StyledTableRow active>
                  <StyledTableCell width="5%">#</StyledTableCell>
                  <StyledTableCell width="12%">
                    {t("deidentify.analysisResults.table.columns.text")}
                  </StyledTableCell>
                  <StyledTableCell width="8%" align="right">
                    {t("deidentify.analysisResults.table.columns.start")}
                  </StyledTableCell>
                  <StyledTableCell width="8%" align="right">
                    {t("deidentify.analysisResults.table.columns.end")}
                  </StyledTableCell>
                  <StyledTableCell width="8%" align="right">
                    {t("deidentify.analysisResults.table.columns.score")}
                  </StyledTableCell>
                  <StyledTableCell width="12%">
                    {t("deidentify.analysisResults.table.columns.recognizer")}
                  </StyledTableCell>
                  <StyledTableCell width="12%">
                    {t("deidentify.analysisResults.table.columns.patternName")}
                  </StyledTableCell>
                  <StyledTableCell width="15%">
                    {t(
                      "deidentify.analysisResults.table.columns.decisionFactor",
                    )}
                  </StyledTableCell>
                  <StyledTableCell width="10%" align="right">
                    {t(
                      "deidentify.analysisResults.table.columns.originalScore",
                    )}
                  </StyledTableCell>
                  <StyledTableCell width="10%">
                    {t("deidentify.analysisResults.table.columns.action")}
                  </StyledTableCell>
                </StyledTableRow>
              </StyledTableHead>

              <TableBody>
                {frameworkEntities.map((entity, index) => {
                  const isActive = selectedEntityIds.has(entity.id);

                  return (
                    <StyledTableRow key={entity.id} active={isActive}>
                      <StyledTableCell>
                        <IndexText inactive={!isActive}>{index + 1}</IndexText>
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
                      <StyledTableCell>
                        <RecognizerChip
                          chipColor={
                            ENTITY_TYPE_CHIP_COLORS[
                              entity.type as EntityType
                            ] ?? DEFAULT_ENTITY_CHIP_COLOR
                          }
                          inactive={!isActive}
                        >
                          {entity.patternName}
                        </RecognizerChip>
                      </StyledTableCell>
                      <StyledTableCell>{entity.recognizer}</StyledTableCell>
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
                              )
                            : t(
                                "deidentify.analysisResults.table.actions.deselected",
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

      <ResultCtaSection>
        <ResultCtaTextGroup>
          <ResultCtaTitle>
            {t("deidentify.analysisResults.cta.title")}
          </ResultCtaTitle>
          <ResultCtaSubtitle>
            {t("deidentify.analysisResults.cta.subtitle")}
          </ResultCtaSubtitle>
        </ResultCtaTextGroup>
        <ResultCtaButton endIcon={<ArrowForwardIcon />}>
          {t("deidentify.analysisResults.cta.button")}
        </ResultCtaButton>
      </ResultCtaSection>
    </AnalysisResultsWrapper>
  );
};

export default AnalysisResults;
