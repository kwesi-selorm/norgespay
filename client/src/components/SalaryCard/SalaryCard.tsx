import "./SalaryCard.css";
import { SalaryProps } from "../../types";

const SalaryCard = ({ jobTitle, company, salary, city }: SalaryProps) => {
  return (
    <div className="salary-card summary">
      <div className="salary-left-section">
        <h3 className="job-title">{jobTitle}</h3>
        <p className="company">
          {company}, <i>{city}</i>
        </p>
      </div>
      <div className="salary-right-section">
        <mark>
          <h4 className="salary">{salary} kr</h4>
        </mark>
      </div>
    </div>
  );
};

export default SalaryCard;
