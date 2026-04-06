import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

import { ComplianceFrameworkSelection } from "@/components/complianceSelect/ComplianceFrameworkSelection";
import { ClinicalTextInput } from "@/components/clinicalInput";
import { DeidentifySettings } from "@/components/deidentify";
import { AnalysisResults } from "@/components/analysisResults";
import { useAppSelector } from "@/common/hooks/hooks";
import {
  DeidentifyPageSections,
  DeidentifyPageContent,
  DeidentifyPageWrapper,
} from "@/pages/deidentify/styles";

const DeidentifyPage = () => {
  const [isAnalysisVisible, setIsAnalysisVisible] = useState(false);
  const [analysisRunId, setAnalysisRunId] = useState(0);
  const [analyzedInputText, setAnalyzedInputText] = useState("");
  const analysisResultsRef = useRef<HTMLDivElement | null>(null);
  const clinicalText = useAppSelector(
    (state) => state.clinicalInput.clinicalText,
  );

  useEffect(() => {
    if (!isAnalysisVisible || analysisRunId === 0) {
      return;
    }

    requestAnimationFrame(() => {
      analysisResultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [analysisRunId, isAnalysisVisible]);

  const handleAnalyzeSettings = async (): Promise<void> => {
    setAnalyzedInputText(clinicalText);
    setAnalysisRunId((prevRunId) => prevRunId + 1);
    setIsAnalysisVisible(true);

    return Promise.resolve();
  };

  return (
    <DeidentifyPageWrapper>
      <DeidentifyPageContent>
        <DeidentifyPageSections>
          <ComplianceFrameworkSelection />
          <DeidentifySettings onAnalyze={handleAnalyzeSettings} />
          <ClinicalTextInput />
          {isAnalysisVisible && analysisRunId > 0 && (
            <Box ref={analysisResultsRef}>
              <AnalysisResults
                key={analysisRunId}
                inputText={analyzedInputText}
              />
            </Box>
          )}
        </DeidentifyPageSections>
      </DeidentifyPageContent>
    </DeidentifyPageWrapper>
  );
};

export default DeidentifyPage;
