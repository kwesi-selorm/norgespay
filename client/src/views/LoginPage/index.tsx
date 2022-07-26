import { useState } from "react";
import { Link } from "react-router-dom";
import { submitLoginDetails } from "../../api/login";
import Notification from "../../components/Notification";
import "../../styles/LoginSignup.css";

import { LoginProps } from "../../types";
import { useNotification } from "../../hooks/useNotification";

const LoginPage = (props: LoginProps) => {
  const { display, createSuccess, createError } = useNotification();
  const [notification, setNotification] = useState<{
    message: string;
    className: string;
  }>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const username = e.target.username.value,
        password = e.target.password.value,
        response = await submitLoginDetails({
          username,
          password,
        }),
        data = await response.data;
      props.setUser(data);
      window.localStorage.setItem("user", JSON.stringify(data)); //Save token to local storage
      const newNotification = createSuccess(
        "Login successful, redirecting now..."
      );
      setNotification(newNotification);
      console.log(notification);
    } catch (error: any) {
      const newNotification = createError(error);
      setNotification(newNotification);
    }
  };

  return (
    <div className="login-signup-div">
      {notification && (
        <Notification
          message={notification.message}
          className={notification.className}
          display={display}
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
