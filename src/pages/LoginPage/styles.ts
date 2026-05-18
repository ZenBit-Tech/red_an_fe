import { Box, Button, TextField, Divider, Alert } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background: `url('/login/login-bg.webp') center/cover no-repeat, ${theme.palette.secondaryColors[950]}`,
  fontFamily: theme.typography.fontFamily,
  position: "relative",
  overflow: "hidden",
}));

export const BackgroundOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  zIndex: 0,
});

export const ContentWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingInline: theme.spacing(4),
  [theme.breakpoints.up("sm")]: {
    paddingInline: theme.spacing(6),
  },
}));

export const CardContainer = styled(Box)(({ theme }) => ({
  width: theme.spacing(114),
  minHeight: theme.spacing(118),
  backgroundColor: theme.palette.neutralColors[900],
  border: `${theme.spacing(0.25)} solid ${theme.palette.strokeColors[500]}`,
  borderRadius: theme.spacing(2),
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: theme.spacing(0.375),
    background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primaryColors[200]} 50%, transparent 100%)`,
  },
  [theme.breakpoints.down("md")]: {
    width: theme.spacing(85.75),
  },
}));

export const CardInner = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingRight: theme.spacing(10),
  paddingBottom: theme.spacing(8),
  paddingLeft: theme.spacing(10),
  display: "flex",
  flexDirection: "column",
  height: "100%",
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

export const Title = styled("h1")(({ theme }) => ({
  margin: 0,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[400],
  marginBottom: theme.spacing(2),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize24,
  lineHeight: 1.25,
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export const TitleBreak = styled("span")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const CheckInboxTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[400],
  marginBottom: theme.spacing(2),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize24,
  lineHeight: 1.25,
}));

export const Subtitle = styled("p")(({ theme }) => ({
  margin: 0,
  color: theme.palette.textColors[50],
  opacity: 0.6,
  marginBottom: theme.spacing(11),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  lineHeight: 1.6,
  [theme.breakpoints.down("lg")]: {
    marginBottom: "19px",
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    marginBottom: "16px",
  },
}));

export const LabelStyles = styled("label")(({ theme }) => ({
  margin: 0,
  fontWeight: theme.typography.fontWeight500,
  color: theme.palette.textColors[300],
  display: "block",
  marginBottom: theme.spacing(4),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize12,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize16,
  borderRadius: theme.spacing(2.5),
  backgroundColor: theme.palette.strokeColors[400],
  color: theme.palette.textColors[50],
  "& input": {
    color: theme.palette.textColors[50],
    paddingTop: theme.spacing(3.5),
    paddingBottom: theme.spacing(3.5),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    "&::placeholder": {
      color: theme.palette.textColors[300],
      opacity: 0.4,
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.strokeColors[400],
    borderRadius: theme.spacing(2),
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.strokeColors[400],
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.primaryColors[200]} !important`,
    borderWidth: `${theme.spacing(0.25)} !important`,
  },
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.strokeColors[120],
  marginBottom: theme.spacing(6),
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  paddingTop: theme.spacing(3.5),
  paddingBottom: theme.spacing(3.5),
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(8.5),
  },
  borderRadius: theme.spacing(2.5),
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeight700,
  fontSize: theme.typography.fontSize16,
  textTransform: "none",
  backgroundColor: theme.palette.primaryColors[200],
  color: theme.palette.secondaryColors[900],
  boxShadow: "none",
  backgroundImage: "none",
  "&:hover": {
    backgroundColor: theme.palette.primaryColors[100],
    boxShadow: "none",
    backgroundImage: "none",
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.strokeColors[120],
    color: theme.palette.neutralColors[300],
    boxShadow: "none",
    backgroundImage: "none",
  },
}));

export const LinkButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  color: theme.palette.textColors[200],
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  cursor: "pointer",
  transition: "color 0.2s",
  padding: 0,
  textDecoration: "none",
  background: "transparent",
  border: "none",
  textTransform: "none",
  minWidth: 0,
  "&:hover": {
    color: theme.palette.textColors[50],
    textDecoration: "none",
    background: "transparent",
  },
  "& svg": {
    fontSize: theme.typography.fontSize18,
    color: theme.palette.textColors[50],
  },
}));

export const RequiredAsterisk = styled("span")(({ theme }) => ({
  color: theme.palette.textColors[50],
  opacity: 0.6,
  marginLeft: theme.spacing(0.5),
}));

export const CheckInboxCardInner = styled(CardInner)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  paddingTop: theme.spacing(23.75),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(19.25),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}));

export const CheckInboxContent = styled(Box)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const MailIconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  "& svg": {
    fontSize: theme.typography.fontSize60,
    color: theme.palette.primaryColors[200],
  },
}));

export const CheckInboxSubtitle = styled(Subtitle)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  fontSize: theme.typography.fontSize14,
}));

export const SubmittedEmailText = styled("span")(({ theme }) => ({
  color: theme.palette.textColors[50],
}));

export const ResendBlock = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0,
});

export const DidntReceiveText = styled("p")(({ theme }) => ({
  margin: 0,
  color: theme.palette.textColors[50],
  opacity: 0.4,
  fontFamily: theme.typography.fontFamily,
}));

export const ResendLinkAction = styled("button")(({ theme }) => ({
  background: "transparent",
  border: "none",
  color: theme.palette.primaryColors[200],
  fontSize: theme.typography.fontSize16,
  cursor: "pointer",
  textDecoration: "underline",
  "&:hover": {
    color: theme.palette.primaryColors[100],
    background: "transparent",
  },
}));

export const BackToSignInWrapper = styled(Box)(({ theme }) => ({
  marginTop: "auto",
  paddingTop: theme.spacing(18.5),
  textAlign: "left",
}));

export const StyledAlert = styled(Alert)(({ theme }) => ({
  width: "100%",
  fontFamily: theme.typography.fontFamily,
}));

export const BoxHandleBack = styled(Box)(({ theme }) => ({
  marginTop: "auto",
  paddingTop: theme.spacing(6),
}));
