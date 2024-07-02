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

export const HealthAndOtherCharacteristicsList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"HealthAndOtherCharacteristicsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="accessToHealthcare" source="accessToHealthcare" />
        <TextField label="chronicDiseases" source="chronicDiseases" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="disabilityStatus" source="disabilityStatus" />
        <BooleanField
          label="healthInsuranceStatus"
          source="healthInsuranceStatus"
        />
        <TextField label="ID" source="id" />
        <TextField
          label="primaryHealthProvider"
          source="primaryHealthProvider"
        />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="vaccinationStatus" source="vaccinationStatus" />
      </Datagrid>
    </List>
  );
};
