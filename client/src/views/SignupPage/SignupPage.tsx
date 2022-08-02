import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Notification from "../../components/Notification";
import { useNotification } from "../../hooks/useNotification";
import { notificationState } from "../../recoil/atoms";
import "../../styles/LoginSignup.css";

const SignupPage = () => {
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { display, createSuccess, createError } = useNotification();
  const [notification, setNotification] = useRecoilState(notificationState);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const data = { ...signupDetails };
      const config = { headers: { "Content-Type": "application/json" } };
      await axios.post("/api/signup", data, config);
      setNotification(
        createSuccess("New user added successfully, redirecting...")
      );
      navigate("/login");
    } catch (error: any) {
      if (error instanceof Error) {
        setNotification(createError(error));
      }
      if (error.response) {
        //Catch axios error
        setNotification(createError(error.response.data));
      }
    }
  };

  return (
    <div className="login-signup-div">
      <Notification
        display={display}
        message={notification.message}
        className={notification.className}
      />
      <form onSubmit={handleSubmit}>
        <h1 className="login-signup-form-title">Sign Up</h1>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          value={signupDetails.email}
          required
          autoFocus
          onChange={({ target }) => {
            setSignupDetails({ ...signupDetails, email: target.value });
          }}
        />
        <label htmlFor="username" className="form-label">
          Username
          <input
            className="input"
            type="username"
            name="username"
            id="username"
            value={signupDetails.username}
            required
            onChange={({ target }) => {
              setSignupDetails({ ...signupDetails, username: target.value });
            }}
          />
        </label>
        <label htmlFor="password" className="form-label">
          Password
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            value={signupDetails.password}
            title="Password must have at least one each of a lowercase letter, an upper case letter, a number, and a special character.It must be at least 8 characters long"
            required
            onChange={({ target }) => {
              setSignupDetails({ ...signupDetails, password: target.value });
            }}
          />
        </label>
        <label htmlFor="confirm-password" className="form-label">
          Confirm Password
          <input
            className="input"
            type="password"
            name="confirm-password"
            id="confirm-password"
            value={signupDetails.confirmPassword}
            title="Passwords must match"
            required
            onChange={({ target }) => {
              setSignupDetails({
                ...signupDetails,
                confirmPassword: target.value,
              });
            }}
          />
        </label>
        <p>
          Already a user?{" "}
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
