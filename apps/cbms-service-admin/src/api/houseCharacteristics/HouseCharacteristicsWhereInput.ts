import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type HouseCharacteristicsWhereInput = {
  constructionMaterial?: "Option1";
  electricityAccess?: BooleanNullableFilter;
  houseType?: "Option1";
  id?: StringFilter;
  numberOfRooms?: IntNullableFilter;
  ownershipStatus?: "Option1";
  sanitationFacility?: "Option1";
  waterSupply?: "Option1";
  yearBuilt?: IntNullableFilter;
};
