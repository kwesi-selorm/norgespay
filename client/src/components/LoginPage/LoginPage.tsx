import { Link } from "react-router-dom";
import axios from "axios";
import "../../globals.css";

const LoginPage = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const username = document.getElementById("username").textContent;
    const password = document.getElementById("pwd").textContent;

    axios
      .request({
        url: "/user/login",
        method: "POST",
        data: { username, password },
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="login-signup-div">
      <form onSubmit={handleSubmit}>
        <h1 className="login-signup-form-title">Log In</h1>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          className="input"
          type="email"
          name="username"
          id="username"
          required
          autoComplete="off"
          autoFocus
        />
        <label htmlFor="pwd" className="form-label">
          Password
        </label>
        <input
          className="input"
          type="password"
          name="password"
          id="pwd"
          required
        />
        <button className="login-signup-button" type="submit">
          Submit
        </button>
      </form>
      <p>Forgot password?</p>
      <Link to="/signup" style={{ textDecoration: "none", fontWeight: "bold" }}>
        Create a new account
      </Link>
    </div>
  );
};

export default LoginPage;
