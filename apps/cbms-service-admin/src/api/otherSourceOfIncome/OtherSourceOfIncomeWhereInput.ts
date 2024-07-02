import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OtherSourceOfIncomeWhereInput = {
  amount?: FloatNullableFilter;
  frequency?: "Option1";
  id?: StringFilter;
  notes?: StringNullableFilter;
  sourceDescription?: StringNullableFilter;
};
