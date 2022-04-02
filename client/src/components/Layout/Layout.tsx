import React from "react";
import Link from "react-router-dom";

import { BiCoffeeTogo } from "react-icons/bi";

const Layout = ({ children }: { children: React.ReactChild }) => {
  return (
    <>
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
