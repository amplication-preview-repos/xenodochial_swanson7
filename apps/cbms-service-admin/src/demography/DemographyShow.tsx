import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const DemographyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="age" source="age" />
        <TextField label="citizenship" source="citizenship" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="disabilityStatus" source="disabilityStatus" />
        <TextField
          label="educationalAttainment"
          source="educationalAttainment"
        />
        <TextField label="employmentStatus" source="employmentStatus" />
        <TextField label="ethnicity" source="ethnicity" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="maritalStatus" source="maritalStatus" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
