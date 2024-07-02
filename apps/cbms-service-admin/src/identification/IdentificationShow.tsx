import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const IdentificationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="contactNumber" source="contactNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="email" source="email" />
        <TextField label="fullName" source="fullName" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="maritalStatus" source="maritalStatus" />
        <TextField label="nationalID" source="nationalId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
