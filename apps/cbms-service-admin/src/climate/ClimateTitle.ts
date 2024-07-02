import { Climate as TClimate } from "../api/climate/Climate";

export const CLIMATE_TITLE_FIELD = "id";

export const ClimateTitle = (record: TClimate): string => {
  return record.id?.toString() || String(record.id);
};
