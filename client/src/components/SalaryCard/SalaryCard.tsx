import { FiArrowUp, FiArrowDown } from "react-icons/fi";
interface SalaryProps {
  jobTitle: String;
  company: String;
  salary: Number;
  votes: Number;
}

const SalaryCard = ({ jobTitle, company, salary, votes }: SalaryProps) => {
  return (
    <div className="salary-card">
      <div className="salary-left-section">
        <h2 className="job-title">{jobTitle}</h2>
        <p className="company">{company}</p>
      </div>
      <div className="salary-right-section">
        <h4 className="salary">{salary} kr</h4>
        <p className="votes">
          <FiArrowUp /> {votes} <FiArrowDown />
        </p>
      </div>
    </div>
  );
};

export default SalaryCard;
