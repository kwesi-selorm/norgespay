import { useEffect } from "react";
import { findAverageSalary } from "../../fns/salary-fns";
import {
  Salary,
  User,
  NewNotification,
  GroupedSalaries,
} from "../../utils/types";
import SalaryCard from "../../components/SalaryCard";
import "../../styles/AllSalaries.css";
import { getAllSalaries } from "../../api/salaries";
import SearchFilter from "./SearchFilter";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  displayState,
  loggedUserState,
  notificationState,
  salariesState,
} from "../../recoil/atoms";
import { groupedSalariesState } from "../../recoil/selectors";
import Notification from "../../components/Notification";
import Sector from "../../components/Sector";

const AllSalaries = () => {
  const [, setSalaries] = useRecoilState<Salary[]>(salariesState);
  const [, setLoggedUser] = useRecoilState<User>(loggedUserState);
  const { data, isLoading, error } = useQuery(["salaries"], getAllSalaries, {
    refetchOnMount: true,
  });
  const { message, className } =
    useRecoilValue<NewNotification>(notificationState);
  const groupedSalaries =
    useRecoilValue<GroupedSalaries[]>(groupedSalariesState);
  const display = useRecoilValue(displayState);

  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");
    setLoggedUser(JSON.parse(storedUser));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSalaries(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, data]); // On page load, set the filtered salaries with the fetched data once the query is done loading

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <SearchFilter />
      <Notification display={display} message={message} className={className} />

      {groupedSalaries?.map((s) => {
        return (
          <div key={s.sector} className="sector-item">
            <Sector sector={s.sector} />
            <div className="salary-box">
              {s.salaries?.map((salary) => {
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
          </div>
        );
      })}
    </>
  );
};

export default AllSalaries;
