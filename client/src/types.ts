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

export interface User {
  username: string;
  token: string;
}

export interface LoginProps {
  user: User;
  setUser: (user: User) => void;
}

export interface NavbarProps {
  user: User;
  setUser: (user: User) => void;
}
