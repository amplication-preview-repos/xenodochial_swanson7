import { EconomicActivity as TEconomicActivity } from "../api/economicActivity/EconomicActivity";

export const ECONOMICACTIVITY_TITLE_FIELD = "industry";

export const EconomicActivityTitle = (record: TEconomicActivity): string => {
  return record.industry?.toString() || String(record.id);
};
