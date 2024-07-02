import { SortOrder } from "../../util/SortOrder";

export type FishingOrderByInput = {
  accessToFishingSupport?: SortOrder;
  annualCatch?: SortOrder;
  commonIssuesFaced?: SortOrder;
  commonSpeciesCaught?: SortOrder;
  createdAt?: SortOrder;
  fishingGearUsed?: SortOrder;
  fishingGrounds?: SortOrder;
  id?: SortOrder;
  typeOfFishing?: SortOrder;
  updatedAt?: SortOrder;
};
