import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Header.css";
import SalaryCard from "../SalaryCard/SalaryCard";
import "../SalaryCard/SalaryCard.css";

// Set salary data props
type Salary = {
  amount: number;
  location: string;
};

type Job = {
  id?: string;
  jobTitle: string;
  salary: Salary[];
  date: string;
  company: string;
};

export const Header = () => {
  const [salaryData, setSalaryData] = useState<Array<Job>>([]);

  // Aceess data to be used in default salary card displayed on the homepage.

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/api");
      const data = await response.data;
      console.log(data);
      setSalaryData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <header className="header">
        {/* Navbar */}
        <nav className="nav">
          <Link to="/login" className="nav-link">
            Log in
          </Link>
        </nav>

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

      <SalaryCard
        jobTitle="Software Engineer"
        // jobTitle={salaryData[0].jobTitle}
        company="Microsoft Corporation (Oslo)"
        salary={760000}
      />
    </>
  );
};
