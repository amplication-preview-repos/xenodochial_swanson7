import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const HealthAndOtherCharacteristicsEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
