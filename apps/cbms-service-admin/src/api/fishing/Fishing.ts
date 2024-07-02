export type Fishing = {
  accessToFishingSupport: boolean | null;
  annualCatch: number | null;
  commonIssuesFaced: string | null;
  commonSpeciesCaught: string | null;
  createdAt: Date;
  fishingGearUsed: string | null;
  fishingGrounds: string | null;
  id: string;
  typeOfFishing?: "Option1" | null;
  updatedAt: Date;
};
