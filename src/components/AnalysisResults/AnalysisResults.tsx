import React, { useMemo, useState } from "react";
import { CircularProgress, TableBody } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useTranslation } from "react-i18next";
import {
  COMPLIANCE_FRAMEWORK_ENTITY_TYPES,
  COMPLIANCE_FRAMEWORK,
  COMPLIANCE_FRAMEWORK_OPTIONS,
} from "@/components/ComplianceSelect/constants";
import { useAppSelector } from "@/common/hooks/hooks";
import * as S from "@/components/AnalysisResults/styles";
import {
  DEFAULT_ENTITY_CHIP_COLOR,
  ENTITY_TYPE_CHIP_COLORS,
  OUTPUT_EXPORT,
  type AnalysisResultsProps,
  type EntityType,
} from "@/components/AnalysisResults/constants";
import { useAnalysisResults } from "@/components/AnalysisResults/useAnalysisResults";

const AnalysisResults: React.FC<AnalysisResultsProps> = ({
  inputText,
  entities,
  jobId,
  onBack,
  onRestart,
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
        <S.OutputHighlightedToken key={`token-${match.index}`}>
          {match[0]}
        </S.OutputHighlightedToken>,
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
        <S.HighlightedEntity
          key={`${entity.id}-${entity.startIdx}`}
          title={`${entity.type} (Score: ${entity.score})`}
        >
          {inputText.substring(entity.startIdx, entity.endIdx)}
        </S.HighlightedEntity>,
      );

      lastIdx = entity.endIdx;
    }

    if (lastIdx < inputText.length) {
      segments.push(inputText.substring(lastIdx));
    }

    return segments;
  };

  return (
    <S.AnalysisResultsWrapper>
      <S.AnalysisPageHeader>
        <S.AnalysisPageTitleGroup>
          <S.AnalysisPageTitle>
            {t("deidentify.analysisResults.titlePart1")}{" "}
            <S.AnalysisPageTitleHighlight>
              {t("deidentify.analysisResults.titleHighlight")}
            </S.AnalysisPageTitleHighlight>
          </S.AnalysisPageTitle>
          <S.AnalysisPageSubtitle>
            {t("deidentify.analysisResults.subtitle1")}
          </S.AnalysisPageSubtitle>
          <S.AnalysisPageSubtitle>
            {t("deidentify.analysisResults.subtitle2")}
          </S.AnalysisPageSubtitle>
        </S.AnalysisPageTitleGroup>
        <S.FrameworkBadge>
          <S.FrameworkBadgeLabel>
            {t("deidentify.transformation.frameworkLabel")}
          </S.FrameworkBadgeLabel>{" "}
          {t(
            COMPLIANCE_FRAMEWORK_OPTIONS.find((o) => o.id === selectedFramework)
              ?.labelKey ?? selectedFramework,
          )}
        </S.FrameworkBadge>
      </S.AnalysisPageHeader>

      <S.AnalysisResultsContainer>
        <S.PanelsContainer>
          <S.ResultPanel>
            <S.PanelTitleRow>
              <S.PanelTitle>
                {t("deidentify.analysisResults.panelTitle")}
              </S.PanelTitle>
              <S.RestrictedBadge>
                {t("deidentify.analysisResults.restrictedBadge")}
              </S.RestrictedBadge>
            </S.PanelTitleRow>
            <S.PanelSurface>
              <S.TextContent>{renderInputWithHighlights()}</S.TextContent>
            </S.PanelSurface>
          </S.ResultPanel>
          <S.ResultPanel>
            <S.PanelTitleRow>
              <S.PanelTitle>
                {t("deidentify.analysisResults.panelTitle")}
              </S.PanelTitle>
              <S.AnonymizedBadge>
                {t("deidentify.analysisResults.anonymizedBadge")}
              </S.AnonymizedBadge>
            </S.PanelTitleRow>
            <S.PanelSurface>
              {isPreviewLoading ? (
                <S.OutputLoadingContainer>
                  <CircularProgress size={24} />
                </S.OutputLoadingContainer>
              ) : (
                <S.TextContent>{renderOutputWithHighlights()}</S.TextContent>
              )}
            </S.PanelSurface>
            <S.PanelActions>
              <S.PanelActionButton
                size="small"
                startIcon={<ContentCopyIcon />}
                onClick={handleCopyOutput}
                variant="outlined"
              >
                {copiedOutput
                  ? t("deidentify.analysisResults.output.actions.copied")
                  : t("deidentify.analysisResults.output.actions.copy")}
              </S.PanelActionButton>
              <S.PanelActionButton
                size="small"
                startIcon={<DownloadOutlinedIcon />}
                onClick={handleDownloadOutput}
                variant="outlined"
              >
                {t("deidentify.analysisResults.output.actions.download")}
              </S.PanelActionButton>
            </S.PanelActions>
          </S.ResultPanel>
        </S.PanelsContainer>
        <S.TableSection>
          <S.TableBlock>
            {" "}
            <S.TableContainerHeader>
              {" "}
              <S.TableContainerTitle>
                {t("deidentify.analysisResults.table.title")}
              </S.TableContainerTitle>
            </S.TableContainerHeader>
            <S.StyledTableHeadContainer>
              <S.StyledTable size="small">
                <S.StyledTableHead>
                  <S.StyledTableRow active={false}>
                    <S.StyledTableCell align="left">#</S.StyledTableCell>
                    <S.StyledTableCell align="left">
                      {t("deidentify.analysisResults.table.columns.text")}
                    </S.StyledTableCell>
                    <S.StyledTableCell align="center">
                      {t("deidentify.analysisResults.table.columns.start")}
                    </S.StyledTableCell>
                    <S.StyledTableCell align="center">
                      {t("deidentify.analysisResults.table.columns.end")}
                    </S.StyledTableCell>
                    <S.StyledTableCell align="center">
                      {t("deidentify.analysisResults.table.columns.score")}
                    </S.StyledTableCell>
                    <S.StyledTableCell align="center">
                      {t("deidentify.analysisResults.table.columns.recognizer")}
                    </S.StyledTableCell>
                    <S.StyledTableCell align="center">
                      {t(
                        "deidentify.analysisResults.table.columns.patternName",
                      )}
                    </S.StyledTableCell>
                    <S.StyledTableCell align="center">
                      {t(
                        "deidentify.analysisResults.table.columns.decisionFactor",
                      )}
                    </S.StyledTableCell>
                    <S.StyledTableCell align="center">
                      {t(
                        "deidentify.analysisResults.table.columns.originalScore",
                      )}
                    </S.StyledTableCell>
                    <S.StyledTableCell align="center">
                      {t("deidentify.analysisResults.table.columns.action")}
                    </S.StyledTableCell>
                  </S.StyledTableRow>
                </S.StyledTableHead>
              </S.StyledTable>
            </S.StyledTableHeadContainer>
            <S.StyledTableContainer>
              <S.StyledTable size="small">
                <TableBody>
                  {frameworkEntities.map((entity, index) => {
                    const isActive = selectedEntityIds.has(entity.id);
                    return (
                      <S.StyledTableRow key={entity.id} active={isActive}>
                        <S.StyledTableCell align="left">
                          {" "}
                          <S.IndexText inactive={!isActive}>
                            {index + 1}
                          </S.IndexText>
                        </S.StyledTableCell>
                        <S.StyledTableCell align="left">
                          {entity.value}
                        </S.StyledTableCell>
                        <S.StyledTableCell align="center">
                          <S.NumericText inactive={!isActive}>
                            {entity.startIdx}
                          </S.NumericText>
                        </S.StyledTableCell>
                        <S.StyledTableCell align="center">
                          <S.NumericText inactive={!isActive}>
                            {entity.endIdx}
                          </S.NumericText>
                        </S.StyledTableCell>
                        <S.StyledTableCell align="center">
                          <S.ScoreBadge inactive={!isActive}>
                            {entity.score.toFixed(2)}
                          </S.ScoreBadge>
                        </S.StyledTableCell>
                        <S.StyledTableCell align="center">
                          <S.RecognizerChip
                            chipColor={
                              ENTITY_TYPE_CHIP_COLORS[
                                entity.type as EntityType
                              ] ?? DEFAULT_ENTITY_CHIP_COLOR
                            }
                            inactive={!isActive}
                          >
                            {entity.patternName}
                          </S.RecognizerChip>
                        </S.StyledTableCell>
                        <S.StyledTableCell align="center">
                          {entity.recognizer}
                        </S.StyledTableCell>
                        <S.StyledTableCell align="center">
                          <S.DecisionFactorBadge
                            level={entity.decisionFactor}
                            inactive={!isActive}
                          >
                            {entity.decisionFactor}
                          </S.DecisionFactorBadge>
                        </S.StyledTableCell>
                        <S.StyledTableCell align="center">
                          <S.NumericText inactive={!isActive}>
                            {entity.originalScore.toFixed(2)}
                          </S.NumericText>
                        </S.StyledTableCell>
                        <S.StyledTableCell align="center">
                          <S.ActionToggleButton
                            size="small"
                            active={isActive}
                            onClick={() => toggleEntitySelection(entity.id)}
                          >
                            {isActive
                              ? t(
                                  "deidentify.analysisResults.table.actions.selected",
                                )
                              : t(
                                  "deidentify.analysisResults.table.actions.deselected",
                                )}
                          </S.ActionToggleButton>
                        </S.StyledTableCell>
                      </S.StyledTableRow>
                    );
                  })}
                </TableBody>
              </S.StyledTable>
            </S.StyledTableContainer>
          </S.TableBlock>
        </S.TableSection>
        <S.TableActionsRow>
          <S.TableBackButton
            startIcon={<ArrowBackIcon />}
            onClick={onBack}
            disableRipple
          >
            {t("deidentify.stepper.actions.back")}
          </S.TableBackButton>
          <S.TableRestartButton
            endIcon={<RefreshIcon />}
            onClick={onRestart}
            disableRipple
          >
            {t("deidentify.stepper.actions.restart")}
          </S.TableRestartButton>
        </S.TableActionsRow>
      </S.AnalysisResultsContainer>

      <S.ResultCtaSection>
        <S.ResultCtaTextGroup>
          <S.ResultCtaTitle>
            {t("deidentify.analysisResults.cta.title")}
          </S.ResultCtaTitle>
          <S.ResultCtaSubtitle>
            {t("deidentify.analysisResults.cta.subtitle")}
          </S.ResultCtaSubtitle>
        </S.ResultCtaTextGroup>
        <S.ResultCtaButton endIcon={<ArrowForwardIcon />}>
          {t("deidentify.analysisResults.cta.button")}
        </S.ResultCtaButton>
      </S.ResultCtaSection>
    </S.AnalysisResultsWrapper>
  );
};

export default AnalysisResults;
