import { SortOrder } from "../../util/SortOrder";

export type ClimateOrderByInput = {
  accessToClimateInformation?: SortOrder;
  averageAnnualRainfall?: SortOrder;
  averageTemperature?: SortOrder;
  climateType?: SortOrder;
  commonWeatherEvents?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  impactOnLivelihood?: SortOrder;
  seasonalChanges?: SortOrder;
  updatedAt?: SortOrder;
};
