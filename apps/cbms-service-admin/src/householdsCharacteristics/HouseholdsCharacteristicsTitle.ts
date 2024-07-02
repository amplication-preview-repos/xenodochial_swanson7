import { HouseholdsCharacteristics as THouseholdsCharacteristics } from "../api/householdsCharacteristics/HouseholdsCharacteristics";

export const HOUSEHOLDSCHARACTERISTICS_TITLE_FIELD = "headOfHousehold";

export const HouseholdsCharacteristicsTitle = (
  record: THouseholdsCharacteristics
): string => {
  return record.headOfHousehold?.toString() || String(record.id);
};
