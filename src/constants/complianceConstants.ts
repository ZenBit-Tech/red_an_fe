export interface ComplianceRow {
  id: string;
  labelKey: string;
  defaultLabel: string;
  valueKey: string;
  defaultValue: string;
}

export interface ComplianceCardData {
  id: string;
  titleKey: string;
  defaultTitle: string;
  regionKey: string;
  defaultRegion: string;
  rows: ComplianceRow[];
  footerKey: string;
  defaultFooter: string;
}

export const COMPLIANCE_CARDS: ComplianceCardData[] = [
  {
    id: "hipaa",
    titleKey: "hipaaTitle",
    defaultTitle: "HIPAA",
    regionKey: "hipaaRegion",
    defaultRegion: "United States",
    rows: [
      {
        id: "hipaa-1",
        labelKey: "hipaaRowLabel1",
        defaultLabel: "Entity Types",
        valueKey: "hipaaRowValue1",
        defaultValue: "17 Standard",
      },
      {
        id: "hipaa-2",
        labelKey: "hipaaRowLabel2",
        defaultLabel: "Safe Harbor",
        valueKey: "hipaaRowValue2",
        defaultValue: "Supported",
      },
    ],
    footerKey: "hipaaFooter",
    defaultFooter: "17 Entity Types Tracked",
  },
  {
    id: "eu-gdpr",
    titleKey: "euGdprTitle",
    defaultTitle: "EU GDPR",
    regionKey: "euGdprRegion",
    defaultRegion: "European Union",
    rows: [
      {
        id: "eu-gdpr-1",
        labelKey: "euGdprRowLabel1",
        defaultLabel: "Article 89",
        valueKey: "euGdprRowValue1",
        defaultValue: "Compliant",
      },
      {
        id: "eu-gdpr-2",
        labelKey: "euGdprRowLabel2",
        defaultLabel: "Processing",
        valueKey: "euGdprRowValue2",
        defaultValue: "Lawful",
      },
    ],
    footerKey: "euGdprFooter",
    defaultFooter: "11 Entity Types Tracked",
  },
  {
    id: "uk-gdpr",
    titleKey: "ukGdprTitle",
    defaultTitle: "UK GDPR",
    regionKey: "ukGdprRegion",
    defaultRegion: "United Kingdom",
    rows: [
      {
        id: "uk-gdpr-1",
        labelKey: "ukGdprRowLabel1",
        defaultLabel: "ICO Standards",
        valueKey: "ukGdprRowValue1",
        defaultValue: "Aligned",
      },
      {
        id: "uk-gdpr-2",
        labelKey: "ukGdprRowLabel2",
        defaultLabel: "Data Transfers",
        valueKey: "ukGdprRowValue2",
        defaultValue: "Secure",
      },
    ],
    footerKey: "ukGdprFooter",
    defaultFooter: "9 Entity Types Tracked",
  },
];
