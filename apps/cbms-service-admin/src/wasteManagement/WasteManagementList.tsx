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

export const WasteManagementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WasteManagements"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField
          label="compostingPractices"
          source="compostingPractices"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="frequencyOfWasteCollection"
          source="frequencyOfWasteCollection"
        />
        <TextField
          label="hazardousWasteDisposal"
          source="hazardousWasteDisposal"
        />
        <TextField label="ID" source="id" />
        <BooleanField label="recyclingPractices" source="recyclingPractices" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wasteDisposalMethod" source="wasteDisposalMethod" />
        <BooleanField
          label="wasteSegregationPractices"
          source="wasteSegregationPractices"
        />
      </Datagrid>
    </List>
  );
};
