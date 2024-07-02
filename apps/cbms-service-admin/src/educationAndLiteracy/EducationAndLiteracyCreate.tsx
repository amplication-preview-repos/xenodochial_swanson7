import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const EducationAndLiteracyCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="currentlyEnrolled" source="currentlyEnrolled" />
        <TextInput label="fieldOfStudy" source="fieldOfStudy" />
        <SelectInput
          source="highestEducationalAttainment"
          label="highestEducationalAttainment"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="literacyLevel"
          label="literacyLevel"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="schoolAddress" multiline source="schoolAddress" />
        <TextInput label="schoolName" source="schoolName" />
        <BooleanInput label="vocationalTraining" source="vocationalTraining" />
      </SimpleForm>
    </Create>
  );
};
