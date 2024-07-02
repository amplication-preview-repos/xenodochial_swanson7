import { WaterAndSanitation as TWaterAndSanitation } from "../api/waterAndSanitation/WaterAndSanitation";

export const WATERANDSANITATION_TITLE_FIELD = "id";

export const WaterAndSanitationTitle = (
  record: TWaterAndSanitation
): string => {
  return record.id?.toString() || String(record.id);
};
