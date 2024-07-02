import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NutritionWhereInput = {
  accessToNutritiousFood?: BooleanNullableFilter;
  dietaryIntake?: StringNullableFilter;
  height?: FloatNullableFilter;
  id?: StringFilter;
  mealFrequency?: "Option1";
  nutritionalSupplements?: StringNullableFilter;
  specialDietaryNeeds?: StringNullableFilter;
  weight?: FloatNullableFilter;
};
