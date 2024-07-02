import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const SourceOfIncomeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          label="amountFromPrimarySource"
          source="amountFromPrimarySource"
        />
        <NumberInput
          label="amountFromSecondarySource"
          source="amountFromSecondarySource"
        />
        <SelectInput
          source="frequencyOfIncome"
          label="frequencyOfIncome"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="otherSourcesOfIncome"
          multiline
          source="otherSourcesOfIncome"
        />
        <SelectInput
          source="primarySourceOfIncome"
          label="primarySourceOfIncome"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="secondarySourceOfIncome"
          label="secondarySourceOfIncome"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
