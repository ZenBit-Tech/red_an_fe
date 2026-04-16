import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// ─── Section wrapper ──────────────────────────────────────────────────────────

export const ComplianceSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(10, 4),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(22.5, 6),
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(22.5, 8),
  },
}));

// ─── Outer layout: title + grid stacked vertically, centred ──────────────────

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(10),
}));

// ─── Title block ─────────────────────────────────────────────────────────────

export const TitleBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
}));

export const SectionTitle = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize32,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize48,
  },
}));

// Short decorative accent line below the heading
export const TitleDivider = styled(Box)(({ theme }) => ({
  width: 80,
  height: 3,
  borderRadius: 2,
  backgroundImage: `linear-gradient(90deg, ${theme.palette.primaryColors[200]}, ${theme.palette.primaryColors[700]})`,
}));

// ─── Cards grid ──────────────────────────────────────────────────────────────

export const CardsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(6),
  // Two columns on tablet, three on desktop
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

// ─── Individual card ──────────────────────────────────────────────────────────

export const ComplianceCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutralColors[800],
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.strokeColors[150]}`,
  padding: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
}));

// ─── Card header (standard name + jurisdiction) ───────────────────────────────

export const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const CardTitle = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize26,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize32,
  },
}));

export const CardRegion = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
}));

// ─── Dashed separator between card sections ───────────────────────────────────

export const CardDivider = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 0,
  borderTop: `1px dashed ${theme.palette.strokeColors[150]}`,
}));

// ─── Key / value rows ────────────────────────────────────────────────────────

export const CardRows = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

export const CardRow = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const RowLabel = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
}));

export const RowValue = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight600,
  color: theme.palette.textColors[50],
}));

// ─── Card footer (checkmark + tracked entity count) ───────────────────────────

export const CardFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const FooterIconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  "& svg": {
    width: 18,
    height: 18,
    fill: theme.palette.primaryColors[200],
  },
}));

export const FooterText = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
}));

// ─── "Create Custom Compliance Profiles" banner ───────────────────────────────

// Full-width horizontal banner: text left, decorative texture right.
// Uses overflow:hidden so the texture pseudo-element is clipped to the
// rounded corners without needing an extra wrapper.
export const CustomProfilesBanner = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  backgroundColor: theme.palette.neutralColors[800],
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.strokeColors[150]}`,
  padding: theme.spacing(8),

  // On md+ the text stays left and the texture fills the right half
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 152, // ≈ Figma height 304 / 2 (at md scale)
    padding: theme.spacing(10, 12),
  },
}));

// Left column — title + description
export const BannerTextBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  position: "relative",
  zIndex: 1, // keeps text above the absolute texture on mobile
  width: "100%",
  [theme.breakpoints.up("md")]: {
    // Явно ограничиваем левую половину.
    // flex: 1 здесь не подходит, потому что BannerTexture абсолютно
    // позиционирована и не создаёт "противовеса" в flex-потоке —
    // flex: 1 просто захватывает всё доступное пространство.
    width: "50%",
    flexShrink: 0,
  },
}));

export const BannerTitle = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize20,
  fontWeight: theme.typography.fontWeight700,
  color: theme.palette.textColors[50],
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize26,
  },
}));

export const BannerDescription = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeight400,
  color: theme.palette.textColors[200],
  lineHeight: 1.6,
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize16,
  },
}));

// Right decorative texture block — diagonal-lines graphic.
// Absolutely positioned on mobile so it doesn't push the text down;
// becomes a flex child (static) on md+ where the banner is tall enough.
// Replace the backgroundImage value with the actual texture asset path.
export const BannerTexture = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: "50%",
  backgroundImage: `url("/compliance/banner-texture.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center left",
  pointerEvents: "none",
  opacity: 0.25,

  [theme.breakpoints.up("md")]: {
    opacity: 1,
    // position: "relative", // back in flow so it fills its flex slot
    // width: "40%",
    // minHeight: 120,
    // opacity: 1,
    // flexShrink: 0,
    // borderRadius: theme.spacing(2),
  },
}));
