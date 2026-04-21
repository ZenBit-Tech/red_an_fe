import { Box, Chip, Paper, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

import type { ComplianceFramework } from "@/components/ComplianceSelect/constants";

const complianceSelectionStyles = {
  containerMaxWidth: 960,
  containerPadding: 6,
  containerPaddingTablet: 4,
  containerPaddingMobile: 3,
  cardPadding: 3,
  cardPaddingMobile: 2.5,
  borderWidth: 1,
  borderRadius: 2,
  cardGap: 1.25,
  cardGapMobile: 1,
  titleSpacing: 1,
  listHeaderSpacing: 1.5,
  sectionGap: 5,
  sectionGapMobile: 3,
  descriptionSpacing: 0.5,
  cardHeightDesktop: 150,
  cardHeightMobile: 140,
  iconSize: 20,
  chipBorderRadius: 1,
  transitionDuration: "0.2s",
  selectedBackgroundOpacity: 0.12,
  selectedHoverOpacity: 0.16,
  containerRadius: 3,
} as const;

export const SelectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: complianceSelectionStyles.containerMaxWidth,
  marginInline: "auto",
  boxSizing: "border-box",
  border: `1px solid ${theme.palette.neutralColors[800]}`,
  borderRadius: theme.spacing(complianceSelectionStyles.containerRadius),
  backgroundColor: theme.palette.secondaryColors[900],
  padding: theme.spacing(complianceSelectionStyles.containerPadding),
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(complianceSelectionStyles.containerPaddingTablet),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(complianceSelectionStyles.containerPaddingMobile),
  },
}));

export const SelectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize24,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize20,
  },
}));

export const SelectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.neutralColors[300],
  marginBottom: theme.spacing(complianceSelectionStyles.sectionGap),
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize14,
    marginBottom: theme.spacing(complianceSelectionStyles.sectionGapMobile),
  },
}));

export const SelectionListHeader = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],
  marginBottom: theme.spacing(complianceSelectionStyles.listHeaderSpacing / 2),
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize18,
  },
}));

export const SelectionListSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.neutralColors[300],
  marginBottom: theme.spacing(complianceSelectionStyles.sectionGap),
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize12,
    marginBottom: theme.spacing(complianceSelectionStyles.sectionGapMobile),
  },
}));

export const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(complianceSelectionStyles.cardGap),
  marginBottom: theme.spacing(complianceSelectionStyles.cardGap),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(complianceSelectionStyles.cardGapMobile),
  },
}));

export const FrameworkDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight600,
  lineHeight: 1.45,
  color: theme.palette.textColors[50],
  marginBottom: theme.spacing(complianceSelectionStyles.descriptionSpacing),
  textAlign: "left",
}));

export const FrameworkEntityCount = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight500,
  lineHeight: 1.5,
  color: theme.palette.neutralColors[300],
  textAlign: "left",
}));

export const FrameworkChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "frameworkId",
})<{ frameworkId: ComplianceFramework }>(({ theme, frameworkId }) => ({
  backgroundColor: theme.palette.compliance.frameworkChip[frameworkId],
  color: theme.palette.textColors[50],
  fontWeight: theme.typography.fontWeight600,
  fontSize: theme.typography.fontSize12,
  borderRadius: theme.spacing(complianceSelectionStyles.chipBorderRadius),
  height: 24,
}));

export const SelectionCard = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>(({ theme, selected }) => ({
  boxSizing: "border-box",
  padding: theme.spacing(complianceSelectionStyles.cardPadding),
  cursor: "pointer",
  textAlign: "left",
  borderRadius: theme.spacing(complianceSelectionStyles.borderRadius),
  border: `${complianceSelectionStyles.borderWidth}px solid ${
    selected
      ? theme.palette.primaryColors[400]
      : theme.palette.neutralColors[800]
  }`,
  backgroundColor: selected
    ? alpha(
        theme.palette.primaryColors[500],
        complianceSelectionStyles.selectedBackgroundOpacity,
      )
    : theme.palette.neutralColors[900],
  transition: `all ${complianceSelectionStyles.transitionDuration} ease-in-out`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: complianceSelectionStyles.cardHeightDesktop,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(complianceSelectionStyles.cardPaddingMobile),
    minHeight: complianceSelectionStyles.cardHeightMobile,
  },
  "&:hover": {
    borderColor: theme.palette.primaryColors[400],
    backgroundColor: selected
      ? alpha(
          theme.palette.primaryColors[500],
          complianceSelectionStyles.selectedHoverOpacity,
        )
      : theme.palette.neutralColors[800],
  },
}));

export const SelectedIconWrapper = styled(Box)(({ theme }) => ({
  width: 24,
  height: 24,
  borderRadius: "50%",
  backgroundColor: theme.palette.primaryColors[500],
  color: theme.palette.textColors[50],
  fontSize: theme.spacing(complianceSelectionStyles.iconSize / 8),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  [theme.breakpoints.down("sm")]: {
    width: 20,
    height: 20,
    fontSize: theme.spacing((complianceSelectionStyles.iconSize - 2) / 8),
  },
}));
