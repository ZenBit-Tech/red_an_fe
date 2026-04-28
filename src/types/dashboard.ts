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
