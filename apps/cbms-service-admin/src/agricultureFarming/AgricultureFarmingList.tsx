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

export const AgricultureFarmingList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AgricultureFarmings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField
          label="accessToAgriculturalSupport"
          source="accessToAgriculturalSupport"
        />
        <TextField label="annualYield" source="annualYield" />
        <TextField label="areaCultivated" source="areaCultivated" />
        <TextField
          label="commonPestsAndDiseases"
          source="commonPestsAndDiseases"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="farmingEquipmentUsed" source="farmingEquipmentUsed" />
        <TextField label="ID" source="id" />
        <TextField label="irrigationMethod" source="irrigationMethod" />
        <TextField label="typeOfCropsGrown" source="typeOfCropsGrown" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
