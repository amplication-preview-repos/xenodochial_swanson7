import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const HealthAndOtherCharacteristicsShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accessToHealthcare" source="accessToHealthcare" />
        <TextField label="chronicDiseases" source="chronicDiseases" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="disabilityStatus" source="disabilityStatus" />
        <BooleanField
          label="healthInsuranceStatus"
          source="healthInsuranceStatus"
        />
        <TextField label="ID" source="id" />
        <TextField
          label="primaryHealthProvider"
          source="primaryHealthProvider"
        />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="vaccinationStatus" source="vaccinationStatus" />
      </SimpleShowLayout>
    </Show>
  );
};
