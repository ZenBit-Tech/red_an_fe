import { Box, Dialog, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDialog = styled(Dialog, {
  shouldForwardProp: (prop) => prop !== "isSuccess",
})<{ isSuccess?: boolean }>(({ theme, isSuccess }) => ({
  "& .MuiDialog-paper": {
    background: "#131b2e",
    backgroundImage: "none",
    borderRadius: theme.spacing(2),
    width: "100%",
    maxWidth: 480,
    paddingTop: isSuccess ? "89px" : theme.spacing(6),
    paddingLeft: isSuccess ? "45px" : theme.spacing(3.5),
    paddingRight: isSuccess ? "45px" : theme.spacing(3.5),
    paddingBottom: isSuccess ? "90px" : theme.spacing(10),
    margin: theme.spacing(4),
    border: "1px solid rgba(176, 198, 255, 0.8)",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 1,
      background:
        "linear-gradient(90deg, rgba(178, 197, 255, 0) 0%, rgba(178, 197, 255, 0.8) 50%, rgba(178, 197, 255, 0) 100%)",
      pointerEvents: "none",
      zIndex: 10,
    },
  },
  "& .MuiDialog-container": {
    alignItems: "center",
  },
  "& .MuiBackdrop-root": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
}));

export const ModalHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 24,
});

export const ModalTitle = styled(Typography)(({ theme }) => ({
  color: "#b2c5ff",
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight500,
  fontFamily: theme.typography.fontFamily,
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.textColors[200],
  padding: theme.spacing(1),
  "&:hover": {
    color: "#b2c5ff",
  },
}));

export const FormBody = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 28,
});

export const FieldWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 6,
});

export const FieldLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight600,
  letterSpacing: "0.08em",
  fontFamily: theme.typography.fontFamily,
  paddingLeft: 8,
}));

export const FieldError = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiaryColors[500],
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
  marginTop: 1,
  paddingLeft: 8,
}));

export const StyledInputBase = styled("input")(({ theme }) => ({
  width: "100%",
  backgroundColor: "rgba(51, 63, 90, 0.4)",
  border: `1px solid ${theme.palette.strokeColors[400]}`,
  borderRadius: theme.spacing(3),
  padding: "12px 16px",
  color: "#eff0ff",
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
  "&::placeholder": {
    color: "#bbc6c5",
  },
  "&:focus": {
    borderColor: theme.palette.primaryColors[200],
  },
  "&[data-error='true']": {
    borderColor: theme.palette.tertiaryColors[500],
  },
}));

export const DropdownWrapper = styled(Box)({
  position: "relative",
});

export const DropdownTrigger = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen" && prop !== "hasError",
})<{ isOpen?: boolean; hasError?: boolean }>(({ theme, isOpen, hasError }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "rgba(51, 63, 90, 0.4)",
  border: `1px solid ${hasError ? theme.palette.tertiaryColors[500] : isOpen ? theme.palette.primaryColors[200] : theme.palette.strokeColors[400]}`,
  borderRadius: theme.spacing(3),
  padding: "12px 16px",
  cursor: "pointer",
  userSelect: "none",
  transition: "border-color 0.2s",
  "&:hover": {
    borderColor: isOpen
      ? theme.palette.primaryColors[200]
      : hasError
        ? theme.palette.tertiaryColors[500]
        : theme.palette.neutralColors[400],
  },
}));

export const DropdownTriggerText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "hasValue",
})<{ hasValue?: boolean }>(({ theme }) => ({
  color: "#bbc6c5",
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
}));

export const DropdownList = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "calc(100% + 4px)",
  left: 0,
  right: 0,
  backgroundColor: theme.palette.neutralColors[800],
  border: `1px solid ${theme.palette.strokeColors[400]}`,
  borderRadius: theme.spacing(3),
  zIndex: 1300,
  overflow: "hidden",
  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
}));

export const DropdownItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
  padding: "4px 12px",
  cursor: "pointer",
  color: "#eff0ff",
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
  backgroundColor: isSelected ? "rgba(59, 130, 239, 0.8)" : "transparent",
  transition: "background-color 0.15s",
  "&:hover": {
    backgroundColor: theme.palette.strokeColors[120],
    color: theme.palette.textColors[50],
  },
}));

export const TextAreaWrapper = styled(Box)({
  position: "relative",
});

export const StyledTextArea = styled("textarea", {
  shouldForwardProp: (prop) => prop !== "hasError",
})<{ hasError?: boolean }>(({ theme, hasError }) => ({
  width: "100%",
  minHeight: 160,
  backgroundColor: "rgba(51, 63, 90, 0.4)",
  border: `1px solid ${hasError ? theme.palette.tertiaryColors[500] : theme.palette.strokeColors[400]}`,
  borderRadius: theme.spacing(3),
  padding: "8px 16px",
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
  outline: "none",
  resize: "none",
  boxSizing: "border-box",
  overflowY: "auto",
  scrollbarGutter: "stable",
  scrollbarWidth: "auto",
  scrollbarColor: `${theme.palette.strokeColors[400]} transparent`,
  transition: "border-color 0.2s",
  "&::placeholder": {
    color: theme.palette.neutralColors[400],
  },
  "&:focus": {
    borderColor: hasError
      ? theme.palette.tertiaryColors[500]
      : theme.palette.primaryColors[200],
  },
  "&::-webkit-scrollbar": {
    width: theme.spacing(2.5),
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
    marginBottom: theme.spacing(1),
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.strokeColors[400],
    borderRadius: theme.spacing(2),
    border: "2px solid transparent",
    backgroundClip: "content-box",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "rgba(176, 198, 255, 0.45)",
  },
}));

export const PaperclipButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  bottom: 8,
  right: 8,
  color: theme.palette.textColors[200],
  padding: theme.spacing(1),
  "&:hover": {
    color: theme.palette.primaryColors[200],
    backgroundColor: theme.palette.strokeColors[120],
  },
}));

export const AttachmentChip = styled(Box)({
  position: "absolute",
  bottom: 10,
  left: 12,
  display: "flex",
  alignItems: "center",
  gap: 6,
  maxWidth: "calc(100% - 56px)",
});

export const AttachmentFileIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  "& svg": {
    fontSize: 18,
    color: "#b0c6ff",
  },
});

export const AttachmentFileName = styled(Typography)(({ theme }) => ({
  flex: 1,
  color: "#b0c6ff",
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight500,
  fontFamily: theme.typography.fontFamily,
  lineHeight: "143%",
  wordBreak: "break-all",
}));

export const RemoveFileButton = styled(IconButton)({
  padding: 2,
  color: "#b0c6ff",
  "& svg": { fontSize: 16 },
  "&:hover": { color: "#b2c5ff", backgroundColor: "transparent" },
});

export const HiddenFileInput = styled("input")({
  display: "none",
});

export const SendButton = styled("button")(({ theme }) => ({
  width: "180px",
  height: "40px",
  padding: "8px 40px",
  backgroundColor: "#b0c6ff",
  color: "#2d3449",
  border: "1px solid rgba(67, 70, 82, 0.15)",
  borderRadius: 8,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.fontFamily,
  textAlign: "center",
  cursor: "pointer",
  display: "block",
  margin: "8px auto 0",
  marginTop: "24px",
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: "#a2c3f7",
  },
  "&:active": {
    backgroundColor: "#9cabd3",
  },
  "&:disabled": {
    backgroundColor: "rgba(176, 198, 255, 0.3)",
    color: "#2d3449",
    cursor: "not-allowed",
  },
}));

export const SuccessContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 0 24px",
  gap: 0,
  textAlign: "center",
});

export const SuccessIconCircle = styled(Box)({
  width: 60,
  height: 60,
  borderRadius: "50%",
  backgroundColor: "#b0c6ff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 32,
  "& svg": {
    fontSize: 50,
    color: "#131b2e",
  },
});

export const SuccessTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize24,
  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.fontFamily,
  marginBottom: 12,
}));

export const SuccessSubtitle = styled(Typography)(({ theme }) => ({
  color: "#c3c6d4",
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
}));
