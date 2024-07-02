import { ClimateWhereInput } from "./ClimateWhereInput";
import { ClimateOrderByInput } from "./ClimateOrderByInput";

export type ClimateFindManyArgs = {
  where?: ClimateWhereInput;
  orderBy?: Array<ClimateOrderByInput>;
  skip?: number;
  take?: number;
};
