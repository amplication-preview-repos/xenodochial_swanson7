import { OtherSourceOfIncome as TOtherSourceOfIncome } from "../api/otherSourceOfIncome/OtherSourceOfIncome";

export const OTHERSOURCEOFINCOME_TITLE_FIELD = "sourceDescription";

export const OtherSourceOfIncomeTitle = (
  record: TOtherSourceOfIncome
): string => {
  return record.sourceDescription?.toString() || String(record.id);
};
