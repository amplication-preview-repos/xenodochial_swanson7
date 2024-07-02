import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type HouseholdsCharacteristicsWhereInput = {
  headOfHousehold?: StringNullableFilter;
  householdIncome?: FloatNullableFilter;
  id?: StringFilter;
  mainSourceOfIncome?: "Option1";
  monthlyExpenses?: FloatNullableFilter;
  numberOfDependents?: IntNullableFilter;
  numberOfEmployedMembers?: IntNullableFilter;
  numberOfMembers?: IntNullableFilter;
  primaryLanguageSpoken?: StringNullableFilter;
};
