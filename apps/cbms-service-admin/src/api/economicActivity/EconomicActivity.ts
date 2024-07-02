export type EconomicActivity = {
  createdAt: Date;
  employmentStatus?: "Option1" | null;
  hoursWorkedPerWeek: number | null;
  id: string;
  industry: string | null;
  monthlyIncome: number | null;
  occupation: string | null;
  typeOfEmployment?: "Option1" | null;
  updatedAt: Date;
  workplaceAddress: string | null;
};
