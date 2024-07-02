import { PoliticalParticipation as TPoliticalParticipation } from "../api/politicalParticipation/PoliticalParticipation";

export const POLITICALPARTICIPATION_TITLE_FIELD = "politicalPartyAffiliation";

export const PoliticalParticipationTitle = (
  record: TPoliticalParticipation
): string => {
  return record.politicalPartyAffiliation?.toString() || String(record.id);
};
