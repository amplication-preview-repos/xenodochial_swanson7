import { AgricultureFarming as TAgricultureFarming } from "../api/agricultureFarming/AgricultureFarming";

export const AGRICULTUREFARMING_TITLE_FIELD = "id";

export const AgricultureFarmingTitle = (
  record: TAgricultureFarming
): string => {
  return record.id?.toString() || String(record.id);
};
