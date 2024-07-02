import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const EconomicActivityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="employmentStatus"
          label="employmentStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput
          step={1}
          label="hoursWorkedPerWeek"
          source="hoursWorkedPerWeek"
        />
        <TextInput label="industry" source="industry" />
        <NumberInput label="monthlyIncome" source="monthlyIncome" />
        <TextInput label="occupation" source="occupation" />
        <SelectInput
          source="typeOfEmployment"
          label="typeOfEmployment"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="workplaceAddress"
          multiline
          source="workplaceAddress"
        />
      </SimpleForm>
    </Edit>
  );
};
