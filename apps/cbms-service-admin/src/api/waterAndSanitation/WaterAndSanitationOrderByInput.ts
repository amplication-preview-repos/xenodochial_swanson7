import { SortOrder } from "../../util/SortOrder";

export type WaterAndSanitationOrderByInput = {
  accessToSanitationFacility?: SortOrder;
  createdAt?: SortOrder;
  frequencyOfWasteCollection?: SortOrder;
  id?: SortOrder;
  sanitationFacilityType?: SortOrder;
  updatedAt?: SortOrder;
  wastewaterDisposalMethod?: SortOrder;
  waterAvailability?: SortOrder;
  waterQuality?: SortOrder;
  waterSource?: SortOrder;
};
