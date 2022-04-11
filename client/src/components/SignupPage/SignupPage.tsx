import "./SignupPage.css";

const SignupPage = () => {
  return (
    <div className="login-signup-div">
      <h1 className="login-signup-form-title">Sign Up</h1>
      <form action="/signup" method="post" autoComplete="off">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          className="input"
          type="text"
          name="username"
          id="username"
          required
        />
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          required
          autoFocus
        />
        <label htmlFor="pwd" className="form-label">
          Password
        </label>
        <input className="input" type="password" name="pwd" id="pwd" required />

        <section className="add-new-salary-section">
          <h2 className="add-new-salary-heading">Add New Salary</h2>
          <label htmlFor="job-title">
            Job Title <span className="required-asterisk">*</span>
          </label>
          <input
            type="text"
            name="job-title"
            id="job-title"
            placeholder="e.g., Application Tester"
            required
          />
          <label htmlFor="salary">
            Annual Salary (NOK) <span className="required-asterisk">*</span>
          </label>
          <input
            type="number"
            name="Salary"
            id="Salary"
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
            placeholder="e.g., Trondheim"
            required
          />
        </section>

        <button className="login-signup-button">Submit</button>
      </form>
    </div>
  );
};

export default SignupPage;
