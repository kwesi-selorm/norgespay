import { useEffect, useState } from "react";
import { findAverageSalary } from "../../utils/helper";
import { LoginProps, Salary } from "../../types";
import SalaryCard from "../../components/SalaryCard/SalaryCard";
import "./AllSalaries.css";
import { getAllSalaries } from "../../api/salaries";

const AllSalaries = (props: LoginProps) => {
  const [salaries, setSalaries] = useState<Salary[]>([]);
  const [filteredResults, setFilteredResults] = useState<Salary[]>([]);

  useEffect(() => {
    const fetchSalaries = async () => {
      const data = await getAllSalaries();
      setSalaries(data);
      setFilteredResults(data);
    };
    fetchSalaries();
  }, []);

  const filterSalaries = async (e: { target: { value: string } }) => {
    const searchParam = e.target.value;
    if (searchParam === "") setFilteredResults(salaries);
    const results = salaries.filter((s) =>
      s.jobTitle.toLowerCase().includes(searchParam.toLowerCase())
    );
    setFilteredResults(results);
  };

  return (
    //TODO: Add sign out button and implement sign out functionality.
    //TODO: Arrange salaries according to sector. Check skattetaten
    <>
      <div>
        <input
          type="text"
          className="searchBar"
          placeholder="Filter by job title "
          onChange={filterSalaries}
        />
      </div>
      <div className="salary-grid">
        {filteredResults?.map((salary: Salary) => {
          return (
            <div key={salary.id} className="salary-item">
              <SalaryCard
                jobTitle={salary.jobTitle}
                company={salary.company}
                salary={
                  salary.salary.length === 1
                    ? salary.salary[0]
                    : findAverageSalary(salary.salary)
                }
                city={salary.city}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllSalaries;
