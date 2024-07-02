export type CrimeUpdateInput = {
  dateOfIncident?: Date | null;
  incidentsOfCrime?: string | null;
  locationOfIncident?: string | null;
  natureOfCrime?: "Option1" | null;
  outcome?: string | null;
  reportedToAuthorities?: boolean | null;
};
