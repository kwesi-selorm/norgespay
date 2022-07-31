import "../styles/HomepageSalaryCard.css";
import { SalaryCardProps } from "../types";

const SalaryCard = ({ jobTitle, company, salary, city }: SalaryCardProps) => {
  return (
    <article className="hp-salary-card">
      <div className="hp-salary-left-section">
        <h3 className="hp-job-title">{jobTitle}</h3>
        <p className="hp-company">
          {company}, <i>{city}</i>
        </p>
      </div>
      <div className="hp-salary-right-section">
        <mark className="hp-salary-mark">
          <h4 className="hp-home-salary">{salary.toLocaleString()} kr</h4>
        </mark>
      </div>
    </article>
  );
};

export default SalaryCard;
