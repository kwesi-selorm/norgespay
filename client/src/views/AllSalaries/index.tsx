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
  const { isLoading, error } = useQuery(["salaries"], getAllSalaries, {
    refetchOnMount: true,
    onSuccess: (data) => {
      setSalaries(data);
    },
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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <SearchFilter />
      <Notification display={display} message={message} className={className} />

      {groupedSalaries?.map((group) => {
        return (
          <section key={group.sector} className="sector-item">
            <details open={true}>
              <Sector sector={group.sector} />
              <div className="salary-box">
                {group.salaries?.map((salary) => {
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
                        sector={salary.sector}
                      />
                    </div>
                  );
                })}
              </div>
            </details>
          </section>
        );
      })}
    </>
  );
};

export default AllSalaries;
