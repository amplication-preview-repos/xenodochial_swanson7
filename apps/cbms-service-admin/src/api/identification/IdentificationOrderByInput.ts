import { SortOrder } from "../../util/SortOrder";

export type IdentificationOrderByInput = {
  address?: SortOrder;
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  maritalStatus?: SortOrder;
  nationalId?: SortOrder;
  updatedAt?: SortOrder;
};
