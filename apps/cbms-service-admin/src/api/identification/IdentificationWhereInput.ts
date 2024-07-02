import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type IdentificationWhereInput = {
  address?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  gender?: "Option1";
  id?: StringFilter;
  maritalStatus?: "Option1";
  nationalId?: StringNullableFilter;
};
