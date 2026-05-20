import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useTranslation } from "react-i18next";

import { OUTPUT_EXPORT } from "@/components/AnalysisResults/constants";
import * as S from "@/components/AnalysisResults/styles";

interface DeidentifiedOutputPanelProps {
  outputText: string;
  isLoading?: boolean;
}

const REPLACEMENT_TOKEN_PATTERN = /\[[^\]]+\]/g;

const renderOutputWithHighlights = (outputText: string): React.ReactNode => {
  if (!outputText) {
    return outputText;
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

export const DeidentifiedOutputPanel: React.FC<
  DeidentifiedOutputPanelProps
> = ({ outputText, isLoading = false }) => {
  const { t } = useTranslation();
  const [copiedOutput, setCopiedOutput] = useState<boolean>(false);

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

  return (
    <S.ResultPanel>
      <S.PanelTitleRow>
        <S.PanelTitle>
          {t("deidentify.analysisResults.deidentifiedPanelTitle")}
        </S.PanelTitle>
        <S.AnonymizedBadge>
          {t("deidentify.analysisResults.anonymizedBadge")}
        </S.AnonymizedBadge>
      </S.PanelTitleRow>
      <S.PanelSurface>
        {isLoading ? (
          <S.OutputLoadingContainer>
            <CircularProgress size={24} />
          </S.OutputLoadingContainer>
        ) : (
          <S.TextContent>
            {renderOutputWithHighlights(outputText)}
          </S.TextContent>
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
  );
};
