import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CropFarmingWhereInput = {
  accessToAgriculturalSupport?: BooleanNullableFilter;
  annualYield?: FloatNullableFilter;
  areaCultivated?: FloatNullableFilter;
  commonPestsAndDiseases?: StringNullableFilter;
  farmingEquipmentUsed?: StringNullableFilter;
  id?: StringFilter;
  irrigationMethod?: "Option1";
  typeOfCropsGrown?: StringNullableFilter;
};
