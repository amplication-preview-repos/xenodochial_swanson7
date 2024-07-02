import { WasteManagement as TWasteManagement } from "../api/wasteManagement/WasteManagement";

export const WASTEMANAGEMENT_TITLE_FIELD = "id";

export const WasteManagementTitle = (record: TWasteManagement): string => {
  return record.id?.toString() || String(record.id);
};
