import { FishingWhereInput } from "./FishingWhereInput";
import { FishingOrderByInput } from "./FishingOrderByInput";

export type FishingFindManyArgs = {
  where?: FishingWhereInput;
  orderBy?: Array<FishingOrderByInput>;
  skip?: number;
  take?: number;
};
