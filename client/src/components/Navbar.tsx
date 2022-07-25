import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { NavbarProps } from "../types";

const Navbar = ({ user, setUser }: NavbarProps) => {
  function handleSignOut() {
    setUser(null);
    window.localStorage.clear();
  }

  return (
    <nav className="nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/add-salary" className="nav-link">
        Add New
      </Link>
      {user && (
        <Link to="/login" className="nav-link" onClick={handleSignOut}>
          {`Sign out (${user.username})`}
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
