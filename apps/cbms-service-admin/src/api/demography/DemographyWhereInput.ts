import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DemographyWhereInput = {
  age?: IntNullableFilter;
  citizenship?: StringNullableFilter;
  disabilityStatus?: BooleanNullableFilter;
  educationalAttainment?: "Option1";
  employmentStatus?: "Option1";
  ethnicity?: StringNullableFilter;
  gender?: "Option1";
  id?: StringFilter;
  maritalStatus?: "Option1";
};
