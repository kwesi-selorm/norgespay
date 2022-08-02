import "../../styles/SalaryCard.css";
import { SalaryCardProps } from "../../utils/types";
import { useState } from "react";
import LeftSection from "./LeftSection";
import RightSectionTop from "./RightSectionTop";
import RightSectionMid from "./RightSectionMid";
import RightSectionBottom from "./RightSectionBottom";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { salariesState } from "../../recoil/atoms";
import { IoChevronForwardCircleSharp } from "react-icons/io5";

//TODO: Add conversion elements to USD, GBP, etc. Consider using percentiles instead of averages.

const SalaryCard = ({
  jobTitle,
  company,
  city,
  id,
  ...props
}: SalaryCardProps) => {
  const [display, setDisplay] = useState("none");
  const [, setUserInput] = useState<number>(0);
  const salaries = useRecoilValue(salariesState);
  const navigate = useNavigate();

  const handleRedirect = () => {
    const salary = salaries.find(
      (salary) =>
        salary.jobTitle === jobTitle &&
        salary.company === company &&
        salary.city === city
    );
    navigate(`/all-salaries/${salary.id}`);
  };

  return (
    <div className="salary-card">
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
          sector={props.sector}
          setDisplay={setDisplay}
        />
        <RightSectionBottom dateAdded={props.dateAdded} />
      </div>
      <IoChevronForwardCircleSharp
        className="forward-button"
        style={{ color: "green" }}
        onClick={handleRedirect}
      />
    </div>
  );
};

export default SalaryCard;
