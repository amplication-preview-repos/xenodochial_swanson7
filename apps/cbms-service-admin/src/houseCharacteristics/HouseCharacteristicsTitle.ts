import { HouseCharacteristics as THouseCharacteristics } from "../api/houseCharacteristics/HouseCharacteristics";

export const HOUSECHARACTERISTICS_TITLE_FIELD = "id";

export const HouseCharacteristicsTitle = (
  record: THouseCharacteristics
): string => {
  return record.id?.toString() || String(record.id);
};
