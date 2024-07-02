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

export const FishingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput
          label="accessToFishingSupport"
          source="accessToFishingSupport"
        />
        <NumberInput label="annualCatch" source="annualCatch" />
        <TextInput
          label="commonIssuesFaced"
          multiline
          source="commonIssuesFaced"
        />
        <TextInput
          label="commonSpeciesCaught"
          multiline
          source="commonSpeciesCaught"
        />
        <TextInput label="fishingGearUsed" multiline source="fishingGearUsed" />
        <TextInput label="fishingGrounds" source="fishingGrounds" />
        <SelectInput
          source="typeOfFishing"
          label="typeOfFishing"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
