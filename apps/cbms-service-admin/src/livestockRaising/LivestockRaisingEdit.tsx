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

export const LivestockRaisingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput
          label="accessToVeterinaryServices"
          source="accessToVeterinaryServices"
        />
        <NumberInput label="annualProduction" source="annualProduction" />
        <TextInput label="commonDiseases" multiline source="commonDiseases" />
        <TextInput
          label="feedingPractices"
          multiline
          source="feedingPractices"
        />
        <NumberInput
          step={1}
          label="numberOfAnimals"
          source="numberOfAnimals"
        />
        <SelectInput
          source="purposeOfRaising"
          label="purposeOfRaising"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="typeOfLivestockRaised"
          multiline
          source="typeOfLivestockRaised"
        />
      </SimpleForm>
    </Edit>
  );
};
