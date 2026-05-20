export const ISSUE_CATEGORIES = [
  "Anonymization Quality",
  "Payment & Subscription",
  "Synthetic Data Request",
  "Security & Legal",
  "Technical Issue",
  "Proposals",
  "Other",
] as const;

export type IssueCategory = (typeof ISSUE_CATEGORIES)[number];

export interface SupportFormValues {
  fullName: string;
  email: string;
  issueCategory: string;
  message: string;
}
