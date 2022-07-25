import { AiOutlineEdit, AiOutlineCloseSquare } from "react-icons/ai";
import { MdSend } from "react-icons/md";
import "../styles/SalaryCard.css";
import { Salary, SalaryCardProps } from "../types";
import { useState } from "react";
import { getAllSalaries, updateSalary } from "../api/salaries";

//TODO: Add 'Last updated' date to the salary model to show the latest date of update. Probably using date.now. Add conversion elements to USD, GBP, etc. Consider using percentiles instead of averages.

const SalaryCard = ({ jobTitle, company, salary, city }: SalaryCardProps) => {
  const [display, setDisplay] = useState("none"),
    [userInput, setUserInput] = useState("");

  async function handleUpdate(e: any) {
    e.preventDefault();
    setDisplay("none");
    setUserInput("");
    try {
      const newSalary = e.target.newSalary.value,
        salaries = await getAllSalaries(),
        salaryToUpdate = salaries.find(
          (s: Salary) =>
            s.jobTitle === jobTitle && s.company === company && s.city === city
        ),
        id = salaryToUpdate.id;
      await updateSalary(id, newSalary);
      window.location.reload();
    } catch (error) {
      window.alert("Salary update failed, please try again later.");
    }
  }

  return (
    <article className="salary-card summary">
      <div className="salary-left-section">
        <h3 className="job-title">{jobTitle}</h3>
        <p className="company">
          {company}, <i>{city}</i>
        </p>
      </div>
      <div className="salary-right-section">
        <mark>
          <div className="salary-button-div">
            <h4 className="salary">{salary.toLocaleString()} kr</h4>
            <button
              onClick={() => {
                display === "none" ? setDisplay("inline") : setDisplay("none");
                setUserInput("");
              }}
            >
              {display === "none" ? (
                <AiOutlineEdit />
              ) : (
                <AiOutlineCloseSquare />
              )}
            </button>
          </div>
          <form onSubmit={handleUpdate} style={{ display: display }}>
            <input
              type="text"
              name="newSalary"
              id="newSalary"
              onChange={({ target }: { target: { value: string } }) =>
                setUserInput(target.value)
              }
              value={userInput}
              style={{ textAlign: "center", maxWidth: "100px" }}
              pattern="[0-9]+"
              title="Input must be a number"
            />
            <button type="submit" className="submit-button">
              <MdSend />
            </button>
          </form>
        </mark>
      </div>
    </article>
  );
};

export default SalaryCard;
