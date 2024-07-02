import { CrimeWhereInput } from "./CrimeWhereInput";
import { CrimeOrderByInput } from "./CrimeOrderByInput";

export type CrimeFindManyArgs = {
  where?: CrimeWhereInput;
  orderBy?: Array<CrimeOrderByInput>;
  skip?: number;
  take?: number;
};
