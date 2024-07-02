import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type EconomicActivityWhereInput = {
  employmentStatus?: "Option1";
  hoursWorkedPerWeek?: IntNullableFilter;
  id?: StringFilter;
  industry?: StringNullableFilter;
  monthlyIncome?: FloatNullableFilter;
  occupation?: StringNullableFilter;
  typeOfEmployment?: "Option1";
  workplaceAddress?: StringNullableFilter;
};
