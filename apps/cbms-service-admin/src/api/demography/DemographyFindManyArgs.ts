import { DemographyWhereInput } from "./DemographyWhereInput";
import { DemographyOrderByInput } from "./DemographyOrderByInput";

export type DemographyFindManyArgs = {
  where?: DemographyWhereInput;
  orderBy?: Array<DemographyOrderByInput>;
  skip?: number;
  take?: number;
};
