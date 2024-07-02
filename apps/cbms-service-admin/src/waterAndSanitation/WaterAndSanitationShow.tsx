import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";

export const WaterAndSanitationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField
          label="accessToSanitationFacility"
          source="accessToSanitationFacility"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="frequencyOfWasteCollection"
          source="frequencyOfWasteCollection"
        />
        <TextField label="ID" source="id" />
        <TextField
          label="sanitationFacilityType"
          source="sanitationFacilityType"
        />
        <DateField source="updatedAt" label="Updated At" />
        <TextField
          label="wastewaterDisposalMethod"
          source="wastewaterDisposalMethod"
        />
        <TextField label="waterAvailability" source="waterAvailability" />
        <TextField label="waterQuality" source="waterQuality" />
        <TextField label="waterSource" source="waterSource" />
      </SimpleShowLayout>
    </Show>
  );
};
