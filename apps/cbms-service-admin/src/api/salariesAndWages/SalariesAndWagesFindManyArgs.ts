import { SalariesAndWagesWhereInput } from "./SalariesAndWagesWhereInput";
import { SalariesAndWagesOrderByInput } from "./SalariesAndWagesOrderByInput";

export type SalariesAndWagesFindManyArgs = {
  where?: SalariesAndWagesWhereInput;
  orderBy?: Array<SalariesAndWagesOrderByInput>;
  skip?: number;
  take?: number;
};
