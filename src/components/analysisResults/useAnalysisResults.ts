import { useMemo, useState } from "react";
import type { Entity } from "./constants";

interface UseAnalysisResultsProps {
  entities: Entity[];
  inputText: string;
}

interface UseAnalysisResultsReturn {
  visibleEntities: Entity[];
  selectedEntityIds: Set<string>;
  inputWithHighlights: Entity[];
  outputText: string;
  toggleEntitySelection: (entityId: string) => void;
  selectAllEntities: () => void;
  deselectAllEntities: () => void;
}

export const useAnalysisResults = ({
  entities,
  inputText,
}: UseAnalysisResultsProps): UseAnalysisResultsReturn => {
  const [selectedEntityIds, setSelectedEntityIds] = useState<Set<string>>(
    new Set(entities.filter((e) => e.isSelected).map((e) => e.id)),
  );

  const visibleEntities = useMemo(
    () => entities.filter((entity) => selectedEntityIds.has(entity.id)),
    [entities, selectedEntityIds],
  );

  const inputWithHighlights = useMemo(() => {
    return visibleEntities.sort((a, b) => a.startIdx - b.startIdx);
  }, [visibleEntities]);

  const outputText = useMemo(() => {
    if (!inputText || selectedEntityIds.size === 0) {
      return inputText;
    }

    let result = inputText;
    const sortedEntities = [...inputWithHighlights].sort(
      (a, b) => b.startIdx - a.startIdx,
    );

    for (const entity of sortedEntities) {
      const before = result.substring(0, entity.startIdx);
      const after = result.substring(entity.endIdx);
      result = before + entity.replacement + after;
    }

    return result;
  }, [inputText, inputWithHighlights, selectedEntityIds]);

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
    toggleEntitySelection,
    selectAllEntities,
    deselectAllEntities,
  };
};
