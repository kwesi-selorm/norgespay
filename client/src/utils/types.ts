export type Salary = {
  jobTitle: string;
  salary: number[];
  company: string;
  city: string;
  id?: string;
  dateAdded: string;
  sector?: string;
};

export type SalaryCardProps = {
  jobTitle: string;
  company: string;
  salary: number;
  city: string;
  sector?: string;
  id?: string;
  dateAdded?: string;
};

export interface User {
  username: string;
  token: string;
  id: string;
}

export interface LoginProps {
  user: User;
  setUser: (user: User) => void;
}

export type NewSalaryInputs = {
  jobTitle: string;
  company: string;
  salary: string;
  city: string;
  sector: string;
};

export type NewNotification = {
  message: string;
  className: string;
};

export type GroupedSalaries = {
  sector: string;
  salaries: Salary[];
};
