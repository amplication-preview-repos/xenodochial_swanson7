import { SortOrder } from "../../util/SortOrder";

export type WasteManagementOrderByInput = {
  compostingPractices?: SortOrder;
  createdAt?: SortOrder;
  frequencyOfWasteCollection?: SortOrder;
  hazardousWasteDisposal?: SortOrder;
  id?: SortOrder;
  recyclingPractices?: SortOrder;
  updatedAt?: SortOrder;
  wasteDisposalMethod?: SortOrder;
  wasteSegregationPractices?: SortOrder;
};
