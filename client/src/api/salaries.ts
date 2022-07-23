import axios from "axios";
import { Salary } from "../types";

/* Creating an axios instance with a baseURL of /api/salaries. */
export const api = axios.create({
  baseURL: "/api/salaries",
});

/**
 * This function returns a promise that resolves to an array of Salary objects.
 * @returns Salary[]
 */
export async function getAllSalaries() {
  const { data }: { data: Salary[] } = await api.get("/all");
  return data;
}

export async function addNewSalary(
  jobTitle: string,
  company: string,
  city: string,
  salary: number
) {
  const data = { jobTitle, company, city, salary },
    config = { headers: { "Content-Type": "application/json" } };
  const response = await api.post("/", data, config);
  return response.data;
}

//TODO: Add token to header and update server controller to verify user
export async function updateSalary(id: number, salary: number) {
  const userToken = window.localStorage.getItem("userToken");
  const config = {
    headers: {
      Authorization: `bearer ${userToken}`,
      "Content-Type": "application/json",
    },
  };

  return await api.put(`/${id}`, { salary }, config);
}
