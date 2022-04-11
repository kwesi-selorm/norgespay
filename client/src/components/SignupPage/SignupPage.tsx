import "./SignupPage.css";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="login-signup-div">
      <form action="/user/signup" method="POST" autoComplete="off">
        <h1 className="login-signup-form-title">Sign Up</h1>
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
        <p>
          Existing user?{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            Login
          </Link>
        </p>

        <section className="add-new-salary-section">
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
        </section>

        <button className="login-signup-button">Submit</button>
      </form>
    </div>
  );
};

export default SignupPage;
