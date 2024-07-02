import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type WasteManagementWhereInput = {
  compostingPractices?: BooleanNullableFilter;
  frequencyOfWasteCollection?: "Option1";
  hazardousWasteDisposal?: "Option1";
  id?: StringFilter;
  recyclingPractices?: BooleanNullableFilter;
  wasteDisposalMethod?: "Option1";
  wasteSegregationPractices?: BooleanNullableFilter;
};
