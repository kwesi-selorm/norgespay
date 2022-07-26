import { Link } from "react-router-dom";
import { NavbarProps } from "../../types";

const Navbar = ({ loggedUser, setLoggedUser }: NavbarProps) => {
  function handleSignOut() {
    setLoggedUser(null);
    window.localStorage.clear();
  }
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to={loggedUser ? "/all-salaries" : "/login"} className="nav-link">
        Salaries
      </Link>
      <Link to={loggedUser ? "/add-salary" : "/login"} className="nav-link">
        Add New
      </Link>
      {loggedUser && (
        <Link to="/" className="nav-link" onClick={handleSignOut}>
          {`Sign out (${loggedUser.username})`}
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
