import { CrimeWhereUniqueInput } from "./CrimeWhereUniqueInput";
import { CrimeUpdateInput } from "./CrimeUpdateInput";

export type UpdateCrimeArgs = {
  where: CrimeWhereUniqueInput;
  data: CrimeUpdateInput;
};
