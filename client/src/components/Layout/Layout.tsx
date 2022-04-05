import React from "react";
import "./Layout.css";

const Layout = ({ children }: { children: React.ReactChild }) => {
  const date = new Date();

  return (
    <>
      {children}
      <footer className="footer">
        <p className="footer-text">Jeffery, {date.getFullYear()}</p>
      </footer>
    </>
  );
};

export default Layout;
