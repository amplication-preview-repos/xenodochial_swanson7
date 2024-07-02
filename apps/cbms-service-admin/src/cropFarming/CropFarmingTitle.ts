import { CropFarming as TCropFarming } from "../api/cropFarming/CropFarming";

export const CROPFARMING_TITLE_FIELD = "id";

export const CropFarmingTitle = (record: TCropFarming): string => {
  return record.id?.toString() || String(record.id);
};
