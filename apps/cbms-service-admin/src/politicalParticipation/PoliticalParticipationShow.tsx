import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";

export const PoliticalParticipationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField
          label="activeInCommunityOrganizations"
          source="activeInCommunityOrganizations"
        />
        <DateField source="createdAt" label="Created At" />
        <BooleanField
          label="hasVotedInLastElection"
          source="hasVotedInLastElection"
        />
        <TextField label="ID" source="id" />
        <BooleanField
          label="interestInPublicOffice"
          source="interestInPublicOffice"
        />
        <BooleanField
          label="participationInPoliticalRallies"
          source="participationInPoliticalRallies"
        />
        <TextField
          label="politicalPartyAffiliation"
          source="politicalPartyAffiliation"
        />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField
          label="voterRegistrationStatus"
          source="voterRegistrationStatus"
        />
      </SimpleShowLayout>
    </Show>
  );
};
