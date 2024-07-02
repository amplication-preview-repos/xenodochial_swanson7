import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const CrimeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOfIncident" source="dateOfIncident" />
        <TextField label="ID" source="id" />
        <TextField label="incidentsOfCrime" source="incidentsOfCrime" />
        <TextField label="locationOfIncident" source="locationOfIncident" />
        <TextField label="natureOfCrime" source="natureOfCrime" />
        <TextField label="outcome" source="outcome" />
        <BooleanField
          label="reportedToAuthorities"
          source="reportedToAuthorities"
        />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
