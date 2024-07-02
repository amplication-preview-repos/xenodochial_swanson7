import { SourceOfIncomeWhereInput } from "./SourceOfIncomeWhereInput";
import { SourceOfIncomeOrderByInput } from "./SourceOfIncomeOrderByInput";

export type SourceOfIncomeFindManyArgs = {
  where?: SourceOfIncomeWhereInput;
  orderBy?: Array<SourceOfIncomeOrderByInput>;
  skip?: number;
  take?: number;
};
