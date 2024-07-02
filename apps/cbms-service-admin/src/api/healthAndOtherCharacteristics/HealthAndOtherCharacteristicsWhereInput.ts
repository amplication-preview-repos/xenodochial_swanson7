import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HealthAndOtherCharacteristicsWhereInput = {
  accessToHealthcare?: "Option1";
  chronicDiseases?: StringNullableFilter;
  disabilityStatus?: BooleanNullableFilter;
  healthInsuranceStatus?: BooleanNullableFilter;
  id?: StringFilter;
  primaryHealthProvider?: StringNullableFilter;
  vaccinationStatus?: BooleanNullableFilter;
};
