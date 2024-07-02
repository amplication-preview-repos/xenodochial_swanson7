import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const SourceOfIncomeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="amountFromPrimarySource"
          source="amountFromPrimarySource"
        />
        <TextField
          label="amountFromSecondarySource"
          source="amountFromSecondarySource"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="frequencyOfIncome" source="frequencyOfIncome" />
        <TextField label="ID" source="id" />
        <TextField label="otherSourcesOfIncome" source="otherSourcesOfIncome" />
        <TextField
          label="primarySourceOfIncome"
          source="primarySourceOfIncome"
        />
        <TextField
          label="secondarySourceOfIncome"
          source="secondarySourceOfIncome"
        />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
