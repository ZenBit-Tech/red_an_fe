import { useTranslation } from "react-i18next";
import { COMPLIANCE_FRAMEWORK_OPTIONS } from "@/components/ComplianceSelect/constants";
import type { ComplianceFramework } from "@/components/ComplianceSelect/constants";
import { useAppDispatch, useAppSelector } from "@/common/hooks/hooks";
import { setSelectedFramework } from "@/store/complianceFrameworkSlice";

interface LocalizedFrameworkOption {
  category: string;
  id: ComplianceFramework;
  label: string;
  description: string;
  entityCount?: number;
}

export function useComplianceSelection() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const selectedFramework = useAppSelector(
    (state) => state.complianceFramework.selectedFramework,
  );

  const frameworks: LocalizedFrameworkOption[] =
    COMPLIANCE_FRAMEWORK_OPTIONS.map((framework) => ({
      id: framework.id,
      label: t(framework.labelKey),
      category: t(framework.categoryKey),
      description: t(framework.descriptionKey),
      entityCount: framework.entityCount,
    }));

  const handleSelect = (id: ComplianceFramework) => {
    if (selectedFramework === id) {
      return;
    }

    dispatch(setSelectedFramework(id));
  };

  return {
    t,
    frameworks,
    selectedFramework,
    handleSelect,
  };
}
