import { HealthAndOtherCharacteristics as THealthAndOtherCharacteristics } from "../api/healthAndOtherCharacteristics/HealthAndOtherCharacteristics";

export const HEALTHANDOTHERCHARACTERISTICS_TITLE_FIELD =
  "primaryHealthProvider";

export const HealthAndOtherCharacteristicsTitle = (
  record: THealthAndOtherCharacteristics
): string => {
  return record.primaryHealthProvider?.toString() || String(record.id);
};
