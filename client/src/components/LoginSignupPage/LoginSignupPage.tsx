const LoginSignupPage = () => {
  return (
    <div className="signup-div">
      <h2 className="login-text">Log In</h2>
      <form>
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input type="email" name="email" id="email" />
        <label htmlFor="pwd" className="form-label"></label>
        <input type="password" name="pwd" id="pwd" />
        <button className="login-button">Log in</button>
      </form>
      <p>Forgot password?</p>
      <a href="/">Create a new account</a>
    </div>
  );
};

export default LoginSignupPage;
