import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CrimeWhereInput = {
  dateOfIncident?: DateTimeNullableFilter;
  id?: StringFilter;
  incidentsOfCrime?: StringNullableFilter;
  locationOfIncident?: StringNullableFilter;
  natureOfCrime?: "Option1";
  outcome?: StringNullableFilter;
  reportedToAuthorities?: BooleanNullableFilter;
};
