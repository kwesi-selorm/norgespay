import { useState } from "react";
import { addNewSalary } from "../api/salaries";
import Notification from "../components/Notification";
import { useNotification } from "../hooks/useNotification";
import "../styles/AddSalary.css";
import { NewSalaryInputs, NewNotification } from "../types";
import { initialInputs, initialNotification } from "../utils/constants";

const AddSalary = () => {
  const { display, createSuccess, createError } = useNotification(),
    [inputValues, setInputValues] = useState<NewSalaryInputs>(initialInputs),
    [notification, setNotification] =
      useState<NewNotification>(initialNotification);

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      await addNewSalary(
        inputValues.jobTitle,
        inputValues.company,
        inputValues.city,
        inputValues.salary
      );
      const newNotification = createSuccess(
        "Salary added/updated successfully"
      );
      setNotification(newNotification);
    } catch (error) {
      const newNotification = createError(error);
      setNotification(newNotification);
    }
  }

  return (
    <div className="login-signup-div">
      <Notification
        message={notification.message}
        className={notification.className}
        display={display}
      />
      <form onSubmit={handleSubmit}>
        <h2 className="add-new-salary-heading">Add New Salary</h2>
        <label htmlFor="job-title">
          Job Title <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          name="job-title"
          value={inputValues.jobTitle}
          onChange={({ target }) =>
            setInputValues({ ...inputValues, jobTitle: target.value })
          }
          placeholder="e.g., Application Tester"
          /* 
          A RegExp that matches any string that contains only letters and single spaces. First character/word and following (0 or more) words with spaces between them. Same as ^\w+( \w+)*$.
          ^ and $ indicate the start and end of the string, + indicates 1 or more, * indicates 0 or more.
          A less strict pattern will be ^[a-zA-Z ]+$. 
          To allow numbers, underscores and hyphens ^[a-zA-Z0-9_-]+$
          */
          pattern="^[a-zA-Z]+( [a-zA-Z]+)*$"
          title="Job title must be a string"
          required
        />
        <label htmlFor="company">
          Company <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          name="company"
          value={inputValues.company}
          onChange={({ target }) =>
            setInputValues({ ...inputValues, company: target.value })
          }
          placeholder="e.g., Viking Tech"
          pattern="^[a-zA-Z]+( [a-zA-Z]+)*$"
          title="Company must be a string"
          required
        />
        <label htmlFor="salary">
          Annual Salary (NOK) <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          name="salary"
          value={inputValues.salary}
          onChange={({ target }) =>
            setInputValues({ ...inputValues, salary: Number(target.value) })
          }
          placeholder="e.g., 680000"
          pattern="^([0-9]+){5,}"
          title="Salary must be a number"
          required
        />
        <label htmlFor="city">
          City <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          name="city"
          value={inputValues.city}
          onChange={({ target }) =>
            setInputValues({ ...inputValues, city: target.value })
          }
          placeholder="e.g., Trondheim"
          pattern="^[a-zA-Z]+( [a-zA-Z]+)*$"
          title="City must be a string"
          required
        />
        <button className="login-signup-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSalary;
