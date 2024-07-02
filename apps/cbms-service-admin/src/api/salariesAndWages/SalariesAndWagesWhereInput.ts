import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SalariesAndWagesWhereInput = {
  employerName?: StringNullableFilter;
  frequencyOfPayment?: "Option1";
  id?: StringFilter;
  jobTitle?: StringNullableFilter;
  monthlySalary?: FloatNullableFilter;
  otherBenefits?: StringNullableFilter;
  typeOfEmployment?: "Option1";
};
