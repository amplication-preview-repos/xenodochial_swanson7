export type WasteManagement = {
  compostingPractices: boolean | null;
  createdAt: Date;
  frequencyOfWasteCollection?: "Option1" | null;
  hazardousWasteDisposal?: "Option1" | null;
  id: string;
  recyclingPractices: boolean | null;
  updatedAt: Date;
  wasteDisposalMethod?: "Option1" | null;
  wasteSegregationPractices: boolean | null;
};
