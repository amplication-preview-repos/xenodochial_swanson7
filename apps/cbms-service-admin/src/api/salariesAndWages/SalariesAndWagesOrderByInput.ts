import { SortOrder } from "../../util/SortOrder";

export type SalariesAndWagesOrderByInput = {
  createdAt?: SortOrder;
  employerName?: SortOrder;
  frequencyOfPayment?: SortOrder;
  id?: SortOrder;
  jobTitle?: SortOrder;
  monthlySalary?: SortOrder;
  otherBenefits?: SortOrder;
  typeOfEmployment?: SortOrder;
  updatedAt?: SortOrder;
};
