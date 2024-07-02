import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type WaterAndSanitationWhereInput = {
  accessToSanitationFacility?: BooleanNullableFilter;
  frequencyOfWasteCollection?: "Option1";
  id?: StringFilter;
  sanitationFacilityType?: "Option1";
  wastewaterDisposalMethod?: "Option1";
  waterAvailability?: "Option1";
  waterQuality?: "Option1";
  waterSource?: "Option1";
};
