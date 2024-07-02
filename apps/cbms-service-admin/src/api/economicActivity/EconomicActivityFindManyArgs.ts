import { EconomicActivityWhereInput } from "./EconomicActivityWhereInput";
import { EconomicActivityOrderByInput } from "./EconomicActivityOrderByInput";

export type EconomicActivityFindManyArgs = {
  where?: EconomicActivityWhereInput;
  orderBy?: Array<EconomicActivityOrderByInput>;
  skip?: number;
  take?: number;
};
