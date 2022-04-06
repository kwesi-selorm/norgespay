import React from "react";
import "./Layout.css";

const Layout = ({ children }: { children: React.ReactChild }) => {
  const date = new Date();

  return (
    <>
      {/* Navbar
      <nav className="nav">
        <a href="/">Home</a>
      </nav> */}
      {children}
      <footer className="footer">
        <p className="footer-text">Jeffery, {date.getFullYear()}</p>
      </footer>
    </>
  );
};

export default Layout;
