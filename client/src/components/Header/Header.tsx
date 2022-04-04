// import { useEffect, useState } from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      {/* Navbar */}
      <nav className="nav">
        <a href="/" className="nav-link">
          Log in
        </a>
      </nav>

      <p className="logo-name">norgesPAY</p>

      {/* Alternating message cards and logo*/}

      <div id="first-intro" className="first-intro intro-card">
        precisely inform your next salary negotiation and decision...
      </div>
      <div id="second-intro" className="second-intro intro-card">
        anonymously contribute salary information to make the process easier for
        others...
      </div>
    </header>
  );
};
