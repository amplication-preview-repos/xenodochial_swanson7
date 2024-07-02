import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const HealthAndOtherCharacteristicsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="accessToHealthcare"
          label="accessToHealthcare"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="chronicDiseases" multiline source="chronicDiseases" />
        <BooleanInput label="disabilityStatus" source="disabilityStatus" />
        <BooleanInput
          label="healthInsuranceStatus"
          source="healthInsuranceStatus"
        />
        <TextInput
          label="primaryHealthProvider"
          source="primaryHealthProvider"
        />
        <BooleanInput label="vaccinationStatus" source="vaccinationStatus" />
      </SimpleForm>
    </Create>
  );
};
