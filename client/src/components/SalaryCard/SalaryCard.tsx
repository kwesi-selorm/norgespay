import "./SalaryCard.css";
interface SalaryProps {
  jobTitle: String;
  company: String;
  salary: Number;
  location: String;
  experience: Number;
}

const SalaryCard = ({
  jobTitle,
  company,
  salary,
  location,
  experience,
}: SalaryProps) => {
  return (
    <details>
      <summary>
        <div className="salary-card summary">
          <div className="salary-left-section">
            <h3 className="job-title">{jobTitle}</h3>
            <p className="company">{company}</p>
          </div>
          <div className="salary-right-section">
            <h4 className="salary">{salary} kr</h4>
          </div>
        </div>
      </summary>
      <div className="details">
        <p>City: {location}</p>
        <p>Experience: {experience} </p>
      </div>
    </details>
  );
};

export default SalaryCard;
