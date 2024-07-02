import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const ClimateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="accessToClimateInformation"
          source="accessToClimateInformation"
        />
        <NumberInput
          label="averageAnnualRainfall"
          source="averageAnnualRainfall"
        />
        <NumberInput label="averageTemperature" source="averageTemperature" />
        <SelectInput
          source="climateType"
          label="climateType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="commonWeatherEvents"
          multiline
          source="commonWeatherEvents"
        />
        <TextInput
          label="impactOnLivelihood"
          multiline
          source="impactOnLivelihood"
        />
        <TextInput label="seasonalChanges" multiline source="seasonalChanges" />
      </SimpleForm>
    </Create>
  );
};
