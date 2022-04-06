import { Link } from "react-router-dom";

const HomepageButton = () => {
  return (
    <div className="homepage-button-div">
      <h3 className="homepage-prompt">
        Log in or sign up to search up-to-date salaries in Norwegian companies
      </h3>

      <Link to="/login">
        <button id="login-signup-button">Log In / Sign Up</button>
      </Link>
    </div>
  );
};

export default HomepageButton;
