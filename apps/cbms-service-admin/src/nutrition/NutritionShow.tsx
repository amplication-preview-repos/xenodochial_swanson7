import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";

export const NutritionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
