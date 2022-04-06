import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-div">
      <h2 className="login-text">Log In</h2>
      <form action="/login" method="post">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input type="email" name="email" id="email" />
        <label htmlFor="pwd" className="form-label"></label>
        <input type="password" name="pwd" id="pwd" />
        <button className="login-button">Log in</button>
      </form>
      <p>Forgot password?</p>
      <Link to="/signup">Create a new account</Link>
    </div>
  );
};

export default LoginPage;
