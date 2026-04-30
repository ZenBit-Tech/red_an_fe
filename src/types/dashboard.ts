export interface DashboardSummary {
  totalDocuments: number;
  entitiesDetected: number;
  avgEntitiesPerDoc: number;
  successRate: number;
  trends: {
    totalDocumentsPct: number;
    entitiesDetectedPct: number;
    avgEntitiesPerDocPct: number;
    successRatePct: number;
  };
}
export interface ChartDataItem {
  date: string;
  count: number;
}

export interface DashboardResponse {
  summary: DashboardSummary;
  chartData: ChartDataItem[];
  charts: {
    entityTypesDetected: Array<{ label: string; value: number }>;
    complianceFrameworkUsage: Array<{
      framework: string;
      count: number;
      percentage: number;
    }>;
    processingHistory: Array<{
      date: string;
      documents: number;
      entities: number;
    }>;
    confidenceScoreDistribution: Array<{
      bucket: string;
      value: number;
    }>;
    deIdentificationMethodUsage: Array<{
      method: string;
      value: number;
    }>;
  };
}

export interface ProcessingHistoryItem {
  date: string;
  documents: number;
  entities: number;
}

export interface DeIdStatsChartItemDto {
  label: string;
  value: number;
  [key: string]: string | number | null | undefined;
}
