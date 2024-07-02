import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const CropFarmingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput
          label="accessToAgriculturalSupport"
          source="accessToAgriculturalSupport"
        />
        <NumberInput label="annualYield" source="annualYield" />
        <NumberInput label="areaCultivated" source="areaCultivated" />
        <TextInput
          label="commonPestsAndDiseases"
          multiline
          source="commonPestsAndDiseases"
        />
        <TextInput
          label="farmingEquipmentUsed"
          multiline
          source="farmingEquipmentUsed"
        />
        <SelectInput
          source="irrigationMethod"
          label="irrigationMethod"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="typeOfCropsGrown"
          multiline
          source="typeOfCropsGrown"
        />
      </SimpleForm>
    </Edit>
  );
};
