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

export const ClimateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Climates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField
          label="accessToClimateInformation"
          source="accessToClimateInformation"
        />
        <TextField
          label="averageAnnualRainfall"
          source="averageAnnualRainfall"
        />
        <TextField label="averageTemperature" source="averageTemperature" />
        <TextField label="climateType" source="climateType" />
        <TextField label="commonWeatherEvents" source="commonWeatherEvents" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="impactOnLivelihood" source="impactOnLivelihood" />
        <TextField label="seasonalChanges" source="seasonalChanges" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
