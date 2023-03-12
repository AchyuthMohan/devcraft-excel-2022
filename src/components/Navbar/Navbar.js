import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const { signedInUser } = React.useContext(UserContext);
  return (
    <div className="nav__main">
      <img src={logo} alt=""/>
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
        to="/calculator"
        className={
          window.location.pathname === "/calculator"
            ? "nav__section active"
            : "nav__section"
        }
      >
        Calorie Calculator
      </Link>
      {signedInUser ? (
        <Link
          to="/diet"
          className={
            window.location.pathname === "/diet"
              ? "nav__section active"
              : "nav__section"
          }
        >
          My Profile
        </Link>
      ) : null}
    </div>
  );
};

export default Navbar;
