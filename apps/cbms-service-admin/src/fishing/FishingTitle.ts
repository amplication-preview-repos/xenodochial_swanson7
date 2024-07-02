import { Fishing as TFishing } from "../api/fishing/Fishing";

export const FISHING_TITLE_FIELD = "fishingGrounds";

export const FishingTitle = (record: TFishing): string => {
  return record.fishingGrounds?.toString() || String(record.id);
};
