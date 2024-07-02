import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const NutritionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="accessToNutritiousFood"
          source="accessToNutritiousFood"
        />
        <TextInput label="dietaryIntake" multiline source="dietaryIntake" />
        <NumberInput label="height" source="height" />
        <SelectInput
          source="mealFrequency"
          label="mealFrequency"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="nutritionalSupplements"
          multiline
          source="nutritionalSupplements"
        />
        <TextInput
          label="specialDietaryNeeds"
          multiline
          source="specialDietaryNeeds"
        />
        <NumberInput label="weight" source="weight" />
      </SimpleForm>
    </Create>
  );
};
