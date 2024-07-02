import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SalariesAndWagesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SalariesAndWagesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="employerName" source="employerName" />
        <TextField label="frequencyOfPayment" source="frequencyOfPayment" />
        <TextField label="ID" source="id" />
        <TextField label="jobTitle" source="jobTitle" />
        <TextField label="monthlySalary" source="monthlySalary" />
        <TextField label="otherBenefits" source="otherBenefits" />
        <TextField label="typeOfEmployment" source="typeOfEmployment" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
