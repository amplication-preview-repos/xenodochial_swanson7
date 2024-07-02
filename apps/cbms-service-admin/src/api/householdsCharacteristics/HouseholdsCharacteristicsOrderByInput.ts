import { SortOrder } from "../../util/SortOrder";

export type HouseholdsCharacteristicsOrderByInput = {
  createdAt?: SortOrder;
  headOfHousehold?: SortOrder;
  householdIncome?: SortOrder;
  id?: SortOrder;
  mainSourceOfIncome?: SortOrder;
  monthlyExpenses?: SortOrder;
  numberOfDependents?: SortOrder;
  numberOfEmployedMembers?: SortOrder;
  numberOfMembers?: SortOrder;
  primaryLanguageSpoken?: SortOrder;
  updatedAt?: SortOrder;
};
