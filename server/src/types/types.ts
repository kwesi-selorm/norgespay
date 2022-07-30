import { ValidationErrorItem } from "joi";

export type DBSalary = {
  jobTitle: string;
  company: string;
  city: string;
  salary: [number];
  dateAdded: string;
};

export type NewSalary = Omit<DBSalary, "dateAdded">;

export type NewUser = {
  email: string;
  username: string;
  password: string;
};

export type AddedSalary = {
  jobTitle: string;
  company: string;
  city: string;
  salary: number;
  userId: string;
};

export type UpdatedSalary = {
  jobTitle: string;
  company: string;
  city: string;
  salary: number[];
  dateAdded: string;
};

export type Sector = "Oil & Gas" | "Banking" | "Insurance" | "Software & Tech";

//REQUESTS
export type UpdateSalaryRequest = {
  params: { id: unknown };
  body: { updatedSalary: unknown; userId: unknown };
};

export type AddSalaryRequest = {
  body: { jobTitle: unknown; company: unknown; salary: unknown; city: unknown };
};

export interface LoginRequest {
  body: { username: unknown; password: unknown };
}

export interface SignUpRequest {
  body: {
    email: unknown;
    username: unknown;
    password: unknown;
    confirmPassword: unknown;
  };
}

//RESPONSE
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
