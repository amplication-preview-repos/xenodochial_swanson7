import { SortOrder } from "../../util/SortOrder";

export type SourceOfIncomeOrderByInput = {
  amountFromPrimarySource?: SortOrder;
  amountFromSecondarySource?: SortOrder;
  createdAt?: SortOrder;
  frequencyOfIncome?: SortOrder;
  id?: SortOrder;
  otherSourcesOfIncome?: SortOrder;
  primarySourceOfIncome?: SortOrder;
  secondarySourceOfIncome?: SortOrder;
  updatedAt?: SortOrder;
};
