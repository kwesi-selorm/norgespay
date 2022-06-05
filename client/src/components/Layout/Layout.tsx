import React from "react";
import "./Layout.css";

const Layout = ({ children }: { children: React.ReactChild }) => {
  const date = new Date();

  return (
    <>
      <nav className="nav">
        <a href="/" className="nav-link">
          Home
        </a>
      </nav>
      {children}
      <footer className="footer">
        <p className="footer-text">norgesPay @ {date.getFullYear()}</p>
      </footer>
    </>
  );
};

export default Layout;
