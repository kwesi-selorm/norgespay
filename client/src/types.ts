export type Salary = {
  jobTitle: string;
  salary: number[];
  company: string;
  city: string;
  id?: string;
  dateAdded: string;
};

export interface SalaryCardProps {
  jobTitle: string;
  company: string;
  salary: number;
  city: string;
  id?: string;
  dateAdded?: string;
}

export interface User {
  username: string;
  token: string;
}

export interface LoginProps {
  user: User;
  setUser: (user: User) => void;
}

export interface AllSalariesProps {
  loggedUser: User;
  setLoggedUser: (user: User) => void;
}

export interface NavbarProps {
  loggedUser: User;
  setLoggedUser: (user: User) => void;
}
