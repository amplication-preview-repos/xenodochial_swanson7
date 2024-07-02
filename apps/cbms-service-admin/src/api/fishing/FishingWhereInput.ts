import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FishingWhereInput = {
  accessToFishingSupport?: BooleanNullableFilter;
  annualCatch?: FloatNullableFilter;
  commonIssuesFaced?: StringNullableFilter;
  commonSpeciesCaught?: StringNullableFilter;
  fishingGearUsed?: StringNullableFilter;
  fishingGrounds?: StringNullableFilter;
  id?: StringFilter;
  typeOfFishing?: "Option1";
};
