import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { submitLoginDetails } from "../../api/login";
import Notification from "./Notification";
import "../../styles/LoginSignup.css";

import { LoginProps } from "../../types";
import { setErrorMessage } from "../../utils/setErrorMessage";

const LoginPage = (props: LoginProps) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState<{
    className: string;
    message: string;
  }>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    /* Set a user if the request is successful and returns the signed in user's details. Set and display an error message should the server respond with an error message */
    try {
      const username = e.target.username.value,
        password = e.target.password.value,
        response = await submitLoginDetails({
          username,
          password,
        }),
        data = response.data;
      props.setUser(data);
      // const token = data.token;
      window.localStorage.setItem("user", JSON.stringify(data)); //Save token to local storage
      setNotification({
        message: "Login successful, redirecting now...",
        className: "success",
      });
      setTimeout(() => {
        setNotification({ className: null, message: "" });
        navigate("/all-salaries");
      }, 2000);
    } catch (error: any) {
      setErrorMessage({ error, setNotification });
      error.message.includes("404") &&
        setTimeout(() => {
          navigate("/signup");
        }, 5000);
    }
  };

  return (
    <div className="login-signup-div">
      {notification && (
        <Notification
          message={notification.message}
          className={notification.className}
        />
      )}
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
        <p>Forgot password?</p>
        {/* TODO: Add functionality for forgot password link */}
      </form>
      <Link to="/signup" style={{ textDecoration: "none", fontWeight: "bold" }}>
        Create a new account
      </Link>
    </div>
  );
};

export default LoginPage;
