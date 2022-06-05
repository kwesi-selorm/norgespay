import "./AddSalary.css";

const AddSalary = () => {
  return (
    <div className="login-signup-div">
      <form
        action="/member/add-new"
        method="POST"
        className="add-new-salary-form"
      >
        <h2 className="add-new-salary-heading">Add New Salary</h2>
        <label htmlFor="job-title">
          Job Title <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          name="job-title"
          id="job-title"
          value="Accountant"
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
          value="Equinor"
          placeholder="e.g., Viking Tech"
          required
        />
        <label htmlFor="salary">
          Annual Salary (NOK) <span className="required-asterisk">*</span>
        </label>
        <input
          type="number"
          name="Salary"
          id="Salary"
          value="500000"
          placeholder="e.g., 680000"
          required
        />
        <label htmlFor="location">
          City <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          name="location"
          id="location"
          value="Bergen"
          placeholder="e.g., Trondheim"
          required
        />
        <label htmlFor="experience">
          Years of Experience <span className="required-asterisk">*</span>
        </label>
        <input
          value="5"
          type="text"
          name="experience"
          id="experience"
          placeholder="e.g., 5"
          required
        />
        <button className="login-signup-button">Submit</button>
      </form>
    </div>
  );
};

export default AddSalary;
