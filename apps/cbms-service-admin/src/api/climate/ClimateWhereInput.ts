import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClimateWhereInput = {
  accessToClimateInformation?: BooleanNullableFilter;
  averageAnnualRainfall?: FloatNullableFilter;
  averageTemperature?: FloatNullableFilter;
  climateType?: "Option1";
  commonWeatherEvents?: StringNullableFilter;
  id?: StringFilter;
  impactOnLivelihood?: StringNullableFilter;
  seasonalChanges?: StringNullableFilter;
};
