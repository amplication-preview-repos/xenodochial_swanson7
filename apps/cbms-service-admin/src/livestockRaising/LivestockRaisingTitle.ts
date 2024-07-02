import { LivestockRaising as TLivestockRaising } from "../api/livestockRaising/LivestockRaising";

export const LIVESTOCKRAISING_TITLE_FIELD = "id";

export const LivestockRaisingTitle = (record: TLivestockRaising): string => {
  return record.id?.toString() || String(record.id);
};
