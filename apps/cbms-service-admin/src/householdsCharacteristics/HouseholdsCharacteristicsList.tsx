import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HouseholdsCharacteristicsList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"HouseholdsCharacteristicsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="headOfHousehold" source="headOfHousehold" />
        <TextField label="householdIncome" source="householdIncome" />
        <TextField label="ID" source="id" />
        <TextField label="mainSourceOfIncome" source="mainSourceOfIncome" />
        <TextField label="monthlyExpenses" source="monthlyExpenses" />
        <TextField label="numberOfDependents" source="numberOfDependents" />
        <TextField
          label="numberOfEmployedMembers"
          source="numberOfEmployedMembers"
        />
        <TextField label="numberOfMembers" source="numberOfMembers" />
        <TextField
          label="primaryLanguageSpoken"
          source="primaryLanguageSpoken"
        />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
