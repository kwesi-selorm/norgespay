import React from "react";
import { FaHome } from "react-icons/fa";
import "./Layout.css";

const Layout = ({ children }: { children: React.ReactChild }) => {
  const date = new Date();

  return (
    <>
      <nav className="nav">
        <a href="/" className="nav-link">
          <FaHome style={{ width: "25px" }} />
        </a>
      </nav>
      {children}
      <footer className="footer">
        <p className="footer-text">Jeffery, {date.getFullYear()}</p>
      </footer>
    </>
  );
};

export default Layout;
