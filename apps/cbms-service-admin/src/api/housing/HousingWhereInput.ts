import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HousingWhereInput = {
  constructionMaterial?: "Option1";
  electricityAccess?: BooleanNullableFilter;
  houseType?: "Option1";
  id?: StringFilter;
  neighborhoodType?: "Option1";
  numberOfRooms?: IntNullableFilter;
  ownershipStatus?: "Option1";
  proximityToEssentialServices?: StringNullableFilter;
  yearBuilt?: IntNullableFilter;
};
