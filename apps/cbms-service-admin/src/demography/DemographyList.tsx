import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const DemographyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Demographies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="age" source="age" />
        <TextField label="citizenship" source="citizenship" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="disabilityStatus" source="disabilityStatus" />
        <TextField
          label="educationalAttainment"
          source="educationalAttainment"
        />
        <TextField label="employmentStatus" source="employmentStatus" />
        <TextField label="ethnicity" source="ethnicity" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="maritalStatus" source="maritalStatus" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
