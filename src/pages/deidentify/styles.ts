import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const deidentifyPageStyles = {
  minHeight: "100vh",
  paddingY: 6,
  paddingX: 3,
  paddingYMobile: 2,
  paddingXMobile: 1,
  maxContentWidth: 1560,
} as const;

export const DeidentifyPageWrapper = styled(Box)(({ theme }) => ({
  minHeight: deidentifyPageStyles.minHeight,
  boxSizing: "border-box",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(
    deidentifyPageStyles.paddingY,
    deidentifyPageStyles.paddingX,
  ),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(
      deidentifyPageStyles.paddingYMobile,
      deidentifyPageStyles.paddingXMobile,
    ),
  },
}));

export const DeidentifyPageContent = styled(Box)({
  width: "100%",
  maxWidth: deidentifyPageStyles.maxContentWidth,
  boxSizing: "border-box",
  margin: "0 auto",
});

export const DeidentifyPageSections = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));
