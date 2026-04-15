import { useEffect, useMemo, useState } from "react";
import type { ComplianceFramework } from "@/components/complianceSelect/constants";
import { previewAnonymization } from "@/common/api/deidentifyApi";
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

  const visibleEntities = useMemo(
    () => entities.filter((entity) => selectedEntityIds.has(entity.id)),
    [entities, selectedEntityIds],
  );

  const inputWithHighlights = useMemo(() => {
    return visibleEntities.sort((a, b) => a.startIdx - b.startIdx);
  }, [visibleEntities]);

  useEffect(() => {
    if (selectedEntityIds.size === 0) {
      setOutputText(inputText);
      return;
    }

    const fetchPreview = async (): Promise<void> => {
      try {
        setIsPreviewLoading(true);
        const response = await previewAnonymization({
          jobId,
          text: inputText,
          framework,
          activeIds: Array.from(selectedEntityIds),
        });
        setOutputText(response.anonymizedText);
      } catch {
        setOutputText(inputText);
      } finally {
        setIsPreviewLoading(false);
      }
    };

    void fetchPreview();
  }, [selectedEntityIds, jobId, inputText, framework]);

  const toggleEntitySelection = (entityId: string): void => {
    setSelectedEntityIds((prev) => {
      const next = new Set(prev);
      if (next.has(entityId)) {
        next.delete(entityId);
      } else {
        next.add(entityId);
      }
      return next;
    });
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
    toggleEntitySelection,
    selectAllEntities,
    deselectAllEntities,
  };
};
