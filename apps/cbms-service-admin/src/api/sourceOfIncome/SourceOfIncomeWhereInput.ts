import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SourceOfIncomeWhereInput = {
  amountFromPrimarySource?: FloatNullableFilter;
  amountFromSecondarySource?: FloatNullableFilter;
  frequencyOfIncome?: "Option1";
  id?: StringFilter;
  otherSourcesOfIncome?: StringNullableFilter;
  primarySourceOfIncome?: "Option1";
  secondarySourceOfIncome?: "Option1";
};
