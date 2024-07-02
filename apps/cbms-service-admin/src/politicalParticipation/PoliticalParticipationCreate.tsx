import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const PoliticalParticipationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="activeInCommunityOrganizations"
          source="activeInCommunityOrganizations"
        />
        <BooleanInput
          label="hasVotedInLastElection"
          source="hasVotedInLastElection"
        />
        <BooleanInput
          label="interestInPublicOffice"
          source="interestInPublicOffice"
        />
        <BooleanInput
          label="participationInPoliticalRallies"
          source="participationInPoliticalRallies"
        />
        <TextInput
          label="politicalPartyAffiliation"
          source="politicalPartyAffiliation"
        />
        <BooleanInput
          label="voterRegistrationStatus"
          source="voterRegistrationStatus"
        />
      </SimpleForm>
    </Create>
  );
};
