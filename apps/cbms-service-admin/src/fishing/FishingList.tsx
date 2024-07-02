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

export const FishingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Fishings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField
          label="accessToFishingSupport"
          source="accessToFishingSupport"
        />
        <TextField label="annualCatch" source="annualCatch" />
        <TextField label="commonIssuesFaced" source="commonIssuesFaced" />
        <TextField label="commonSpeciesCaught" source="commonSpeciesCaught" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="fishingGearUsed" source="fishingGearUsed" />
        <TextField label="fishingGrounds" source="fishingGrounds" />
        <TextField label="ID" source="id" />
        <TextField label="typeOfFishing" source="typeOfFishing" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
