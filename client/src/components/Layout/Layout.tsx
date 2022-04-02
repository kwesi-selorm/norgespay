import React from "react";

import { BiCoffeeTogo } from "react-icons/bi";

const Layout = ({ children }: { children: React.ReactChild }) => {
  return (
    <>
      <header className="layout-header">
        <nav className="nav">
          <p className="webapp-name">norgesPAY</p>
        </nav>
      </header>
      {children}
      <footer className="footer">
        <p className="footer-text">
          buy me a coffee <BiCoffeeTogo className="coffee-togo" />
        </p>
      </footer>
    </>
  );
};

export default Layout;
