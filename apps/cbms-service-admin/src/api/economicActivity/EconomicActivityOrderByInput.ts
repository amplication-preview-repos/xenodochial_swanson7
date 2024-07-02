import { SortOrder } from "../../util/SortOrder";

export type EconomicActivityOrderByInput = {
  createdAt?: SortOrder;
  employmentStatus?: SortOrder;
  hoursWorkedPerWeek?: SortOrder;
  id?: SortOrder;
  industry?: SortOrder;
  monthlyIncome?: SortOrder;
  occupation?: SortOrder;
  typeOfEmployment?: SortOrder;
  updatedAt?: SortOrder;
  workplaceAddress?: SortOrder;
};
