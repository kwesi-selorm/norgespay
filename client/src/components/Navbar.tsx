import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/add-salary" className="nav-link">
        Add New
      </Link>
    </nav>
  );
};

export default Navbar;
