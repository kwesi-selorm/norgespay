// import { FiArrowUp, FiArrowDown } from "react-icons/fi";
interface SalaryProps {
  jobTitle: String;
  company: String;
  salary: Number;
}

const SalaryCard = ({ jobTitle, company, salary }: SalaryProps) => {
  return (
    <div className="salary-card">
      <div className="salary-left-section">
        <h3 className="job-title">{jobTitle}</h3>
        <p className="company">{company}</p>
      </div>
      <div className="salary-right-section">
        <h4 className="salary">{salary} kr</h4>
      </div>
    </div>
  );
};

export default SalaryCard;
