export type Crime = {
  createdAt: Date;
  dateOfIncident: Date | null;
  id: string;
  incidentsOfCrime: string | null;
  locationOfIncident: string | null;
  natureOfCrime?: "Option1" | null;
  outcome: string | null;
  reportedToAuthorities: boolean | null;
  updatedAt: Date;
};
