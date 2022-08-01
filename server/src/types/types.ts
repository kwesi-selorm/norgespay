import { ValidationErrorItem } from "joi";

export type DBSalary = {
  jobTitle: string;
  company: string;
  city: string;
  salary: [number];
  dateAdded: string;
  sector: string;
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
  sector: string;
};

export type UpdatedSalary = {
  jobTitle: string;
  company: string;
  city: string;
  salary: number[];
  dateAdded: string;
  sector: string;
};

//REQUESTS
export type UpdateSalaryRequest = {
  params: { id: unknown };
  body: { updatedSalary: unknown; userId: unknown };
};

export type AddSalaryRequest = {
  body: {
    jobTitle: unknown;
    company: unknown;
    salary: unknown;
    city: unknown;
    sector: unknown;
  };
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
