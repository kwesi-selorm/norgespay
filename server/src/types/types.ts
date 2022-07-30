import { ValidationErrorItem } from "joi";

export type DBSalary = {
  jobTitle: string;
  company: string;
  city: string;
  salary: [number];
  dateAdded: string;
};

export type NewSalary = Omit<DBSalary, "dateAdded">;

export type AddedSalary = {
  jobTitle: string;
  company: string;
  city: string;
  salary: number;
};

export type Sector = "Oil & Gas" | "Banking" | "Insurance" | "Software & Tech";

//REQUESTS
export type UpdateSalaryRequest = {
  params: { id: unknown };
  body: { updatedSalary: unknown };
};

export type AddSalaryRequest = {
  body: { jobTitle: unknown; company: unknown; salary: unknown; city: unknown };
};

export type LoginRequest = {
  body: { username: unknown; password: unknown };
};

//Response type
export type Response = {
  status: (arg0: number) => {
    (): unknown;
    new (): unknown;
    json: { (arg0: unknown): void; new (): unknown };
  };
  json: { (arg0: unknown): void; new (): unknown };
  sendStatus: (arg0: number) => void;
  send: {
    (arg0: { message: string | ValidationErrorItem[] }): void;
    new (): unknown;
  };
};
