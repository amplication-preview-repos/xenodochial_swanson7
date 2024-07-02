import { EducationAndLiteracy as TEducationAndLiteracy } from "../api/educationAndLiteracy/EducationAndLiteracy";

export const EDUCATIONANDLITERACY_TITLE_FIELD = "schoolName";

export const EducationAndLiteracyTitle = (
  record: TEducationAndLiteracy
): string => {
  return record.schoolName?.toString() || String(record.id);
};
