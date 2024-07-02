import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PoliticalParticipationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PoliticalParticipations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
