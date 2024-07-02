import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const PoliticalParticipationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
