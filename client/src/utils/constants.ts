import { NewSalaryInputs } from "./types";

export const initialNotification = { message: "", className: "" };

export const initialInputs: NewSalaryInputs = {
  jobTitle: "",
  company: "",
  salary: "",
  city: "",
  sector: "",
};

/*
TODO: Write a chooseSectorValue function when a new salary is created and store as the 'sector' field value
*/
export const sectors: Array<string> = [
  "Agriculture",
  "Business",
  "Communication Services",
  "Construction",
  "Consulting",
  "Consumer Staples and Discretionary",
  "Education and Research",
  "Energy (O&G, Renewables,etc.)",
  "Entertainment",
  "Financials (Banking, Insurance, etc.)",
  "General Engineering",
  "Healthcare",
  "Industrials",
  "Information Technology",
  "Legal and Consulting Services",
  "Materials",
  "Real Estate",
  "Utilities",
  "Waste Management",
  "Others",
];
