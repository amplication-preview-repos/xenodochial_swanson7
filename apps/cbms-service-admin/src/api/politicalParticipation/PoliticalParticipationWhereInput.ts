import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PoliticalParticipationWhereInput = {
  activeInCommunityOrganizations?: BooleanNullableFilter;
  hasVotedInLastElection?: BooleanNullableFilter;
  id?: StringFilter;
  interestInPublicOffice?: BooleanNullableFilter;
  participationInPoliticalRallies?: BooleanNullableFilter;
  politicalPartyAffiliation?: StringNullableFilter;
  voterRegistrationStatus?: BooleanNullableFilter;
};
