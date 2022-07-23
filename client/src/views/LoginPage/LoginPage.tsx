import { Link, useNavigate } from "react-router-dom";
import { submitLoginDetails } from "../../api/login";
import "../../globals.css";

import { LoginProps } from "../../types";

const LoginPage = (props: LoginProps) => {
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const username = e.target.username.value,
        password = e.target.password.value;
      const returnedUser = await submitLoginDetails({ username, password });
      props.setUser(returnedUser);
      const token = returnedUser.token;
      window.localStorage.setItem("userToken", token); //Save token to local storage
      //TODO: Add notification here saying login was successful and ask user to wait as they are redirected
      navigate("/all-salaries");
    } catch (error) {
      console.log("Unauthorised");
    }
  };

  return (
    <div className="login-signup-div">
      <form onSubmit={handleSubmit}>
        <h1 className="login-signup-form-title">Log In</h1>
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          className="input"
          type="text"
          name="username"
          id="username"
          required
          autoComplete="off"
          autoFocus
        />
        <label htmlFor="password" className="form-label">
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