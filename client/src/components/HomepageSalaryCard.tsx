import "../styles/HomepageSalaryCard.css";
import { SalaryCardProps } from "../types";

const SalaryCard = ({ jobTitle, company, salary, city }: SalaryCardProps) => {
  return (
    <article className="salary-card summary">
      <div className="salary-left-section">
        <h3 className="job-title">{jobTitle}</h3>
        <p className="company">
          {company}, <i>{city}</i>
        </p>
      </div>
      <div className="salary-right-section">
        <mark className="salary-mark">
          <h4 className="home-salary">{salary.toLocaleString()} kr</h4>
        </mark>
      </div>
    </article>
  );
};

export default SalaryCard;
