import { CrimeWhereInput } from "./CrimeWhereInput";

export type CrimeListRelationFilter = {
  every?: CrimeWhereInput;
  some?: CrimeWhereInput;
  none?: CrimeWhereInput;
};
