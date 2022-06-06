import axios from "axios";
import { useEffect, useState } from "react";
import { findAverageSalary } from "../../services/helper";
import { LoginProps, Salary } from "../../types";
import SalaryCard from "../SalaryCard/SalaryCard";
import "./AllSalaries.css";

const AllSalaries = (props: LoginProps) => {
  const [salaries, setSalaries] = useState(null);

  async function fetchAllSalaries() {
    const response = await axios.get("/api/salaries/all");
    const data = await response.data;
    setSalaries(data);
  }

  useEffect(() => {
    fetchAllSalaries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const salaryCards = salaries?.map((salary: Salary, i: number) => (
    <SalaryCard
      key={i}
      jobTitle={salary.jobTitle}
      company={salary.company}
      salary={
        salary.salary.length === 1
          ? salary.salary[0]
          : findAverageSalary(salary.salary)
      }
      city={salary.city}
    ></SalaryCard>
  ));

  return <div className="salary-grid">{salaryCards}</div>;
};

export default AllSalaries;
