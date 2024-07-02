import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EconomicActivityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EconomicActivities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
