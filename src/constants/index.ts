import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export const NAV_LINKS = [
  { to: "/about-us", label: "About Us" },
  { to: "/subscription-plan", label: "Subscription plan" },
  { to: "/contact-us", label: "Contact Us" },
];

export const ANCHOR_LINKS = [{ to: "#solution", label: "Solution" }];

export const FEATURES = [
  {
    id: "advanced-pii",
    titleKey: "advancedPii.title",
    defaultTitle: "Advanced PII Detection",
    descKey: "advancedPii.description",
    defaultDesc:
      "Context-aware identification of names, dates, and medical identifiers in clinical text.",
    iconId: "#icon-pii",
  },
  {
    id: "synthetic-data",
    titleKey: "syntheticData.title",
    defaultTitle: "Synthetic Data Generation",
    descKey: "syntheticData.description",
    defaultDesc:
      "Statistically accurate synthetic cohorts that preserve the clinical utility of original data.",
    iconId: "#icon-synthetic",
  },
];

export const CARDS_DATA = [
  {
    id: "multi-framework",
    titleKey: "multiFramework.title",
    defaultTitle: "Multi-Framework Compliance",
    descKey: "multiFramework.description",
    defaultDesc:
      "Unified control plane for HIPAA, GDPR, and localized health data laws.",
    iconId: "#icon-shield",
  },
  {
    id: "intelligent-anonymization",
    titleKey: "intelligentAnonymization.title",
    defaultTitle: "Intelligent Anonymization",
    descKey: "intelligentAnonymization.description",
    defaultDesc:
      "Dynamic masking and tokenization strategies based on data sensitivity.",
    iconId: "#icon-fingerprint",
  },
  {
    id: "api-integration",
    titleKey: "apiIntegration.title",
    defaultTitle: "API Integration",
    descKey: "apiIntegration.description",
    defaultDesc:
      "Seamlessly integrate with EHRs and data lakes via high-throughput REST APIs.",
    iconId: "#icon-api",
  },
  {
    id: "developer-sdk",
    titleKey: "developerSdk.title",
    defaultTitle: "Developer SDK",
    descKey: "developerSdk.description",
    defaultDesc:
      "Python and JavaScript SDKs for custom clinical data pipelines.",
    iconId: "#icon-sdk",
  },
];

export const BADGES = [
  { id: "hipaa", iconId: "hippa-compliant" },
  { id: "gdpr", iconId: "gdpr-certified" },
  { id: "accuracy", iconId: "accuracy" },
];

export const COMPLIANCE_CARDS_DATA = [
  { id: "hipaa", color: "#3b82f6" },
  { id: "gdpr", color: "#10b981" },
  { id: "ukdpi", color: "#f59e0b" },
  { id: "swissfadp", color: "#ef4444" },
];

export const SOCIAL_LINKS = [
  { id: "twitter", href: "https://twitter.com", label: "Twitter" },
  { id: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
  { id: "instagram", href: "https://instagram.com", label: "Instagram" },
];

export const COMPANY_LINKS = [
  { label: "Contact Us", to: "/contact-us" },
  { label: "Subscription plan", to: "/subscription-plan" },
];

export const ICONS: Record<string, typeof TwitterIcon> = {
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
};
