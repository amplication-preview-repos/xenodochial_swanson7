import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";

export const EducationAndLiteracyShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="currentlyEnrolled" source="currentlyEnrolled" />
        <TextField label="fieldOfStudy" source="fieldOfStudy" />
        <TextField
          label="highestEducationalAttainment"
          source="highestEducationalAttainment"
        />
        <TextField label="ID" source="id" />
        <TextField label="literacyLevel" source="literacyLevel" />
        <TextField label="schoolAddress" source="schoolAddress" />
        <TextField label="schoolName" source="schoolName" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="vocationalTraining" source="vocationalTraining" />
      </SimpleShowLayout>
    </Show>
  );
};
