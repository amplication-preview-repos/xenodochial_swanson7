export type Demography = {
  age: number | null;
  citizenship: string | null;
  createdAt: Date;
  disabilityStatus: boolean | null;
  educationalAttainment?: "Option1" | null;
  employmentStatus?: "Option1" | null;
  ethnicity: string | null;
  gender?: "Option1" | null;
  id: string;
  maritalStatus?: "Option1" | null;
  updatedAt: Date;
};
