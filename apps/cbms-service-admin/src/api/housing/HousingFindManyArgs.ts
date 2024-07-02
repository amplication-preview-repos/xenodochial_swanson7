import { HousingWhereInput } from "./HousingWhereInput";
import { HousingOrderByInput } from "./HousingOrderByInput";

export type HousingFindManyArgs = {
  where?: HousingWhereInput;
  orderBy?: Array<HousingOrderByInput>;
  skip?: number;
  take?: number;
};
