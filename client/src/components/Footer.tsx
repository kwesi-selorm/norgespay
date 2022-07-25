import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <p className="footer-text">norgesPay @ {date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
