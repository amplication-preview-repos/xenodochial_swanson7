import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const AgricultureFarmingShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField
          label="accessToAgriculturalSupport"
          source="accessToAgriculturalSupport"
        />
        <TextField label="annualYield" source="annualYield" />
        <TextField label="areaCultivated" source="areaCultivated" />
        <TextField
          label="commonPestsAndDiseases"
          source="commonPestsAndDiseases"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="farmingEquipmentUsed" source="farmingEquipmentUsed" />
        <TextField label="ID" source="id" />
        <TextField label="irrigationMethod" source="irrigationMethod" />
        <TextField label="typeOfCropsGrown" source="typeOfCropsGrown" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
