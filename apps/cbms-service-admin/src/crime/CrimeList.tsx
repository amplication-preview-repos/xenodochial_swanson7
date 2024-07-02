import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CrimeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Crimes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOfIncident" source="dateOfIncident" />
        <TextField label="ID" source="id" />
        <TextField label="incidentsOfCrime" source="incidentsOfCrime" />
        <TextField label="locationOfIncident" source="locationOfIncident" />
        <TextField label="natureOfCrime" source="natureOfCrime" />
        <TextField label="outcome" source="outcome" />
        <BooleanField
          label="reportedToAuthorities"
          source="reportedToAuthorities"
        />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
