import { SortOrder } from "../../util/SortOrder";

export type HouseCharacteristicsOrderByInput = {
  constructionMaterial?: SortOrder;
  createdAt?: SortOrder;
  electricityAccess?: SortOrder;
  houseType?: SortOrder;
  id?: SortOrder;
  numberOfRooms?: SortOrder;
  ownershipStatus?: SortOrder;
  sanitationFacility?: SortOrder;
  updatedAt?: SortOrder;
  waterSupply?: SortOrder;
  yearBuilt?: SortOrder;
};
