import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const HouseholdsCharacteristicsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="headOfHousehold" source="headOfHousehold" />
        <NumberInput label="householdIncome" source="householdIncome" />
        <SelectInput
          source="mainSourceOfIncome"
          label="mainSourceOfIncome"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="monthlyExpenses" source="monthlyExpenses" />
        <NumberInput
          step={1}
          label="numberOfDependents"
          source="numberOfDependents"
        />
        <NumberInput
          step={1}
          label="numberOfEmployedMembers"
          source="numberOfEmployedMembers"
        />
        <NumberInput
          step={1}
          label="numberOfMembers"
          source="numberOfMembers"
        />
        <TextInput
          label="primaryLanguageSpoken"
          source="primaryLanguageSpoken"
        />
      </SimpleForm>
    </Create>
  );
};
