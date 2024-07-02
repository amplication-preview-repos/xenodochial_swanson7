import { SortOrder } from "../../util/SortOrder";

export type CrimeOrderByInput = {
  createdAt?: SortOrder;
  dateOfIncident?: SortOrder;
  id?: SortOrder;
  incidentsOfCrime?: SortOrder;
  locationOfIncident?: SortOrder;
  natureOfCrime?: SortOrder;
  outcome?: SortOrder;
  reportedToAuthorities?: SortOrder;
  updatedAt?: SortOrder;
};
