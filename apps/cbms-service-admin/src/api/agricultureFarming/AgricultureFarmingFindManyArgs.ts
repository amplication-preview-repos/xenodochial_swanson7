import { AgricultureFarmingWhereInput } from "./AgricultureFarmingWhereInput";
import { AgricultureFarmingOrderByInput } from "./AgricultureFarmingOrderByInput";

export type AgricultureFarmingFindManyArgs = {
  where?: AgricultureFarmingWhereInput;
  orderBy?: Array<AgricultureFarmingOrderByInput>;
  skip?: number;
  take?: number;
};
