import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ComplianceFramework } from "@/components/ComplianceSelect/constants";
import { previewAnonymization } from "@/common/api/deidentifyApi";
import type { PreviewLeakSummaryItem } from "@/common/api/deidentifyApiTypes";
import type { Entity } from "./constants";

interface UseAnalysisResultsProps {
  entities: Entity[];
  inputText: string;
  jobId: string;
  framework: ComplianceFramework;
}

interface UseAnalysisResultsReturn {
  visibleEntities: Entity[];
  selectedEntityIds: Set<string>;
  inputWithHighlights: Entity[];
  outputText: string;
  isPreviewLoading: boolean;
  previewLeakSummary: PreviewLeakSummaryItem[];
  triggerPreview: (activeIds: string[]) => Promise<void>;
  toggleEntitySelection: (entityId: string) => void;
  selectAllEntities: () => void;
  deselectAllEntities: () => void;
}

export const useAnalysisResults = ({
  entities,
  inputText,
  jobId,
  framework,
}: UseAnalysisResultsProps): UseAnalysisResultsReturn => {
  const [selectedEntityIds, setSelectedEntityIds] = useState<Set<string>>(
    new Set(entities.filter((e) => e.isSelected).map((e) => e.id)),
  );
  const [outputText, setOutputText] = useState<string>(inputText);
  const [isPreviewLoading, setIsPreviewLoading] = useState<boolean>(false);
  const [previewLeakSummary, setPreviewLeakSummary] = useState<
    PreviewLeakSummaryItem[]
  >([]);
  const latestRequestRef = useRef(0);
  const selectedEntityIdsRef = useRef(selectedEntityIds);

  const visibleEntities = useMemo(
    () => entities.filter((entity) => selectedEntityIds.has(entity.id)),
    [entities, selectedEntityIds],
  );

  const inputWithHighlights = useMemo(
    () => [...visibleEntities].sort((a, b) => a.startIdx - b.startIdx),
    [visibleEntities],
  );

  const triggerPreview = useCallback(
    async (activeIds: string[]): Promise<void> => {
      if (activeIds.length === 0) {
        setOutputText(inputText);
        setPreviewLeakSummary([]);
        return;
      }

      const requestId = ++latestRequestRef.current;
      setIsPreviewLoading(true);

      try {
        const response = await previewAnonymization({
          jobId,
          text: inputText,
          framework,
          activeIds,
          validationMode: "warn_only",
        });
        if (latestRequestRef.current === requestId) {
          setOutputText(response.anonymizedText);
          setPreviewLeakSummary(response.postValidation.summary);
          setIsPreviewLoading(false);
        }
      } catch {
        if (latestRequestRef.current === requestId) {
          setIsPreviewLoading(false);
        }
      }
    },
    [inputText, jobId, framework],
  );

  useEffect(() => {
    selectedEntityIdsRef.current = selectedEntityIds;
  }, [selectedEntityIds]);

  useEffect(() => {
    void triggerPreview(Array.from(selectedEntityIdsRef.current));
  }, [triggerPreview]);

  const toggleEntitySelection = (entityId: string): void => {
    const nextIds = new Set(selectedEntityIds);
    if (nextIds.has(entityId)) {
      nextIds.delete(entityId);
    } else {
      nextIds.add(entityId);
    }
    setSelectedEntityIds(nextIds);
  };

  const selectAllEntities = (): void => {
    setSelectedEntityIds(new Set(entities.map((e) => e.id)));
  };

  const deselectAllEntities = (): void => {
    setSelectedEntityIds(new Set());
  };

  return {
    visibleEntities,
    selectedEntityIds,
    inputWithHighlights,
    outputText,
    isPreviewLoading,
    previewLeakSummary,
    triggerPreview,
    toggleEntitySelection,
    selectAllEntities,
    deselectAllEntities,
  };
};
