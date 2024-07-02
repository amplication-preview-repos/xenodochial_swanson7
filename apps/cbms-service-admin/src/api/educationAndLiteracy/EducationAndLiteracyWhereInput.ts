import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EducationAndLiteracyWhereInput = {
  currentlyEnrolled?: BooleanNullableFilter;
  fieldOfStudy?: StringNullableFilter;
  highestEducationalAttainment?: "Option1";
  id?: StringFilter;
  literacyLevel?: "Option1";
  schoolAddress?: StringNullableFilter;
  schoolName?: StringNullableFilter;
  vocationalTraining?: BooleanNullableFilter;
};
