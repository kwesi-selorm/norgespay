import { useEffect, useState } from "react";
import { findAverageSalary } from "../../utils/salary";
import { AllSalariesProps, Salary } from "../../types";
import SalaryCard from "../../components/SalaryCard";
import "../../styles/AllSalaries.css";
import { getAllSalaries } from "../../api/salaries";
import SearchFilter from "./SearchFilter";
import { useQuery } from "@tanstack/react-query";

const AllSalaries = ({ loggedUser, setLoggedUser }: AllSalariesProps) => {
  const [filter, setFilter] = useState<string>("");
  const [, setFilteredSalaries] = useState<Salary[]>([]);
  const { data, isLoading, error } = useQuery(["salaries"], getAllSalaries); //data works

  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");
    setLoggedUser(JSON.parse(storedUser));
  }, [loggedUser, setLoggedUser]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  //FIXME
  const filterSalaries = (e: { target: { value: string } }) => {
    const searchParam = e.target.value.toLowerCase();

    switch (filter) {
      case "":
        setFilteredSalaries(data);
        break;
      case "jobTitle":
        const jobResults = data.filter((s) =>
          s.jobTitle.toLowerCase().includes(searchParam)
        );
        setFilteredSalaries(jobResults);
        break;
      case "company":
        const companyResults = data.filter((s) =>
          s.company.toLowerCase().includes(searchParam)
        );
        setFilteredSalaries(companyResults);
        break;
      case "city":
        const cityResults = data.filter((s) =>
          s.city.toLowerCase().includes(searchParam)
        );
        setFilteredSalaries(cityResults);
        break;
      default:
        setFilteredSalaries(data);
    }
  };

  return (
    //TODO: Arrange salaries according to sector. Check skattetaten
    <>
      <SearchFilter
        filter={filter}
        setFilter={setFilter}
        filterSalaries={filterSalaries}
      />
      <div className="salary-box">
        {data.map((salary) => {
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
                dateAdded={salary.dateAdded}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllSalaries;
