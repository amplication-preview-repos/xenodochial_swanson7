import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LivestockRaisingWhereInput = {
  accessToVeterinaryServices?: BooleanNullableFilter;
  annualProduction?: FloatNullableFilter;
  commonDiseases?: StringNullableFilter;
  feedingPractices?: StringNullableFilter;
  id?: StringFilter;
  numberOfAnimals?: IntNullableFilter;
  purposeOfRaising?: "Option1";
  typeOfLivestockRaised?: StringNullableFilter;
};
