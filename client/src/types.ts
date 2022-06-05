export type Salary = {
  jobTitle: string;
  salary: number[];
  company: string;
  city: string;
};

export interface SalaryProps {
  jobTitle: String;
  company: String;
  salary: Number;
  city: String;
}

export type User = {
  username: string;
  token: string;
};

export interface LoginProps {
  user: User;
  setUser: (user: User) => void;
}
