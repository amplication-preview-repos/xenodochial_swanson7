import { Identification as TIdentification } from "../api/identification/Identification";

export const IDENTIFICATION_TITLE_FIELD = "fullName";

export const IdentificationTitle = (record: TIdentification): string => {
  return record.fullName?.toString() || String(record.id);
};
