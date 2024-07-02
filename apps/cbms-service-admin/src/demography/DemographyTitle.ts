import { Demography as TDemography } from "../api/demography/Demography";

export const DEMOGRAPHY_TITLE_FIELD = "citizenship";

export const DemographyTitle = (record: TDemography): string => {
  return record.citizenship?.toString() || String(record.id);
};
