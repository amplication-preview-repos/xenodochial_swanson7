import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

export const CrimeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateOfIncident" source="dateOfIncident" />
        <TextInput
          label="incidentsOfCrime"
          multiline
          source="incidentsOfCrime"
        />
        <TextInput label="locationOfIncident" source="locationOfIncident" />
        <SelectInput
          source="natureOfCrime"
          label="natureOfCrime"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="outcome" multiline source="outcome" />
        <BooleanInput
          label="reportedToAuthorities"
          source="reportedToAuthorities"
        />
      </SimpleForm>
    </Edit>
  );
};
