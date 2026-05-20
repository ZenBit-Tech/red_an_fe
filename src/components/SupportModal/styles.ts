import { Box, Dialog, IconButton, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
const COLORS = {
  DIALOG_BORDER: "1px solid rgba(176, 198, 255, 0.8)",
  DIALOG_BACKGROUND:
    "linear-gradient(90deg, rgba(178, 197, 255, 0) 0%, rgba(178, 197, 255, 0.8) 50%, rgba(178, 197, 255, 0) 100%)",
  BACK_GLOW: "rgba(0, 0, 0, 0.7)",
  BOX_SHADOW: "0 8px 24px rgba(0,0,0,0.4)",
  ITEM_SELECTED: "rgba(59, 130, 239, 0.8)",
  COLOR_SCROLLBAR: "rgba(176, 198, 255, 0.45)",
};
export const StyledDialog = styled(Dialog, {
  shouldForwardProp: (prop) => prop !== "isSuccess",
})<{ isSuccess?: boolean }>(({ theme, isSuccess }) => ({
  "& .MuiDialog-paper": {
    background: theme.palette.neutralColors[900],
    backgroundImage: "none",
    borderRadius: theme.spacing(2),
    width: "100%",
    maxWidth: theme.spacing(120),
    paddingTop: isSuccess ? theme.spacing(22.25) : theme.spacing(6),
    paddingLeft: isSuccess ? theme.spacing(11.25) : theme.spacing(3.5),
    paddingRight: isSuccess ? theme.spacing(11.25) : theme.spacing(3.5),
    paddingBottom: isSuccess ? theme.spacing(22.5) : theme.spacing(10),
    margin: theme.spacing(4),
    border: COLORS.DIALOG_BORDER,
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 1,
      background: COLORS.DIALOG_BACKGROUND,
      pointerEvents: "none",
      zIndex: 10,
    },
  },
  "& .MuiDialog-container": {
    alignItems: "center",
  },
  "& .MuiBackdrop-root": {
    backgroundColor: COLORS.BACK_GLOW,
  },
}));

export const ModalHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(6),
}));

export const ModalTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[400],
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight500,
  fontFamily: theme.typography.fontFamily,
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.textColors[200],
  padding: theme.spacing(1),
  "&:hover": {
    color: theme.palette.textColors[400],
  },
}));

export const FormBody = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(12),
}));

export const FieldWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
}));

export const FieldLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeight600,
  fontFamily: theme.typography.fontFamily,
  paddingLeft: theme.spacing(2),
}));

export const FieldError = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiaryColors[500],
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
  marginTop: theme.spacing(0.25),
  paddingLeft: theme.spacing(2),
}));

export const StyledInputBase = styled("input")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.strokeColors[400],
  border: `1px solid ${theme.palette.strokeColors[400]}`,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(3, 4),
  color: theme.palette.secondaryColors[50],
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
  "&::placeholder": {
    color: theme.palette.textColors[300],
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
  backgroundColor: theme.palette.strokeColors[400],
  border: `1px solid ${hasError ? theme.palette.tertiaryColors[500] : isOpen ? theme.palette.primaryColors[200] : theme.palette.strokeColors[400]}`,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(3, 4),
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
  color: theme.palette.textColors[300],
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
  boxShadow: COLORS.BOX_SHADOW,
}));

export const DropdownItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
  padding: theme.spacing(1, 3),
  cursor: "pointer",
  color: theme.palette.secondaryColors[50],
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
  backgroundColor: isSelected ? COLORS.ITEM_SELECTED : "transparent",
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
  backgroundColor: theme.palette.strokeColors[400],
  border: `1px solid ${hasError ? theme.palette.tertiaryColors[500] : theme.palette.strokeColors[400]}`,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(2, 4),
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
    backgroundColor: COLORS.COLOR_SCROLLBAR,
  },
}));

export const PaperclipButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  color: theme.palette.textColors[200],
  padding: theme.spacing(1),
  "&:hover": {
    color: theme.palette.primaryColors[200],
    backgroundColor: theme.palette.strokeColors[120],
  },
}));

export const AttachmentChip = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(2.5),
  left: theme.spacing(3),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2.5),
  maxWidth: "calc(100% - 56px)",
}));

export const AttachmentFileIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& svg": {
    fontSize: theme.spacing(4.5),
    color: theme.palette.primaryColors[200],
  },
}));

export const AttachmentFileName = styled(Typography)(({ theme }) => ({
  flex: 1,
  color: theme.palette.primaryColors[200],
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight500,
  fontFamily: theme.typography.fontFamily,
  wordBreak: "break-all",
}));

export const RemoveFileButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0.5),
  color: theme.palette.primaryColors[200],
  "& svg": { fontSize: theme.typography.fontSize16 },
  "&:hover": {
    color: theme.palette.textColors[400],
    backgroundColor: "transparent",
  },
}));

export const HiddenFileInput = styled("input")({
  display: "none",
});

export const SendButton = styled("button")(({ theme }) => ({
  width: theme.spacing(45),
  height: theme.spacing(10),
  padding: theme.spacing(2, 10),
  backgroundColor: theme.palette.primaryColors[200],
  color: theme.palette.neutralColors[700],
  border: `1px solid ${theme.palette.strokeColors[150]}`,
  borderRadius: theme.spacing(2),
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.fontFamily,
  textAlign: "center",
  cursor: "pointer",
  display: "block",
  marginTop: theme.spacing(6),
  marginLeft: "auto",
  marginRight: "auto",
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: theme.palette.primaryColors[300],
  },
  "&:active": {
    backgroundColor: theme.palette.secondaryColors[200],
  },
  "&:disabled": {
    backgroundColor: alpha(theme.palette.primaryColors[200], 0.3),
    color: theme.palette.neutralColors[700],
    cursor: "not-allowed",
  },
}));

export const SuccessContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(10, 0, 6),
  gap: 0,
  textAlign: "center",
}));

export const SuccessIconCircle = styled(Box)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  borderRadius: "50%",
  backgroundColor: theme.palette.primaryColors[200],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(8),
  "& svg": {
    fontSize: theme.spacing(12.5),
    color: theme.palette.neutralColors[900],
  },
}));

export const SuccessTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[50],
  fontSize: theme.typography.fontSize24,
  fontWeight: theme.typography.fontWeight700,
  fontFamily: theme.typography.fontFamily,
  marginBottom: theme.spacing(3),
}));

export const SuccessSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.textColors[200],
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
}));
