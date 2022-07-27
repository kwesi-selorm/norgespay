import { NavLink } from "react-router-dom";
import { NavbarProps } from "../../types";

const Navbar = ({ loggedUser, setLoggedUser }: NavbarProps) => {
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

      {loggedUser && (
        <NavLink to="/" onClick={handleSignOut} className="nav-link">
          {`Sign out (${loggedUser.username})`}
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
