import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const WaterAndSanitationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WaterAndSanitations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField
          label="accessToSanitationFacility"
          source="accessToSanitationFacility"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="frequencyOfWasteCollection"
          source="frequencyOfWasteCollection"
        />
        <TextField label="ID" source="id" />
        <TextField
          label="sanitationFacilityType"
          source="sanitationFacilityType"
        />
        <DateField source="updatedAt" label="Updated At" />
        <TextField
          label="wastewaterDisposalMethod"
          source="wastewaterDisposalMethod"
        />
        <TextField label="waterAvailability" source="waterAvailability" />
        <TextField label="waterQuality" source="waterQuality" />
        <TextField label="waterSource" source="waterSource" />
      </Datagrid>
    </List>
  );
};
