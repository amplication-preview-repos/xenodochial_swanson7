import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const HouseholdsCharacteristicsShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="headOfHousehold" source="headOfHousehold" />
        <TextField label="householdIncome" source="householdIncome" />
        <TextField label="ID" source="id" />
        <TextField label="mainSourceOfIncome" source="mainSourceOfIncome" />
        <TextField label="monthlyExpenses" source="monthlyExpenses" />
        <TextField label="numberOfDependents" source="numberOfDependents" />
        <TextField
          label="numberOfEmployedMembers"
          source="numberOfEmployedMembers"
        />
        <TextField label="numberOfMembers" source="numberOfMembers" />
        <TextField
          label="primaryLanguageSpoken"
          source="primaryLanguageSpoken"
        />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
