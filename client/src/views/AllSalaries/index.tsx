import { useEffect, useState } from "react";
import { findAverageSalary } from "../../utils/salary";
import { LoginProps, Salary } from "../../types";
import SalaryCard from "../../components/SalaryCard";
import "./AllSalaries.css";
import { getAllSalaries } from "../../api/salaries";
import SearchFilter from "./SearchFilter";

const AllSalaries = (props: LoginProps) => {
  const [salaries, setSalaries] = useState<Salary[]>([]);
  const [filter, setFilter] = useState<string>("");
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
    const searchParam = e.target.value.toLowerCase();

    switch (filter) {
      case "":
        setFilteredResults(salaries);
        break;
      case "jobTitle":
        const jobResults = salaries.filter((s) =>
          s.jobTitle.toLowerCase().includes(searchParam)
        );
        setFilteredResults(jobResults);
        break;
      case "company":
        const companyResults = salaries.filter((s) =>
          s.company.toLowerCase().includes(searchParam)
        );
        setFilteredResults(companyResults);
        break;
      case "city":
        const cityResults = salaries.filter((s) =>
          s.city.toLowerCase().includes(searchParam)
        );
        setFilteredResults(cityResults);
        break;
      default:
        setFilteredResults(salaries);
    }
  };

  return (
    //TODO: Add sign out button and implement sign out functionality. On login, icon wil be in top right corner and when clicked will show a drop-down with signout option
    //TODO: Arrange salaries according to sector. Check skattetaten
    <>
      <SearchFilter
        filter={filter}
        setFilter={setFilter}
        filterSalaries={filterSalaries}
      />
      <div className="salary-box">
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
