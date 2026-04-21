import { Box, Chip, Paper, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

import type { ComplianceFramework } from "@/components/ComplianceSelect/constants";

const complianceSelectionStyles = {
  containerPadding: 5,
  containerPaddingTablet: 3,
  containerPaddingMobile: 2,
  cardPadding: 2.5,
  cardPaddingMobile: 2,
  borderWidth: 1,
  borderRadius: 2,
  cardGap: 1,
  cardGapMobile: 0.75,
  titleSpacing: 1,
  sectionGap: 6,
  sectionGapMobile: 3,
  listHeaderSpacing: 1,
  descriptionSpacing: 0.5,
  frameworkTitleFontSize: "0.875rem",
  frameworkTitleLineHeight: 1.45,
  entityCountFontSize: "0.75rem",
  cardHeightDesktop: 130,
  cardHeightMobile: 130,
  iconSize: 20,
  chipBorderRadius: 1,
  transitionDuration: "0.2s",
  selectedBackgroundOpacity: 0.08,
  selectedHoverOpacity: 0.08,
  containerRadius: 3,
} as const;

export const SelectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(complianceSelectionStyles.containerRadius),
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(complianceSelectionStyles.containerPadding),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(complianceSelectionStyles.containerPaddingTablet),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(complianceSelectionStyles.containerPaddingMobile),
  },
}));

export const SelectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize20}px`,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    fontSize: `${theme.typography.fontSize18}px`,
  },
}));

export const SelectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize16}px`,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(complianceSelectionStyles.titleSpacing),
  [theme.breakpoints.down("sm")]: {
    fontSize: `${theme.typography.fontSize14}px`,
  },
}));

export const SelectionListHeader = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize32}px`,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(complianceSelectionStyles.listHeaderSpacing),
  [theme.breakpoints.down("md")]: {
    fontSize: `${theme.typography.fontSize26}px`,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: `${theme.typography.fontSize18}px`,
  },
}));

export const SelectionListSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize16}px`,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(complianceSelectionStyles.sectionGap),
  [theme.breakpoints.down("sm")]: {
    fontSize: `${theme.typography.fontSize14}px`,
    marginBottom: theme.spacing(complianceSelectionStyles.sectionGapMobile),
  },
}));

export const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(complianceSelectionStyles.cardGap),
  marginBottom: theme.spacing(complianceSelectionStyles.cardGap),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(complianceSelectionStyles.cardGapMobile),
  },
}));

export const FrameworkDescription = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize14}px`,
  fontWeight: theme.typography.fontWeight700,
  lineHeight: complianceSelectionStyles.frameworkTitleLineHeight,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(complianceSelectionStyles.descriptionSpacing),
}));

export const FrameworkEntityCount = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.fontSize12}px`,
  fontWeight: theme.typography.fontWeight500,
  lineHeight: 1.5,
  color: theme.palette.text.disabled,
}));

export const FrameworkChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "frameworkId",
})<{ frameworkId: ComplianceFramework }>(({ theme, frameworkId }) => ({
  backgroundColor: theme.palette.compliance.frameworkChip[frameworkId],
  color: theme.palette.common.white,
  fontWeight: theme.typography.fontWeight500,
  fontSize: `${theme.typography.fontSize14}px`,
  borderRadius: theme.spacing(complianceSelectionStyles.chipBorderRadius),
}));

export const SelectionCard = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>(({ theme, selected }) => ({
  boxSizing: "border-box",
  padding: theme.spacing(complianceSelectionStyles.cardPadding),
  cursor: "pointer",
  borderRadius: theme.spacing(complianceSelectionStyles.borderRadius),
  border: `${complianceSelectionStyles.borderWidth}px solid ${selected ? theme.palette.primary.main : theme.palette.divider}`,
  backgroundColor: selected
    ? alpha(
        theme.palette.primary.main,
        complianceSelectionStyles.selectedBackgroundOpacity,
      )
    : theme.palette.background.paper,
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
    borderColor: theme.palette.primary.main,
    backgroundColor: selected
      ? alpha(
          theme.palette.primary.main,
          complianceSelectionStyles.selectedHoverOpacity,
        )
      : theme.palette.action.hover,
  },
}));

export const SelectedIconWrapper = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.spacing(complianceSelectionStyles.iconSize / 8),
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing((complianceSelectionStyles.iconSize - 2) / 8),
  },
}));
