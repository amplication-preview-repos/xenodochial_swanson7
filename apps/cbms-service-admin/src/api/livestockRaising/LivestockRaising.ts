export type LivestockRaising = {
  accessToVeterinaryServices: boolean | null;
  annualProduction: number | null;
  commonDiseases: string | null;
  createdAt: Date;
  feedingPractices: string | null;
  id: string;
  numberOfAnimals: number | null;
  purposeOfRaising?: "Option1" | null;
  typeOfLivestockRaised: string | null;
  updatedAt: Date;
};
