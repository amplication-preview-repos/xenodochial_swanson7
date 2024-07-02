import { SortOrder } from "../../util/SortOrder";

export type NutritionOrderByInput = {
  accessToNutritiousFood?: SortOrder;
  createdAt?: SortOrder;
  dietaryIntake?: SortOrder;
  height?: SortOrder;
  id?: SortOrder;
  mealFrequency?: SortOrder;
  nutritionalSupplements?: SortOrder;
  specialDietaryNeeds?: SortOrder;
  updatedAt?: SortOrder;
  weight?: SortOrder;
};
