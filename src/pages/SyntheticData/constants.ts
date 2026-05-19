import {
  DETECTABLE_ENTITY_TYPE,
  type DetectableEntityType,
} from "@/components/ComplianceSelect/constants";
import type { EntityType } from "@/components/AnalysisResults/constants";

export const SYNTHETIC_OUTPUT_FORMAT = {
  TXT: "txt",
  PDF: "pdf",
} as const;

export type SyntheticOutputFormat =
  (typeof SYNTHETIC_OUTPUT_FORMAT)[keyof typeof SYNTHETIC_OUTPUT_FORMAT];

export interface SyntheticColumnDefinition {
  key: string;
  labelKey: string;
  priority: number;
}

export const SYNTHETIC_COUNT_LIMITS = {
  MIN: 1,
  MAX: 20,
  DEFAULT: 5,
  TABLE_PREVIEW_MAX_ROWS: 20,
} as const;

export const BASE_COLUMN_DEFINITION: SyntheticColumnDefinition = {
  key: "index",
  labelKey: "syntheticGenerator.table.columns.index",
  priority: 0,
};

const ENTITY_PRIORITY = {
  PERSON: 1,
  DATE_TIME: 2,
  AGE: 3,
  PHONE: 4,
  EMAIL: 5,
  MRN: 6,
  LOCATION: 7,
  IDENTIFIER: 8,
  DEFAULT: 50,
} as const;

const ENTITY_TO_COLUMN: Partial<
  Record<DetectableEntityType, SyntheticColumnDefinition>
> = {
  [DETECTABLE_ENTITY_TYPE.PERSON]: {
    key: "person",
    labelKey: "syntheticGenerator.table.columns.person",
    priority: ENTITY_PRIORITY.PERSON,
  },
  [DETECTABLE_ENTITY_TYPE.DATE]: {
    key: "dateTime",
    labelKey: "syntheticGenerator.table.columns.dateTime",
    priority: ENTITY_PRIORITY.DATE_TIME,
  },
  [DETECTABLE_ENTITY_TYPE.TIME]: {
    key: "dateTime",
    labelKey: "syntheticGenerator.table.columns.dateTime",
    priority: ENTITY_PRIORITY.DATE_TIME,
  },
  [DETECTABLE_ENTITY_TYPE.DATE_TIME]: {
    key: "dateTime",
    labelKey: "syntheticGenerator.table.columns.dateTime",
    priority: ENTITY_PRIORITY.DATE_TIME,
  },
  [DETECTABLE_ENTITY_TYPE.AGE]: {
    key: "age",
    labelKey: "syntheticGenerator.table.columns.age",
    priority: ENTITY_PRIORITY.AGE,
  },
  [DETECTABLE_ENTITY_TYPE.PHONE_NUMBER]: {
    key: "phone",
    labelKey: "syntheticGenerator.table.columns.phone",
    priority: ENTITY_PRIORITY.PHONE,
  },
  [DETECTABLE_ENTITY_TYPE.EMAIL_ADDRESS]: {
    key: "email",
    labelKey: "syntheticGenerator.table.columns.email",
    priority: ENTITY_PRIORITY.EMAIL,
  },
  [DETECTABLE_ENTITY_TYPE.MEDICAL_RECORD_NUMBER]: {
    key: "mrn",
    labelKey: "syntheticGenerator.table.columns.mrn",
    priority: ENTITY_PRIORITY.MRN,
  },
  [DETECTABLE_ENTITY_TYPE.MEDICAL_RECORD]: {
    key: "mrn",
    labelKey: "syntheticGenerator.table.columns.mrn",
    priority: ENTITY_PRIORITY.MRN,
  },
  [DETECTABLE_ENTITY_TYPE.LOCATION]: {
    key: "location",
    labelKey: "syntheticGenerator.table.columns.location",
    priority: ENTITY_PRIORITY.LOCATION,
  },
  [DETECTABLE_ENTITY_TYPE.GEOPOINT]: {
    key: "location",
    labelKey: "syntheticGenerator.table.columns.location",
    priority: ENTITY_PRIORITY.LOCATION,
  },
  [DETECTABLE_ENTITY_TYPE.ID_NUMBER]: {
    key: "identifier",
    labelKey: "syntheticGenerator.table.columns.identifier",
    priority: ENTITY_PRIORITY.IDENTIFIER,
  },
  [DETECTABLE_ENTITY_TYPE.NATIONAL_ID]: {
    key: "identifier",
    labelKey: "syntheticGenerator.table.columns.identifier",
    priority: ENTITY_PRIORITY.IDENTIFIER,
  },
  [DETECTABLE_ENTITY_TYPE.PASSPORT]: {
    key: "identifier",
    labelKey: "syntheticGenerator.table.columns.identifier",
    priority: ENTITY_PRIORITY.IDENTIFIER,
  },
  [DETECTABLE_ENTITY_TYPE.SSN]: {
    key: "identifier",
    labelKey: "syntheticGenerator.table.columns.identifier",
    priority: ENTITY_PRIORITY.IDENTIFIER,
  },
  [DETECTABLE_ENTITY_TYPE.ACCOUNT_NUMBER]: {
    key: "identifier",
    labelKey: "syntheticGenerator.table.columns.identifier",
    priority: ENTITY_PRIORITY.IDENTIFIER,
  },
  [DETECTABLE_ENTITY_TYPE.BANK_ACCOUNT]: {
    key: "identifier",
    labelKey: "syntheticGenerator.table.columns.identifier",
    priority: ENTITY_PRIORITY.IDENTIFIER,
  },
  [DETECTABLE_ENTITY_TYPE.CREDIT_CARD]: {
    key: "identifier",
    labelKey: "syntheticGenerator.table.columns.identifier",
    priority: ENTITY_PRIORITY.IDENTIFIER,
  },
};

const SYNTHETIC_NAMES = [
  "Michael Garcia",
  "Jennifer Brown",
  "Elizabeth Martinez",
  "Patricia Smith",
  "James Anderson",
  "Linda Thompson",
] as const;

const SYNTHETIC_EMAIL_DOMAINS = [
  "example.com",
  "mail.com",
  "health.test",
] as const;
const SYNTHETIC_LOCATIONS = [
  "Chicago, IL",
  "Austin, TX",
  "Seattle, WA",
  "Boston, MA",
  "Denver, CO",
] as const;

export const getSyntheticColumnDefinitions = (
  activeEntityTypes: EntityType[],
): SyntheticColumnDefinition[] => {
  const uniqueColumns = new Map<string, SyntheticColumnDefinition>();

  for (const type of activeEntityTypes) {
    const mappedColumn = ENTITY_TO_COLUMN[type as DetectableEntityType];

    if (mappedColumn) {
      uniqueColumns.set(mappedColumn.key, mappedColumn);
      continue;
    }

    uniqueColumns.set(type, {
      key: type,
      labelKey: "syntheticGenerator.table.columns.dynamic",
      priority: ENTITY_PRIORITY.DEFAULT,
    });
  }

  const sortedColumns = Array.from(uniqueColumns.values()).sort(
    (left, right) => left.priority - right.priority,
  );

  return [BASE_COLUMN_DEFINITION, ...sortedColumns];
};

const getRowValueByColumn = (columnKey: string, rowIndex: number): string => {
  const safeIndex = rowIndex % SYNTHETIC_NAMES.length;
  const locationIndex = rowIndex % SYNTHETIC_LOCATIONS.length;
  const emailDomainIndex = rowIndex % SYNTHETIC_EMAIL_DOMAINS.length;

  if (columnKey === "person") {
    return SYNTHETIC_NAMES[safeIndex];
  }

  if (columnKey === "dateTime") {
    const month = String((rowIndex % 12) + 1).padStart(2, "0");
    const day = String((rowIndex % 27) + 1).padStart(2, "0");
    return `${day}.${month}.2026`;
  }

  if (columnKey === "age") {
    return String(30 + (rowIndex % 40));
  }

  if (columnKey === "phone") {
    return `555-${String(100 + rowIndex).padStart(3, "0")}-${String(1000 + rowIndex).slice(-4)}`;
  }

  if (columnKey === "email") {
    const base = SYNTHETIC_NAMES[safeIndex].toLowerCase().replace(/\s+/g, ".");
    return `${base}${rowIndex + 1}@${SYNTHETIC_EMAIL_DOMAINS[emailDomainIndex]}`;
  }

  if (columnKey === "mrn") {
    return `MRN ${String(100000 + rowIndex)}`;
  }

  if (columnKey === "location") {
    return SYNTHETIC_LOCATIONS[locationIndex];
  }

  if (columnKey === "identifier") {
    return `ID-${String(100000 + rowIndex)}`;
  }

  return "N/A";
};

export const buildSyntheticRows = (
  count: number,
  columns: SyntheticColumnDefinition[],
): Array<Record<string, string | number>> => {
  const rowCount = Math.min(
    count,
    SYNTHETIC_COUNT_LIMITS.TABLE_PREVIEW_MAX_ROWS,
  );

  return Array.from({ length: rowCount }, (_, index) => {
    const row: Record<string, string | number> = {
      index: index + 1,
    };

    for (const column of columns) {
      if (column.key === "index") {
        continue;
      }

      row[column.key] = getRowValueByColumn(column.key, index);
    }

    return row;
  });
};
