export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}
export type Gender = "male" | "female";

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn: string;
  dateOfBirth?: string;
}

export type EssentialPatient = Omit<Patient, "ssn">;
