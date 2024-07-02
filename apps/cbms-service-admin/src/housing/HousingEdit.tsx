import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  BooleanInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const HousingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="constructionMaterial"
          label="constructionMaterial"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="electricityAccess" source="electricityAccess" />
        <SelectInput
          source="houseType"
          label="houseType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="neighborhoodType"
          label="neighborhoodType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="numberOfRooms" source="numberOfRooms" />
        <SelectInput
          source="ownershipStatus"
          label="ownershipStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="proximityToEssentialServices"
          multiline
          source="proximityToEssentialServices"
        />
        <NumberInput step={1} label="yearBuilt" source="yearBuilt" />
      </SimpleForm>
    </Edit>
  );
};
