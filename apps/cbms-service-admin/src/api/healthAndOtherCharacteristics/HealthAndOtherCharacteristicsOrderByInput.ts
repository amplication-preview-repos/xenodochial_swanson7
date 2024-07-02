import { SortOrder } from "../../util/SortOrder";

export type HealthAndOtherCharacteristicsOrderByInput = {
  accessToHealthcare?: SortOrder;
  chronicDiseases?: SortOrder;
  createdAt?: SortOrder;
  disabilityStatus?: SortOrder;
  healthInsuranceStatus?: SortOrder;
  id?: SortOrder;
  primaryHealthProvider?: SortOrder;
  updatedAt?: SortOrder;
  vaccinationStatus?: SortOrder;
};
