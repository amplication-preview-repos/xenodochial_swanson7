import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  SelectInput,
} from "react-admin";

export const WasteManagementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput
          label="compostingPractices"
          source="compostingPractices"
        />
        <SelectInput
          source="frequencyOfWasteCollection"
          label="frequencyOfWasteCollection"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="hazardousWasteDisposal"
          label="hazardousWasteDisposal"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="recyclingPractices" source="recyclingPractices" />
        <SelectInput
          source="wasteDisposalMethod"
          label="wasteDisposalMethod"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput
          label="wasteSegregationPractices"
          source="wasteSegregationPractices"
        />
      </SimpleForm>
    </Edit>
  );
};
