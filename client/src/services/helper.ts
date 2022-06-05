import axios from "axios";
const url = "http://localhost:3001/api/salaries";
const loginUrl = "http://localhost:3001/api/login";

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
