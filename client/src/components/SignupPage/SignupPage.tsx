import "../../globals.css";
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
        <button className="login-signup-button">Submit</button>
      </form>
    </div>
  );
};

export default SignupPage;
