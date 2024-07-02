import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SourceOfIncomeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SourceOfIncomes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField
          label="amountFromPrimarySource"
          source="amountFromPrimarySource"
        />
        <TextField
          label="amountFromSecondarySource"
          source="amountFromSecondarySource"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="frequencyOfIncome" source="frequencyOfIncome" />
        <TextField label="ID" source="id" />
        <TextField label="otherSourcesOfIncome" source="otherSourcesOfIncome" />
        <TextField
          label="primarySourceOfIncome"
          source="primarySourceOfIncome"
        />
        <TextField
          label="secondarySourceOfIncome"
          source="secondarySourceOfIncome"
        />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
