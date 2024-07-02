import { HouseholdsCharacteristicsWhereInput } from "./HouseholdsCharacteristicsWhereInput";
import { HouseholdsCharacteristicsOrderByInput } from "./HouseholdsCharacteristicsOrderByInput";

export type HouseholdsCharacteristicsFindManyArgs = {
  where?: HouseholdsCharacteristicsWhereInput;
  orderBy?: Array<HouseholdsCharacteristicsOrderByInput>;
  skip?: number;
  take?: number;
};
