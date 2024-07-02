import { SortOrder } from "../../util/SortOrder";

export type HousingOrderByInput = {
  constructionMaterial?: SortOrder;
  createdAt?: SortOrder;
  electricityAccess?: SortOrder;
  houseType?: SortOrder;
  id?: SortOrder;
  neighborhoodType?: SortOrder;
  numberOfRooms?: SortOrder;
  ownershipStatus?: SortOrder;
  proximityToEssentialServices?: SortOrder;
  updatedAt?: SortOrder;
  yearBuilt?: SortOrder;
};
