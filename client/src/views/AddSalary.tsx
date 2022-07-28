import { useState } from "react";
import { addNewSalary } from "../api/salaries";
import Notification from "../components/Notification";
import { useNotification } from "../hooks/useNotification";
import "../styles/AddSalary.css";

const AddSalary = () => {
  const { display, createSuccess, createError } = useNotification();
  const [notification, setNotification] = useState<{
    message: string;
    className: string;
  }>();

  async function handleSubmit(e: any) {
    const jobTitle = e.target.jobTitle.value,
      company = e.target.company.value,
      salary = e.target.salary.value,
      city = e.target.city.value;

    try {
      await addNewSalary(jobTitle, company, city, salary);
      const newNotification = createSuccess(
        "Salary added/updated successfully"
      );
      setNotification(newNotification);
    } catch (error) {
      const newNotification = createError(error);
      setNotification(newNotification);
    }
    // console.log(response);
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
          name="jobTitle"
          id="jobTitle"
          placeholder="e.g., Application Tester"
          required
        />
        <label htmlFor="company">
          Company <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="e.g., Viking Tech"
          required
        />
        <label htmlFor="salary">
          Annual Salary (NOK) <span className="required-asterisk">*</span>
        </label>
        <input
          type="number"
          name="salary"
          id="salary"
          placeholder="e.g., 680000"
          required
        />
        <label htmlFor="city">
          City <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="e.g., Trondheim"
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
