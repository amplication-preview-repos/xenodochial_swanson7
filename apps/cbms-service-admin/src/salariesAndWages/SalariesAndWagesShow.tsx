import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const SalariesAndWagesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="employerName" source="employerName" />
        <TextField label="frequencyOfPayment" source="frequencyOfPayment" />
        <TextField label="ID" source="id" />
        <TextField label="jobTitle" source="jobTitle" />
        <TextField label="monthlySalary" source="monthlySalary" />
        <TextField label="otherBenefits" source="otherBenefits" />
        <TextField label="typeOfEmployment" source="typeOfEmployment" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
