import { SourceOfIncome as TSourceOfIncome } from "../api/sourceOfIncome/SourceOfIncome";

export const SOURCEOFINCOME_TITLE_FIELD = "id";

export const SourceOfIncomeTitle = (record: TSourceOfIncome): string => {
  return record.id?.toString() || String(record.id);
};
