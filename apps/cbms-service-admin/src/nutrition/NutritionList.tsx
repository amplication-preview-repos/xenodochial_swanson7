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

export const NutritionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Nutritions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField
          label="accessToNutritiousFood"
          source="accessToNutritiousFood"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dietaryIntake" source="dietaryIntake" />
        <TextField label="height" source="height" />
        <TextField label="ID" source="id" />
        <TextField label="mealFrequency" source="mealFrequency" />
        <TextField
          label="nutritionalSupplements"
          source="nutritionalSupplements"
        />
        <TextField label="specialDietaryNeeds" source="specialDietaryNeeds" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weight" source="weight" />
      </Datagrid>
    </List>
  );
};
