import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const ClimateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
