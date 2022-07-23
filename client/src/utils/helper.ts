import axios from "axios";
const url = "/api/salaries";

export async function fetchHomepageSalary() {
  const response = await axios.get(url);
  const data = await response.data;
  return data;
}

export function findAverageSalary(salariesArr: number[]) {
  const sum = salariesArr.reduce(
    (prev: number, curr: number) => prev + curr,
    0
  );
  let average = sum / salariesArr.length;
  average = Number(average.toFixed(0));
  return average;
}
