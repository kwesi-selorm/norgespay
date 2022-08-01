import { useEffect, useState } from "react";
import { ImSpinner5 } from "react-icons/im";
import "../../styles/Header.css";
import HomepageSalaryCard from "../../components/HomepageSalaryCard";
import { Salary } from "../../utils/types";
import axios from "axios";

export const Header = () => {
  const [salaryData, setSalaryData] = useState<Salary>(null);

  // Aceess data to be used in default salary card displayed on the homepage.
  async function fetchSalary() {
    const res = await axios.get("http://localhost:3000/api/salaries");
    const data = await res.data;
    setSalaryData(data);
  }

  useEffect(() => {
    fetchSalary();
  }, []);

  return (
    <>
      <header className="header">
        <p className="logo-name">norgesPAY</p>

        {/* Alternating message cards and logo*/}
        <div className="intros-container">
          <div id="first-intro" className="intro-card">
            "accurately inform your next salary negotiation and decision..."
          </div>
          <div id="second-intro" className="intro-card">
            "anonymously contribute salary information to make the process
            easier for others..."
          </div>
        </div>
      </header>

      {/* Display salary card information when not null or undefined */}
      {salaryData != null ? (
        <HomepageSalaryCard
          jobTitle={salaryData.jobTitle}
          company={salaryData.company}
          salary={salaryData.salary[0]}
          city={salaryData.city}
        />
      ) : (
        <ImSpinner5 className="spinner" /> // Loading spinner
      )}
    </>
  );
};
