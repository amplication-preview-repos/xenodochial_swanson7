import { PoliticalParticipationWhereInput } from "./PoliticalParticipationWhereInput";
import { PoliticalParticipationOrderByInput } from "./PoliticalParticipationOrderByInput";

export type PoliticalParticipationFindManyArgs = {
  where?: PoliticalParticipationWhereInput;
  orderBy?: Array<PoliticalParticipationOrderByInput>;
  skip?: number;
  take?: number;
};
