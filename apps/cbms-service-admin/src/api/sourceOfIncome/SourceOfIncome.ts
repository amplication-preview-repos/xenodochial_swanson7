export type SourceOfIncome = {
  amountFromPrimarySource: number | null;
  amountFromSecondarySource: number | null;
  createdAt: Date;
  frequencyOfIncome?: "Option1" | null;
  id: string;
  otherSourcesOfIncome: string | null;
  primarySourceOfIncome?: "Option1" | null;
  secondarySourceOfIncome?: "Option1" | null;
  updatedAt: Date;
};
