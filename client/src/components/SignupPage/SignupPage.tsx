import axios from "axios";
import "../../globals.css";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const username = document.getElementById("username").textContent;
    const password = document.getElementById("pwd").textContent;
    axios
      .request({
        url: "/user/signup",
        method: "POST",
        data: { username, password },
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="login-signup-div">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h1 className="login-signup-form-title">Sign Up</h1>
        <label htmlFor="username" className="form-label">
          Email
        </label>
        <input
          className="input"
          type="email"
          name="username"
          id="username"
          required
          autoFocus
          value="adorkor.jeffery@gmail.com"
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
        <p>
          Existing user?{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            Login
          </Link>
        </p>
        <button type="submit" className="login-signup-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
