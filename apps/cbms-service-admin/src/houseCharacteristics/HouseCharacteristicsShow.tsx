import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const HouseCharacteristicsShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="constructionMaterial" source="constructionMaterial" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="electricityAccess" source="electricityAccess" />
        <TextField label="houseType" source="houseType" />
        <TextField label="ID" source="id" />
        <TextField label="numberOfRooms" source="numberOfRooms" />
        <TextField label="ownershipStatus" source="ownershipStatus" />
        <TextField label="sanitationFacility" source="sanitationFacility" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="waterSupply" source="waterSupply" />
        <TextField label="yearBuilt" source="yearBuilt" />
      </SimpleShowLayout>
    </Show>
  );
};
