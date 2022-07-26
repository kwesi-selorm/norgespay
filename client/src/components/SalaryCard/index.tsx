import "../../styles/SalaryCard.css";
import { SalaryCardProps } from "../../types";
import { useState } from "react";
import LeftSection from "./LeftSection";
import RightSectionTop from "./RightSectionTop";
import RightSectionMid from "./RightSectionMid";
import RightSectionBottom from "./RightSectionBottom";

//TODO: Add 'Last updated' date to the salary model to show the latest date of update. Probably using date.now. Add conversion elements to USD, GBP, etc. Consider using percentiles instead of averages.

const SalaryCard = ({ jobTitle, company, salary, city }: SalaryCardProps) => {
  const [display, setDisplay] = useState("none"),
    [userInput, setUserInput] = useState(null);

  return (
    <article className="salary-card summary">
      <LeftSection jobTitle={jobTitle} company={company} city={city} />
      <div className="salary-right-section">
        <RightSectionTop
          salary={salary}
          display={display}
          setDisplay={setDisplay}
          setUserInput={setUserInput}
        />
        <RightSectionMid
          display={display}
          userInput={userInput}
          company={company}
          city={city}
          jobTitle={jobTitle}
          setUserInput={setUserInput}
          setDisplay={setDisplay}
        />
        <RightSectionBottom date={"26.07.22"} />
      </div>
    </article>
  );
};

export default SalaryCard;
