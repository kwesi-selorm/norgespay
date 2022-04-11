import { Link } from "react-router-dom";
import "../../globals.css";

const LoginPage = () => {
  return (
    <div className="login-signup-div">
      <form action="/user/login" method="post">
        <h1 className="login-signup-form-title">Log In</h1>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          required
          autoComplete="off"
          autoFocus
        />
        <label htmlFor="pwd" className="form-label">
          Password
        </label>
        <input className="input" type="password" name="pwd" id="pwd" required />
        <button className="login-signup-button">Submit</button>
      </form>
      <p>Forgot password?</p>
      <Link to="/signup" style={{ textDecoration: "none", fontWeight: "bold" }}>
        Create a new account
      </Link>
    </div>
  );
};

export default LoginPage;
