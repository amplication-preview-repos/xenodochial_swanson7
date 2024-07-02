import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const EducationAndLiteracyList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EducationAndLiteracies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="currentlyEnrolled" source="currentlyEnrolled" />
        <TextField label="fieldOfStudy" source="fieldOfStudy" />
        <TextField
          label="highestEducationalAttainment"
          source="highestEducationalAttainment"
        />
        <TextField label="ID" source="id" />
        <TextField label="literacyLevel" source="literacyLevel" />
        <TextField label="schoolAddress" source="schoolAddress" />
        <TextField label="schoolName" source="schoolName" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="vocationalTraining" source="vocationalTraining" />
      </Datagrid>
    </List>
  );
};
