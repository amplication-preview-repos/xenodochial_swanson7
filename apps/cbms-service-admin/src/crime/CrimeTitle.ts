import { Crime as TCrime } from "../api/crime/Crime";

export const CRIME_TITLE_FIELD = "locationOfIncident";

export const CrimeTitle = (record: TCrime): string => {
  return record.locationOfIncident?.toString() || String(record.id);
};
