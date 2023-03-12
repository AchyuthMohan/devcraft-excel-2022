import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav__main">
      <Link
        to="/"
        className={
          window.location.pathname === "/"
            ? "nav__section active"
            : "nav__section"
        }
      >
        Home
      </Link>
      <Link
        to="/plan"
        className={
          window.location.pathname === "/plan"
            ? "nav__section active"
            : "nav__section"
        }
      >
        Diet Plans
      </Link>
      <Link
        to="/diet"
        className={
          window.location.pathname === "/diet"
            ? "nav__section active"
            : "nav__section"
        }
      >
        My Plan
      </Link>
      <Link
        to="/calculator"
        className={
          window.location.pathname === "/calculator"
            ? "nav__section active"
            : "nav__section"
        }
      >
        Calorie Calculator
      </Link>
    </div>
  );
};

export default Navbar;
