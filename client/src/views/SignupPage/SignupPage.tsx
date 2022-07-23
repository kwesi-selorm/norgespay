import "../../globals.css";
import { Link, useNavigate } from "react-router-dom";
import { submitSignupDetails } from "../../api/signup";

//TODO: Allow only legitimate email addresses and accounts
const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value,
      username = e.target.username.value,
      password = e.target.password.value;

    try {
      const { data } = await submitSignupDetails({ email, username, password });
      navigate("/login");
      console.log(data);
    } catch (error: any) {
      console.error("Something went wrong: " + error.message);
    }
  };

  return (
    <div className="login-signup-div">
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
          required
          autoFocus
        />
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          className="input"
          type="username"
          name="username"
          id="username"
          required
          autoFocus
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          required
        />
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
