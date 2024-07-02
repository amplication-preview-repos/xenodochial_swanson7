export type HouseholdsCharacteristics = {
  createdAt: Date;
  headOfHousehold: string | null;
  householdIncome: number | null;
  id: string;
  mainSourceOfIncome?: "Option1" | null;
  monthlyExpenses: number | null;
  numberOfDependents: number | null;
  numberOfEmployedMembers: number | null;
  numberOfMembers: number | null;
  primaryLanguageSpoken: string | null;
  updatedAt: Date;
};
