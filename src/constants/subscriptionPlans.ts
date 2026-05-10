export const ICON_MAP = {
  check: "/compliance/icons.svg#check-circle",
  scrubbing: "/hero/icons.svg#gdpr-certified",
  unlimited: "/subscription/icons.svg#unlimited",
  code: "/subscription/icons.svg#code",
  priority: "/subscription/icons.svg#priority",
};

export type SubscriptionFeature = {
  icon: keyof typeof ICON_MAP;
  title: string;
  subtitle?: string;
};

export type SubscriptionPlan = {
  id: "free" | "professional";
  i18nKey: string;
  price: number;
  period: "month" | "year";
  features: { icon: keyof typeof ICON_MAP; i18nKey: string }[];
  stripePriceId?: string;
  isPopular?: boolean;
};

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: "free",
    i18nKey: "free",
    price: 0,
    period: "month",
    features: [{ icon: "check", i18nKey: "documents" }],
  },
  {
    id: "professional",
    i18nKey: "professional",
    price: 5,
    period: "month",
    isPopular: true,
    stripePriceId: "price_1TJX2rJYsXYgdDVrgYY88YrD",
    features: [
      { icon: "priority", i18nKey: "priority" },
      { icon: "scrubbing", i18nKey: "scrubbing" },
      { icon: "unlimited", i18nKey: "unlimited" },
      { icon: "code", i18nKey: "code" },
    ],
  },
];

export type TrustMetric = {
  value: string;
  label: string;
};

export const TRUST_METRICS: TrustMetric[] = [
  { value: "99.9%", label: "ACCURACY RATE" },
  { value: "<200ms", label: "LATENCY / DOC" },
  { value: "DOC/PDF", label: "SUPPORTED" },
  { value: "24/7", label: "EXPERT SUPPORT" },
];
