import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const FishingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField
          label="accessToFishingSupport"
          source="accessToFishingSupport"
        />
        <TextField label="annualCatch" source="annualCatch" />
        <TextField label="commonIssuesFaced" source="commonIssuesFaced" />
        <TextField label="commonSpeciesCaught" source="commonSpeciesCaught" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="fishingGearUsed" source="fishingGearUsed" />
        <TextField label="fishingGrounds" source="fishingGrounds" />
        <TextField label="ID" source="id" />
        <TextField label="typeOfFishing" source="typeOfFishing" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
