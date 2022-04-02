import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const SalaryCard = () => {
  return (
    <article>
      <div className="salary-top-section">
        <h3 className="job-title">Software Engineer</h3>
        <p className="company">DNB</p>
      </div>
      <div className="salary-bottom-section">
        <h4 className="salary">760000kr</h4>
        <p className="votes">
          <FiArrowUp /> 12 <FiArrowDown />
        </p>
      </div>
    </article>
  );
};

export default SalaryCard;
