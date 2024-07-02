import { HouseCharacteristicsWhereInput } from "./HouseCharacteristicsWhereInput";
import { HouseCharacteristicsOrderByInput } from "./HouseCharacteristicsOrderByInput";

export type HouseCharacteristicsFindManyArgs = {
  where?: HouseCharacteristicsWhereInput;
  orderBy?: Array<HouseCharacteristicsOrderByInput>;
  skip?: number;
  take?: number;
};
