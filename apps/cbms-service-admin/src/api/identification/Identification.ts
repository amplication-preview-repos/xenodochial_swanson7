export type Identification = {
  address: string | null;
  contactNumber: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  fullName: string | null;
  gender?: "Option1" | null;
  id: string;
  maritalStatus?: "Option1" | null;
  nationalId: string | null;
  updatedAt: Date;
};
