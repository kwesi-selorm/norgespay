import { AiOutlineEdit } from "react-icons/ai";
import { MdSend } from "react-icons/md";
import "./SalaryCard.css";
import { Salary, SalaryCardProps } from "../../types";
import { useState } from "react";
import { fetchAllSalaries, updateSalary } from "../../services/helper";

const SalaryCard = ({ jobTitle, company, salary, city }: SalaryCardProps) => {
  const [display, setDisplay] = useState("none"),
    [userInput, setUserInput] = useState("");

  async function handleUpdate(e: any) {
    e.preventDefault();
    const newSalary = e.target.newSalary.value,
      salaries = (await fetchAllSalaries()) as Salary[],
      salaryToUpdate = salaries.find(
        (s: Salary) =>
          s.jobTitle === jobTitle && s.company === company && s.city === city
      ),
      id = salaryToUpdate.id;
    const response = updateSalary(id, newSalary);
    console.log(response);
    setDisplay("none");
  }

  function handleInput(e: any) {
    e.preventDefault();
    const value = e.target.value;
    setUserInput(value);
  }

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
          <h4 className="salary">{salary.toLocaleString()} kr</h4>
          <button
            className="update-button"
            onClick={() => {
              setDisplay("inline-block");
            }}
          >
            <AiOutlineEdit />
          </button>
          <form onSubmit={handleUpdate} style={{ display: display }}>
            <input
              type="text"
              name="newSalary"
              id="newSalary"
              onChange={handleInput}
              value={userInput}
              style={{ textAlign: "center" }}
              pattern="[0-9]+"
              title="Input must be a number"
            />
            <br />
            <button type="submit" className="submit-button">
              <MdSend />
            </button>
          </form>
        </mark>
      </div>
    </div>
  );
};

export default SalaryCard;
