import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loggedUserState } from "../../recoil/atoms";

const Navbar = () => {
  const [loggedUser, setLoggedUser] = useRecoilState(loggedUserState);

  function handleSignOut() {
    setLoggedUser(null);
    window.localStorage.clear();
  }

  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>

      <NavLink
        to={loggedUser ? "/all-salaries" : "/login"}
        className="nav-link"
      >
        Salaries
      </NavLink>

      <NavLink to={loggedUser ? "/add-salary" : "/login"} className="nav-link">
        Add New
      </NavLink>

      {loggedUser ? (
        <NavLink to="/" onClick={handleSignOut} className="nav-link">
          {`Sign out (${loggedUser.username})`}
        </NavLink>
      ) : null}
    </nav>
  );
};

export default Navbar;
