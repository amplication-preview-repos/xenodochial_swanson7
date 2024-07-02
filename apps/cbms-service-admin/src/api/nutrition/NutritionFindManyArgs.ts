import { NutritionWhereInput } from "./NutritionWhereInput";
import { NutritionOrderByInput } from "./NutritionOrderByInput";

export type NutritionFindManyArgs = {
  where?: NutritionWhereInput;
  orderBy?: Array<NutritionOrderByInput>;
  skip?: number;
  take?: number;
};
