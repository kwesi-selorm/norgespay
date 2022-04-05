import { useState } from "react";
import "./Header.css";

const toggleDisplay = () => {
  let display: string = "block";
  const firstIntro = document.getElementById("first-intro");

  if (firstIntro !== null) {
    display = firstIntro.style.display;
    setTimeout(() => {
      console.log(display);
      if (display === "block") {
        firstIntro.classList.add("display", "none");
      } else if (display === "none") {
        firstIntro.classList.add("display", "block");
      }
    }, 3000);
  }
};

if (document.readyState === "complete") {
  toggleDisplay();
}

export const Header = () => {
  // const [displayStyle, setDisplayStyle] = useState("none");

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
      <div className="intros-container">
        <div id="first-intro" className="intro-card">
          "accurately inform your next salary negotiation and decision..."
        </div>
        <div id="second-intro" className="intro-card">
          "anonymously contribute salary information to make the process easier
          for others..."
        </div>
      </div>
    </header>
  );
};
