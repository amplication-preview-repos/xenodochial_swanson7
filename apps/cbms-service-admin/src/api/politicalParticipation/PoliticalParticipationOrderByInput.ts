import { SortOrder } from "../../util/SortOrder";

export type PoliticalParticipationOrderByInput = {
  activeInCommunityOrganizations?: SortOrder;
  createdAt?: SortOrder;
  hasVotedInLastElection?: SortOrder;
  id?: SortOrder;
  interestInPublicOffice?: SortOrder;
  participationInPoliticalRallies?: SortOrder;
  politicalPartyAffiliation?: SortOrder;
  updatedAt?: SortOrder;
  voterRegistrationStatus?: SortOrder;
};
