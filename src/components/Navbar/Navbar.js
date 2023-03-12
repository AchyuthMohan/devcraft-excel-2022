import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Drawer } from "@mui/material";
const Navbar = () => {
  const { signedInUser } = React.useContext(UserContext);
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="nav__main">
        <img src={logo} alt="" />
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
      <div className={"nav__mob"}>
        <div className={"nav__mob_container"}>
          <button className={"nav_btn"} onClick={handleDrawerOpen}>
            <HiOutlineMenuAlt3 className={"hamburger"} />
          </button>
        </div>
      </div>
      <Drawer
        open={open}
        onClick={handleDrawerClose}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
      >
        <div className={"nav__drawer"}>
          <div className={"nav__drawer_header"}>
            <div className={"navbar_items_mob"}>
              <img src={logo} alt="" width={100} height={100}/>
              <div className="hero__container__text__title" data-aos="zoom-in">
              Diety
            </div>
            <br/>
            
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
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
