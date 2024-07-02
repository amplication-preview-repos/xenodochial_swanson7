import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";

export const WasteManagementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField
          label="compostingPractices"
          source="compostingPractices"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="frequencyOfWasteCollection"
          source="frequencyOfWasteCollection"
        />
        <TextField
          label="hazardousWasteDisposal"
          source="hazardousWasteDisposal"
        />
        <TextField label="ID" source="id" />
        <BooleanField label="recyclingPractices" source="recyclingPractices" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wasteDisposalMethod" source="wasteDisposalMethod" />
        <BooleanField
          label="wasteSegregationPractices"
          source="wasteSegregationPractices"
        />
      </SimpleShowLayout>
    </Show>
  );
};
