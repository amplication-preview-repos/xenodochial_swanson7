import { Housing as THousing } from "../api/housing/Housing";

export const HOUSING_TITLE_FIELD = "id";

export const HousingTitle = (record: THousing): string => {
  return record.id?.toString() || String(record.id);
};
