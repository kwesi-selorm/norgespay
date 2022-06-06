export type Salary = {
  jobTitle: string;
  salary: number[];
  company: string;
  city: string;
  id?: number;
};

export interface SalaryCardProps {
  jobTitle: String;
  company: String;
  salary: Number;
  city: String;
  id?: number;
}

export type User = {
  username: string;
  token: string;
};

export interface LoginProps {
  user: User;
  setUser: (user: User) => void;
}
