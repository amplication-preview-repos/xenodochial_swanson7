import { Nutrition as TNutrition } from "../api/nutrition/Nutrition";

export const NUTRITION_TITLE_FIELD = "id";

export const NutritionTitle = (record: TNutrition): string => {
  return record.id?.toString() || String(record.id);
};
