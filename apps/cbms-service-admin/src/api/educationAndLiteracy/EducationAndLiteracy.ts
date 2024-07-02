export type EducationAndLiteracy = {
  createdAt: Date;
  currentlyEnrolled: boolean | null;
  fieldOfStudy: string | null;
  highestEducationalAttainment?: "Option1" | null;
  id: string;
  literacyLevel?: "Option1" | null;
  schoolAddress: string | null;
  schoolName: string | null;
  updatedAt: Date;
  vocationalTraining: boolean | null;
};
