import React from "react";
import { AiFillHome } from "react-icons/ai";
import "./Layout.css";

const Layout = ({ children }: { children: React.ReactChild }) => {
  const date = new Date();

  return (
    <>
      <nav className="nav">
        <a href="/" className="nav-link">
          <AiFillHome />
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
