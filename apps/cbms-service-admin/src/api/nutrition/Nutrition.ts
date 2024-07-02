export type Nutrition = {
  accessToNutritiousFood: boolean | null;
  createdAt: Date;
  dietaryIntake: string | null;
  height: number | null;
  id: string;
  mealFrequency?: "Option1" | null;
  nutritionalSupplements: string | null;
  specialDietaryNeeds: string | null;
  updatedAt: Date;
  weight: number | null;
};
