import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const SalariesAndWagesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="employerName" source="employerName" />
        <SelectInput
          source="frequencyOfPayment"
          label="frequencyOfPayment"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="jobTitle" source="jobTitle" />
        <NumberInput label="monthlySalary" source="monthlySalary" />
        <TextInput label="otherBenefits" multiline source="otherBenefits" />
        <SelectInput
          source="typeOfEmployment"
          label="typeOfEmployment"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
