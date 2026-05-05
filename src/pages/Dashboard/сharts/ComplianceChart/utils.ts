import { type Theme } from "@mui/material/styles";
import { type ComplianceFramework } from "@/types/dashboard";

export const getFrameworkColor = (
  theme: Theme,
  framework: ComplianceFramework,
) => {
  const map: Record<ComplianceFramework, string> = {
    HIPAA: theme.palette.secondaryColors[50],
    GDPR_UK: theme.palette.primaryColors[800],
    GDPR_EU: theme.palette.primaryColors[500],
  };

  return map[framework] || theme.palette.neutralColors[500];
};
