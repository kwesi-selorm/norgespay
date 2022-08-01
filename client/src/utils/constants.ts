import { NewSalaryInputs } from "./types";

export const initialNotification = { message: "", className: "" };

export const initialInputs: NewSalaryInputs = {
  jobTitle: "",
  company: "",
  salary: 0,
  city: "",
};

/*
TODO: Write a chooseSectorValue function when a new salary is created and store as the 'sector' field value
*/
export const sectors: Object[] = [
  { Agriculture: "agriculture" },
  { Business: "business" },
  { "Communication Services": "communications" },
  { Construction: "construction" },
  { Consulting: "consulting" },
  { "Consumer Staples and Discretionary": "consumer" },
  { "Education and Research": "education" },
  { "Energy (O&G, Renewables,etc.)": "energy" },
  { Entertainment: "entertainment" },
  { "Financials (Banking, Insurance, etc.)": "financial" },
  { "General Engineering": "engineering" },
  { Healthcare: "healthcare" },
  { Industrials: "industry" },
  { "Information Technology": "tech" },
  { "Legal and Consulting Services": "legal-consulting" },
  { Materials: "materials" },
  { "Real Estate": "real-estate" },
  { Utilities: "utilities" },
  { "Waste Management": "waste" },
  { Others: "others" },
];
