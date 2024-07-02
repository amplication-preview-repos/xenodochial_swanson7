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

export const HousingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Housings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="constructionMaterial" source="constructionMaterial" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="electricityAccess" source="electricityAccess" />
        <TextField label="houseType" source="houseType" />
        <TextField label="ID" source="id" />
        <TextField label="neighborhoodType" source="neighborhoodType" />
        <TextField label="numberOfRooms" source="numberOfRooms" />
        <TextField label="ownershipStatus" source="ownershipStatus" />
        <TextField
          label="proximityToEssentialServices"
          source="proximityToEssentialServices"
        />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="yearBuilt" source="yearBuilt" />
      </Datagrid>
    </List>
  );
};
