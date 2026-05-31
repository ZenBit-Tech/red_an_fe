import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Alert,
  CircularProgress,
  TableBody,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import {
  COMPLIANCE_FRAMEWORK_ENTITY_TYPES,
  COMPLIANCE_FRAMEWORK,
  COMPLIANCE_FRAMEWORK_OPTIONS,
} from "@/components/ComplianceSelect/constants";
import * as S from "@/components/AnalysisResults/styles";
import {
  DEFAULT_ENTITY_CHIP_COLOR,
  ENTITY_TYPE_CHIP_COLORS,
  OUTPUT_EXPORT,
  type AnalysisResultsProps,
  type EntityType,
} from "@/components/AnalysisResults/constants";
import { DeidentifiedOutputPanel } from "@/components/DeidentifiedOutputPanel";
import { useAppDispatch, useAppSelector } from "@/common/hooks/hooks";
import { APP_ROUTES } from "@/constants";
import { useAnalysisResults } from "@/components/AnalysisResults/useAnalysisResults";
import { usePersistEntityStatusesMutation } from "@/common/api/syntheticApi";
import { setLastDeidentifiedResult } from "@/store/lastDeidentifiedResultSlice";

const ENTITY_STATUS_PERSIST_DEBOUNCE_MS = 1000;
const VISIBILITY_STATE_HIDDEN = "hidden";
const REPLACEMENT_TOKEN_PATTERN = /\[[^\]]+\]/g;

const renderOutputWithHighlights = (text: string): React.ReactNode => {
  if (!text) return text;
  const segments: React.ReactNode[] = [];
  let lastIdx = 0;
  let match: RegExpExecArray | null;
  REPLACEMENT_TOKEN_PATTERN.lastIndex = 0;
  while ((match = REPLACEMENT_TOKEN_PATTERN.exec(text)) !== null) {
    if (lastIdx < match.index)
      segments.push(text.substring(lastIdx, match.index));
    segments.push(
      <S.OutputHighlightedToken key={`token-${match.index}`}>
        {match[0]}
      </S.OutputHighlightedToken>,
    );
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < text.length) segments.push(text.substring(lastIdx));
  return segments;
};

const AnalysisResults: React.FC<AnalysisResultsProps> = ({
  inputText,
  entities,
  jobId,
  onBack,
  onRestart,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const [activeTab, setActiveTab] = useState(0);
  const [copiedOutput, setCopiedOutput] = useState(false);
  const [tableAtRightEnd, setTableAtRightEnd] = useState(false);
  const [tableScrollWidth, setTableScrollWidth] = useState(0);
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const extScrollRef = useRef<HTMLDivElement>(null);
  const [persistEntityStatuses, { isLoading: isPersistingStatuses }] =
    usePersistEntityStatusesMutation();
  const [lastPersistedActiveEntityIds, setLastPersistedActiveEntityIds] =
    useState<string[]>([]);
  const [hasPersistedStatuses, setHasPersistedStatuses] =
    useState<boolean>(false);
  const [persistErrorKey, setPersistErrorKey] = useState<string>("");
  const selectedFramework = useAppSelector(
    (state) => state.complianceFramework.selectedFramework,
  );
  const lastDeidentifiedResult = useAppSelector(
    (state) => state.lastDeidentifiedResult,
  );

  const frameworkEntities = useMemo(() => {
    const allowedEntityTypes =
      COMPLIANCE_FRAMEWORK_ENTITY_TYPES[selectedFramework] ??
      COMPLIANCE_FRAMEWORK_ENTITY_TYPES[COMPLIANCE_FRAMEWORK.HIPAA];

    return entities.filter((entity) =>
      allowedEntityTypes.includes(entity.type),
    );
  }, [entities, selectedFramework]);

  useEffect(() => {
    if (!isTablet) return;
    const el = tableWrapperRef.current;
    if (!el) return;
    const update = () => setTableScrollWidth(el.scrollWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isTablet, frameworkEntities]);

  const handleTableScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const gap = el.scrollWidth - el.scrollLeft - el.clientWidth;
    setTableAtRightEnd((prev) => {
      if (!prev && gap <= 4) return true;
      if (prev && gap > 14) return false;
      return prev;
    });
    if (extScrollRef.current) extScrollRef.current.scrollLeft = el.scrollLeft;
  };

  const handleExtScroll = () => {
    if (extScrollRef.current && tableWrapperRef.current)
      tableWrapperRef.current.scrollLeft = extScrollRef.current.scrollLeft;
  };

  const {
    selectedEntityIds,
    inputWithHighlights,
    outputText,
    isPreviewLoading,
    previewLeakSummary,
    triggerPreview,
    toggleEntitySelection,
  } = useAnalysisResults({
    entities: frameworkEntities,
    inputText,
    jobId,
    framework: selectedFramework,
  });

  const currentActiveEntityIds = useMemo(
    () => Array.from(selectedEntityIds).sort(),
    [selectedEntityIds],
  );

  const isSelectionDirty = useMemo(() => {
    if (!hasPersistedStatuses) {
      return true;
    }

    if (currentActiveEntityIds.length !== lastPersistedActiveEntityIds.length) {
      return true;
    }

    return currentActiveEntityIds.some(
      (id, index) => id !== lastPersistedActiveEntityIds[index],
    );
  }, [
    currentActiveEntityIds,
    hasPersistedStatuses,
    lastPersistedActiveEntityIds,
  ]);

  const persistSelectedEntitiesStatuses = useCallback(
    async (activeEntityIds: string[]): Promise<boolean> => {
      if (!jobId.trim()) {
        setPersistErrorKey("deidentify.analysisResults.cta.persistFailed");
        return false;
      }

      try {
        await persistEntityStatuses({
          jobId,
          activeEntityIds,
        }).unwrap();

        setLastPersistedActiveEntityIds([...activeEntityIds]);
        setHasPersistedStatuses(true);
        setPersistErrorKey("");
        return true;
      } catch {
        setPersistErrorKey("deidentify.analysisResults.cta.persistFailed");
        return false;
      }
    },
    [jobId, persistEntityStatuses],
  );

  useEffect(() => {
    if (!jobId.trim() || !isSelectionDirty) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      void persistSelectedEntitiesStatuses(currentActiveEntityIds);
    }, ENTITY_STATUS_PERSIST_DEBOUNCE_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [
    currentActiveEntityIds,
    isSelectionDirty,
    jobId,
    persistSelectedEntitiesStatuses,
  ]);

  useEffect(() => {
    const persistIfNeeded = (): void => {
      if (!jobId.trim() || !isSelectionDirty || isPersistingStatuses) {
        return;
      }

      void persistSelectedEntitiesStatuses(currentActiveEntityIds);
    };

    const handleBeforeUnload = (): void => {
      persistIfNeeded();
    };

    const handleVisibilityChange = (): void => {
      if (document.visibilityState === VISIBILITY_STATE_HIDDEN) {
        persistIfNeeded();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [
    currentActiveEntityIds,
    isPersistingStatuses,
    isSelectionDirty,
    jobId,
    persistSelectedEntitiesStatuses,
  ]);

  const handleToggleEntity = useCallback(
    async (entityId: string): Promise<void> => {
      const nextIds = new Set(selectedEntityIds);
      if (nextIds.has(entityId)) {
        nextIds.delete(entityId);
      } else {
        nextIds.add(entityId);
      }
      const sortedNextIds = Array.from(nextIds).sort();
      toggleEntitySelection(entityId);
      await persistSelectedEntitiesStatuses(sortedNextIds);
      void triggerPreview(sortedNextIds);
    },
    [
      selectedEntityIds,
      toggleEntitySelection,
      persistSelectedEntitiesStatuses,
      triggerPreview,
    ],
  );

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
      const blob = new Blob([outputText], {
        type: OUTPUT_EXPORT.TXT_MIME_TYPE,
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${OUTPUT_EXPORT.FILE_NAME_BASE}${OUTPUT_EXPORT.TXT_EXTENSION}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      return;
    }
  };

  const handleNavigateToSynthetic = useCallback(async (): Promise<void> => {
    const hasSourceData = Boolean(
      lastDeidentifiedResult.jobId?.trim() &&
      lastDeidentifiedResult.originalInputText?.trim(),
    );

    if (!hasSourceData) {
      return;
    }

    if (isSelectionDirty) {
      const isPersisted = await persistSelectedEntitiesStatuses(
        currentActiveEntityIds,
      );

      if (!isPersisted) {
        return;
      }
    }

    navigate(APP_ROUTES.SYNTHETIC_DATA);
  }, [
    currentActiveEntityIds,
    isSelectionDirty,
    lastDeidentifiedResult.jobId,
    lastDeidentifiedResult.originalInputText,
    navigate,
    persistSelectedEntitiesStatuses,
  ]);

  useEffect(() => {
    dispatch(
      setLastDeidentifiedResult({
        originalInputText: inputText,
        anonymizedOutputText: outputText,
        jobId,
        activeEntityIds: Array.from(selectedEntityIds),
        activeEntityTypes: Array.from(
          new Set(
            frameworkEntities
              .filter((entity) => selectedEntityIds.has(entity.id))
              .map((entity) => entity.type),
          ),
        ),
        framework: selectedFramework,
        updatedAt: new Date().toISOString(),
      }),
    );
  }, [
    dispatch,
    frameworkEntities,
    inputText,
    jobId,
    outputText,
    selectedEntityIds,
    selectedFramework,
  ]);

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
        <S.AnalysisPageTitleRow>
          <S.AnalysisPageTitle>
            {t("deidentify.analysisResults.titlePart1")}{" "}
            <S.AnalysisPageTitleHighlight>
              {t("deidentify.analysisResults.titleHighlight")}
            </S.AnalysisPageTitleHighlight>
          </S.AnalysisPageTitle>
          <S.FrameworkBadge>
            <S.FrameworkBadgeLabel>
              {t("deidentify.transformation.frameworkLabel")}
            </S.FrameworkBadgeLabel>{" "}
            {t(
              COMPLIANCE_FRAMEWORK_OPTIONS.find(
                (o) => o.id === selectedFramework,
              )?.labelKey ?? selectedFramework,
            )}
          </S.FrameworkBadge>
        </S.AnalysisPageTitleRow>
        <S.AnalysisPageSubtitle>
          {t("deidentify.analysisResults.subtitle1")}
        </S.AnalysisPageSubtitle>
        <S.AnalysisPageSubtitle>
          {t("deidentify.analysisResults.subtitle2")}
        </S.AnalysisPageSubtitle>
      </S.AnalysisPageHeader>

      <S.AnalysisResultsContainer>
        {isTablet ? (
          <S.TabletPanelCard isOutputTab={activeTab === 1}>
            <S.TabHeaderRow>
              <S.TabTrigger
                active={activeTab === 0}
                variant="restricted"
                onClick={() => setActiveTab(0)}
              >
                {t("deidentify.analysisResults.panelTitle")}
                <S.TabBadge active={activeTab === 0} variant="restricted">
                  {t("deidentify.analysisResults.restrictedBadge")}
                </S.TabBadge>
              </S.TabTrigger>
              <S.TabTrigger
                active={activeTab === 1}
                variant="anonymized"
                onClick={() => setActiveTab(1)}
              >
                {t("deidentify.analysisResults.deidentifiedPanelTitle")}
                <S.TabBadge active={activeTab === 1} variant="anonymized">
                  {t("deidentify.analysisResults.anonymizedBadge")}
                </S.TabBadge>
              </S.TabTrigger>
            </S.TabHeaderRow>
            {activeTab === 0 && (
              <S.TabPanelContent>
                <S.TextContent>{renderInputWithHighlights()}</S.TextContent>
              </S.TabPanelContent>
            )}
            {activeTab === 1 && (
              <S.TabPanelContentOutput>
                {isPreviewLoading ? (
                  <S.OutputLoadingContainer>
                    <CircularProgress size={24} />
                  </S.OutputLoadingContainer>
                ) : (
                  <S.TextContent>
                    {renderOutputWithHighlights(outputText || inputText)}
                  </S.TextContent>
                )}
                <S.PanelActions>
                  <S.PanelActionButton
                    size="small"
                    startIcon={<ContentCopyIcon />}
                    onClick={() => void handleCopyOutput()}
                  >
                    {copiedOutput
                      ? t("deidentify.analysisResults.output.actions.copied")
                      : t("deidentify.analysisResults.output.actions.copy")}
                  </S.PanelActionButton>
                  <S.PanelActionButton
                    size="small"
                    startIcon={<DownloadOutlinedIcon />}
                    onClick={handleDownloadOutput}
                  >
                    {t("deidentify.analysisResults.output.actions.download")}
                  </S.PanelActionButton>
                </S.PanelActions>
              </S.TabPanelContentOutput>
            )}
          </S.TabletPanelCard>
        ) : (
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
            <DeidentifiedOutputPanel
              outputText={outputText || inputText}
              isLoading={isPreviewLoading}
            />
          </S.PanelsContainer>
        )}
        {previewLeakSummary.length > 0 && (
          <Alert severity="warning">
            {t("deidentify.analysisResults.output.phiLeakWarning.description")}{" "}
            {previewLeakSummary
              .map((item) => `${item.type} (${item.count})`)
              .join(", ")}
          </Alert>
        )}
        <S.TableSection>
          <S.TableBlock>
            {" "}
            <S.TableContainerHeader>
              {" "}
              <S.TableContainerTitle>
                {t("deidentify.analysisResults.table.title")}
              </S.TableContainerTitle>
            </S.TableContainerHeader>
            {isTablet ? (
              <>
                <S.TabletTableWrapper
                  ref={tableWrapperRef}
                  atRightEnd={tableAtRightEnd}
                  onScroll={handleTableScroll}
                >
                  <S.StyledTable size="small" stickyHeader>
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
                          {t(
                            "deidentify.analysisResults.table.columns.recognizer",
                          )}
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
                    <TableBody>
                      {frameworkEntities.map((entity, index) => {
                        const isActive = selectedEntityIds.has(entity.id);
                        return (
                          <S.StyledTableRow key={entity.id} active={isActive}>
                            <S.StyledTableCell align="left">
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
                                onClick={() =>
                                  void handleToggleEntity(entity.id)
                                }
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
                </S.TabletTableWrapper>
                <S.TabletHScrollTrack
                  ref={extScrollRef}
                  onScroll={handleExtScroll}
                >
                  <S.TabletHScrollInner sx={{ width: tableScrollWidth }} />
                </S.TabletHScrollTrack>
              </>
            ) : (
              <>
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
                          {t(
                            "deidentify.analysisResults.table.columns.recognizer",
                          )}
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
                                onClick={() =>
                                  void handleToggleEntity(entity.id)
                                }
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
              </>
            )}
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
          {isPersistingStatuses && (
            <S.ResultCtaSubtitle>
              {t("deidentify.analysisResults.cta.persisting")}
            </S.ResultCtaSubtitle>
          )}
          {!!persistErrorKey && (
            <S.ResultCtaSubtitle>{t(persistErrorKey)}</S.ResultCtaSubtitle>
          )}
        </S.ResultCtaTextGroup>
        <S.ResultCtaButton
          endIcon={<ArrowForwardIcon />}
          onClick={() => {
            void handleNavigateToSynthetic();
          }}
          disabled={
            !lastDeidentifiedResult.jobId?.trim() ||
            !lastDeidentifiedResult.originalInputText?.trim() ||
            isPersistingStatuses
          }
        >
          {isPersistingStatuses
            ? t("deidentify.analysisResults.cta.persistingButton")
            : t("deidentify.analysisResults.cta.button")}
        </S.ResultCtaButton>
      </S.ResultCtaSection>
    </S.AnalysisResultsWrapper>
  );
};

export default AnalysisResults;
