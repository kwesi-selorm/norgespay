import { Link } from "react-router-dom";
import "../../globals.css";

const HomepageButton = () => {
  return (
    <div className="homepage-button-div">
      <p className="homepage-prompt" style={{ color: "var(--dark-blue)" }}>
        Log in or sign up to search up-to-date salaries in Norwegian companies
      </p>

      <Link to="/login">
        <button id="login-signup-button">Log In / Sign Up</button>
      </Link>
    </div>
  );
};

export default HomepageButton;
