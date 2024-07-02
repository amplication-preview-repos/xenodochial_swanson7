import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const LivestockRaisingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LivestockRaisings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField
          label="accessToVeterinaryServices"
          source="accessToVeterinaryServices"
        />
        <TextField label="annualProduction" source="annualProduction" />
        <TextField label="commonDiseases" source="commonDiseases" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="feedingPractices" source="feedingPractices" />
        <TextField label="ID" source="id" />
        <TextField label="numberOfAnimals" source="numberOfAnimals" />
        <TextField label="purposeOfRaising" source="purposeOfRaising" />
        <TextField
          label="typeOfLivestockRaised"
          source="typeOfLivestockRaised"
        />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
