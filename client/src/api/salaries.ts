import axios from "axios";
import { Salary, User } from "../utils/types";

//AXIOS INSTANCE WITH BASEURL "/api/salaries"//
export const api = axios.create({
  baseURL: "/api/salaries",
});

//HOMEPAGE SALARY//
export async function fetchHomepageSalary() {
  const response = await api.get("/");
  const data = await response.data;
  return data;
}

//ALL SALARIES//
export async function getAllSalaries(): Promise<Salary[]> {
  return api.get("/all").then((response) => response.data);
}

export async function addNewSalary(
  jobTitle: unknown,
  company: unknown,
  city: unknown,
  salary: unknown,
  sector: unknown
) {
  const user: User = JSON.parse(window.localStorage.getItem("user")),
    userId = user.id,
    data = { jobTitle, company, city, salary, sector, userId };
  const config = { headers: { "Content-Type": "application/json" } },
    response = await api.post("/", data, config);
  return response.data;
}

//TODO: Salaries can only be updated by the user they were added by. Implement authentication using the userId
export async function updateSalary(
  id: string,
  updatedSalary: Omit<Salary, "id">
) {
  const user: User = JSON.parse(window.localStorage.getItem("user")),
    userId = user.id,
    data = { updatedSalary, userId };
  const config = {
    headers: {
      // Authorization: `bearer ${user.token}`,
      "Content-Type": "application/json",
    },
  };
  await api.put(`/${id}`, data, config);
}
