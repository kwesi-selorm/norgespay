import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-div">
      <h1 className="login-form-title">Log In</h1>
      <form action="/login" method="post">
        <label htmlFor="email" className="form-label">
          email
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
          password
        </label>
        <input className="input" type="password" name="pwd" id="pwd" required />
        <button className="login-button">Log in</button>
      </form>
      <p>Forgot password?</p>
      <Link to="/signup" style={{ textDecoration: "none" }}>
        Create a new account
      </Link>
    </div>
  );
};

export default LoginPage;
