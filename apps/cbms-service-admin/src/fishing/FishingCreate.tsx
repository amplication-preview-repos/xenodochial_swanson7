import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const FishingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
