import { SalariesAndWages as TSalariesAndWages } from "../api/salariesAndWages/SalariesAndWages";

export const SALARIESANDWAGES_TITLE_FIELD = "employerName";

export const SalariesAndWagesTitle = (record: TSalariesAndWages): string => {
  return record.employerName?.toString() || String(record.id);
};
