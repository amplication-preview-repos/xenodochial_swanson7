import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const LivestockRaisingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField
          label="accessToVeterinaryServices"
          source="accessToVeterinaryServices"
        />
        <TextField label="annualProduction" source="annualProduction" />
        <TextField label="commonDiseases" source="commonDiseases" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="feedingPractices" source="feedingPractices" />
        <TextField label="ID" source="id" />
        <TextField label="numberOfAnimals" source="numberOfAnimals" />
        <TextField label="purposeOfRaising" source="purposeOfRaising" />
        <TextField
          label="typeOfLivestockRaised"
          source="typeOfLivestockRaised"
        />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
