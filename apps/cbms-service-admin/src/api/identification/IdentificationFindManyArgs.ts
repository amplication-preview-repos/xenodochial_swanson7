import { IdentificationWhereInput } from "./IdentificationWhereInput";
import { IdentificationOrderByInput } from "./IdentificationOrderByInput";

export type IdentificationFindManyArgs = {
  where?: IdentificationWhereInput;
  orderBy?: Array<IdentificationOrderByInput>;
  skip?: number;
  take?: number;
};
