import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "./Header.css";
import SalaryCard from "../SalaryCard/SalaryCard";
import "../SalaryCard/SalaryCard.css";

export const Header = () => {
  // Aceess data to be used in default salary card displayed on the homepage.
  useEffect(() => {
    axios.get("http://localhost:3001/api").then((res) => console.log(res.data));
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
        company="Microsoft Corporation"
        salary={760000}
      />
    </>
  );
};
