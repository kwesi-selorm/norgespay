import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <p className="footer-text">norgesPay @ {date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
