import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const EconomicActivityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="employmentStatus" source="employmentStatus" />
        <TextField label="hoursWorkedPerWeek" source="hoursWorkedPerWeek" />
        <TextField label="ID" source="id" />
        <TextField label="industry" source="industry" />
        <TextField label="monthlyIncome" source="monthlyIncome" />
        <TextField label="occupation" source="occupation" />
        <TextField label="typeOfEmployment" source="typeOfEmployment" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="workplaceAddress" source="workplaceAddress" />
      </SimpleShowLayout>
    </Show>
  );
};
