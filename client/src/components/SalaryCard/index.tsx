import "../../styles/SalaryCard.css";
import { SalaryCardProps } from "../../types";
import { useState } from "react";
import LeftSection from "./LeftSection";
import RightSectionTop from "./RightSectionTop";
import RightSectionMid from "./RightSectionMid";
import RightSectionBottom from "./RightSectionBottom";

//TODO: Add conversion elements to USD, GBP, etc. Consider using percentiles instead of averages.

const SalaryCard = ({ jobTitle, company, city, ...props }: SalaryCardProps) => {
  const [display, setDisplay] = useState("none"),
    [, setUserInput] = useState<number>(0);

  return (
    <article className="salary-card summary">
      <LeftSection jobTitle={jobTitle} company={company} city={city} />
      <div className="salary-right-section">
        <RightSectionTop
          salary={props.salary}
          display={display}
          setDisplay={setDisplay}
          setUserInput={setUserInput}
        />
        <RightSectionMid
          display={display}
          company={company}
          city={city}
          jobTitle={jobTitle}
          setDisplay={setDisplay}
        />
        <RightSectionBottom dateAdded={props.dateAdded} />
      </div>
    </article>
  );
};

export default SalaryCard;
