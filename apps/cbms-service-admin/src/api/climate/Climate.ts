export type Climate = {
  accessToClimateInformation: boolean | null;
  averageAnnualRainfall: number | null;
  averageTemperature: number | null;
  climateType?: "Option1" | null;
  commonWeatherEvents: string | null;
  createdAt: Date;
  id: string;
  impactOnLivelihood: string | null;
  seasonalChanges: string | null;
  updatedAt: Date;
};
