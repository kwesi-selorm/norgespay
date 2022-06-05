import axios from "axios";
const url = "http://localhost:3001/api/salaries";
const loginUrl = "http://localhost:3001/api/login";
const signupUrl = "http://localhost:3001/api/signup";

export async function fetchHomepageSalary() {
  const response = await axios.get(url);
  const data = await response.data;
  return data;
}

export async function submitLoginDetails(username: string, password: string) {
  const data = { username, password },
    config = { headers: { "Content-Type": "application/json" } };

  const response = await axios.post(loginUrl, data, config);
  const responseData = await response.data;
  return responseData;
}

export async function submitSignupDetails(
  email: string,
  username: string,
  password: string
) {
  const data = { email, username, password },
    config = { headers: { "Content-Type": "application/json" } };

  const response = await axios.post(signupUrl, data, config);
  const responseData = await response.data;
  return responseData;
}

export async function fetchAllSalaries() {
  const response = await axios.get(url + "/all");
  const data = response.data;
  return data;
}

export function findAverageSalary(salariesArr: number[]) {
  const sum = salariesArr.reduce(
    (prev: number, curr: number) => prev + curr,
    0
  );
  const average = sum / salariesArr.length;
  return average;
}

export async function addNewSalary(
  jobTitle: string,
  company: string,
  city: string,
  salary: number
) {
  const data = { jobTitle, company, city, salary },
    config = { headers: { "Content-Type": "application/json" } };
  const response = await axios.post(url, data, config);
  return response.data;
}

export async function updateSalary(id: number, salary: number) {
  const config = {
      headers: { "Content-Type": "application/json" },
    },
    updateUrl = `${url}/${id}`;
  await axios.put(updateUrl, { salary }, config);
}
