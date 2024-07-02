import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OtherSourceOfIncomeList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OtherSourceOfIncomes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="frequency" source="frequency" />
        <TextField label="ID" source="id" />
        <TextField label="notes" source="notes" />
        <TextField label="sourceDescription" source="sourceDescription" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
