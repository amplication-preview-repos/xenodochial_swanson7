export type AgricultureFarming = {
  accessToAgriculturalSupport: boolean | null;
  annualYield: number | null;
  areaCultivated: number | null;
  commonPestsAndDiseases: string | null;
  createdAt: Date;
  farmingEquipmentUsed: string | null;
  id: string;
  irrigationMethod?: "Option1" | null;
  typeOfCropsGrown: string | null;
  updatedAt: Date;
};
