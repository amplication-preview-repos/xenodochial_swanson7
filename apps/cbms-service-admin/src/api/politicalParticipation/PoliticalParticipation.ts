export type PoliticalParticipation = {
  activeInCommunityOrganizations: boolean | null;
  createdAt: Date;
  hasVotedInLastElection: boolean | null;
  id: string;
  interestInPublicOffice: boolean | null;
  participationInPoliticalRallies: boolean | null;
  politicalPartyAffiliation: string | null;
  updatedAt: Date;
  voterRegistrationStatus: boolean | null;
};
